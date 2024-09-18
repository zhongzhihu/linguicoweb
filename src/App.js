import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./linguicoLogo.png";
import appStoreButton from "./download-app-store-black.svg";
import googlePlayButton from "./download-play-store.png";
import swissMade from "./SwissMadeDark.png";
import screenshot1 from "./screenshot1.png";
import screenshot2 from "./screenshot2.png";
import screenshot3 from "./screenshot3.png";
import screenshot4 from "./screenshot4.png";
import screenshot5 from "./screenshot5.png";
import screenshot6 from "./screenshot6.png";

import "./App.css";

function App() {
  const [isSwissUser, setIsSwissUser] = useState(false);

  useEffect(() => {
    // Fetch the user's geolocation data
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const country = response.data.country;
        if (country === "CH") {
          setIsSwissUser(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching geolocation data:", error);
      });

    // Conditionally add the Elfsight widget script only in production
    if (process.env.REACT_APP_ENV === "production") {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Linguico logo" />
        <h1>Learn German with Linguico</h1>
        <p className="App-small-text App-margin-small">
          Download Linguico for free on the App Store and Google Play to improve
          your German today!
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
            href="https://play.google.com/store/apps/details?id=com.linguistic.Linguistic&gl=cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googlePlayButton}
              alt="Get it on Google Play"
              className="App-button App-button-play"
            />
          </a>
          <img src={swissMade} alt="Swiss Made" className="Swiss-made-button" />
        </div>
        <div className="screenshots">
          <img src={screenshot1} alt="Screenshot 1" className="Screenshot" />
          <img src={screenshot2} alt="Screenshot 2" className="Screenshot" />
          <img src={screenshot3} alt="Screenshot 3" className="Screenshot" />
          <img src={screenshot4} alt="Screenshot 4" className="Screenshot" />
          <img src={screenshot5} alt="Screenshot 5" className="Screenshot" />
          {isSwissUser && (
            <img src={screenshot6} alt="Screenshot 6" className="Screenshot" />
          )}
        </div>
      </header>

      <section className="Apple-style-section">
        <h2>Discover Linguico's Unique Features</h2>
        <div className="feature-container">
          <div className="feature-box">
            <img src={screenshot1} alt="Feature 1" className="feature-image" />
            <div className="feature-text">
              <h3>Learn German words with Flashcards</h3>
              <ul>
                <li>
                  Learn German vocabulary with high quality built-in flashcards
                </li>
                <li>With grammar info, example sentences and audio.</li>
                <li>
                  Flashcards are ordered by word frequency ensuring that you
                  learn the most relevant words first.
                </li>
                <li>
                  With option to select words from official Goethe A1, A2 or B1
                  word lists.
                </li>
              </ul>
            </div>
          </div>

          <div className="feature-box">
            <img src={screenshot5} alt="Feature 2" className="feature-image" />
            <div className="feature-text">
              <h3>Grammar Focused Exercises</h3>
              <ul>
                <li>Master der, die, das with focused exercises</li>
                <li>Improve your German grammar step by step</li>
                <li>Detailed feedback and explanations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Elfsight widget - only load in production */}
      {process.env.REACT_APP_ENV === "production" && (
        <div
          className="elfsight-app-69943a0c-c6da-404e-b7bd-467c6d5b0789"
          data-elfsight-app-lazy
        ></div>
      )}
    </div>
  );
}

export default App;
