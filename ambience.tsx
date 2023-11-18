import { Hovering } from "@hiber3d/hdk-react-components";
import { Prefab } from "@hiber3d/hdk-react";
import { SegmentedStack } from "@hiber3d/hdk-react-components";

// const mediaInfo = {
//     src: 'https://neonsign.com/wp-content/uploads/2020/05/14444-Cold-Drinks-With-Circle-Border-Neon-Signs_17x30-Contoured-Black-Backing.jpg',
//     ratio: 1,
//     header: 'Listen on Spotify',
//     preBody: 'ICONÏC - Bullet',
//     link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
//   };

const CustomAmbiance = () => (
    <>
        {/* Screen & Seats */}
        <>
            {/* cinema screen: !!Dont change the below line */}
            <Prefab id="plane_01" scale={0.4} x={0} y={5} z={-225} rotX={90} rotY={180} rotZ={0} />
            {/* <Prefab id="invisible_light_cyan" scale={0.2} x={0} y={5} z={-225} rotX={90} rotY={180} rotZ={0} /> */}
            {/* <Prefab id="hiberpunk_decoration_disc_t1" scale={28} x={0} y={-14} z={-224.2} rotX={0} rotY={0} rotZ={0} /> */}
            
            
            {/* <InCircle x={0} y={5} z={-225}scale={5} rotY={180} renderItem={() => <Prefab id="lounge_sofa_01" scale={0.3} />} /> */}
            <Hovering z={0.0} y={0.8} magnitude = {0.0}> 
            <Prefab id="lounge_sofa_01" scale={1.3} x={-0.1} y={1} z={-195} rotX={0}  rotY={180} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={1.9} y={1} z={-194.6} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-1.9} y={1} z={-194.6} rotX={0}  rotY={180} rotZ={180} />
            </Hovering>

            <Prefab id="lounge_sofa_01" scale={1.3} x={-17.4} y={1} z={-200.0}rotX={0}  rotY={150} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-15.6} y={1} z={-199.1} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-19.1} y={1} z={-201.1} rotX={0}  rotY={180} rotZ={180} />
            
            <Prefab id="lounge_sofa_01" scale={1.3} x={17.8} y={1} z={-200.3} rotX={0}  rotY={220} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={19.3} y={1} z={-201.4} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={16.3} y={1} z={-199.2} rotX={0}  rotY={180} rotZ={180} />


            <Prefab id="lounge_sofa_01" scale={1.3} x={24.9} y={1} z={-215.8} rotX={0}  rotY={250} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={25.4} y={1} z={-217.6} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={24.1} y={1} z={-214.1} rotX={0}  rotY={180} rotZ={180} />

            <Prefab id="lounge_sofa_01" scale={1.3} x={-25.0} y={1} z={-215.8} rotX={0}  rotY={100} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-24.5} y={1} z={-233.7} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-23.1} y={1} z={-237.3} rotX={0}  rotY={180} rotZ={180} />
            
            <Prefab id="lounge_sofa_01" scale={1.3} x={-23.7} z={-235.5} y={1}  rotX={0}  rotY={68} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-24.9} y={1} z={-214} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-25.5} y={1} z={-217.5} rotX={0}  rotY={180} rotZ={180} />


            <Prefab id="lounge_sofa_01" scale={1.3} x={0.0} y={1} z={-252.8} rotX={0}  rotY={0} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-1.9} y={1} z={-252.8} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={1.9} y={1} z={-252.7} rotX={0}  rotY={180} rotZ={180} />

            <Prefab id="lounge_sofa_01" scale={1.3} x={23.7} z={-235.5} y={1}  rotX={0}  rotY={-68} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={22.9} y={1} z={-237.3} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={24.3} y={1} z={-234.3} rotX={0}  rotY={180} rotZ={180} />
            
            <Prefab id="lounge_sofa_01" scale={1.3} x={-14.6} z={-247.0} y={1}   rotX={0}  rotY={40} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-16.1} y={1} z={-245.9} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={-13.1} y={1} z={-248.3} rotX={0}  rotY={180} rotZ={180} />
            
            <Prefab id="lounge_sofa_01" scale={1.3} x={14.6} z={-247.0} y={1}   rotX={0}  rotY={-40} rotZ={0} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={13.3} y={1} z={-248.1} rotX={0}  rotY={180} rotZ={180} />
            <Prefab id="gpl_teleporter_sender_01" scale={0.3} x={15.9} y={1} z={-245.8} rotX={0}  rotY={180} rotZ={180} />
            

        </>

        <>
        {/* <shoops > */ }
        {/* <Prefab id="en_m_hiberpunk_store_01" scale={1} x={-55.8} y={0.0} z={-276.8}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="en_m_hiberpunk_store_02" scale={1} x={-44.4} y={0} z={-277.8}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="neon_sign_06" scaleX={1.2} scaleY={1} scaleZ={1} x={-47.7} y={7.4} z={-271.3}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="neon_sign_01" scaleX={1} scaleY={1} scaleZ={1} x={-44.2} y={4.1} z={-273.6}   rotX={0}  rotY={90} rotZ={0} />

        <Prefab id="en_m_hiberpunk_store_01" scale={1} x={-30.8} y={0.0} z={-277.8}   rotX={0}  rotY={0} rotZ={0} />

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={-17.8} y={0} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={-17.8} y={9} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_03" scale={1} x={-20} y={9} z={-277.2}   rotX={0}  rotY={45} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={-6} y={0} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={-6} y={9} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={6} y={0} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={6} y={9} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={18} y={0} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={18} y={9} z={-277.0}   rotX={0}  rotY={45} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_d1" scale={5} x={29.2} y={0} z={-276.7}   rotX={0}  rotY={45} rotZ={0} />      
        
         <Prefab id="couch_01" scale={2} x={-6.7} y={9.8} z={-274.5}   rotX={0}  rotY={0} rotZ={0} />        
         <Prefab id="store_table_display_02" scale={1} x={-3.4} y={10.0} z={-274.1}   rotX={0}  rotY={0} rotZ={0} />   

         <Prefab id="couch_01" scale={2} x={5.7} y={9.8} z={-274.5}   rotX={0}  rotY={0} rotZ={0} />        
         <Prefab id="store_table_display_02" scale={1} x={9.4} y={10.0} z={-274.1}   rotX={0}  rotY={0} rotZ={0} /> 
         
         <Prefab id="display_shelf_01" scale={1} x={-10.8} y={0.0} z={-262.2}   rotX={0}  rotY={0} rotZ={0} />  */}

        <Prefab id="flying_car_01" scale={1} x={37.9} y={18.0} z={-188.2}   rotX={0}  rotY={0} rotZ={0} /> 

        <SegmentedStack
            segments={[
                {
                length: 4,
                direction: 'RIGHT',
                dimensions: [12,2,2],
                },
            ]}
            x={36.2} y={4} z={-268.6} rotX={0} rotY={-55} rotZ={0}
            renderItem={() => <Prefab id="en_m_tunnel_bridge_02" />}
        />

        <SegmentedStack
            segments={[
                {
                length: 4,
                direction: 'RIGHT',
                dimensions: [12,2,2],
                },
            ]}
            x={-56} y={4} z={-236} rotX={0} rotY={55} rotZ={0}
            renderItem={() => <Prefab id="en_m_tunnel_bridge_02" />}
        />

        {/* <Prefab id="hiberpunk_blocks_f1_01" scaleX={4} scaleY={1} scaleZ={1} x={-61.1} y={1} z={-229.0}   rotX={0}  rotY={-35} rotZ={0} />
        <Prefab id="hiberpunk_blocks_f1_01" scaleX={4} scaleY={1} scaleZ={1} x={-63.5} y={0.0} z={-226.3}   rotX={0}  rotY={-35} rotZ={0} /> */}

        <Prefab id="gpl_air_lift_01" scale={2} x={-60.8} y={1.0} z={-228.6}/>
        <Prefab id="couch_01" scale={2} x={-32.2} y={4.7} z={-263.9}   rotX={0}  rotY={55} rotZ={0} />
        <Prefab id="store_table_display_02" scale={1} x={-34.2} y={4.7} z={-260.6}   rotX={0}  rotY={55} rotZ={0} />

        <Prefab id="couch_01" scale={2} x={32.0} y={4.7} z={-267.7}  rotX={0}  rotY={-55} rotZ={0} />
        <Prefab id="store_table_display_02" scale={1} x={34.7} y={4.7} z={-264.2}   rotX={0}  rotY={-55} rotZ={0} />

        <Prefab id="couch_01" scale={2} x={38.7} y={4.7} z={-258.3}   rotX={0}  rotY={-55} rotZ={0} />
        <Prefab id="store_table_display_02" scale={1} x={40.8} y={4.7} z={-255.0}   rotX={0}  rotY={-55} rotZ={0} />
        <Prefab id="gpl_air_lift_01" scale={2} x={61.8} y={1.0} z={-232.1}/>
        <Prefab id="gpl_air_lift_01" scale={2} x={31.5} y={1.0} z={-276.4}/>

        <Prefab id="en_m_hiberpunk_store_01" scale={1} x={80.8} y={0.0} z={-276.8}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="en_m_hiberpunk_store_02" scale={1} x={60.4} y={0} z={-277.8}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="neon_sign_06" scaleX={1.2} scaleY={1} scaleZ={1} x={57.} y={7.4} z={-271.3}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="neon_sign_01" scaleX={1} scaleY={1} scaleZ={1} x={60.4} y={4.1} z={-273.6}   rotX={0}  rotY={90} rotZ={0} />

        <Prefab id="display_shelf_01" scale={1} x={49.7} y={4.7} z={-249.5}   rotX={0}  rotY={-90} rotZ={0} />
        <Prefab id="food_pie_01" scale={1} x={49.9} y={5.5} z={-249.1}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="food_ham_01" scale={0.8}x={48.8} y={5.5} z={-250.7}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="praline_03" scale={0.8}x={49.8} y={6.1} z={-250.4}  rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="cupcake_01" scale={0.2} x={50.5} y={6.1} z={-248.8}  rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="praline_01" scale={0.5} x={50.3} y={6.1} z={-249.8}  rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="donut_01" scale={0.1} x={49.8} y={5.5} z={-248.0} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="praline_02" scale={0.4} x={49.5} y={5.6} z={-249.8} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="candy_straps" scale={0.2}x={50.4} y={6.8} z={-250.7} rotX={0}  rotY={0} rotZ={0} />

        {/* Plants */}
        <Prefab id="potted_plant_01" scale={1} x={53.8} y={0.0} z={-270.8} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="potted_plant_02" scale={1} x={66.9} y={0.0} z={-271.5} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="potted_plant_01" scale={1} x={74.6} y={0.0} z={-271.1} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="potted_plant_02" scale={1} x={86.9} y={0.0} z={-271.3} rotX={0}  rotY={0} rotZ={0} />

        {/* Plant left side */}
        <Prefab id="potted_plant_01" scale={1} x={-90.9} y={0.0} z={-260.9} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="potted_plant_02" scale={1} x={-108.3} y={0.0} z={-260.9} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="potted_plant_01" scale={1} x={-121.0} y={0.0} z={-260.5} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="potted_plant_02" scale={1} x={-138.7} y={0.0} z={-260.0} rotX={0}  rotY={0} rotZ={0} />

        </>

        <>
        {/* Film shooting */}
        <Prefab id="plane_02" scale={1} x={100.4} y={-1.4} z={-220.9} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="en_m_primitive_wall_01" scaleX={7} scaleY={2} scaleZ={1} x={100.4} y={0} z={-219.4} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="en_m_primitive_wall_01" scaleX={7} scaleY={2} scaleZ={1} x={100.4} y={0} z={-219.4} rotX={0}  rotY={90} rotZ={0} />
        <Prefab id="en_m_log_cabin_01_floor" material = {'t_planks_01'} scaleX={3} scaleY={1} scaleZ={3} x={92.3} y={0.6} z={-227.4} rotX={0}  rotY={0} rotZ={0} />

        <Prefab id="en_m_primitive_thin_wall_01" material = {'palette_01_white'} scaleX={3.4} scaleY={1} scaleZ={1} x={91.6} y={0.9} z={-231.4} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="en_m_primitive_thin_wall_01" material = {'palette_01_white'} scaleX={3.4} scaleY={1} scaleZ={1} x={91.6} y={4} z={-231.4} rotX={0}  rotY={0} rotZ={0} />
        
        <Prefab id="en_m_log_cabin_01_floor" material = {'t_wood_01'}scaleX={4} scaleY={1} scaleZ={3} x={92.3} y={8} z={-227.4} rotX={0}  rotY={0} rotZ={0} />

        <Prefab id="en_m_primitive_thin_wall_01" material = {'palette_01_white'} scaleX={3.4} scaleY={1} scaleZ={1} x={91.6} y={0.9} z={-219.7} rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="en_m_primitive_thin_wall_01" material = {'palette_01_white'} scaleX={3.4} scaleY={1} scaleZ={1} x={91.6} y={4} z={-219.7} rotX={0}  rotY={0} rotZ={0} />

        <Prefab id="en_m_primitive_thin_wall_01" material = {'palette_01_white'} scaleX={3} scaleY={2} scaleZ={1} x={100.1} y={0} z={-227.6} rotX={0}  rotY={90} rotZ={0} />
        
        <Prefab id="wall_shelf_01"  scaleX={1} scaleY={1} scaleZ={1} x={98.2} y={3} z={-227.4} rotX={0}  rotY={-90} rotZ={0} />
        <Prefab id="wall_shelf_01"  scaleX={1} scaleY={1} scaleZ={1} x={98.2} y={3} z={-228.9} rotX={0}  rotY={-90} rotZ={0} />

        <Prefab id="wall_shelf_01"  scaleX={1} scaleY={1} scaleZ={1} x={98.2} y={3} z={-230.4} rotX={0}  rotY={-90} rotZ={0} />
        <Prefab id="wall_shelf_01"  scaleX={1} scaleY={1} scaleZ={1} x={98.2} y={3} z={-230.9} rotX={0}  rotY={-90} rotZ={0} />
        </>

        {/* <Prefab id="gpl_tilting_ramp_01" scale={1} x={1.6} y={0.0} z={-249.1} />
    <Prefab id="gpl_tilting_ramp_01" scale={1} x={-5} y={0.0} z={-249.1} /> */}
        {/* <Prefab id="lounge_sofa_01" scale={1} x={-16.4} y={10} z={-225.1} rotX={-4.6} rotY={180} rotZ={0} /> */}
        {/* <Prefab id="cube_02" scaleX={1} scaleY={2} scaleZ={2} x={-16.4} y={9} z={-225.1} rotX={-4.6} rotY={180} rotZ={0} /> */}
        {/* <Prefab id="plane_01" scale={0.4} x={-16.4} y={0} z={-225.1} rotX={0} rotY={180} rotZ={0} />  */}



 
        {/* <FibonacciSphere x={-16.4} y={20} z={-225.1} scale={8}renderItem={<Prefab id="lounge_sofa_01" scale={0.4} rotX={-4.6} rotY={180} rotZ={0} />} /> */}
        {/* <Prefab id="gpl_air_lift_01" scale={1}x={-4.5} y={0.0} z={-230.0} rotX={-4.6} rotY={180} rotZ={0} />  */}
        
    </>

);

export default CustomAmbiance;