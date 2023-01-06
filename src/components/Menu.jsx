import React, { useEffect, useState } from 'react'
import samsa from '../img/samsa.jpg';

function Menu() {

    const [set, setState] = useState([])
    const [order, setOrder] =useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '834255280dmshdf2cc4da880e0d6p198602jsnf6b74b2fd6cd',
                'X-RapidAPI-Host': 'favoritefoodapi.p.rapidapi.com'
            }
        };

        fetch('https://favoritefoodapi.p.rapidapi.com/food/api/v1/favorites', options)
            .then(response => response.json())
            .then(response => setState(response))
            .catch(err => console.error(err));

    }, []);

    const buyurtma = (id)=> {
        
        let newMass = order.findIndex(orderItem => orderItem._id == id._id)
        console.log(newMass);

        
    }

    console.log(set);
    return (
        <div className='container pt-5 mt-5'>
            <div className="row">



                {
                    set?.length ? set.map((val) => {

                        return (
                            <div className="col-12 col-md-6 my-2 " key={val._id}>
                                <div className="py-3 border-bottom hover-d ">
                                    <div className="row">
                                        <div className="col-3 align-self-center">

                                            {/* <!-- Image --> */}
                                            <div className="ratio ratio-1x1">
                                                <img className="object-fit-cover" src={val.imageUrl ? val.imageUrl : samsa} alt="..." />
                                            </div>

                                        </div>
                                        <div className="col-7 position-relative pb-5">

                                            {/* <!-- Heading --> */}
                                            <h5 className="mb-2">{val.favoriteDish}</h5>

                                            {/* <!-- Text --> */}
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet, 
                                            </p>
                                            <div className="position-absolute buyurtma">
                                            <a  target="_blank" className="btn btn-dark float-end" onClick={buyurtma}>
                                                Buyurtma
                                            </a>
                                            </div>
                                            
                                        </div>
                                        <div className="col-2">

                                            {/* <!-- Price --> */}
                                            <div className="fs-4 font-serif text-center text-black price">
                                                $ {val.price}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        )

                    }) : 'lodaing..'

                }

            </div>
        </div>
    )
}

export default Menu
