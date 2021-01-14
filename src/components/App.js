// create your App component here
import React, {useState, useEffect} from 'react'


function App() {
    const [dogImg, setDogImg] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(dogImg => {
            setDogImg(dogImg)
            setIsLoaded(true)
        })
    },[])

    console.log(dogImg.message)
    console.log(isLoaded)

    if (!isLoaded) return <p>Loading...</p>

    return ( 
        <div>

            <img src={dogImg.message} alt="A Random Dog"></img>
        </div>

    )

}


export default App