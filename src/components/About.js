import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Linguico</h1>

      <p>
        Hi! I'm a data scientist based in Switzerland, and like many foreigners
        there, I went through the journey of learning German. During this
        process, I got frustrated with apps like Duolingo - they're fun, but
        they weren't teaching me the words I actually needed in daily life. And
        don't get me started on grammar... it felt like it was barely covered!
      </p>

      <p>
        That's why I created Linguico. I wanted an app that would teach actually
        useful vocabulary and properly explain grammar. As a data scientist, I
        used web scraping to gather real-world German content and ranked words
        by how frequently they're actually used. This means you'll learn the
        vocabulary that matters, not random words about ducks wearing hats 😄.
      </p>

      <h2>How It's Different</h2>
      <p>
        Linguico is completely free and has no ads. I built it as a passion
        project - combining my love for data science with my experience learning
        German. The app focuses on what mainstream language apps often miss:
        practical vocabulary and in-depth grammar focus.
      </p>

      <h2>What Makes It Work</h2>
      <p>
        The flashcard system isn't random - it's based on real data about which
        German words are most commonly used. I analyzed tons of German content
        to make sure you're learning vocabulary you'll actually use in
        conversations, at work, or while reading.
      </p>

      <p>
        While other apps might be great for getting started, Linguico is
        designed to fill in the gaps and help you really understand German, not
        just memorize phrases. It's perfect alongside language courses or other
        apps - or even on its own if you want to focus on practical learning.
      </p>

      <h2>Future Plans</h2>
      <ul>
        <li>Add Spanish, French, and Dutch learning options</li>
        <li>Create a web version to complement the mobile app</li>
        <li>Keep improving based on your feedback!</li>
      </ul>
    </div>
  );
};

export default About;
