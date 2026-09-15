import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function HeroOrb3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Root Group for 3D Parallax & Mouse Interactivity
    const parallaxGroup = new THREE.Group();
    scene.add(parallaxGroup);

    // --- 2. Texture Generator Helpers ---
    const createParticleTexture = () => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(103,223,203,0.95)');
        gradient.addColorStop(0.55, 'rgba(31,165,255,0.4)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(c);
    };

    const createSunCoronaTexture = () => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255,250,240,1)');
        gradient.addColorStop(0.18, 'rgba(255,145,75,0.85)');
        gradient.addColorStop(0.45, 'rgba(255,75,30,0.35)');
        gradient.addColorStop(0.75, 'rgba(255,40,15,0.08)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);
      }
      return new THREE.CanvasTexture(c);
    };

    const createDiamondStarTexture = () => {
      const c = document.createElement('canvas');
      c.width = 128;
      c.height = 128;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 128, 128);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#67DFCB';
        ctx.shadowBlur = 14;

        ctx.beginPath();
        ctx.moveTo(64, 8);
        ctx.quadraticCurveTo(64, 64, 120, 64);
        ctx.quadraticCurveTo(64, 64, 64, 120);
        ctx.quadraticCurveTo(64, 64, 8, 64);
        ctx.quadraticCurveTo(64, 64, 64, 8);
        ctx.fill();
      }
      return new THREE.CanvasTexture(c);
    };

    const particleTexture = createParticleTexture();
    const sunCoronaTexture = createSunCoronaTexture();
    const diamondStarTexture = createDiamondStarTexture();

    // --- 3. Base High-Resolution Artwork Plane (Expanded to 100% Cover with Zero Black Gaps) ---
    const bgPlaneGroup = new THREE.Group();
    parallaxGroup.add(bgPlaneGroup);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/images/3danimationbase.png', (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      // Image native aspect ratio: 2366 x 1824 = 1.297
      // Expanded scale ensures 100% full cover without any edge black borders
      const planeH = 5.6;
      const planeW = planeH * (2366 / 1824); // ~7.26

      const planeGeo = new THREE.PlaneGeometry(planeW, planeH);
      const planeMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 1.0,
      });
      const bgMesh = new THREE.Mesh(planeGeo, planeMat);
      bgMesh.position.set(0, 0, -0.1);
      bgPlaneGroup.add(bgMesh);
    });

    // --- 4. 3D Glowing Solar Core & Corona (Seamlessly Layered over Sun) ---
    const sunGroup = new THREE.Group();
    sunGroup.position.set(0.04, 0.02, 0.05);
    parallaxGroup.add(sunGroup);

    // 4a. Radiant Solar Corona Flare Sprite
    const coronaMat = new THREE.SpriteMaterial({
      map: sunCoronaTexture,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
    });
    const coronaSprite = new THREE.Sprite(coronaMat);
    coronaSprite.scale.set(2.1, 2.1, 1);
    sunGroup.add(coronaSprite);

    // 4b. Secondary Warm Ambient Solar Flare
    const coronaMat2 = new THREE.SpriteMaterial({
      map: sunCoronaTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const coronaSprite2 = new THREE.Sprite(coronaMat2);
    coronaSprite2.scale.set(2.7, 2.7, 1);
    sunGroup.add(coronaSprite2);

    // --- 5. Dynamic 3D Orbiting Particle Belts (4,000+ Active Moving Stars) ---
    interface OrbitBelt {
      points: THREE.Points;
      positions: Float32Array;
      angles: Float32Array;
      speeds: Float32Array;
      radiiX: Float32Array;
      radiiY: Float32Array;
      heights: Float32Array;
      count: number;
    }

    const belts: OrbitBelt[] = [];

    const createOrbitBelt = (
      count: number,
      baseRadiusX: number,
      baseRadiusY: number,
      speed: number,
      tilt: [number, number, number],
      palette: string[],
      pointSize = 0.038,
      spread = 0.42,
      heightSpread = 0.32
    ) => {
      const beltGroup = new THREE.Group();
      beltGroup.rotation.set(...tilt);
      parallaxGroup.add(beltGroup);

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const angles = new Float32Array(count);
      const speeds = new Float32Array(count);
      const radiiX = new Float32Array(count);
      const radiiY = new Float32Array(count);
      const heights = new Float32Array(count);

      const colorObjs = palette.map((c) => new THREE.Color(c));

      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const rVariation = (Math.random() - 0.5) * spread;
        const rx = baseRadiusX + rVariation;
        const ry = baseRadiusY + rVariation * (baseRadiusY / baseRadiusX);
        const h = (Math.random() - 0.5) * heightSpread;
        const spd = speed * (0.8 + Math.random() * 0.4);

        angles[i] = a;
        radiiX[i] = rx;
        radiiY[i] = ry;
        heights[i] = h;
        speeds[i] = spd;

        positions[i * 3] = Math.cos(a) * rx;
        positions[i * 3 + 1] = Math.sin(a) * ry;
        positions[i * 3 + 2] = h;

        const col = colorObjs[Math.floor(Math.random() * colorObjs.length)];
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: pointSize,
        map: particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const points = new THREE.Points(geo, mat);
      beltGroup.add(points);

      belts.push({
        points,
        positions,
        angles,
        speeds,
        radiiX,
        radiiY,
        heights,
        count,
      });
    };

    // Main Orbit Ring 1 (Aligns with the dense cosmic stardust ring in the picture)
    createOrbitBelt(
      1800,
      2.05,
      1.22,
      0.11,
      [0.32, 0.18, -0.42],
      ['#FF8A65', '#FF7043', '#52E0CB', '#67DFCB', '#FFFFFF', '#FDE047', '#E879F9', '#38BDF8'],
      0.042,
      0.45,
      0.38
    );

    // Secondary Counter-Orbiting Debris Ring
    createOrbitBelt(
      1300,
      2.35,
      1.45,
      -0.075,
      [-0.22, 0.28, 0.35],
      ['#67DFCB', '#38BDF8', '#818CF8', '#FFFFFF', '#FFA726', '#FF6B4A'],
      0.038,
      0.5,
      0.42
    );

    // Inner Solar Swirling Embers
    createOrbitBelt(
      800,
      1.15,
      0.82,
      0.16,
      [0.15, -0.25, -0.3],
      ['#FF5252', '#FF7A45', '#FFA726', '#FFE082', '#FFFFFF'],
      0.038,
      0.3,
      0.22
    );

    // Wide Outer Cosmic Halo Stream
    createOrbitBelt(
      1000,
      2.65,
      1.78,
      0.06,
      [0.45, -0.2, 0.25],
      ['#FFFFFF', '#52E0CB', '#BAE6FD', '#E879F9', '#FBBF24'],
      0.034,
      0.55,
      0.48
    );

    // --- 6. Twinkling & Floating 3D Depth Starfield ---
    const starCount = 420;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starInit = new Float32Array(starCount * 3);

    const starPal = [
      new THREE.Color('#FFFFFF'),
      new THREE.Color('#BAE6FD'),
      new THREE.Color('#67DFCB'),
      new THREE.Color('#FF8A65'),
      new THREE.Color('#FDE047'),
      new THREE.Color('#E879F9'),
    ];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 5.0;
      const y = (Math.random() - 0.5) * 5.0;
      const z = (Math.random() - 0.5) * 2.0 + 0.2;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      starInit[i * 3] = x;
      starInit[i * 3 + 1] = y;
      starInit[i * 3 + 2] = z;

      const col = starPal[Math.floor(Math.random() * starPal.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.046,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    parallaxGroup.add(starPoints);

    // --- 7. Sparkle Diamond Stars (Bottom-Right & Top-Left in Picture) ---
    const diamondSprite1 = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: diamondStarTexture,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      })
    );
    diamondSprite1.position.set(1.75, -1.42, 0.35);
    diamondSprite1.scale.set(0.38, 0.38, 1);
    parallaxGroup.add(diamondSprite1);

    const diamondSprite2 = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: diamondStarTexture,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      })
    );
    diamondSprite2.position.set(-1.55, 1.35, 0.3);
    diamondSprite2.scale.set(0.26, 0.26, 1);
    parallaxGroup.add(diamondSprite2);

    // --- 8. Orbiting 3D "GETTING IT DONE" Billboards ---
    const createTextSprite = (text: string) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 64;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 256, 64);
        ctx.font = '700 20px "Inter", -apple-system, sans-serif';
        ctx.letterSpacing = '3px';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#BAE6FD';
        ctx.shadowColor = '#52E0CB';
        ctx.shadowBlur = 8;
        ctx.fillText(text, 128, 32);
      }
      const tex = new THREE.CanvasTexture(c);
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: tex,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
        })
      );
      sprite.scale.set(1.2, 0.3, 1);
      return sprite;
    };

    const textTag1 = createTextSprite('GETTING IT DONE');
    const textTag2 = createTextSprite('GETTING IT DONE');
    parallaxGroup.add(textTag1);
    parallaxGroup.add(textTag2);

    // --- 9. Mouse Parallax & Smooth Tilting ---
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        parallaxGroup.rotation.y += dx * 0.005;
        parallaxGroup.rotation.x += dy * 0.005;
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- 10. Master Animation Loop ---
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // 10a. Solar Core Breathing
      const sunScale = 2.1 + Math.sin(elapsed * 2.0) * 0.12;
      coronaSprite.scale.set(sunScale, sunScale, 1);

      const sunScale2 = 2.7 + Math.sin(elapsed * 1.5 + 1) * 0.15;
      coronaSprite2.scale.set(sunScale2, sunScale2, 1);

      // 10b. Update 4,000+ Active Orbiting Particles
      belts.forEach((belt) => {
        const { positions, angles, speeds, radiiX, radiiY, heights, count, points } = belt;
        for (let i = 0; i < count; i++) {
          const curA = angles[i] + elapsed * speeds[i];
          const rx = radiiX[i];
          const ry = radiiY[i];

          positions[i * 3] = Math.cos(curA) * rx;
          positions[i * 3 + 1] = Math.sin(curA) * ry;
          positions[i * 3 + 2] = heights[i] + Math.sin(elapsed * 1.8 + curA * 4) * 0.035;
        }
        points.geometry.attributes.position.needsUpdate = true;
      });

      // 10c. Twinkling Background & Foreground Stars
      const starAttr = starGeo.attributes.position as THREE.BufferAttribute;
      const starArr = starAttr.array as Float32Array;
      for (let i = 0; i < starCount; i++) {
        starArr[i * 3] = starInit[i * 3] + Math.sin(elapsed * 0.45 + i) * 0.04;
        starArr[i * 3 + 1] = starInit[i * 3 + 1] + Math.cos(elapsed * 0.5 + i * 1.3) * 0.04;
        starArr[i * 3 + 2] = starInit[i * 3 + 2] + Math.sin(elapsed * 0.8 + i * 2) * 0.025;
      }
      starAttr.needsUpdate = true;

      // 10d. Diamond Sparkle Stars
      const d1Scale = 0.38 + Math.sin(elapsed * 3.0) * 0.09;
      diamondSprite1.scale.set(d1Scale, d1Scale, 1);

      const d2Scale = 0.26 + Math.sin(elapsed * 2.6 + 1) * 0.07;
      diamondSprite2.scale.set(d2Scale, d2Scale, 1);

      // 10e. Orbiting "GETTING IT DONE" Text Badges along the path
      const a1 = elapsed * 0.07 + 0.6;
      textTag1.position.set(Math.cos(a1) * 2.1, Math.sin(a1) * 1.25, 0.12);

      const a2 = elapsed * 0.07 + 3.8;
      textTag2.position.set(Math.cos(a2) * 2.2, Math.sin(a2) * 1.35, 0.12);

      // 10f. Multi-Layer Depth Parallax
      if (!isDragging) {
        const targetRotX = -mouseY * 0.15;
        const targetRotY = mouseX * 0.18 + Math.sin(elapsed * 0.35) * 0.03;
        parallaxGroup.rotation.x = THREE.MathUtils.lerp(parallaxGroup.rotation.x, targetRotX, 0.06);
        parallaxGroup.rotation.y = THREE.MathUtils.lerp(parallaxGroup.rotation.y, targetRotY, 0.06);

        bgPlaneGroup.position.x = THREE.MathUtils.lerp(bgPlaneGroup.position.x, -mouseX * 0.05, 0.06);
        bgPlaneGroup.position.y = THREE.MathUtils.lerp(bgPlaneGroup.position.y, -mouseY * 0.05, 0.06);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'grab',
        touchAction: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
