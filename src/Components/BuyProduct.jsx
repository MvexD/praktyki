import React from "react";
import product from "../images/1.png";
import { css } from "@emotion/css";
import CtaButton from "./CtaButton";

function BuyProduct() {
  return (
    <div
      className={css`
        width: 100%;
        justify-content: center;
        img {
          width: 437px;
        }
      `}
    >
      <div
        className={css`
          max-width: 960px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: auto;
          img {
            margin-top: 29px;
          }
        `}
      >
        <div>
          <img src={product} />
        </div>
        <div
          className={css`
            margin: 29px 24px 0 0;
          `}
        >
          <div
            className={css`
              background: #ffffff;
              min-width: 400px;
              min-height: 400px;
              border-radius: 20px;
              box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.1);
              transition: 0.3s ease-in-out;
              padding-top: 30px;
              text-align: center;

              h2 {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                margin: 0 0 20px;
                font-family: Mukta;
                font-weight: 300;
                padding: 40px;
                margin: 0;
                padding-top: 10px;
                font-size: 20px;
              }
            `}
          >
            <h2>
              Bazy kauczukowe przeznaczone w szczególności do łamliwych,
              kruchych, problematycznych paznokci.{" "}
            </h2>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
              laborum cumque maiores deleniti illum facilis commodi fuga libero
              exercitationem, tenetur magni aperiam nesciunt, iste maxime
              quibusdam rem nisi eaque illo?{" "}
            </h2>
            <h2>
              Bazy kauczukowe przeznaczone w szczególności do łamliwych,
              kruchych, problematycznych paznokci.{" "}
            </h2>
            <div
              className={css`
                background: #f2e0e6;
                display: inline-block;
                width: 100%;
                justify-content: center;

                p {
                  font-size: 25px;
                  float: left;
                  margin: 0px;
                  padding: 40px;
                  font-family: Mukta;
                  font-weight: 300;
                }
                h2 {
                  float: right;
                  padding: 0px;
                  padding: 40px;
                  font-family: Mukta;
                  font-weight: 300;
                }
              `}
            >
              <p> Cena standardowa:</p>
              <h2>39,99 pln</h2>
            </div>
            <div
              className={css`
                background: #f2e0e6;
                width: 100%;
                height: 200px;
                margin-top: -5px;

                p {
                  font-size: 25px;
                  float: left;
                  margin: 0px;
                  padding-left: 40px;
                  padding-right: 40px;
                  padding-top: 10px;
                  padding-bottom: 20px;
                  font-family: Mukta;
                  font-weight: 300;
                }
                h2 {
                  float: right;
                  padding: 0px;
                  padding-left: 40px;
                  padding-right: 40px;
                  padding-top: 10px;
                  padding-bottom: 20px;
                  font-family: Mukta;
                  font-weight: 300;
                  font-size: 30px;
                }
              `}
            >
              <p>Cena specjalna:</p>
              <h2>24,99 pln</h2>
              <div
                className={css`
                  width: 100%;
                  margin-left: 40px;
                  p {
                    margin: 0;
                    padding-left: 0px;
                    padding-right: 0px;
                    padding-top: 0px;
                    padding-bottom: 0px;
                  }
                `}
              >
                <CtaButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
