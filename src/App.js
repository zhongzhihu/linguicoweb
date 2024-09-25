import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import appStoreButton from "./download-app-store-black.svg";
import googlePlayButton from "./download-play-store.png";
import swissMade from "./SwissMadeDark.png";
import screenshot1 from "./screenshot1.png";
import Screenshots from "./components/Screenshots";
import derdiedas from "./der-die-das.gif";
import CustomerReviews from "./CustomerReviews";
import Contact from "./components/Contact";
import "./App.css";
import "./CustomerReviews.css";

function App() {
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
          <div className="feature-box">
            <img src={screenshot1} alt="Feature 1" className="feature-image" />
            <div className="feature-text">
              <h3>Learn German with Smart Flashcards</h3>
              <ul>
                <li>
                  <strong>High-Quality Built-in Flashcards</strong>: Learn more
                  efficiently than with public Anki decks
                </li>
                <li>
                  <strong>Rich Content</strong>: Grammar info, irregular forms,
                  example sentences, and audio included
                </li>
                <li>
                  <strong>Frequency-Based Learning</strong>: Focus on the most
                  useful words first
                </li>
                <li>
                  <strong>Official Wordlists</strong>: Choose from Goethe A1,
                  A2, or B1 levels
                </li>
              </ul>
            </div>
          </div>

          <div className="feature-box">
            <img src={derdiedas} alt="Feature 2" className="feature-image" />
            <div className="feature-text">
              <h3>Practice der, die, das</h3>
              <ul>
                <li>
                  <strong>Engage with fun Exercises:</strong> Guess the correct
                  article der, die, das for German nouns
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
        </div>{" "}
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
