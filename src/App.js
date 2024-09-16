import logo from "./linguicoLogo.png"; // You can replace this with your app's logo
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Linguico logo" />
        <h1>Welcome to Linguico</h1>
        <p>Learn German easily with our iOS and Android app, Linguico!</p>
        <p>Available for download on the App Store and Google Play.</p>
        <div className="app-links">
          <a
            className="App-link"
            href="https://apps.apple.com/us/app/id6578450704"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store
          </a>
          <a
            className="App-link"
            href="https://play.google.com/store/apps/details?id=com.linguistic.Linguistic&gl=cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get it on Google Play
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
