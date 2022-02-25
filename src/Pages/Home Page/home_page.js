import {Typography } from "@mui/material";
import React from "react";
import useWindowSize from "../../Utils/use_window_size";
import useStyles from "./home_page_styles";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../Components/CommonButton/common_button";

export default function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const {isTab, isWeb } = useWindowSize();

  const ProceedBtnPressed = () => {
    navigate("/bmi");
  };

  return (
    <div className={isWeb ? classes.root : classes.root_mobile_tab}>
      <div
        className={
          isWeb
            ? classes.top_div_web
            : isTab
            ? classes.top_div_Tab
            : classes.top_div_mobile
        }
      >
        <img
          src={"/Assets/bmii.png"}
          alt="bmi image"
          className={
            isWeb
              ? classes.bmi_image_web
              : isTab
              ? classes.bmi_image_tab
              : classes.bmi_image_mobile
          }
        />
        <Typography
          className={
            isWeb
              ? classes.typography_web
              : isTab
              ? classes.typography_tab
              : classes.typography_mobile
          }
        >
          <p
            className={
              isWeb
                ? classes.bmi_text_web
                : isTab
                ? classes.bmi_text_tab
                : classes.bmi_text_mobile
            }
          >
            <b>
              Body Mass Index (BMI) is a convenient rule of thumb used to
              broadly categorize people as underweight, of normal weight,
              overweight, or obese. Since the 1980s, BMI has been used as a
              standard by the World Health Organization (WHO) in obesity
              statistics and research. Smart BMI is an improved measure of the
              standard BMI that factors in age and gender to provide a more
              comprehensive result. <br />
              <br />
              To calculate your Smart BMI, fill out your details below.
            </b>
          </p>
          <div
            className={
              isWeb
                ? classes.box_div_web
                : isTab
                ? classes.box_div_tab
                : classes.box_div_mobile
            }
          />
          <div
            className={
              isWeb
                ? classes.btn_div_web
                : isTab
                ? classes.btn_div_tab
                : classes.btn_div_mobile
            }
          >
            <CommonButton onclick={ProceedBtnPressed} title="Proceed" />
          </div>
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          height: "8%",
          backgroundColor: "black",
          color: "white",
          position: "relative",
          lignItems: "center",
        }}
      >
        <div
          style={{
            height: "8%",
            textAlign: "center",
            padding: "5px 0px",
            fontSize: "13px",
          }}
        >
          BEEEZ.lk <br />
          Copyright © 2022 Beeez Lanka
          <br />
        </div>
      </div>
    </div>
  );
}
