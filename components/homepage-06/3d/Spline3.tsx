
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/eSgwN7XBg-UpSKZD/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#edf1fe']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group name="rect_box" position={[22.84, 156.61, 12.43]} scale={[0.68, 0.63, 0.68]}>
            <group
              name="aligner-box"
              position={[-142.52, -226.64, 10.96]}
              rotation={[-1.25, 0, 0]}
              scale={[2.39, 2.46, 2.03]}
            >
              <mesh
                name="1000133970.png"
                geometry={nodes['1000133970.png'].geometry}
                material={materials['1000133970.png Material']}
                castShadow
                receiveShadow
                position={[1.21, 4.88, 19.44]}
                rotation={[-0.32, 0, 0]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials['Cylinder Material']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[1.21, 0, 0]}
                scale={1}
              />
            </group>
            <group
              name="Tube"
              position={[-540.25, -204.51, 51.39]}
              rotation={[-1.57, -0.03, -0.03]}
              scale={[1.31, 1.02, 1.65]}
            >
              <group name="Front Label" position={[0.26, 9.34, 54.6]}>
                <mesh
                  name="Text 4"
                  geometry={nodes['Text 4'].geometry}
                  material={materials['Text 4 Material']}
                  castShadow
                  receiveShadow
                  position={[4.05, -138.43, -0.23]}
                />
                <mesh
                  name="Text 3"
                  geometry={nodes['Text 3'].geometry}
                  material={materials['Text 3 Material']}
                  castShadow
                  receiveShadow
                  position={[4.05, -130.43, -0.23]}
                />
                <mesh
                  name="Text 2"
                  geometry={nodes['Text 2'].geometry}
                  material={materials['Text 2 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.38, -2.2, -0.36]}
                />
                <mesh
                  name="Text"
                  geometry={nodes.Text.geometry}
                  material={materials['Text Material']}
                  castShadow
                  receiveShadow
                  position={[2.3, 13.8, -0.83]}
                />
                <mesh
                  name="1000133971.png"
                  geometry={nodes['1000133971.png'].geometry}
                  material={materials['1000133971.png Material']}
                  castShadow
                  receiveShadow
                  position={[-0.62, 120.67, 1.07]}
                  scale={[1, 1, 4.49]}
                />
                <mesh
                  name="Label"
                  geometry={nodes.Label.geometry}
                  material={materials['Label Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.07]}
                />
              </group>
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials['Cube Material']}
                castShadow
                receiveShadow
                position={[0, 21.05, 4.74]}
              />
            </group>
            <group name="Box_Opened" position={[-255.17, -206.82, 45.15]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
              <mesh
                name="Cover"
                geometry={nodes.Cover.geometry}
                material={materials['Cover Material']}
                castShadow
                receiveShadow
                position={[2.33, 179.49, -0.16]}
                rotation={[-0.15, 0, Math.PI / 2]}
                scale={[0.01, 1.12, 0.3]}
              />
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={materials['Rectangle Material']}
                castShadow
                receiveShadow
                position={[-63.99, 7.66, -67.89]}
                rotation={[Math.PI, 0, -Math.PI]}
                scale={1.91}
              />
              <mesh
                name="Rectangle1"
                geometry={nodes.Rectangle1.geometry}
                material={materials['Rectangle1 Material']}
                castShadow
                receiveShadow
                position={[241.78, 7.78, 14.92]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1.91}
              />
              <mesh
                name="Front"
                geometry={nodes.Front.geometry}
                material={materials.body}
                castShadow
                receiveShadow
                position={[2.14, -175.71, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.02, 1.16, 0.3]}
              />
              <mesh
                name="Subdiv"
                geometry={nodes.Subdiv.geometry}
                material={materials['Subdiv Material']}
                castShadow
                receiveShadow
                position={[245.2, -27.95, 0]}
                scale={[0.02, 1.01, 0.3]}
              />
              <mesh
                name="Right"
                geometry={nodes.Right.geometry}
                material={materials['Right Material']}
                castShadow
                receiveShadow
                position={[-374.73, -27.95, 0]}
                scale={[0.02, 1.01, 0.3]}
              />
              <mesh
                name="Bottom"
                geometry={nodes.Bottom.geometry}
                material={materials.Paper}
                castShadow
                receiveShadow
                position={[0.51, -25.1, -70.51]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.01, 0.99, 1]}
              />
            </group>
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[84, 189, 263]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
