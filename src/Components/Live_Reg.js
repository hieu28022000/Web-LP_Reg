import React, { Component } from 'react'

class Live_Reg extends Component {
    //Use Capture of <input> tag
    start() {
        alert('Live recognition is building.')
    }

    render() {
        return(
            <div className='card container text-center'>
                <h3>Live Recognition</h3>
                <p>Describe of live recognition</p>
                <span><button type='button' className='btn btn-secondary' onClick={ this.start }>Start</button></span>
                <br />
            </div>
        );
    }
}

export default Live_Reg;