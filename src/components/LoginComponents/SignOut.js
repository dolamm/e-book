import { useSelector, useDispatch } from 'react-redux';
import { UserLogout } from '../../redux/actions/UserAction';
export function SignOut(){
    const dispatch = useDispatch();
    dispatch(UserLogout());
}