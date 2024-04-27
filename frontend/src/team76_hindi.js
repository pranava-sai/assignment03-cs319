import { useState, useEffect } from "react";

function Frontend_Hindi() {
    const [hMovie, set_hMovie] = useState([]);
    const [hOneMovie, set_hOneMovie] = useState([]);
    const [addNew_hMovie, setAddNew_hMovie] = useState({
        id: "H025",
        title: "",
        price: 0.0,
        plot: "",
        year: "",
        url: "",
        cast: "",
        director: "",
    });

    const [viewer1, setViewer1] = useState(false);
    const [viewer2, setViewer2] = useState(false);

    useEffect(() => {
        getAllHindiMovies();
    }, []);

    function getAllHindiMovies() {
        fetch("http://127.0.0.1:4000/hindi-movies")
            .then((response) => response.json())
            .then((data) => {
                console.log("Showing all Hindi Movies: ");
                console.log(data);
                set_hMovie(data);
                setViewer1(true); // Moved inside the promise chain
            })
            .catch((error) => {
                console.error("Error fetching Hindi movies:", error);
            });
    }

    const showAllItems = hMovie.map((el) => (
        <div key={el.id}>
            <img src={el.url} width={200} alt="hindi"/><br />
            Title: {el.title}<br />
            Price: {el.price}<br/>
            Year: {el.year}<br/>
            Cast: {el.cast} <br/>
            Director: {el.director}<br />
            <strong>Plot:</strong> {el.plot}<br />
        </div>
    ));

    const showOneHindiMovie = hMovie.map((el) => (
        <div key={el.id}>
            <img src={el.url} width={120} alt="single movie"/><br />
            Title: {el.title}<br />
            Price: {el.price}<br/>
            Year: {el.year}<br/>
            Cast: {el.cast} <br/>
            Director: {el.director}<br />
            <strong>Plot:</strong> {el.plot}<br />
        </div>
    ))

    function getOneHindiMovie(id) {
        console.log(id);
        fetch("http://127.0.0.1:4000/hindi-movies/"+id)
        .then((response) => response.json())
        .then((data) => {
            console.log("Showing the request Hindi Movie: ", id)
            console.log(data);

            set_hOneMovie(data);
            if (!viewer2) {
                setViewer2(true);
            }
        })
        .catch((error) => {
            console.error("Error fetching Hindi movie:", error);
        });
    }

    return (
        <div>
            <h1>Hindi Movies</h1>
            <div>
                <h3>Show all available Hindi Movies</h3>
                <button onClick={() => getAllHindiMovies()}>Show All Hindi Movies</button>
                {viewer1 && showAllItems}
            </div>
            <div>
                <h3>Show One Hindi Movie by Id:</h3>
                <input
                type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneHindiMovie(e.target.value)}/>
                {viewer2 && showOneHindiMovie}
            </div>
        </div>
    );
}

export default Frontend_Hindi;
