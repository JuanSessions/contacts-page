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
        <div>
            <h1>Home Page</h1>
            {data && data.map(item => {
                return (
                    <div><img src={item.volumeInfo.imageLinks.thumbnail} alt="a" /> </div>
                )
            })}
            <BooksList />
        </div>
    );
};

export default Home;