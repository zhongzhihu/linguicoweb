import logo from "./linguicoLogo.png"; // Your app's logo
import appStoreButton from "./download-app-store-black.svg"; // Replace with your App Store button image
import googlePlayButton from "./download-play-store.png"; // Replace with your Google Play button image
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Linguico logo" />
        <h1>Welcome to Linguico</h1>
        <p>Learn German more effectively with Linguico!</p>
        <p>Available for download on the App Store and Google Play.</p>
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
              className="App-button"
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
