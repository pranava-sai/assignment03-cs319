import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import pranav from './images/Pranav.JPG';
import syam from './images/Syam.jpg';

function Students() {
    const [student, setStudent] = useState([]);

    const [viewer1, setViewer1] = useState(false);

    useEffect(() => {
        getAllStudents();
    }, []);

    function getAllStudents() {
        fetch("http://127.0.0.1:8081/students")
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
            <h1 style={{color:"#FF0000"}}>Students</h1>
                <Row xs={1} md={2} lg={3} className="g-4 d-flex flex-row align-items-stretch">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={pranav}style={{height:"350px"}} alt={"Pranava"} />
                        <Card.Body>
                            <Card.Title style={{fontSize:"25px"}}><strong>Pranava Sai Maganti</strong></Card.Title>
                            <Card.Text style={{color:"#000000"}}><strong>Net-ID: </strong>pranava7</Card.Text>
                            <Card.Text style={{color:"#000000"}}><strong>Email: </strong>pranava7@iastate.edu</Card.Text>
                            <Card.Text style={{color:"#000000"}}><strong>Entry Year: </strong>Fall 2022</Card.Text>
                            <Card.Text style={{color:"#000000"}}>Hello, I am Pranav, a sophomore majoring in Computer Science. My coursework has equipped me with a solid foundation in key areas such as Data Structures, Object-Oriented Programming, Python Programming, and Discrete Computational Structures. Currently, I am further enhancing my skills and knowledge through engaging courses like Construction of User Interfaces, Software Development Practices, and Computer Architecture.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={syam}style={{height:"350px"}} alt={"Meghasyam"} />
                        <Card.Body>
                            <Card.Title style={{fontSize:"25px"}}><strong>Meghasyam Peddireddy</strong></Card.Title>
                            <Card.Text style={{color:"#000000"}}><strong>Net-ID: </strong>syam</Card.Text>
                            <Card.Text style={{color:"#000000"}}><strong>Email: </strong>syam@iastate.edu</Card.Text>
                            <Card.Text style={{color:"#000000"}}><strong>Entry Year: </strong>Fall 2022</Card.Text>
                            <Card.Text style={{color:"#000000"}}>Greetings, I'm Meghasyam, a second-year student pursuing a degree in Computer Science. My academic journey has provided me with a strong grasp of fundamental concepts in Data Structures, Object-Oriented Programming, Python Programming, and Discrete Computational Structures. I am currently expanding my expertise by delving into courses such as Construction of User Interfaces, Software Development Practices, and Computer Architecture.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Students;
