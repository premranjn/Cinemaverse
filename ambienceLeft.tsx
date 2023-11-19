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
import { SegmentedStack } from "@hiber3d/hdk-react-components";
import React from 'react';

const AmbianceLeft = () => (
    <>
        <Prefab id='en_m_hiberpunk_store_01' scale={1.5} x={-100} y={0.0} z={-270} rotX={0} rotY={0} rotZ={0}/>
        <Prefab id='en_m_hiberpunk_store_02' scale={1.5} x={-130} y={0.0} z={-270} rotX={0} rotY={0} rotZ={0}/>
        <Prefab id='en_m_hiberpunk_building_01_bottom' scale={2} x={-230} y={0} z={-270} rotX={0} rotY={45} rotZ={0}/>
        <Prefab id='en_m_hiberpunk_building_01_top' scale={1} x={-230} y={0} z={-175} rotX={0} rotY={45} rotZ={0}/>

        <Avatar animation = 'an_default_idle' scale={1} x={-42.0} y={4.7} z={-254.9} />

        
    </>
);

export default AmbianceLeft;


