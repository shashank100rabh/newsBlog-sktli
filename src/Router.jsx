import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Description from "./Description";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/describe/:id" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
