import { Avatar } from "@hiber3d/hdk-react-components";
import { Animation, Prefab } from "@hiber3d/hdk-react";

const CustomAvatar = () => (
    <>
        <Animation animation={{ x:[110,110,110,170,170,170,170,110], y:[0,0,0,0,0,0,0,0], z:[-170,170,170,170,170,-170,-170,-170], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[112,112,112,172,172,172,172,112], y:[0,0,0,0,0,0,0,0], z:[-172,168,168,168,168,-172,-172,-172], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[172,172,172,112,112,112,112,172], y:[0,0,0,0,0,0,0,0], z:[168,-172,-172,-172,-172,168,168,168], rotY:[180,180,270,270,0,0,90,90], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        
        <Animation animation={{ x:[-106,-106,-106,-106,-170,-170,-170,-106], y:[0,0,0,0,0,0,0,0], z:[-170,170,170,170,170,-170,-170,-170], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[-107,-107,-107,-107,-168,-168,-168,-107], y:[0,0,0,0,0,0,0,0], z:[-172,168,168,168,168,-172,-172,-172], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        
        <Animation animation={{ x:[-170,170,170,170,170,-170,-170,-170], y:[0,0,0,0,0,0,0,0], z:[-105,-105,-105,-105,-40,-40,-40,-105], rotY:[90,90,180,180,270,270,0,0], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        
        <Avatar animation={'an_default_emote_breakdance_ready_01'} scale={1} x={57} y={0} z={-170} rotY={225} />
        <Avatar animation={'an_default_emote_breakdance_ready_01'} scale={1} x={56} y={0} z={-170} rotY={135} />
        <Prefab id='radio_01' x={57} y={0} z={-168} rotY={200}/>
        
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={28} y={0} z={-114} rotY={285} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={26} y={0} z={-114} rotY={45} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={27} y={0} z={-112} rotY={150} />

        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={53} y={0} z={-169} rotY={45} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={53} y={0} z={-167} rotY={135} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={54} y={0} z={-169} rotY={315} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={54} y={0} z={-167} rotY={225} />

        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={53} y={0.8} z={-143} rotY={60} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={55} y={0.8} z={-143} rotY={240} />

        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={47} y={0} z={-124} rotY={330} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={47} y={0} z={-122} rotY={150} />
        <Avatar animation={'an_default_emote_sitting_talking_01'} scale={1} x={48.8} y={0.6} z={-123} rotY={285} />

        {/* sofas */}

        <Avatar animation={'an_default_emote_sit'} scale={1} x={1.5} y={1.8} z={-252.3} />
        <Avatar animation={'an_default_emote_cheering_while_sitting_01'} scale={1} x={0} y={1.3} z={-252.2} />
        <Avatar animation={'an_default_emote_sitting_idle_02'} scale={1} x={-1.5} y={1.4} z={-252.2} />

        <Avatar animation={'an_default_emote_sitting_yell_01'} scale={1} x={13.5} y={1.4} z={-247.2} rotY={315} />
        <Avatar animation={'an_default_emote_cheering_while_sitting_01'} scale={1} x={14.5} y={1.4} z={-246.3} rotY={315} />

        <Avatar animation={'an_default_emote_sitting_idle_02'} scale={1} x={-17.5} y={1.4} z={-200.7} rotY={140} />
        <Avatar animation={'an_default_emote_sitting_idle_01'} scale={1} x={-16} y={1.1} z={-200} rotY={140} />

        <Avatar animation={'an_default_emote_sit'} scale={1} x={16.3} y={1.8} z={-200} rotY={225} />
        <Avatar animation={'an_default_emote_sitting_laughing_01'} scale={1} x={18} y={1.8} z={-200} rotY={225} />
        <Avatar animation={'an_default_emote_cheering_while_sitting_01'} scale={1} x={18.5} y={1.4} z={-201.5} rotY={225} />

        {/* sofas */}

        {/* food */}

        <Avatar animation={'an_default_emote_facepalm'} scale={1} x={82} y={0} z={-270.5} rotY={165} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={67} y={0} z={-270.5} rotY={120} />
        <Avatar scale={1} x={68} y={0} z={-270.5} rotY={240} />

        <Animation animation={{ x:[99,-100,-103], y:[0,0], z:[-270,-257,-260], rotY:[260,260,200], duration:1800, steps:[0,0.96,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[99,-100,-103], y:[0,0], z:[-268,-256,-260], rotY:[260,260,200], duration:160, steps:[0,0.96,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>

        {/* food */}
    </>
);

export default CustomAvatar;


