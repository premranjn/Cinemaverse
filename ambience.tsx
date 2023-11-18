import { HNode, render } from "@hiber3d/hdk-react";
import { DJBooth, Grid, Ground, Hovering, SkyScraper } from "@hiber3d/hdk-react-components";
import { Prefab } from "@hiber3d/hdk-react";
import { Avatar } from "@hiber3d/hdk-react-components";
import { Animation } from "@hiber3d/hdk-react";
import { MaterialOnSignal } from "@hiber3d/hdk-react";
import { ButtonSensor } from "@hiber3d/hdk-react";
import { VideoPanel } from "@hiber3d/hdk-react-components";
import { VisibleOnSignal } from "@hiber3d/hdk-react";
import { AndGate } from "@hiber3d/hdk-react";
import { getAvatarPosition } from '@hiber3d/hdk-core';
import { getCameraPosition } from "@hiber3d/hdk-core/dist/types/src/HDK";
import { InteractiveMediaAsset } from "@hiber3d/hdk-react-components";
import { MediaDisplay } from "@hiber3d/hdk-react-components";
import { FibonacciSphere } from "@hiber3d/hdk-react-components";
import { InCircle } from "@hiber3d/hdk-react-components";
import { ImagePanel } from "@hiber3d/hdk-react-components";
import React from 'react';

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
            <Prefab id="plane_01" scale={0.2} x={0} y={5} z={-225} rotX={90} rotY={180} rotZ={0} />
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
        {/* <shoops > */}
        <Prefab id="en_m_hiberpunk_store_01" scale={1} x={-55.8} y={0.0} z={-276.8}   rotX={0}  rotY={0} rotZ={0} />
        {/* <Prefab id="en_m_hiberpunk_building_02_bottom" scale={1} x={-45.3} y={0} z={-200.6}   rotX={0}  rotY={100} rotZ={0} /> */}
        <Prefab id="en_m_hiberpunk_store_02" scale={1} x={-44.4} y={0} z={-277.8}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="neon_sign_06" scaleX={1.2} scaleY={1} scaleZ={1} x={-47.7} y={7.4} z={-271.3}   rotX={0}  rotY={0} rotZ={0} />
        <Prefab id="neon_sign_01" scaleX={1} scaleY={1} scaleZ={1} x={-44.2} y={4.1} z={-273.6}   rotX={0}  rotY={90} rotZ={0} />

        <Prefab id="en_m_hiberpunk_store_01" scale={1} x={-30.8} y={0.0} z={-277.8}   rotX={0}  rotY={0} rotZ={0} />

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={-17.8} y={0} z={-277.0}   rotX={0}  rotY={0} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={-17.8} y={9} z={-277.0}   rotX={0}  rotY={90} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_03" scale={1} x={-20} y={9} z={-277.2}   rotX={0}  rotY={90} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={-6} y={0} z={-277.0}   rotX={0}  rotY={0} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={-6} y={9} z={-277.0}   rotX={0}  rotY={90} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={6} y={0} z={-277.0}   rotX={0}  rotY={0} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={6} y={9} z={-277.0}   rotX={0}  rotY={90} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_f1_01" scale={5} x={18} y={0} z={-277.0}   rotX={0}  rotY={0} rotZ={0} /> 
        <Prefab id="en_m_tunnel_bridge_02" scale={1} x={18} y={9} z={-277.0}   rotX={0}  rotY={90} rotZ={0} /> 

        <Prefab id="hiberpunk_blocks_d1" scale={5} x={29.2} y={0} z={-276.7}   rotX={0}  rotY={90} rotZ={0} />      
        {/* <Prefab id="en_m_tunnel_bridge_03" scale={1} x={38.4} y={9} z={-276.8}   rotX={0}  rotY={90} rotZ={0} />      */}
        
         <Prefab id="couch_01" scale={2} x={-6.7} y={9.8} z={-274.5}   rotX={0}  rotY={0} rotZ={0} />        
         <Prefab id="store_table_display_02" scale={1} x={-3.4} y={10.0} z={-274.1}   rotX={0}  rotY={0} rotZ={0} />   

         <Prefab id="couch_01" scale={2} x={5.7} y={9.8} z={-274.5}   rotX={0}  rotY={0} rotZ={0} />        
         <Prefab id="store_table_display_02" scale={1} x={9.4} y={10.0} z={-274.1}   rotX={0}  rotY={0} rotZ={0} /> 
         
         <Prefab id="display_shelf_01" scale={1} x={-10.8} y={0.0} z={-262.2}   rotX={0}  rotY={0} rotZ={0} /> 
        {/* <ImagePanel src="https://neonsign.com/wp-content/uploads/2020/05/14444-Cold-Drinks-With-Circle-Border-Neon-Signs_17x30-Contoured-Black-Backing.jpg" ratio={1000 / 750} x={-32.6} y={3.4} z={-272.6} /> */}
        {/* <MediaDisplay scale={1} x={14} y={0.3} z={-256.8} {...mediaInfo} /> */}


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