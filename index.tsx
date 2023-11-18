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

import CustomAvatar from "./animation";
import CustomAmbiance from "./ambience";
import CinemaVerse from "./cinemaVerse";



const World = () => (
  <HNode >
    <Ground />
    <Grid itemSpacing={65} renderItem={<SkyScraper />} />
    <CinemaVerse/>  
    <CustomAvatar />
    <CustomAmbiance />

  </HNode>
);

render(<World />, { environment: "starry_night_01" } );
