import React, {useState, useEffect} from 'react';
import './App.css';
const url = 'data.json'
const Tour = () =>{
    const [tours,setTours] = useState([])
    const getTours = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setTours(data)
        console.log(tours)
    }
    useEffect( () => {
        getTours()
    },[])
    return(
    <div className = "tours-box">{
        tours.map((tour) => {
            const{id, img, title, paragraph, price } = tour
            return(       
                <article key={id} className="box">
                    <img className='picture' src={img}/>
                    <div>
                        <header>
                            <h5>{title}</h5>
                            <h6>{price}</h6>
                        </header>
                    </div>
                    <p>{paragraph}</p>
                </article>
            )
        })

    }
    </div>
    )
    }

export default Tour