import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./page_structure_styles";
import useWindowSize from "../../Utils/use_window_size";

export default function PageStructure({
  content
}){

  const classes = useStyles();
  const {isTab, isWeb } = useWindowSize();

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
            {content}
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
            <div style={{ height: "8%", textAlign: "center", padding: "5px 0px", fontSize: "13px" }}>
              BEEEZ.lk <br />
              Copyright © 2022 Beeez Lanka
              <br />
            </div>
          </div>
        </div>
      );
}