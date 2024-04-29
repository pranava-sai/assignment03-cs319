// Import required components and styles
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container, Form, InputGroup, FormControl, Modal } from 'react-bootstrap';

// Define the Frontend_English component
function Frontend_English() {
    const [eMovie, set_eMovie] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");

    // Fetch movies data from API when component mounts
    useEffect(() => {
        getAllEnglishMovies();
    }, []);

    // Function to fetch English movies data from the API
    function getAllEnglishMovies() {
        fetch("http://127.0.0.1:8081/EnglishMovies")
        .then((response) => response.json())
        .then((data) => {
            set_eMovie(data);
        })
        .catch((error) => {
            console.error("Error fetching English movies:", error);
        });
    }

    // Function to extract video ID from YouTube URL
    const extractVideoId = (url) => {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[\W\&]v=|.*[\W\&]embed\/|.*[\W\&]v\/))([\w\-]{11})/);
        return videoIdMatch ? videoIdMatch[1] : "";
    };

    // Function to handle watching trailer
    const handleWatchTrailer = (url) => {
        const videoId = extractVideoId(url);
        const trailerUrl = `https://www.youtube.com/embed/${videoId}`;
        setTrailerUrl(trailerUrl);
        setShowTrailer(true);
    };

    // Function to close the trailer modal
    const handleCloseTrailer = () => {
        setShowTrailer(false);
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter movies based on search term
    const filteredMovies = searchTerm
        ? eMovie.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : eMovie;

    return (
        <div>
            <Container>
                <h1>English Movies</h1>
                <Row>
                    <Col md={6} lg={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="text"
                                placeholder="Search by title..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4 d-flex flex-row align-items-stretch">
                    {filteredMovies.map((movie) => (
                        <Col key={movie.id}>
                            <Card>
                                <Card.Img variant="top" src={movie.image} style={{height: "350px"}} alt={movie.title} />
                                <Card.Body>
                                    <Card.Title style={{fontSize: "18px"}}>{movie.title}</Card.Title>
                                    <Card.Text style={{color: "#000000"}}><strong>Price: </strong>${movie.price}</Card.Text>
                                    <Card.Text style={{color: "#000000"}}><strong>Year: </strong>{movie.year}</Card.Text>
                                    <Card.Text style={{color: "#000000"}}><strong>Cast: </strong>{movie.cast}</Card.Text>
                                    <Card.Text style={{color: "#000000"}}><strong>Director: </strong>{movie.director}</Card.Text>
                                    <Card.Text style={{color: "#000000"}}><strong>Plot: </strong>{movie.plot}</Card.Text>
                                    <Button onClick={() => handleWatchTrailer(movie.trailer)}>Watch Trailer</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Modal show={showTrailer} onHide={handleCloseTrailer} dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                        <Modal.Title>Trailer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe width="100%" height="315" src={trailerUrl} title="Trailer" frameBorder="0" allowFullScreen></iframe>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}

export default Frontend_English;
