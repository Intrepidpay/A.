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

const getCurrentLang = () => localStorage.getItem('selectedLanguage') || 'en';

const HTMLPopup = ({ shippingNumber }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageReady, setImageReady] = useState(imageCache.loaded);
  const [stripeLink, setStripeLink] = useState('');
  const [lang, setLang] = useState(getCurrentLang());
  const hasStartedPreload = useRef(false);
  const popupContentRef = useRef(null);

  useEffect(() => {
    if (!shippingNumber) return;
    getShippingDetails(shippingNumber)
      .then((details) => setStripeLink(details.stripe))
      .catch(() => {});
  }, [shippingNumber]);

  useEffect(() => {
    if (hasStartedPreload.current) return;
    hasStartedPreload.current = true;
    preloadImage(imageCache.src)
      .then(() => setImageReady(true))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (showPopup) {
      setLang(getCurrentLang());
    }
  }, [showPopup]);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [showPopup]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowPopup(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Backstop: re-assert any static text that got swapped by an
  // external translation pass after mount.
  useEffect(() => {
    if (!showPopup || !popupContentRef.current) return;

    const id = requestAnimationFrame(() => {
      const el = popupContentRef.current;
      if (!el) return;
      el.querySelectorAll('[data-static-text]').forEach((node) => {
        if (node.textContent !== node.dataset.staticText) {
          node.textContent = node.dataset.staticText;
        }
      });
    });

    return () => cancelAnimationFrame(id);
  }, [showPopup, lang]);

  const handleStripeClick = () => {
    if (!stripeLink) return;
    window.open(stripeLink, '_blank', 'noopener,noreferrer');
  };

  const greeting = STRIPE_POPUP_GREETING[lang] || STRIPE_POPUP_GREETING.en;
  const payButtonText = STRIPE_PAY_BUTTON_TEXT[lang] || STRIPE_PAY_BUTTON_TEXT.en;
  const closeLabel =
    STRIPE_POPUP_CLOSE_ARIA_LABEL[lang] || STRIPE_POPUP_CLOSE_ARIA_LABEL.en;

  return (
    <>
      <button
        className="payment-button primary"
        onClick={() => setShowPopup(true)}
        onMouseEnter={() =>
          preloadImage(imageCache.src).then(() => setImageReady(true))
        }
      >
        <img src={`${process.env.PUBLIC_URL}/assets/visa.jpg`} alt="stripe" />
      </button>

      {showPopup && (
        <div
          className="popup-overlay no-translate"
          translate="no"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="popup-container stripe-popup-container no-translate"
            translate="no"
            onClick={(e) => e.stopPropagation()}
            ref={popupContentRef}
          >
            <button
              className="popup-close-button no-translate"
              translate="no"
              onClick={() => setShowPopup(false)}
              aria-label={closeLabel}
            >
              <span className="no-translate" translate="no">&times;</span>
            </button>

            <div className="stripe-popup-content no-translate" translate="no">
              <h2
                className="stripe-popup-title no-translate"
                translate="no"
                data-static-text={greeting}
              >
                <span className="no-translate" translate="no">{greeting}</span>
              </h2>

              <p className="stripe-popup-subtitle no-translate" translate="no">
                <span className="no-translate" translate="no">
                  {STRIPE_POPUP_REDIRECT_TEXT[lang]?.() ||
                    STRIPE_POPUP_REDIRECT_TEXT.en()}
                </span>
              </p>

              <img
                src={imageCache.src}
                alt="Stripe secure checkout"
                className={`stripe-popup-image${imageReady ? ' is-loaded' : ''}`}
                loading="eager"
              />

              <p className="stripe-popup-subtitle no-translate" translate="no">
                <span className="no-translate" translate="no">
                  {STRIPE_POPUP_THANKS_TEXT[lang]?.() ||
                    STRIPE_POPUP_THANKS_TEXT.en()}
                </span>
              </p>

              <button
                className="stripe-pay-button no-translate"
                translate="no"
                onClick={handleStripeClick}
                data-static-text={payButtonText}
              >
                <span className="no-translate" translate="no">{payButtonText}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HTMLPopup;
