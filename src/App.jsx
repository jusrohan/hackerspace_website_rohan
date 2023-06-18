import React, { Suspense,useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import {OrbitControls,useGLTF} from "@react-three/drei";
import './App.css';
 function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.computer_computer_mat_0.geometry} material={materials.computer_mat} />
      <mesh geometry={nodes.server_server_mat_0.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.vhs_vhsPlayer_mat_0.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.shelf_stand_mat_0.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.keyboard_mat_mat_mat_0.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.arm_arm_mat_0.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.Tv_tv_mat_0.geometry} material={materials.tv_mat} />
      <mesh geometry={nodes.table_table_mat_0.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.Cables_cables_mat_0.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.props_props_mat_0.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens} />
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.Ground_ground_mat_0.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.peripherals_key_mat_0.geometry} material={materials.key_mat} />
    </group>
  )


  
}


export default function App() {
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{fov:100,position:[-1,1,4]}}>
      <OrbitControls enablePan={true} enableZoom={true}/>
        <Suspense fallback={null}>
        
          <ambientLight intensity={1}/>
          <Model />
          
        </Suspense>
     
      </Canvas>
    </div>
  );
}
