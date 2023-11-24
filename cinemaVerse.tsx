import { Prefab, ButtonSensor, Animation, VisibleOnSignal } from "@hiber3d/hdk-react";
import { VideoPanel } from "@hiber3d/hdk-react-components";
import { MediaDisplay } from "@hiber3d/hdk-react-components";


const Indian2 = {
  src: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Indian_2_poster.jpg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan                     2Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};
const Vikram = {
  src: 'https://m.media-amazon.com/images/M/MV5BOTFhMDU5ZGYtNjcyNy00NjAyLWI5YzItYTUwZTk5MjhkMzk0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};
const KGF = {
  src: 'https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};

const Intestellar = {
  src: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};

const FordVsFerrari = {
  src: 'https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};

const BreakingBad = {
  src: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY1200_CR85,0,630,1200_AL_.jpg',
  ratio: 0.7,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};

const SpongeBob = {
  src: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};

const EndGame = {
  src: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
  ratio: 0.8,
  header: 'Indian 2',
  preBody: 'Kamal Hasan 2.5 Hrs',
  link: 'https://open.spotify.com/track/1h2z5KcMffP46AeSePfwWM?si=a79df0439e8c4a44',
};




const CinemaVerse = () => (
  <>
    <Prefab
      id="sofa_01_t2" scale={1} x={10.7} y={0.0} z={-243.5}
      rotX={3} rotY={-20.0} rotZ={0}>

      {/* <Avatar
        src={{
          url: 'https://models.readyplayer.me/6401fc12ce7f75d51cdb2888.glb',
          skeletonGroupID: 'skg_default'
        }}
        animation="an_default_emote_hip_hop_dancing_01"
        x={2} y={0.16} z={0.12} rotY={20}
      /> */}

    </Prefab>
    <>
      {/* Vikram
        Jungle Book
        Intestellar
        Indian 2

         */}
      <ButtonSensor output="myButton1" materialOff={"t_hex_disco_01"} scale={2} x={18.7} y={1.2} z={-203.9} />
      <ButtonSensor output="myButton2" materialOff={"t_hex_disco_01"} scale={2} x={16.9} y={1.2} z={-207.5} />
      <ButtonSensor output="myButton3" materialOff={"t_hex_disco_01"} scale={2} x={18.5} y={1.2} z={-211.1} />
      <ButtonSensor output="myButton4" materialOff={"t_hex_disco_01"} scale={2} x={22.0} y={1.2} z={-212.6} />
      <ButtonSensor output="myButton5" materialOff={"t_hex_disco_01"} scale={2} x={25.5} y={1.2} z={-211.1} />
      <ButtonSensor output="myButton6" materialOff={"t_hex_disco_01"} scale={2} x={27.1} y={1.2} z={-207.5} />
      <ButtonSensor output="myButton7" materialOff={"t_hex_disco_01"} scale={2} x={22.0} y={1.2} z={-202.6} />
      <ButtonSensor output="myButton8" materialOff={"t_hex_disco_01"} scale={2} x={26.0} y={1.2} z={-203.3} />

    </>
    <>
         
    </>
    <>
      <MediaDisplay scale={1} x={18.7} y={1.26} z={-203.9} rotX={0} rotY={120} rotZ={0}{...Indian2} />
      <MediaDisplay scale={1.3} x={16.9} y={1.26} z={-207.5} rotX={0} rotY={100} rotZ={0}{...KGF} />
      <MediaDisplay scale={1.2} x={18.5} y={1.26} z={-211.1} rotX={0} rotY={60} rotZ={0}{...Vikram} />
      <MediaDisplay scale={1.2} x={22.0} y={1.26} z={-212.6} rotX={0} rotY={30} rotZ={0}{...FordVsFerrari} />
      <MediaDisplay scale={1} x={25.5} y={1.26} z={-211.1} rotX={0} rotY={-40} rotZ={0}{...SpongeBob} />
      <MediaDisplay scale={1} x={27.1} y={1.26} z={-207.5} rotX={0} rotY={-68} rotZ={0}{...EndGame} />
      <MediaDisplay scale={1} x={22.0} y={1.26} z={-202.6} rotX={0} rotY={-30} rotZ={0}{...BreakingBad} />
      <MediaDisplay scale={1} x={26.0} y={1.26} z={-203.3} rotX={0} rotY={-130} rotZ={0}{...Intestellar} />
    </>

    <ButtonSensor output="myButton10" materialOff={"t_hex_disco_01"} scale={2} x={115.0} y={1.2} z={-201.5} />
    <VisibleOnSignal input="myButton10">
    <Animation animation={{ x:[85,110], y:[0,0], z:[-199,-199], duration:15, easing:'LINEAR' }}>
          <Prefab id="searchlight_01"  scale={1}/>      
          <Prefab id="hiberpunk_blocks_o1_01"   scale={0.5}/>      
         </Animation>
    </VisibleOnSignal>

    <VisibleOnSignal input="myButton2">
      <VideoPanel src={'kgf.mp4'} scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.7} muted={false} soundMinDistance={32}></VideoPanel>
    </VisibleOnSignal>
    <VisibleOnSignal input="myButton3">
      <VideoPanel src={'vikram.mp4'} scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.77}  soundMinDistance={32} muted={true}></VideoPanel>
    </VisibleOnSignal>
    <VisibleOnSignal input="myButton4">
      <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}  scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.33}></VideoPanel>
    </VisibleOnSignal>
    <VisibleOnSignal input="myButton5">
      <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.33}></VideoPanel>
    </VisibleOnSignal>
    <VisibleOnSignal input="myButton6">
      <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.33}></VideoPanel>
    </VisibleOnSignal>
    <VisibleOnSignal input="myButton7">
      <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.33}></VideoPanel>
    </VisibleOnSignal>
    <VisibleOnSignal input="myButton8">
      <VideoPanel src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} scale={10} x={0} y={1} z={-225} rotX={0} rotY={0} rotZ={0} ratio={1.33}></VideoPanel>
    </VisibleOnSignal>
    
    
  </>

);

export default CinemaVerse;