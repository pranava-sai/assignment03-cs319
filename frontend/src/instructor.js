import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import aaldaco from './images/aaldaco.jpg'

function Instructor() {
    const [student, setStudent] = useState([]);

    const [viewer1, setViewer1] = useState(false);

    useEffect(() => {
        getAllStudents();
    }, []);

    function getAllStudents() {
        fetch("http://127.0.0.1:8081/instructor")
            .then((response) => response.json())
            .then((data) => {
                console.log("Showing all Students ");
                console.log(data);
                setStudent(data);
                setViewer1(true); // Moved inside the promise chain
            })
            .catch((error) => {
                console.error("Error fetching Students:", error);
            });
    }

    return (
        
        <div>
           <Container>
            <h1 style={{color:"#FF0000"}}>Instructor</h1>
                <Row xs={1} md={2} lg={3} className="g-4 d-flex flex-row align-items-stretch">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={aaldaco}style={{height:"350px"}} alt={"Pranava"} />
                        <Card.Body>
                            <Card.Title style={{fontSize:"25px"}}><strong>Abraham Aldaco</strong></Card.Title>
                            <Card.Text style={{color:"#000000"}}><strong>Net-ID: </strong>aaldaco</Card.Text>
                            <Card.Text style={{color:"#000000"}}><strong>Email: </strong>aaldaco@iastate.edu</Card.Text>
                            <Card.Text style={{color:"#000000"}}>Prof. Aldaco, since 1997, has had a versatile career in academia and industry, teaching a wide array of engineering and computer science courses. Noteworthy collaborations include projects with Intel, General Electric, and IBM, and research on breast cancer detection. He's dedicated to mentoring and shaping academic and professional paths.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Instructor;
