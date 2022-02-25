import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../Components/CommonButton/common_button";
import PageStructure from "../../Components/PageStructure/page_structure";
import useWindowSize from "../../Utils/use_window_size";
import useStyles from "./bmi_page_styles";

export default function BmiPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isTab, isWeb } = useWindowSize();

  const [value, setValue] = React.useState("female");
  const [Hvalue, setHvalue] = React.useState("");
  const [Wvalue, setWvalue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const OkButtonPressed = () => {
    navigate("/");
  };

  const ChangeHvalue = (event) => {
    setHvalue(event.target.value);
  };

  const ChangeWvalue = (event) => {
    setWvalue(event.target.value);
  };

  return (
    <PageStructure
      content={
        <FormControl
          className={
            isWeb
              ? classes.FormControl_web
              : isTab
              ? classes.FormControl_tab
              : classes.FormControl_mobile
          }
        >
          <p
            style={{
              color: "black",
              fontFamily: "cursive",
              padding: "1%",
            }}
          >
            Fill the following details to calculate your BMI
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "5%",
              marginBottom: "2%",
            }}
          >
            <p
              style={{
                marginRight: "15%",
              }}
            >
              Name:
            </p>
            <TextField
              id="name"
              label="Your name"
              variant="outlined"
              className={
                isWeb
                  ? classes.name_textfeild_web
                  : isTab
                  ? classes.name_textfeild_tab
                  : classes.name_textfeild_mobile
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2%",
            }}
          >
            <p
              style={{
                marginRight: "17.5%",
              }}
            >
              Age:
            </p>
            <TextField
              id="age"
              label="Your age"
              variant="outlined"
              inputProps={{style: {height: "5px"}}}
              style={{ width: "30%" }}
            />
            <p
              style={{
                marginLeft: "1%",
              }}
            >
              Years
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1%",
            }}
          >
            <p
              style={{
                marginRight: "13%",
              }}
            >
              Gender:
            </p>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2%",
            }}
          >
            <p
              style={{
                marginRight: "14%",
              }}
            >
              Height:
            </p>
            <TextField
              id="age"
              label="Enter your height"
              variant="outlined"
              style={{ width: "30%" }}
            />
            <FormControl style={{ width: "20%" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Hvalue}
                onChange={ChangeHvalue}
              >
                <MenuItem value={"cm"}>Cm</MenuItem>
                <MenuItem value={"feet"}>Feet</MenuItem>
                <MenuItem value={"inches"}>Inches</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2%",
            }}
          >
            <p
              style={{
                marginRight: "13.5%",
              }}
            >
              Weight:
            </p>
            <TextField
              id="age"
              label="Enter your weight"
              variant="outlined"
              style={{ width: "30%" }}
            />
            <FormControl style={{ width: "20%" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Wvalue}
                onChange={ChangeWvalue}
                className={
                  isWeb
                    ? classes.select_item_web
                    : isTab
                    ? classes.select_item_tab
                    : classes.select_item_mobile
                }
              >
                <MenuItem value={"Kg"} className={
                  isWeb
                    ? classes.select_item_web
                    : isTab
                    ? classes.select_item_tab
                    : classes.select_item_mobile
                }>Kg</MenuItem>
                <MenuItem value={"feet"}>Pounds</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            className={
              isWeb
                ? classes.Btn_div
                : isTab
                ? classes.Btn_div
                : classes.Btn_div
            }
          >
            <CommonButton onclick={OkButtonPressed} title="show bmi" />
          </div>
        </FormControl>
      }
    ></PageStructure>
  );
}
