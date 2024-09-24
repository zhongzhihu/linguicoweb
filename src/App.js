import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import appStoreButton from "./download-app-store-black.svg";
import googlePlayButton from "./download-play-store.png";
import swissMade from "./SwissMadeDark.png";
import screenshot1 from "./screenshot1.png";
import derdiedas from "./der-die-das.gif";
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
      <Navbar />
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
        </div>
      </section>

      <CustomerReviews />
    </div>
  );
}

export default App;
