import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperation';
import { BtnLogOut, UserEmail } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  return (
    <div>
      <UserEmail>{email}</UserEmail>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Log out
      </BtnLogOut>
    </div>
  );
}
