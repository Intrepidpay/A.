import React, { useState, useEffect } from 'react';
import './HTMLPopup.css';

// TODO: Replace with your real Stripe Payment Link URL
// Create one at https://dashboard.stripe.com/payment-links
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/REPLACE_WITH_YOUR_LINK';

const HTMLPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Handle scroll locking
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [showPopup]);

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowPopup(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStripeClick = () => {
    window.open(STRIPE_PAYMENT_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <button
        className="payment-button primary"
        onClick={() => setShowPopup(true)}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/visa.jpg`}
          alt="stripe"
        />
      </button>
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className="popup-container stripe-popup-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close-button"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="stripe-popup-content">
              <h2 className="stripe-popup-title">Complete Your Payment</h2>
              <p className="stripe-popup-subtitle">
                You'll be redirected to Stripe's secure checkout to finish your payment.
              </p>
              <button
                className="stripe-pay-button"
                onClick={handleStripeClick}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HTMLPopup;
