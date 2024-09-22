import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviewsData = [
  {
    title: "Great app!: very helpful and straight forward",
    text: "This is actually a really helpful application for a few reasons! And specifically for me as someone who doesn’t speak German, but has an interest in learning it, that it seems like there are patterns and similarities between English and German that should be easy to get, but it’s still very hard for me. I like how this really does lay it out there plain and simple, and in a way that actually does stick. This is the way I learn best. Thanks!!",
    username: "riv3r1andstr3ams",
    date: "Sep 18, 2024",
    rating: 5,
    country: "United States",
  },
  {
    title: "Great app",
    text: "It’s the best app for learning German I have found, other apps don’t focus on the specifics of the language as much. It has great tutorials and practice lessons that you won’t find in other apps.",
    username: "Daniella GF",
    date: "Sep 14, 2024",
    rating: 5,
    country: "United States",
  },
  {
    title: "Amazing, Quick, and Easy!!!",
    text: "Excellent app for learning German. High quality flash cards for learning vocabulary and plenty of grammar exercises. Grammar summaries are perfect for reading during commutes.",
    username: "michxnam",
    date: "Sep 12, 2024",
    rating: 5,
    country: "United States",
  },
  {
    title: "This has been helpful",
    text: "I have really enjoyed using the interface of this app, it has been very easy to use and fun so far.",
    username: "Rj212Rj",
    date: "Sep 8, 2024",
    rating: 5,
    country: "United States",
  },
  {
    title: "Great way to learn German",
    text: "I have recently started learning German and I have found this way to be very easy to get started and it did improve my German words vocabulary by a lot.",
    username: "Viktorrtt",
    date: "Sep 5, 2024",
    rating: 5,
    country: "United States",
  },
  {
    title: "Cool and useful app",
    text: "German is really hard and I wanted to pick up a few words as I’m traveling there in a few months. The app does what it says it does and makes learning German easy and simple!",
    username: "Mggdhhfrg",
    date: "Sep 3, 2024",
    rating: 5,
    country: "United States",
    developer_response:
      "I am happy that the app is useful for you and prepares you well for your trip in Germany :).",
    response_date: "Sep 5, 2024",
  },
  {
    title: "Finally, a way to learn German without distractions",
    text: "I’ve been scouring ways to learn German vocabulary without all the nonsense of upselling paid services. I’ve been practicing grammar to improve my conversation with German relatives, who are constantly correcting the gender articles. It’s been a godsend finding an app that lets me practice just that! Drilling the der, die, das is something I can now do in my downtime between meetings or on-the-go! The voice readout is also quite clear-sounding.",
    username: "Diana 🍰",
    date: "Aug 30, 2024",
    rating: 5,
    country: "United States",
    developer_response:
      "Thank you very much for your review. I am happy that the app is effective for learning German.",
    response_date: "Sep 5, 2024",
  },
  {
    title: "Very useful!",
    text: "The best flashcards for learning German vocabulary and of much better quality than those in an Anki deck. Since the flashcards are ordered by frequency, you will only learn relevant German words. The der, die, das exercise with hints is really useful. The grammar summaries on prepositions are great and easy to read during my commute.",
    username: "Deeznutzinyamoufbiatch",
    date: "Aug 28, 2024",
    rating: 5,
    country: "United States",
  },
  {
    title: "Convenient reference guide!",
    text: "A great guide to have for travel or for anyone who’s trying to learn the basics of German. I like how everything is broken down into easy to follow sections!",
    username: "AvidLearner38",
    date: "Aug 21, 2024",
    rating: 5,
    country: "United States",
    developer_response:
      "Great to hear that the app has been very useful to you! Thank you for sharing your feedback.",
    response_date: "Aug 26, 2024",
  },
  {
    title: "Love this app!",
    text: "Works great if you want to brush up before a trip!",
    username: "Shoppergamer",
    date: "Aug 13, 2024",
    rating: 5,
    country: "United States",
    developer_response:
      "Thank you very much for your review :). Have a great trip!",
    response_date: "Aug 23, 2024",
  },
];

const CustomerReviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(5);
  const averageRating =
    reviewsData.reduce((sum, review) => sum + review.rating, 0) /
    reviewsData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReviews = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + visibleReviews, reviewsData.length - visibleReviews)
    );
  };

  const prevReviews = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - visibleReviews, 0));
  };

  return (
    <div className="customer-reviews">
      <h2 className="reviews-title">Ratings and Reviews</h2>
      <div className="app-store-rating">
        <div className="rating-summary">
          <span className="average-rating">{averageRating.toFixed(1)}</span>
          <span className="out-of">out of 5</span>
        </div>
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < Math.round(averageRating) ? "#FFD700" : "none"}
              stroke="#FFD700"
              size={24}
            />
          ))}
        </div>
        <span className="review-count">{reviewsData.length} Ratings</span>
      </div>
      <div className="reviews-carousel">
        <button
          onClick={prevReviews}
          className="carousel-button"
          disabled={startIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="reviews-row">
          {reviewsData
            .slice(startIndex, startIndex + visibleReviews)
            .map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={i < review.rating ? "#FFD700" : "none"}
                        stroke="#FFD700"
                        size={16}
                      />
                    ))}
                  </div>
                  <div className="review-meta">
                    <span className="username">{review.username}</span>
                    <span className="date">{review.date}</span>
                  </div>
                </div>
                <h3 className="review-title">{review.title}</h3>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
        </div>
        <button
          onClick={nextReviews}
          className="carousel-button"
          disabled={startIndex >= reviewsData.length - visibleReviews}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <a
        href="https://apps.apple.com/us/app/id6578450704"
        className="review-button"
      >
        See All
      </a>
    </div>
  );
};

export default CustomerReviews;
