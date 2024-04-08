import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import HomePage from "./HomePage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
