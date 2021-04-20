import React, { Component } from 'react'

class Img_Reg extends Component {
    loadImg() {
        const img_obj = document.getElementById('input_img').files[0];
        console.log(img_obj)

        const img = document.createElement("img");
        img.src = URL.createObjectURL(img_obj);
        img.height = 300;
        img.onload = function() {
          URL.revokeObjectURL(img.src);
        }
        console.log(img)

        document.getElementById('output').innerHTML = img
    }

    render() {
        return(
            <div className='card container text-center'>
                <h3>Image recognition</h3>
                <p>Image recognition is license plate recognition in the image. 
                    The system will detect license, after it will be recognited. 
                    Output of "Image recognition" is a image and string of this license plate.</p>
                <p id='output' />

                <form>
                    <div className='d-inline-flex justify-content-center align-items-center container'>
                        <label>Choose file to upload</label>
                        <input type="file" id="input_img" accept="image/*" onChange={ this.loadImg } />
                    </div>
                    <div>
                    {/* <button type='button' className='btn btn-secondary' onClick={ this.loadImg }>Upload image</button> */}
                    </div>
                </form>
                <br />
            </div>
        );
    }
}

export default Img_Reg;

