import React, { useState, useEffect } from 'react';
import BooksList from './books/BooksList';



const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://google-books.p.rapidapi.com/volumes", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "google-books.p.rapidapi.com",
                "x-rapidapi-key": "0b9293b7c9mshce13606d976dadap1ffc37jsn3bd5bec95c01"
            }
        })
            .then(response => {
                let converted = response.json()
                return converted
            })
            .then(data => {
                console.log(data);
                setData(data.items)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className="library-div">
            <h1>- Home Page -</h1>
            <div className="library-items">
                {data && data.map(item => {
                    return (
                        <div className="library-item">
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt="a" />
                            <p>{item.volumeInfo.authors}</p>

                        </div>
                    )
                })}
            </div>
            {/* <BooksList /> */}
        </div>
    );
};

export default Home;