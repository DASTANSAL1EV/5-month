import { useEffect, useState } from "react";
import "./exclusiveOffer.css";
import girl from '../../img/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing 1.svg';

const pad = (n) => String(n).padStart(2, "0");

const OFFER_MS = ((6 * 24 + 18) * 60 + 48) * 60 * 1000;

function useCountdown(durationMs) {
  const [end] = useState(() => Date.now() + durationMs);
  const [left, setLeft] = useState(durationMs);

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, end - Date.now())), 1000);
    return () => clearInterval(id);
  }, [end]);

  const totalMinutes = Math.floor(left / 60000);
  return {
    days: Math.floor(totalMinutes / (60 * 24)),
    hours: Math.floor((totalMinutes % (60 * 24)) / 60),
    minutes: totalMinutes % 60,
  };
}

export default function ExclusiveOffer() {
  const { days, hours, minutes } = useCountdown(OFFER_MS);

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Min" },
  ];

  return (
    <section className="offer">
      <div className="offer__media" aria-hidden="true">
        <span className="offer__square" />
        <span className="offer__dots" />
        <img className="offer__photo" src={girl} alt="" />
      </div>

      <div className="offer__content">
        <h2 className="offer__title">Exclusive offer</h2>

        <p className="offer__text">
          Unlock the ultimate style upgrade with our exclusive offer Enjoy
          savings of up to 40% off on our latest New Arrivals
        </p>

        <ul className="offer__timer">
          {units.map(({ value, label }) => (
            <li className="offer__unit" key={label}>
              <span className="offer__number">{pad(value)}</span>
              <span className="offer__label">{label}</span>
            </li>
          ))}
        </ul>

        <button className="offer__button" type="button">
          BUY NOW
        </button>
      </div>
    </section>
  );
}