import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Linguico</h1>
      <p>
        Linguico is a free language learning app designed to help you master
        German efficiently and effectively. Developed in Switzerland by a data
        scientist and a native German speaker, Linguico was born from the
        realization that existing language learning apps often fall short in
        targeting relevant vocabulary and providing in-depth focus on grammar
        topics.
      </p>
      <p>
        Our mission is to address these shortcomings and provide a
        comprehensive, engaging learning experience.
      </p>
      <h2>Our Philosophy</h2>
      <p>
        At Linguico, we firmly believe that language courses are the most
        effective way to learn German. Our app is designed to complement such
        courses in the most efficient way possible, allowing you to focus on
        learning relevant vocabulary and practice grammar topics and reinforce
        your learning outside the classroom.
      </p>
      <p>
        If you're already using other language learning apps like Duolingo,
        Linguico serves as an excellent complementary tool — and for many
        learners, it is even a preferred substitute. Our focus on relevant
        vocabulary, in-depth grammar exercises, and comprehensive vocabulary
        deck sets us apart.
      </p>

      <h2>Future Plans</h2>
      <ul>
        <li>Expand language offerings to include Spanish, French, and Dutch</li>
      </ul>
    </div>
  );
};

export default About;
