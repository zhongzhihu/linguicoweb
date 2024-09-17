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
          setIsSwissUser(true); // User is from Switzerland
        }
      })
      .catch((error) => {
        console.error("Error fetching geolocation data:", error);
      });
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

      {/* New section below screenshots */}
      <section className="Dummy-section">
        <h2>Explore More Features</h2>
        <ul>
          <li>Flashcards for learning German vocabulary</li>
          <li>Exercises for improving der, die, das</li>
          <li>In-depth grammar exercises</li>
          <li>
            Summary tables on prepositions, conjugations, declensions and more
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
