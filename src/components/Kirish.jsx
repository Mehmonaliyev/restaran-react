import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
function Kirish() {
    return (
        <>
         <div className='mt-5 pt-5'>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label color">Login</label>
                    <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Login..." />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label color">Parol</label>
                    <input required type="password" className="form-control" id="formGroupExampleInput2" placeholder="Parol..." />
                </div>

                <div className='text-center'>
                    <button className='button-h w-75' ><span></span> Tizimga kirish</button>
                </div>
                <div className="icons w-50 d-flex justify-content-evenly mx-auto my-3">
                    <i className='h3'><AiFillGoogleCircle /></i>
                <i className='h3'><BsFacebook /></i>
                <i className='h3'><AiFillGithub /></i>
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                    <p>Tarmoqda yangimisiz...</p>
                    <NavLink to='/login'>
                    <button className='btn btn-warning bg text-white' >Ro'yhatdan o'tish</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Kirish
