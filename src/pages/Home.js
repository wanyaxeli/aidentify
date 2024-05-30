import React,{ useRef, useCallback, useEffect,useState  } from 'react'
import Webcam from "react-webcam";
export default function Home() {
    const [socket, setSocket] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const videoConstraints = {
          aspectRatio: 0.6666666667,
          facingMode: "user",
          width: { min: 480 },
          height: { min: 720 },
          facingMode: 'user', // Use the front-facing camera
         };
    const webcamRef = useRef(null);
    useEffect(()=>{
    const stream=webcamRef.current.video.srcObject;
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

    console.log('stream',mediaRecorder)
    },[])
  return (
    <div className='homeWrapper'>
        <main>
         <Webcam  className='webcam' videoConstraints={videoConstraints} ref={webcamRef}/>
        </main>
        <aside></aside>
    </div>
  )
}
