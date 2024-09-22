import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviewsData } from "./reviewsData";
import appStoreIcon from "./app-store-icon.png";

const countryCodeMap = {
  Australia: "au",
  Belgium: "be",
  Brazil: "br",
  Canada: "ca",
  Croatia: "hr",
  Finland: "fi",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  "Hong Kong": "hk",
  Hungary: "hu",
  India: "in",
  Ireland: "ie",
  Italy: "it",
  Latvia: "lv",
  Netherlands: "nl",
  Norway: "no",
  Pakistan: "pk",
  Poland: "pl",
  Singapore: "sg",
  Spain: "es",
  "Sri Lanka": "lk",
  Switzerland: "ch",
  Thailand: "th",
  Ukraine: "ua",
  "United Kingdom": "gb",
  "United States": "us",
  Vietnam: "vn",
};

const getCountryCode = (countryName) => {
  return countryCodeMap[countryName] || "us"; // Default to "us" if not found
};

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const averageRating =
    reviewsData.reduce((sum, review) => sum + review.rating, 0) /
    reviewsData.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % reviewsData.length
        : prevIndex + 5 <= reviewsData.length - 1
        ? prevIndex + 5
        : 0
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + reviewsData.length) % reviewsData.length
        : prevIndex - 5 >= 0
        ? prevIndex - 5
        : Math.max(reviewsData.length - 5, 0)
    );
  };

  const displayedReviews = isMobile
    ? [reviewsData[currentIndex]]
    : reviewsData.slice(currentIndex, currentIndex + 5);

  return (
    <div className="customer-reviews">
      <div className="reviews-header">
        <div className="reviews-title-container">
          <h2 className="reviews-title">
            App Store Reviews
            <img
              src={appStoreIcon}
              alt="App Store icon"
              className="app-store-icon"
            />
          </h2>
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
        </div>
      </div>
      <div className="reviews-carousel">
        <button
          onClick={prevReview}
          className="carousel-button"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="reviews-container">
          {displayedReviews.map((review, index) => (
            <div key={currentIndex + index} className="review-card">
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
              <h3 className="review-title">{review.title}</h3>{" "}
              <p className="review-text">{review.text}</p>
              <a
                href={`https://apps.apple.com/${getCountryCode(
                  review.country
                )}/app/id6578450704?action=write-review`}
                className="view-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in App Store
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={nextReview}
          className="carousel-button"
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <a
        href="https://apps.apple.com/us/app/id6578450704"
        className="review-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Review us on the App Store
      </a>
    </div>
  );
};

export default CustomerReviews;
