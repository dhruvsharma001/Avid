import React from 'react';
import './Styles/AISidebar.css'
import { IoMdSend } from "react-icons/io";

export default function AISidebar(){
  return (
    <>
    <div className='AI-Container'>
      <h2 className='AI-Heading-Text'>Chat Bot</h2>
      <div className="AI-Chat">
        <div className="AI-Chat-Pair">
          <div className="User-Chat Chat-Wrap">
            <div className="Chat-Img">
              <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1714036458~exp=1714040058~hmac=4e7db4a106218af1338751e69057b0b67530ffdaea559b184f866f8d9eefc69c&w=740" alt="" />
            </div>
            <p className="Chat-Txt User-Txt">What is Clipify?</p>
          </div>
          <div className="Bot-Chat Chat-Wrap">
            <div className="Chat-Img">
              <img src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-robot_23-2149345310.jpg?t=st=1714042331~exp=1714045931~hmac=00e063512f71fc50c4ac25d42b64b8aae27023fa226feb6c5b2e4cc296ab8558&w=740" alt="" />
            </div>
            <p className="Chat-Txt Bot-Txt">Clipify is Frame by Frame Video Editor.</p>
          </div>
        </div>    
        <div className="AI-Chat-Pair">
          <div className="User-Chat Chat-Wrap">
            <div className="Chat-Img">
              <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1714036458~exp=1714040058~hmac=4e7db4a106218af1338751e69057b0b67530ffdaea559b184f866f8d9eefc69c&w=740" alt="" />
            </div>
            <p className="Chat-Txt User-Txt">What is Clipify?</p>
          </div>
          <div className="Bot-Chat Chat-Wrap">
            <div className="Chat-Img">
              <img src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-robot_23-2149345310.jpg?t=st=1714042331~exp=1714045931~hmac=00e063512f71fc50c4ac25d42b64b8aae27023fa226feb6c5b2e4cc296ab8558&w=740" alt="" />
            </div>
            <p className="Chat-Txt Bot-Txt">Clipify is Frame by Frame Video Editor.</p>
          </div>
        </div>    
      </div>
      <div className="AI-Chat-Input-Container">
      <input type="text" className='AI-Chat-Input' placeholder='Type Your Text Here'/>
      <span className='AI-Send-Btn'><IoMdSend/></span>
      </div>
    </div>
    </>
  )
}