import Particles from './Particles';

export default function ParticlesScene() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1, pointerEvents: 'none'  }}>
            <Particles
                particleColors={["#ffffff"]}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
            />
        </div>
    );
}