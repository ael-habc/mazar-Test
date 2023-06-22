import { useEffect } from "react";
import { useState } from "react";
import "./Activity.css";

export default function Activity({ activity }) {
  const [formattedLastPurchase, setFormattedLastPurchase] = useState("");

  useEffect(() => {
    const calculateLastPurchase = () => {
      const lastPurchaseDate = new Date(activity.last_Purchase);
      const currentDate = new Date();

      const timeDiff = currentDate.getTime() - lastPurchaseDate.getTime();
      const yearsDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
      const monthsDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 30));

      if (yearsDiff > 0) {
        setFormattedLastPurchase(`${yearsDiff} years ago`);
      } else if (monthsDiff > 0) {
        setFormattedLastPurchase(`${monthsDiff} months ago`);
      } else {
        setFormattedLastPurchase("Less than a month ago");
      }
    };

    calculateLastPurchase();
  }, [activity.last_Purchase]);
  return (
    <div className="activity">
      <h1>${activity.price}</h1>
      <p className="record">
        Customer is due to Recorder <span>{activity.motive}</span>
      </p>
      <p className="purchase"> Last purchased a {formattedLastPurchase}</p>
    </div>
  );
}
