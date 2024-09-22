import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviewsData } from "./reviewsData";

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
        ? prevIndex + 1
        : 0
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + reviewsData.length) % reviewsData.length
        : prevIndex - 1 >= 0
        ? prevIndex - 1
        : Math.max(reviewsData.length - 5, 0)
    );
  };

  const displayedReviews = isMobile
    ? [reviewsData[currentIndex]]
    : reviewsData.slice(currentIndex, currentIndex + 5);

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
              <h3 className="review-title">{review.title}</h3>
              <p className="review-text">{review.text}</p>
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
      >
        See All
      </a>
    </div>
  );
};

export default CustomerReviews;
