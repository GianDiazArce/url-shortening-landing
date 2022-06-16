import { Logo } from "../../svg";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Logo variant="light" />
        </div>
        <ul className="footer__list">
          <li className="footer__item footer__item-title">Features</li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Link Shortening
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Branded Links
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Analytics
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <li className="footer__item footer__item-title">Resources</li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Developers
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Support
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <li className="footer__item footer__item-title">Company</li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Our Team
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="#" className="footer__social-item">
            <img src="/images/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="#" className="footer__social-item">
            <img src="/images/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="#" className="footer__social-item">
            <img src="/images/icon-pinterest.svg" alt="pinterest" />
          </a>
          <a href="#" className="footer__social-item">
            <img src="/images/icon-instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};
