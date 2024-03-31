import { Canvas } from '@react-three/fiber';
import { Sky, Html } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { useState } from 'react';
import { Ground } from './components/Ground';
import { FPV } from './components/FPV';

export const App = () => {
    const [isDay, setIsDay] = useState(true);
  return (
    <>
            <button onClick={() => setIsDay(!isDay)}>{isDay? 'Noche': 'Dia'}</button>
    <Canvas>
        <Html position={[0,3,1]}>
        </Html>
        <Sky sunPosition={isDay? [100,100,20]:[0,0,0]}/>
        <ambientLight intensity={0.5}/>
        <FPV/>
        <Physics>
        <Ground/>
        </Physics>
    </Canvas>
    </>
  )
}
