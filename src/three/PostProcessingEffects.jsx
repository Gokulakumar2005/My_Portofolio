import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const PostProcessingEffects = () => {
  return (
    <EffectComposer multisampling={0} autoClear={false}>
      <Bloom
        intensity={0.65}
        luminanceThreshold={0.3}
        luminanceSmoothing={0.85}
        mipmapBlur
      />
    </EffectComposer>
  );
};

