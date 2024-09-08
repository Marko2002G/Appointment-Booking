import { styled } from "@mui/system";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../helpers/colors";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
}));

export const StyledHeader = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "9px",
  width: "100%",
  marginTop: "30px",
}));

export const StyledInputsWrapper = styled("div")(() => ({
  marginTop: "55px",
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
}));

export const StyledInputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "100%",
  maxWidth: "480px",
  height: "80px",
  borderRadius: "5px",
  border: `1px solid ${
    theme.palette.mode !== "light" ? colors.dark.border : colors.light.border
  }`,
}));

export const StyledInput = styled(TextField)(({ theme, error }) => ({
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "100%",
  marginRight: 50,
  height: "50px",
  border: "none",
  background:
    theme.palette.mode !== "light" ? colors.dark.primary : colors.light.primary,
  color:
    theme.palette.mode !== "light" ? colors.light.primary : colors.dark.primary,
  "& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill, .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input, .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input  ":
    {
      paddingBottom: error ? "0px" : "16px",
      WebkitBoxShadow: `0 0 0 100px ${
        theme.palette.mode !== "light"
          ? colors.dark.primary
          : colors.light.primary
      } inset`,
      borderRadius: 0,
    },

  "& .MuiFormHelperText-root": {
    textAlign: "left",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  width: "fit-content",
  fontSize: "13px",
  fontWeight: "500",
  color:
    theme.palette.mode !== "light" ? colors.light.button : colors.dark.button,
  border: "none",
  textTransform: "initial",
  textDecoration: "none",
}));

export const SubmitContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "30px",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  fontSize: "19px",
  fontWeight: 700,
  gap: "40px",
}));

export const StyledFormIcon = styled("img")(() => ({
  margin: "0 30px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "500",
  border: "none",
  textTransform: "initial",
  background: theme.palette.mode !== "light" ? "#009ef7" : "#6ea2f5",
  color: "white",
  width: "150px",
  fontSize: "16px",
  "&:hover": {
    background:
      theme.palette.mode !== "light" ? colors.dark.button : colors.light.button,
  },
}));

export const DialogButton = styled(Button)(({ theme }) => ({
  color:
    theme.palette.mode !== "light" ? colors.light.primary : colors.dark.primary,
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  background:
    theme.palette.mode !== "light" ? colors.dark.primary : colors.light.primary,
}));

export const StyledDialogContent = styled(DialogContent)(
  ({ theme, ismobile }) => ({
    width: ismobile ? "100%" : "500px",
    background:
      theme.palette.mode !== "light"
        ? colors.dark.primary
        : colors.light.primary,
  })
);

export const StyledDialogTitle = styled(DialogTitle)(() => ({ theme }) => ({
  background:
    theme.palette.mode !== "light" ? colors.dark.primary : colors.light.primary,
}));
