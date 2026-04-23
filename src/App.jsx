import { styled } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <div>
      <Title>test project</Title>
    </div>
  );
};

export default App;

const Title = styled("h1")({
  color: "red",
});
