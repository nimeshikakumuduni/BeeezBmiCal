import { Button } from "@mui/material";
import React from "react";
import useStyles from "./common_button_styles";
import useWindowSize from "../../Utils/use_window_size";

export default function CommonButton({
    onclick,
    title,
}) {
  const classes = useStyles();
  const { isTab, isWeb } = useWindowSize();


  return (
    <Button
      className={
        isWeb
          ? classes.proceed_btn_web
          : isTab
          ? classes.proceed_btn_tab
          : classes.proceed_btn_mobile
      }
      onClick={onclick}
    >
     {title}
    </Button>
  );
}
