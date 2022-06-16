import { useState } from "react";
import { IShortedLink, shortUrl } from "../../service/shortUrl";
import "./shortlinkcard.css";

interface Props {
  links: IShortedLink[];
  setLinks: React.Dispatch<React.SetStateAction<IShortedLink[]>>;
}

export const ShortLinkCard: React.FC<Props> = ({ setLinks, links }) => {
  const [url, setUrl] = useState("");
  const [isTouched, setisTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Please enter a valid URL");

  let validUrl = url !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setisTouched(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisTouched(false);

    if (!validUrl) return;

    shortUrl(url)
      .then((res) => {
        if (res === undefined) {
          setUrl("");
          return;
        }
        setLinks([...links, res]);
        setUrl("");
      })
      .catch((err) => {
        validUrl = false;
        setisTouched(true);

        setErrorMessage(err.message || "Something went wrong");
      });
  };

  return (
    <article className="cardDark">
      <form className="card__form" onSubmit={handleSubmit}>
        <div className="card__form-inputs">
          <input
            className={`card__input ${
              isTouched && !validUrl && "card__input--error"
            }`}
            type="text"
            placeholder="Shorten a link here..."
            onBlur={() => setisTouched(true)}
            value={url}
            onChange={handleChange}
          />
          {isTouched && !validUrl && (
            <span className="card__message">{errorMessage}</span>
          )}
        </div>
        <button type="submit" className="card__btn" disabled={!validUrl}>
          Shorten it!
        </button>
      </form>
    </article>
  );
};
