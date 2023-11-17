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
    <VisibleOnSignal input="myButton2">
      <Prefab id="ancient_urn_01" scale={2} x={3} y={0.0} z={-252.9} />
      <VideoPanel src={'https://cdn.hibervr.com/video/Hiber3D.mp4'}  scale= {4}x={10.5} y={3.0} z={-259.5} rotY={180}></VideoPanel>

    </VisibleOnSignal>
  </HNode>
);

render(<World />, { environment: "city_night_01" });
