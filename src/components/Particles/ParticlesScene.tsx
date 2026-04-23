import Particles from './Particles';

export default function ParticlesScene() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -5, pointerEvents: 'none'  }}>
            <Particles
                particleColors={["#ffd8a4"]}
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