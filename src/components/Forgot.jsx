import React, { useState } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";

const COLORS = {
  dark: "#1A1A1A",
  accent: "#A8C7A1",
  white: "#FFFFFF",
  gray: "#B0B0B0",
};

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <Wrapper>
      <FormBox>
        <Title>Forgot Password</Title>
        <Subtitle>Enter your details to recieve a reset link</Subtitle>

        <form onSubmit={handleSubmit}>
          <StyledInput
            fullWidth
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <SubmitButton fullWidth type="submit">
            Submit
          </SubmitButton>
        </form>

        <BackText>← Back To Sign In</BackText>
      </FormBox>
    </Wrapper>
  );
};

export default Forgot;

const Wrapper = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
});

const FormBox = styled(Box)({
  maxWidth: "550px",
  width: "100%",
  padding: "40px",
  textAlign: "center",
});

const Title = styled(Typography)({
  fontSize: "28px",
  fontWeight: 700,
  marginBottom: "10px",
  color: COLORS.dark,
});

const Subtitle = styled(Typography)({
  fontSize: "14px",
  color: COLORS.gray,
  marginBottom: "25px",
});

const StyledInput = styled(TextField)({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#FAFAFA",
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: "#004F49",
  color: "white",
  padding: "12px",
  borderRadius: "10px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: COLORS.dark,
    color: COLORS.white,
  },
});

const BackText = styled(Typography)({
  marginTop: "20px",
  fontSize: "14px",
  color: COLORS.gray,
  cursor: "pointer",
});
