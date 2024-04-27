import { useState, useEffect } from "react";

function Frontend_English() {
    const [eMovie, set_eMovie] = useState([]);
    const [eOneMovie, set_eOneMovie] = useState([]);
    const [addNew_eMovie, setAddNew_eMovie] = useState({
        id: "E25",
        title: "",
        price: 0.0,
        plot: "",
        year: "",
        image: "",
        cast: "",
        director: "",
    });

    const [viewer1, setViewer1] = useState(false);
    const [viewer2, setViewer2] = useState(false);

    useEffect(() => {
        getAllEnglishMovies();
    }, []);

    function getAllEnglishMovies() {
        fetch("http://127.0.0.1:4000/english-movies")
            .then((response) => response.json())
            .then((data) => {
                console.log("Showing all English Movies: ");
                console.log(data);
                set_eMovie(data);
                setViewer1(true); // Moved inside the promise chain
            })
            .catch((error) => {
                console.error("Error fetching English movies:", error);
            });
    }

    const showAllItems = eMovie.map((el) => (
        <div key={el.id}>
            <img src={el.image} width={30} alt="english"/><br />
            Title: {el.title}<br />
            Price: {el.price}<br/>
            Year: {el.year}<br/>
            Cast: {el.cast} <br/>
            Director: {el.director}<br />
            <strong>Plot:</strong> {el.plot}<br />
        </div>
    ));

    const showOneEnglishMovie = eOneMovie.map((el) => (
        <div key={el.id}>
            <img src={el.image} width={30} alt="single movie"/><br />
            Title: {el.title}<br />
            Price: {el.price}<br/>
            Year: {el.year}<br/>
            Cast: {el.cast} <br/>
            Director: {el.director}<br />
            <strong>Plot:</strong> {el.plot}<br />
        </div>
    ));

    function getOneEnglishMovie(id) {
        console.log(id);
        fetch("http://127.0.0.1:4000/english-movies/"+id)
        .then((response) => response.json())
        .then((data) => {
            console.log("Showing the request English Movie: ", id)
            console.log(data);

            set_eOneMovie(data);
            if (!viewer2) {
                setViewer2(true);
            }
        })
        .catch((error) => {
            console.error("Error fetching English movie:", error);
        });
    }

    return (
        <div>
            <h1>English Movies</h1>
            <div>
                <h3>Show all available English Movies</h3>
                <button onClick={() => getAllEnglishMovies()}>Show All English Movies</button>
                {viewer1 && showAllItems}
            </div>
            <div>
                <h3>Show One Product by Id:</h3>
                <input
                type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneEnglishMovie(e.target.value)}/>
                {viewer2 && showOneEnglishMovie}
            </div>
        </div>
    );
}


export default Frontend_English;
