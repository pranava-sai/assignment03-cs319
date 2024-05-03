import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './homepage.css';
import FrontendEnglish from './team76_english.js';
import FrontendTelugu from './team76_telugu.js';
import FrontendHindi from './team76_hindi.js';
import Students from './students.js';
import Instructor from './instructor.js';
import Admin from './admin.js';
import ProtectedRoute from './ProtectedRoute';

import { Routes, Route } from 'react-router-dom';

import bannerImage from './Banner2.webp';
import backgroundImage from './Homepage_BG3.webp';

import { CardContainer, CardBody, CardItem } from './components/ui/threedcard.tsx';

const HomePage = () => {
  const location = useLocation();
  const userName = location.state?.userName;

  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}></div>
      <div className="page-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">The Cinematic Almanac</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/english">English</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/telugu">Telugu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hindi">Hindi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students">Students</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/instructors">Instructor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h2 className="text-white">Welcome, {userName}!</h2>
      </div>

      <main>
        <div className="container text-center my-4">
          <div className="row">
            <div className="col-lg-12">
              <p className="history-text">
                The History of Cinema began in the late 19th century, with the
                invention of the first motion picture cameras and the
                establishment of the first film production companies. The
                Lumière brothers' 1895 screening of "Workers Leaving the Lumière
                Factory" in Lyon, France, is often considered the birth of
                cinema as a commercial medium. Early films were silent and black
                and white, but by the 1920s, technological advancements led to
                the introduction of sound and color. The mid-20th century saw
                the rise of Hollywood, establishing the United States as a
                dominant force in global cinema. Over the decades, cinema has
                evolved into a complex and diverse art form, reflecting
                cultural, social, and technological changes worldwide.
              </p>
            </div>
            <div
              className="image-placeholder"
              style={{
                backgroundImage:
                  "url('https://images.fineartamerica.com/images-medium-large-5/low-angle-view-of-a-hollywood-sign-panoramic-images.jpg')",
                height: "200px",
              }}
            ></div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="film-tile">
                <div className="film-tile-content">
                  <h2 className="film-title">Silent Age</h2>
                  <p
                    className="film-description"
                    style={{ marginLeft: "2%", marginRight: "4%" }}
                  >
                    The silent era of Hollywood, spanning from the late 1890s to
                    the late 1920s, marks a foundational chapter in the annals
                    of cinematic history. This period witnessed the birth of the
                    motion picture industry, a time when filmmakers, devoid of
                    spoken dialogue, relied on exaggerated expressions, mime,
                    and title cards to convey narrative and emotion. It was an
                    era of innovation and creativity, where pioneers like
                    Charlie Chaplin, Buster Keaton, and Mary Pickford became
                    household names, enchanting audiences with their timeless
                    performances.
                  </p>
                  </div>
                <CardContainer className="film-tile-image">
                  <CardBody>
                    <CardItem
                      translateZ="20"
                      rotateX={10}
                      rotateY={-10}
                    >
                      <img
                        src="https://media.artsper.com/artwork/1582596_1_m.jpg"
                        alt="Silent Age"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            <div className="col-12">
              <div className="film-tile">
                <div className="film-tile-content">
                  <h2 className="film-title">Golden Age</h2>
                  <p
                    className="film-description"
                    style={{ marginLeft: "2%", marginRight: "4%" }}
                  >
                    The Golden Age of Hollywood, spanning from the late 1920s to
                    the early 1960s, represents a pinnacle of cinematic
                    achievement, characterized by the studio system's dominance
                    and the emergence of iconic stars. This era was marked by
                    technological advancements, such as the transition from
                    silent films to "talkies," and the development of color
                    film. Studios like MGM, Warner Bros., and Paramount wielded
                    immense power, controlling every aspect of film production,
                    distribution, and exhibition. The period gave birth to
                    timeless classics, including "Casablanca," "Gone with the
                    Wind," and "The Wizard of Oz," which continue to captivate
                    audiences.
                  </p>
                  </div>
                <CardContainer className="film-tile-image">
                  <CardBody>
                    <CardItem
                      translateZ="20"
                      rotateX={10}
                      rotateY={-10}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/27/Poster_-_Gone_With_the_Wind_01.jpg"
                        alt="Golden Age"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            <div className="col-12">
              <div className="film-tile">
                <div className="film-tile-content">
                  <h2 className="film-title">Modern Age</h2>
                  <p
                    className="film-description"
                    style={{ marginLeft: "2%", marginRight: "4%" }}
                  >
                    The Modern Age of Hollywood, emerging around the late 1960s
                    and early 1970s, marked a significant shift from the Golden
                    Age's studio-driven productions to a period rich with
                    innovation, risk-taking, and a greater emphasis on artistic
                    expression and auteur-driven films. This era was
                    characterized by the breakdown of the studio system and the
                    rise of independent filmmakers who challenged traditional
                    narratives and censorship constraints. Directors like Steven
                    Spielberg, Martin Scorsese, and Francis Ford Coppola became
                    household names, pioneering techniques and storytelling
                    methods that expanded the language of cinema. The Modern Age
                    saw the birth of blockbuster culture, significantly shaping
                    the industry's economic landscape and how movies are
                    marketed worldwide.
                  </p>
                  </div>
                <CardContainer className="film-tile-image">
                  <CardBody>
                    <CardItem
                      translateZ="20"
                      rotateX={10}
                      rotateY={-10}
                    >
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                        alt="Modern Age"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Routes>
        <Route path = "/" element = {<main> <div className="container text-center my-4" ></div></main>}/>

      <Route path="/english" element={<FrontendEnglish />} />
      <Route path="/telugu" element={<FrontendTelugu />} />
      <Route path="/hindi" element={<FrontendHindi />} />
      <Route path="/students" element={<Students />} />
      <Route path="/instructors" element={<Instructor />} />
      <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
      </Routes>

      <footer>
        <p style={{ marginLeft: "1.3%" }}>
          &copy; Meghasyam Peddireddy | &copy; Pranava Sai Maganti
        </p>
        <p style={{ marginLeft: "1.4%" }}>
          Webpage Template Powered By: &copy; Bootstrap
        </p>
      </footer>
    </div>
  );
};

export default HomePage;