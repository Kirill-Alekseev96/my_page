import Particles from './Particles';

type ParticlesProps = {
   color: string;
};

export default function ParticlesScene({color}:ParticlesProps) {

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -5, pointerEvents: 'none'  }}>
            <Particles
                particleColors={[color]}
                particleCount={1000}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={150}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
            />
        </div>
    );
}