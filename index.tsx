import { HNode, render } from "@hiber3d/hdk-react";
import { Grid, Ground, SkyScraper, Spawnpoint } from "@hiber3d/hdk-react-components";

import CustomAvatar from "./animation";
import CustomAmbiance from "./ambience";
import CinemaVerse from "./cinemaVerse";
import AmbianceLeft from "./ambienceLeft";



const World = () => (
  <HNode >
    <Ground />
    <Grid itemSpacing={70} renderItem={<SkyScraper />} />
    <Spawnpoint x={-46.9} y={0.0} z={-204.6} />
    <CinemaVerse/>  
    <CustomAvatar />
    <CustomAmbiance />
    <AmbianceLeft/>

  </HNode>
);

render(<World />, { environment: "city_night_01" } );
