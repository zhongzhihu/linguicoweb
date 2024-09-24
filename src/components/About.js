import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Linguico</h1>
      <p>
        Have you ever felt that your language learning app isn't meeting your
        needs? That's exactly why we created Linguico. We're a small team in
        Switzerland - a data scientist and a native German speaker - who became
        frustrated with apps that weren't focusing on truly useful vocabulary
        and comprehensive grammar. Linguico is our solution to this problem.
        It's a free app designed to teach you what you really need to learn
        German. Our goal is to help you learn relevant vocabulary and practice
        grammar in depth. We believe this approach is crucial for genuinely
        learning to speak German, rather than just memorizing a few set of
        phrases.
      </p>
      <p>
        Our mission is to address these shortcomings and provide a
        comprehensive, effective learning experience.
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
        learners, it is even a preferred substitute.
      </p>

      <h2>Future Plans</h2>
      <ul>
        <li>
          Expand language offerings for learning Spanish, French, and Dutch
        </li>
        <li>
          Option to learn languages through our current website in addition to
          the mobile app.
        </li>
      </ul>
    </div>
  );
};

export default About;
