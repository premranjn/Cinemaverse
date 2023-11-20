import { Prefab } from "@hiber3d/hdk-react";
import { Avatar } from "@hiber3d/hdk-react-components";
import {
    DJBooth
} from "@hiber3d/hdk-react-components";
const AmbianceLeft = () => (
    <>
        <Prefab id='en_m_hiberpunk_store_01' scale={1.5} x={-100} y={0.0} z={-270} rotX={0} rotY={0} rotZ={0} />
        <Prefab id='en_m_hiberpunk_store_02' scale={1.5} x={-130} y={0.0} z={-270} rotX={0} rotY={0} rotZ={0} />
        <Prefab id='en_m_hiberpunk_building_01_bottom' scale={2} x={-230} y={0} z={-270} rotX={0} rotY={45} rotZ={0} />
        <Prefab id='en_m_hiberpunk_building_01_top' scale={1} x={-230} y={0} z={-175} rotX={0} rotY={45} rotZ={0} />

        <Avatar animation='an_default_idle' scale={1} x={-42.0} y={4.7} z={-254.9} />

        <DJBooth
            videoSrc="https://cdn.hibervr.com/video/Cubes_Loop.mp4"
            x={-75} y={0} z={-170}
            // rotX={0} rotY={-110} rotZ={0}
            // avatarSource={{ url: 'https://models.readyplayer.me/64898d94c91663ff97458041.glb' }}
        />


    </>
);

export default AmbianceLeft;


