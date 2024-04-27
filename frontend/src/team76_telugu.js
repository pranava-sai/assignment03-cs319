import { useState, useEffect } from "react";

function Frontend_Telugu() {
    const [tMovie, set_tMovie] = useState([]);
    const [tOneMovie, set_tOneMovie] = useState([]);
    const [addNew_tMovie, setAddNew_tMovie] = useState({
        id: "T025",
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
        getAllTeluguMovies();
    }, []);

    function getAllTeluguMovies() {
        fetch("http://127.0.0.1:8081/TeluguMovies")
            .then((response) => response.json())
            .then((data) => {
                console.log("Showing all Telugu Movies: ");
                console.log(data);
                set_tMovie(data);
                setViewer1(true); // Moved inside the promise chain
            })
            .catch((error) => {
                console.error("Error fetching English movies:", error);
            });
    }

    const showAllItems = tMovie.map((el) => (
        <div key={el.id}>
            <img src={el.url} width={100} alt="telugu"/><br />
            Title: {el.title}<br />
            Price: {el.price}<br/>
            Year: {el.year}<br/>
            Cast: {el.cast} <br/>
            Director: {el.director}<br />
            <strong>Plot:</strong> {el.plot}<br />
        </div>
    ));

    const showOneTeluguMovie = tOneMovie.map((el) => (
        <div key={el.id}>
            <img src={el.url} width={100} alt="single movie"/><br />
            Title: {el.title}<br />
            Price: {el.price}<br/>
            Year: {el.year}<br/>
            Cast: {el.cast} <br/>
            Director: {el.director}<br />
            <strong>Plot:</strong> {el.plot}<br />
        </div>
    ));

    function getOneTeluguMovie(id) {
        console.log(id);
        fetch("http://127.0.0.1:8081/TeluguMovies/"+id)
        .then((response) => response.json())
        .then((data) => {
            console.log("Showing the request English Movie: ", id)
            console.log(data);

            set_tOneMovie(data);
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
            <h1>Telugu Movies</h1>
            <div>
                <h3>Show all available Telugu Movies</h3>
                <button onClick={() => getAllTeluguMovies()}>Show All Telugu Movies</button>
                {viewer1 && showAllItems}
            </div>
            <div>
                <h3>Show One Telugu Movie by Id:</h3>
                <input
                type="text" id="message" name="message" placeholder="id" onChange={(e) => getOneTeluguMovie(e.target.value)}/>
                {viewer2 && showOneTeluguMovie}
            </div>
        </div>
    );
}


export default Frontend_Telugu;