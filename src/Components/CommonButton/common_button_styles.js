import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

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
});

export default useStyles;
