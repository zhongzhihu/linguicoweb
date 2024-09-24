import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Linguico</h1>
      <p>
        Linguico is a free language learning app designed to help you master
        German efficiently and effectively. Linguico is developed by two
        language enthusiasts in Switzerland, by a data scientist and a native
        German speaker. The idea for Linguico was born when we discovered that
        existing language learning apps do not always target relevant vocabulary
        and do not provide an in-depth focus on grammar topics.
      </p>
      <p>
        Our mission is to address the shortcomings of other language learning
        apps and provide a comprehensive, engaging learning experience.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Smart Flashcards with high-quality, curated content</li>
        <li>Interactive exercises for practicing "der, die, das"</li>
        <li>Frequency-based learning to focus on the most useful words</li>
        <li>Official wordlists from Goethe Institute (A1, A2, B1 levels)</li>
      </ul>

      <h2>Future Plans</h2>
      <ul>
        <li>
          More language offerings will be added such as Spanish, French and
          Dutch
        </li>
      </ul>
    </div>
  );
};

export default About;
