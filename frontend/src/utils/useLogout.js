import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/slices/loggedInUser';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    navigate('/');
  };

  return logout;
};

export default useLogout;