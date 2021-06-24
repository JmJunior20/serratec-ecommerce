import React from 'react';
import Routes from "./routes";
import Container from '@material-ui/core/Container';
import "./styles/styles.css";

function App() {
  return (
    <Container id="Container" maxWidth="fluid">
      <div className="App">
        <Routes></Routes>
      </div>
    </Container>
  );
}

export default App;
