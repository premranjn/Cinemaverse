import { HNode, render } from "@hiber3d/hdk-react";
import { DJBooth, Grid, Ground, SkyScraper } from "@hiber3d/hdk-react-components";
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
import React from 'react';

const CustomAmbiance = () => (
    <>
    <Prefab id="gpl_tilting_ramp_01" scale={1} x={1.6} y={0.0} z={-249.1} />
    <Prefab id="gpl_tilting_ramp_01" scale={1} x={-5} y={0.0} z={-249.1} />
    <DJBooth>
        
    </DJBooth>
    </>
        
);

export default CustomAmbiance;