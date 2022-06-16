import React from "react";
import { IShortedLink } from "../../service/shortUrl";

interface Props {
  links: IShortedLink[];
}

export const ShortedLinksList: React.FC<Props> = ({ links }) => {
  return links.length > 0 ? (
    <>
      {links.map((link, index) => (
        <div key={index} className="card card-shortedlink mb-2">
          <div className="card__container">
            <a className="card__link" href={link.original_link} target="_blank">
              {link.original_link}
            </a>

            <div className="card__divider" />

            <div className="card__actions">
              <div className="card__action">
                <a
                  className="card__link card__link--short"
                  href={link.full_short_link}
                  target="_blank"
                >
                  {link.full_short_link}
                </a>
              </div>
              <button
                className="card__btn"
                onClick={(e: any) => {
                  navigator.clipboard.writeText(link.full_short_link);
                  e.target.textContent = "Copied!";
                  // change background color
                  e.target.style.backgroundColor = "var(--dark-violet)";
                  e.target.style.color = "#fff";
                  setTimeout(() => {
                    e.target.textContent = "Copy";
                    e.target.style.backgroundColor = "var(--cyan)";
                    e.target.style.color = "#fff";
                  }, 2000);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
};
