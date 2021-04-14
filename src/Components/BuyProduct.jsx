import React from "react";
import product from "../images/1.png";
import { css } from "@emotion/css";

function BuyProduct() {
  return (
    <div
      className={css`
        width: 100%;
        background: pink;

        img {
          width: 437px;
        }
      `}
    >
      <div
        className={css`
          max-width: 960px;
        `}
      >
        <div>
          <img src={product} />
        </div>
        <div>
          <div>
            <h2>
              Bazy kauczukowe przeznaczone w szczególności do łamliwych,
              kruchych, problematycznych paznokci.{" "}
            </h2>
            <h2>
              Bazy kauczukowe przeznaczone w szczególności do łamliwych,
              kruchych, problematycznych paznokci.{" "}
            </h2>
            <h2>
              Bazy kauczukowe przeznaczone w szczególności do łamliwych,
              kruchych, problematycznych paznokci.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
