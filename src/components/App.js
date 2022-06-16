// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogImg, setDogImg] = useState(null)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((r) => r.json()).then((data) => {
                setDogImg(data.message)
            })
    }, []);
    if (!dogImg) return <p>Loading ...</p>;
    return (
        <div>
            {dogImg ? <img src={dogImg} alt='A Random Dog' /> : <p>Loading ...</p>}
        </div>
    )
}

export default App;