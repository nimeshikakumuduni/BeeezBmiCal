import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    // alignItems: "center",
    // position: "relative",
  },

  root_mobile_tab: {
    height: "100vh",
    width: "100%",
    // position: "relative",
  },
  top_div_web: {
    width: "100%",
    height: "92%",
    display: "flex",
    flexDirection: "row",
  },
  top_div_Tab: {
    width: "100%",
    height: "92%",
    display: "flex",
    flexDirection: "row",
  },
  top_div_mobile: {
    width: "100%",
    // height: "92%",
    display: "flex",
    flexDirection: "column",
  },
  bmi_image_web: {
    height: "100%",
    // position: "relative",
  },
  bmi_image_tab: {
    height: "100%",
    // position: "relative",
  },
  bmi_image_mobile: {
    height: !"50%",
    // position: "relative",
  },
  typography_web: {
    marginTop: "20%",
    // textIndent: "30px",
  },
  typography_tab: {
    marginTop: "25%",
    // textIndent: "20px",
  },
  typography_mobile: {
    marginTop: "45%",
  },
  bmi_text_web: {
    color: "black",
    // textIndent: "30px",
    // textAlign: "center",
    width: "83%",
    fontSize: "16px",
    // paddingLeft: "1%",
    fontFamily: "cursive",
    marginLeft: "2%",
    marginTop: "20%",
  },
  bmi_text_tab: {
    color: "black",
    // textIndent: "30px",
    // textAlign: "center",
    width: "87%",
    fontSize: "13px",
    fontFamily: "cursive",
    paddingLeft: "3%",
    marginTop: "20%",
    // marginRight: "10%"
  },
  bmi_text_mobile: {
    color: "black",
    // textIndent: "30px",
    // textAlign: "center",
    width: "90%",
    fontSize: "11px",
    paddingLeft: "5%",
    fontFamily: "cursive",
  },
  proceed_btn_web: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "1px solid black",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // height: 48,
    // padding: "0 30px",
    // color: "white",
    color: "#000000",
    fontWeight: "bold"
    // textDecoration: "bold"
  },
  proceed_btn_tab: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // height: 40,
    color: "#000000",
    fontWeight: "bold"
    
  },
  proceed_btn_mobile: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "1px solid black",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    padding: "0 10px",
    color: "#000000",
    fontWeight: "bold"
    // fontSize: "9px",
  },
  btn_div_web: {
    marginLeft: "30%"
  },
  btn_div_tab: {
    marginLeft: "30%"
  },
  btn_div_mobile: {
    marginLeft: "40%"
  },
  box_div_web: {
    height: "10vh",
  },
  box_div_tab: {
    height: "5vh",
  },
  box_div_mobile: {
    height: "2vh",
  },
});

export default useStyles;
