import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>

            <div className='mt-5 pt-5 container w-50' >
                <div className="row g-3 mt-5">
                    <div className="col-md-6">
                        <label className="form-label color">Ism</label>
                        <input required type="text" className="form-control" id="inputEmail4" placeholder='ism' />
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label color">Familya</label>
                        <input required type="text" className="form-control" id="inputPassword4" placeholder='familya' />
                    </div>
                    <div className="col-12">
                        <label  className="form-label color">Email</label>
                        <input required type="email" className="form-control" id="inputAddress" placeholder="Exsample@gmail.com" />
                    </div>
                    <label className='color'>Tug'ilgan kuningiz</label>
                    <div className="row mb-3 ">
                        <div className="col-md-4 my-1">
                            <select className="form-select" aria-label="Default select example" required>
                                <option value="">kun</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                                <option value="3">6</option>
                                <option value="3">7</option>
                                <option value="3">8</option>
                                <option value="3">9</option>
                                <option value="3">10</option>
                                <option value="3">11</option>
                                <option value="3">12</option>
                                <option value="3">13</option>
                                <option value="3">14</option>
                                <option value="3">15</option>
                                <option value="3">16</option>
                                <option value="3">17</option>
                                <option value="3">18</option>
                                <option value="3">19</option>
                                <option value="2">20</option>
                                <option value="2">21</option>
                                <option value="2">22</option>
                                <option value="2">23</option>
                                <option value="2">24</option>
                                <option value="2">25</option>
                                <option value="2">26</option>
                                <option value="2">27</option>
                                <option value="2">28</option>
                                <option value="2">29</option>
                                <option value="2">30</option>
                                <option value="2">31</option>
                            </select>
                        </div>
                        <div className="col-md-4 my-1">
                            <select className="form-select" aria-label="Default select example" required>
                                <option value="">Oy</option>
                                <option value="Yanvar">Yanvar</option>
                                <option value="Fevral">Fevral</option>
                                <option value="Mart">Mart</option>
                                <option value="Aprel">Aprel</option>
                                <option value="May">May</option>
                                <option value="Iyun">Iyun</option>
                                <option value="Iyul">Iyul</option>
                                <option value="Avgust">Avgust</option>
                                <option value="Sentyabr">Sentyabr</option>
                                <option value="Oktiyabr">Oktiyabr</option>
                                <option value="Noyabr">Noyabr</option>
                                <option value="Dekabr">Dekabr</option>
                            </select>
                        </div>
                        <div className="col-md-4 my-1">
                            <select className="form-select" aria-label="Default select example" required>
                                <option value="">Yil</option>
                                <option value="1">2022</option>
                                <option value="2">2021</option>
                                <option value="2">2020</option>
                                <option value="2">2019</option>
                                <option value="2">2018</option>
                                <option value="2">2017</option>
                                <option value="2">2016</option>
                                <option value="2">2015</option>
                                <option value="2">2014</option>
                                <option value="2">2013</option>
                                <option value="2">2012</option>
                                <option value="2">2011</option>
                                <option value="2">2010</option>
                                <option value="2">2009</option>
                                <option value="3">...</option>
                            </select>
                        </div>
                    </div>

                </div>


                <label className='color'>Jinsingiz</label>
                <div className='d-flex'>
                    <div className="form-check mx-2">
                        <input required className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label " for="flexRadioDefault1">
                            Erkak
                        </label>
                    </div>
                    <div className="form-check mx-2">
                        <input required className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label " for="flexRadioDefault2">
                            Ayol
                        </label>
                    </div>
                </div>

                <div className='text-center'>
                    <button className='button-h w-75'     ><span></span> Ro'yhatdan o'tish</button>
                </div>

                <div className='d-flex justify-content-between align-items-center my-3'>
                    <p>Akkauntingiz bormi...</p>
                   <NavLink className='as' to='/kirish'> <button className='btn btn-warning bg text-white' >Kirish</button></NavLink>
                </div>
            </div>


        </>
    )
}

export default Login
