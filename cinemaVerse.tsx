import { HNode, render } from "@hiber3d/hdk-react";
import { For, Grid, Ground, SkyScraper } from "@hiber3d/hdk-react-components";
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
import React, { useState, useEffect } from 'react';


const mediaInfo = {
    src: 'https://cdn.hibervr.com/external/music_mv/iconic/Bullet-Spotify.jpg',
    ratio: 1,
    header: 'Listen on Spotify',
    preBody: 'ICONÏC - Bullet',
    link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
  };


  
const CinemaVerse = () => (
    <>
    <Prefab
      id="sofa_01_t2" rotY={180} scale={1} x={1.6} y={0.0} z={-249.1}>

      {/* <Avatar animation='an_default_walk' x={2} y={0.16} z={0.12} rotY={20} /> */}
      <Avatar animation="an_default_emote_hip_hop_dancing_01" x={-2} y={0.16} z={0.3} rotY={20} />
      <Avatar animation="an_default_emote_sitting_idle_02" y={0.16} z={0.12} rotY={20} />
      <Avatar animation="moving_platform_rotating" x={6.9} y={0.0} z={-240.3} />

    </Prefab>
    {/* <Prefab id="gpl_button_01" rotY={180} scale={7} x={4.1} y={0.0} z={-252.9}></Prefab> */}
    <ButtonSensor output="myButton1" />
    <ButtonSensor output="myButton2" scale={7} x={4.1} y={0.0} z={-252.9} />
    <Prefab id="gpl_teleporter_sender_02" x={31.1} y={0.0} z={249.3} />
    <Prefab id="gpl_teleporter_sender_01" scale={2.6} x={0.0} y={13} z={-285.6} rotX={90} />
    <Prefab id="gpl_teleporter_receiver_01" x={22.5} y={0.0} z={245.0} />
    <Prefab id="gpl_teleporter_receiver_02" x={38} y={0.0} z={-246.1} />
    {/* <MediaDisplay scaleY={2} scaleX={4} scaleZ={2} x={28.2} y={16.8} z={-270.2} {...mediaInfo} /> */}
   
    {/* <Prefab id="hovering_sign_04" x={10} y={5.0} z={-263}/>
    <InteractiveMediaAsset
      header="jksfjdsn"
      // text="Your Custom Text Here" 
      preBody="yoooooooooooooo"
      body="skjdnfkjdsn"
      url="https://hiber3d.com/"
      asset={<Prefab id="hovering_sign_04" />}
      // scale={20}
      x={25} y={5.0} z={-263}
    /> */}

    <VisibleOnSignal input="myButton2">
      <Prefab id="ancient_urn_01" scale={2} x={10} y={0.0} z={-252.9} />
      {/* <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}  scale= {4}x={10.5} y={2.0} z={-259.5} rotY={180}></VideoPanel> */}
      <VideoPanel src={'https://cdn.hibervr.com/video/Hiber3D.mp4'} scale={10} x={10} y={1.5} z={-259.5} rotY={180}></VideoPanel>

    </VisibleOnSignal>
    </>
        
);

export default CinemaVerse;