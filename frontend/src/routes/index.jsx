// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "./NotFound";
// import HomePage from "./HomePage";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<HomePage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './HomePage'
import NotFound from './NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/search" element={<Search />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
