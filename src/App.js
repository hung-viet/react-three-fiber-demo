import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
function App() {
  return (
    <div>
      {[{ name: 'OG PASS BLUE #12', image: 'https://www.arweave.net/Bj6fb0jj3br7vzhEEn_PgPdsnovYxhG-iBKY78kDC2k?ext=png' },
      { name: 'OG PASS BLUE #18', image: 'https://www.arweave.net/vWSa1rGctdm8pOdSfbFPtw4QXSj0U4oeeUEYrzXvDcE?ext=png' },
      { name: 'CATPUNK OG PASS #1', image: 'https://www.arweave.net/-CZn-OV5-6pboOFjtjlZxoB8CxWSJBQTKQUloauxoac?ext=png' },
      { name: 'CATPUNK OG PASS #0', image: 'https://www.arweave.net/wHMlvaUKx2ELfK34sJoflpXfE8QXQmmkafGVGm1kAI4?ext=png' },
      { name: 'CATPUNK OG PASS #0', image: 'https://www.arweave.net/RtQqn8Soe-Q4Dr6C0ES-ilCavLDe8t2SzU_heijrIM0?ext=png' },
      { name: 'OG PASS BLUE #14', image: 'https://www.arweave.net/PdjSvL0swxYxEn0X-6DLmCs45ejPk6HNGe8ckfTgqME?ext=png' },
      { name: 'OG PASS BLUE #21', image: 'https://www.arweave.net/5x2BoQxoCfPhGO6FgrYxzlQN4LSq5bM2MntpEEMfdqg?ext=png' },
      { name: 'OG PASS BLUE #4', image: 'https://www.arweave.net/B9bScalxJkI3ziU2SyfrRSLZGB2c5ZiIQaEvmiYKMBQ?ext=png' },
      { name: 'OG PASS BLUE #13', image: 'https://www.arweave.net/UqAx7l4tfXWQyq04atIUKYlAiPEGFPJc0ko-pvJN20A?ext=png' },
      { name: Array(1), image: 'https://www.arweave.net/QcCS1z3W5_-7KuCVe-6y71D2VuBbG5B0N3llpqmxXDs?ext=png' }].map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="nft" />
          <h2>{item.name}</h2>
        </div>
      ))}
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
