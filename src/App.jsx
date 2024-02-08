import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorPage, HomePage, Shop } from "./Pages";
import { Main } from "./layouts";

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              {/* <Route index element={<HomePage />} /> */}
              <Route index element={<Shop />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <ToastContainer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
