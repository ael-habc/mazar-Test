import React from "react";
import cleaning from "./images/cleaning.png";
import { Button } from "@material-tailwind/react";
import "./saleCard.css";

export default function SaleCard({sale}) {
  return (
    <div className="sale">
      <div className="saleHeader">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#d6ec4f"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <p>Viewed Online</p>
      </div>
      <div className="saleBody">
        <img src={cleaning} alt="cleaning" />
        <div className="salesInfo">
          <h3>{sale.title}</h3>
          <p>Viewed at {sale.last_view}</p>
          <Button variant="gradient"  className="rounded-full bg-gradient-to-r from-lime-500 to-lime-500 text-black">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
