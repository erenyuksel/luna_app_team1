import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './HomePage'
import NotFound from './NotFound'
import Congratulations from './AuthPages/Congrats/CongratsSection'
import Search from './Search'
import Profile from './Profile'
import Verification from './AuthPages/Verification/Verification'
import Login from './AuthPages/Login/SignInSection'
import SignUp from './AuthPages/SignUp/SignUpSection'
import NewRestaurant from './ContributionPages/NewRestaurant'
import NewReview from './ContributionPages/NewReview'
import AboutUsPage from './AboutUs'

import UserReviews from './Profile/Elements/UserReviews'
import UserComments from './Profile/Elements/UserComments'
import UserRestaurants from './Profile/Elements/UserRestaurants'
import EditProfile from './Profile/Elements/Edit'
import RestaurantsList from './Search/Restaurants'
import ReviewsList from './Search/Reviews'
import UsersList from './Search/Users'
import ProtectedRoutes from './ProtectedRoutes'
import RestauranPage from './Search/Restaurants/RestaurantPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/congratulations" element={<Congratulations />} />
          <Route path="/signup/verification" element={<Verification />} />
          <Route path="/search" element={<Search />}>
            <Route index element={<RestaurantsList />} />
            <Route path="/search/reviews" element={<ReviewsList />} />
            <Route path="/search/users" element={<UsersList />} />
          </Route>
          <Route path="/restaurants/:restId" element={<RestauranPage />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/profile/:user_id" element={<Profile />}>
            <Route index element={<UserReviews />} />
            <Route
              path="/profile/:user_id/comments"
              element={<UserComments />}
            />
            <Route
              path="/profile/:user_id/restaurants"
              element={<UserRestaurants />}
            />
            <Route path="/profile/:user_id/edit" element={<EditProfile />} />
          </Route>
          <Route path="/add/review" element={<NewReview />} />
          <Route path="/add/restaurant" element={<NewRestaurant />} />
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
