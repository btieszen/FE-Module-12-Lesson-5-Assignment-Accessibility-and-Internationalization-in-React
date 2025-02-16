import {Image,Container} from 'react-bootstrap';

const Picture=()=>{
    return(
        <Container>
            <Image src ="path/to/image.jpg" alt='Descriptive alternative text' rounded role = 'img'/>
            <br />
            <video controls aria-label='video player'>
                <source src= "path/to/video.mp4" type="video/mp4"/>
                <track src = "captions_en.vtt" kind="captions" srcLang="en" label ="English"/>
                Your Browser does not support this video tag
                 </video>
                 <br />
                 <audio controls aria-label="Audio player">
                    <source src="path/to/audio.mp3" type= "audio/mpeg"/>
                    Your Browser does not support the audio file
                    <track src = "captions_en.vtt" kind="captions" srcLang="en" label="English"/>
                 </audio>
        </Container>
    );
};
export default Picture;