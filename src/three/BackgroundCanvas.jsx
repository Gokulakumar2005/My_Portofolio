import { useEffect, useRef, useState, Suspense, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { DeveloperCharacter3D } from './DeveloperCharacter3D';
import { DeveloperArtifacts3D } from './DeveloperArtifacts3D';
import { DataPipelines3D } from './DataPipelines3D';
import { StarfieldAndGrid } from './StarfieldAndGrid';
import { PostProcessingEffects } from './PostProcessingEffects';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Canvas 3D Context caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const CameraRig = ({ mouse, scrollProgress, isMobile }) => {
  useFrame((state) => {
    // Smooth camera flight responding to scroll and mouse
    const progress = scrollProgress.current || 0;
    const targetY = -progress * 4.2;
    const targetZ = (isMobile ? 10.5 : 8.2) - Math.sin(progress * Math.PI) * 1.6;
    const targetX = (mouse.current.x * (isMobile ? 0.5 : 1.3)) + (isMobile ? 0 : 0.4);

    state.camera.position.x += (targetX - state.camera.position.x) * 0.055;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.055;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.055;

    state.camera.lookAt(isMobile ? 0 : 0.4, targetY * 0.5, -2);
  });
  return null;
};

export const BackgroundCanvas = () => {
  // Lazy state initializers to prevent React 19 effect cascading renders
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [isMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  const [hasWebGL] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  });

  const [isTabVisible, setIsTabVisible] = useState(true);

  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);

  useEffect(() => {
    // Listen for reduced motion changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionHandler = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionHandler);

    // Pause rendering on tab hide to preserve GPU & battery
    const handleVisibility = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Mouse movement listener with normalization [-1, 1]
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll progress listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress.current = Math.min(1, Math.max(0, window.scrollY / totalScroll));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      motionQuery.removeEventListener('change', motionHandler);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const staticFallback = (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141d38_1px,transparent_1px),linear-gradient(to_bottom,#141d38_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
    </div>
  );

  // Fallback for prefers-reduced-motion or unsupported WebGL
  if (prefersReducedMotion || !hasWebGL) {
    return staticFallback;
  }

  return (
    <CanvasErrorBoundary fallback={staticFallback}>
      {/* Transparent container overlaying the 4K motion picture */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 8.2], fov: 50, near: 0.1, far: 45 }}
          dpr={[1, 1.5]}
          frameloop={isTabVisible ? 'always' : 'never'}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true, // Transparent canvas so the 4K motion picture shows through!
          }}
        >
          {/* Vibrant Multi-Color Studio Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 8, 5]} intensity={1.8} color="#00f0ff" />
          <pointLight position={[-5, -3, 3]} intensity={2.2} color="#a855f7" />
          <pointLight position={[3, -4, 2]} intensity={2.0} color="#10b981" />
          <pointLight position={[-3, 4, -2]} intensity={1.8} color="#f59e0b" />

          <Suspense fallback={null}>
            <CameraRig
              mouse={mouse}
              scrollProgress={scrollProgress}
              isMobile={isMobile}
            />
            {/* 3D Software Developer Coding at Futuristic Workstation */}
            <DeveloperCharacter3D mouse={mouse} />
            <DeveloperArtifacts3D mouse={mouse} />
            <DataPipelines3D />
            <StarfieldAndGrid />
            {!isMobile && <PostProcessingEffects />}
          </Suspense>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
};

export default BackgroundCanvas;
