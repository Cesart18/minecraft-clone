import { Canvas } from '@react-three/fiber';
import { Sky, Html } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { useState } from 'react';
import { Ground } from './components/Ground';

export const App = () => {
    const [isDay, setIsDay] = useState(true);
  return (
    <>
    <Canvas>
        <Html position={[0,3,1]}>
            <button onClick={() => setIsDay(!isDay)}>{isDay? 'Noche': 'Dia'}</button>
        </Html>
        <Sky sunPosition={isDay? [100,100,20]:[0,0,0]}/>
        <ambientLight intensity={0.5}/>
        <Physics>
        <Ground/>
        </Physics>
    </Canvas>
    </>
  )
}
