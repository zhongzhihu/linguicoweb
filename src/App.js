import logo from "./linguicoLogo.png";
import appStoreButton from "./download-app-store-black.svg";
import googlePlayButton from "./download-play-store.png";
import swissMade from "./SwissMadeDark.png";
import screenshot1 from "./screenshot1.png";
import screenshot2 from "./screenshot2.png";
import screenshot3 from "./screenshot3.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Linguico logo" />
        <h1>Learn German with Linguico</h1>
        <p className="App-small-text App-margin-small">
          Available for download on the App Store and Google Play.
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
        </div>
      </header>
    </div>
  );
}

export default App;
