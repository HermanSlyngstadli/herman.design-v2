import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'

const StyledCanvas = styled.div`
	height:100vh;
	width:100%;
`;

function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef()
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
	// Return view, these are regular threejs elements expressed in JSX
	return (
		<mesh
		{...props}
		ref={mesh}
		scale={active ? 1.5 : 1}
		onClick={(event) => setActive(!active)}
		onPointerOver={(event) => setHover(true)}
		onPointerOut={(event) => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

function Main() {
	return (
		<StyledCanvas>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</StyledCanvas>
	);
}

export default Main;