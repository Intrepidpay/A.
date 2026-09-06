import React, { useState, useEffect, useRef } from 'react';
import './HTMLPopup.css';
import { getShippingDetails } from '../services/Service';
import {
  STRIPE_POPUP_GREETING,
  STRIPE_POPUP_REDIRECT_TEXT,
  STRIPE_POPUP_THANKS_TEXT,
  STRIPE_PAY_BUTTON_TEXT,
  STRIPE_POPUP_CLOSE_ARIA_LABEL
} from './constants';

// Module-level cache so the image is only ever fetched once,
// no matter how many times HTMLPopup mounts/unmounts.
const imageCache = {
  loaded: false,
  src: `${process.env.PUBLIC_URL}/san.png`,
};
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    if (imageCache.loaded) {
      resolve();
      return;
    }
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache.loaded = true;
      resolve();
    };
    img.onerror = reject;
  });
};

// Reads the language the user already picked in LanguagePopup.
// Falls back to 'en' if nothing was saved yet.
const getCurrentLang = () => localStorage.getItem('selectedLanguage') || 'en';

const HTMLPopup = ({ shippingNumber }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageReady, setImageReady] = useState(imageCache.loaded);
  const [stripeLink, setStripeLink] = useState('');
  const [lang, setLang] = useState(getCurrentLang());
  const hasStartedPreload = useRef(false);

  // Pull the Stripe link out of the shipping record's `stripe` field.
  useEffect(() => {
    if (!shippingNumber) return;
    getShippingDetails(shippingNumber)
      .then((details) => setStripeLink(details.stripe))
      .catch(() => {
        // Leave stripeLink empty; the pay button click will no-op below.
      });
  }, [shippingNumber]);

  // Preload the popup image as soon as this component mounts,
  // so it's already cached by the time the user opens the popup.
  useEffect(() => {
    if (hasStartedPreload.current) return;
    hasStartedPreload.current = true;
    preloadImage(imageCache.src)
      .then(() => setImageReady(true))
      .catch(() => {
        // Leave imageReady false; the <img> tag below will still
        // attempt a normal load if preloading failed.
      });
  }, []);

  // Re-check the saved language right before showing the popup,
  // in case the user changed it via LanguagePopup earlier in the session.
  useEffect(() => {
    if (showPopup) {
      setLang(getCurrentLang());
    }
  }, [showPopup]);

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
    if (!stripeLink) return;
    window.open(stripeLink, '_blank', 'noopener,noreferrer');
  };

  const closeLabel = STRIPE_POPUP_CLOSE_ARIA_LABEL[lang] || STRIPE_POPUP_CLOSE_ARIA_LABEL.en;

  return (
    <>
      <button
        className="payment-button primary"
        onClick={() => setShowPopup(true)}
        onMouseEnter={() => preloadImage(imageCache.src).then(() => setImageReady(true))}
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
              aria-label={closeLabel}
            >
              &times;
            </button>
            <div className="stripe-popup-content">
              <h2 className="stripe-popup-title">
                {STRIPE_POPUP_GREETING[lang] || STRIPE_POPUP_GREETING.en}
              </h2>
              <p className="stripe-popup-subtitle">
                {STRIPE_POPUP_REDIRECT_TEXT[lang] || STRIPE_POPUP_REDIRECT_TEXT.en}
              </p>
              <img
                src={imageCache.src}
                alt="Stripe secure checkout"
                className={`stripe-popup-image${imageReady ? ' is-loaded' : ''}`}
                loading="eager"
              />
              <p className="stripe-popup-subtitle">
                {STRIPE_POPUP_THANKS_TEXT[lang] || STRIPE_POPUP_THANKS_TEXT.en}
              </p>
              <button
                className="stripe-pay-button"
                onClick={handleStripeClick}
              >
                {STRIPE_PAY_BUTTON_TEXT[lang] || STRIPE_PAY_BUTTON_TEXT.en}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HTMLPopup;
