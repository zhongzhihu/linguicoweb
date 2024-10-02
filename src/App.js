import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import appStoreButton from "./download-app-store-black.svg";
import googlePlayButton from "./download-play-store.png";
import swissMade from "./SwissMadeDark.png";
import flashcard from "./flashcard-anki-german.gif";
import Screenshots from "./components/Screenshots";
import derdiedas from "./der-die-das.gif";
import germanprepositions from "./german-prepositions.gif";
import verbConjugations from "./german-verb-conjugations.png";
import derdiedashints from "./der-die-das-hints.png";
import CustomerReviews from "./CustomerReviews";
import Contact from "./components/Contact";
import "./App.css";
import "./CustomerReviews.css";

function App() {
  const [currentImage, setCurrentImage] = useState(verbConjugations);
  // Add Google Analytics tracking script
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-WYDEJ330HW";
  script.async = true;
  document.body.appendChild(script);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === verbConjugations ? derdiedashints : verbConjugations
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const Home = () => (
    <>
      <header className="App-header">
        <div className="App-content">
          <h1>Learn German for free with Linguico</h1>
          <p className="App-small-text App-margin-small">
            Linguico is designed to address shortcomings in other language apps
            like Duolingo, Babbel, etc. <br />
            Download Linguico on the App Store and Google Play to improve your
            German today!
          </p>
          <div className="app-links">
            <a
              className="App-link"
              href="https://apps.apple.com/us/app/id6578450704"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appStoreButton}
                alt="Download on the App Store"
                className="App-button"
              />
            </a>
            <a
              className="App-link"
              href="https://play.google.com/store/apps/details?id=com.linguistic.Linguistic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlayButton}
                alt="Get it on Google Play"
                className="App-button App-button-play"
              />
            </a>
            <div className="App-link">
              <img
                src={swissMade}
                alt="Swiss Made"
                className="Swiss-made-button"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="Apple-style-section">
        <h2>Discover Linguico's Top Features</h2>
        <div className="feature-container">
          <div className="feature-column">
            <div className="feature-box">
              <img src={flashcard} alt="Feature 1" className="feature-image" />
              <div className="feature-text">
                <h3>Learn German with Smart Flashcards</h3>
                <ul>
                  <li>
                    <strong>High-Quality Built-in Flashcards</strong>: Learn
                    more efficiently than with public Anki decks
                  </li>
                  <li>
                    <strong>Rich Content</strong>: Grammar info, irregular
                    forms, example sentences, and audio included
                  </li>
                  <li>
                    <strong>Flashcards for 15000 German words</strong>: Ranked
                    by word frequency, focusing on the most useful words first
                  </li>
                  <li>
                    <strong>Official Wordlists</strong>: Choose from Goethe A1,
                    A2, or B1 levels
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-box">
              <img
                src={germanprepositions}
                alt="Feature 3"
                className="feature-image"
              />
              <div className="feature-text">
                <h3>Practice prepositions and grammar</h3>
                <ul>
                  <li>
                    <strong>In-depth grammar exercises</strong>: Practice
                    prepositions, cases, conjugations and more with over 500
                    exercises.
                  </li>
                  <li>
                    <strong>With comprehensive explanations</strong>: Learn
                    which prepositions are correct, when to use Dativ versus
                    Akkusativ, and how to apply grammar rules.
                  </li>
                  <li>
                    <strong>
                      The only app that provides an in-depth focus on grammar
                    </strong>
                    : Learn German the way it's taught in school.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-column">
            <div className="feature-box">
              <img src={derdiedas} alt="Feature 2" className="feature-image" />
              <div className="feature-text">
                <h3>Practice der, die, das</h3>
                <ul>
                  <li>
                    <strong>Engage with fun Exercises:</strong> Guess the
                    correct article der, die, das for German nouns
                  </li>
                  <li>
                    <strong>Reinforce Pattern Recognition:</strong> Learn to
                    identify articles through hints provided instantly after
                    selecting the article
                  </li>
                  <li>
                    <strong>Progress at your own pace:</strong> Practice with a
                    wide range of nouns, from frequent to less frequent words
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-box">
              <img
                src={currentImage}
                alt="Alternating Feature"
                className="feature-image"
              />
              <div className="feature-text">
                <h3>Grammar Summary Overviews</h3>
                <ul>
                  <li>
                    <strong>Verb Conjugations:</strong> Review regular and
                    irregular verb endings.
                  </li>
                  <li>
                    <strong>Cases:</strong> Nominativ, Genitiv, Dativ, and
                    Akkusativ tables at your fingertips.
                  </li>
                  <li>
                    <strong>Tips & Tricks:</strong> Learn the endings that
                    indicate der, die, and das with a handy summary.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerReviews />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
