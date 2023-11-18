import { HNode, render } from "@hiber3d/hdk-react";
import { Grid, Ground, SkyScraper } from "@hiber3d/hdk-react-components";
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
const mediaInfo = {
  src: 'https://cdn.hibervr.com/external/music_mv/iconic/Bullet-Spotify.jpg',
  ratio: 1,
  header: 'Listen on Spotify',
  preBody: 'ICONÏC - Bullet',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
 };
  
 
 const World = () => (
   <HNode >
    <Ground />
    <Grid itemSpacing={65} renderItem={<SkyScraper />} />
    <Prefab
      id="sofa_01_t2" rotY={180} scale={1} x={1.6} y={0.0} z={-249.1}>


      <Avatar animation="an_default_emote_sitting_idle_02" x={2} y={0.16} z={0.12} rotY={20} />
      <Avatar animation="an_default_emote_hip_hop_dancing_01" x={-2} y={0.16} z={0.3} rotY={20} />
      <Avatar animation="an_default_emote_sitting_idle_02" y={0.16} z={0.12} rotY={20} />

    </Prefab>
    {/* <Prefab id="gpl_button_01" rotY={180} scale={7} x={4.1} y={0.0} z={-252.9}></Prefab> */}
    <ButtonSensor output="myButton1" />
    <ButtonSensor output="myButton2" scale={7} x={4.1} y={0.0} z={-252.9} />
    <Prefab id="gpl_teleporter_sender_02" x={31.1} y={0.0} z={249.3} />
    <Prefab id="gpl_teleporter_sender_01" scale={2.6} x={20} y={2.0} z={-256.8} rotX={90} />
    <Prefab id="gpl_teleporter_receiver_01" x={22.5} y={0.0} z={245.0} />
    <Prefab id="gpl_teleporter_receiver_02" x={38} y={0.0} z={-246.1} />
    <MediaDisplay scale={1} x={14} y={0.3} z={-256.8} {...mediaInfo} />

    <Prefab id="hovering_sign_04" x={20} y={5.0} z={-256.8}     
/>
    <InteractiveMediaAsset
      header="jksfjdsn"
      // text="Your Custom Text Here" 
      preBody="yoooooooooooooo"
      body="skjdnfkjdsn"
      url="https://hiber3d.com/"
      asset={<Prefab id="hovering_sign_04" />}
      scale={0.5}
      x={25.0} y={0.0} z={-252.5} 
    />

    <VisibleOnSignal input="myButton2">
      <Prefab id="ancient_urn_01" scale={2} x={10} y={0.0} z={-252.9} />
      {/* <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}  scale= {4}x={10.5} y={2.0} z={-259.5} rotY={180}></VideoPanel> */}
      <VideoPanel src={'https://cdn.hibervr.com/video/Hiber3D.mp4'} scale={4} x={10} y={1.5} z={-259.5} rotY={180}></VideoPanel>

    </VisibleOnSignal>

  </HNode>
);

render(<World />, { environment: "city_night_01" });
