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
import derdiedas from "./derdiedas.gif";
import CustomerReviews from "./CustomerReviews";

import "./App.css";
import "./CustomerReviews.css";

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

    // Add Google Analytics tracking script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-WYDEJ330HW";
    script.async = true;
    document.body.appendChild(script);

    // Initialize dataLayer on the window object and set up Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-WYDEJ330HW");

    // Conditionally add the Elfsight widget script only in production
    if (process.env.REACT_APP_ENV === "production") {
      const elfsightScript = document.createElement("script");
      elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
      elfsightScript.async = true;
      document.body.appendChild(elfsightScript);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Linguico logo" />
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
          <div className="App-link">
            <img
              src={swissMade}
              alt="Swiss Made"
              className="Swiss-made-button"
            />
          </div>
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

      <CustomerReviews />

      {/* ... (rest of the component remains the same) */}
    </div>
  );
}

export default App;
