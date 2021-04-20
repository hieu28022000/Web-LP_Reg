import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return(
            <div className='container-fluid bg-dark p-5 my-5 text-white'>
                <div className='container'>
                    <h2>CONTACT</h2>
                    <div className='row'>
                        <div className='col-sm'>NGUYỄN QUANG HIẾU</div>
                        <div className='col-sm'>18520748@uit.edu.vn</div>
                        <div className='col-sm'>0357572515</div>
                    </div>
                    <div className='row'>
                        <div className='col-sm'>NGUYỄN HỮU KHANG</div>
                        <div className='col-sm'>18520892@uit.edu.vn</div>
                        <div className='col-sm'>0945466497</div>
                    </div>
                    <div className='row'>
                        <div className='col-sm'>HỒ ĐẶNG THANH HỒ</div>
                        <div className='col-sm'>18520760@uit.edu.vn</div>
                        <div className='col-sm'>0364071558</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;