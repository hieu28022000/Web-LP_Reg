import React, { Component } from 'react'

class Intro extends Component {
    func() {
        alert('Nút ở dướI kìa, mù à');
    }


    render() {
        return(
            <div className='container-fluid p-3 my-3 bg-dark text-white'>
                <div className='text-center'>
                    <h4>COMPUTER SCIENCE</h4>
                    <h1>LICENSE PLATE RECOGNITION</h1>
                    <br/>
                    <button type='button' className='btn btn-light' onClick={ this.func }><h4>Get Start</h4></button>
                    <br />
                </div>
            </div>
        );
    }
}

export default Intro;