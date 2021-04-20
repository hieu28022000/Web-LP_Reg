import React, { Component } from 'react'

class Vid_Reg extends Component {
    loadVid() {
        const vid = document.getElementById('input_vid').value;
        console.log(vid);
    }

    render() {
        return(
            <div className='card container text-center'>
                <h3>Video recognition</h3>
                <p>Video recognition is license plate recognition in the video.
                    Video will be extract to frames. For each the frame, 
                    the system will detect license, after it will be recognited. 
                    Output of "Image recognition" is a image and string of this license plate.</p>

                <span className='d-inline-flex justify-content-center align-items-center container'>
                    <label>Choose file to upload</label>
                    <input type="file" id="input_vid" accept="video/*" />
                </span> 

                <span><button type='button' className='btn btn-secondary' onClick={ this.loadVid }>Upload video</button></span>
                <br />
            </div>
        ); 
    }
}

export default Vid_Reg;
