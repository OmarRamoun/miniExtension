import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import { RootState } from '../Types/index';
import { logout } from '../Redux/features/user';

// Styles
import {
  h1Styles,
  logoutBtnStyles,
  ulStyles,
  liStyles,
} from '../Styles/index.styles';

const Profile: FC = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1 className={h1Styles}>{user.studentName}</h1>
      <section className="fixed top-2 right-2">
        <button
          className={logoutBtnStyles}
          type="button"
          onClick={() => {
            navigate('/');
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </section>
      <ul className={ulStyles}>
        {
          user.studentClasses.map((classs) => (
            <li key={classs.className} className={liStyles}>
              <Card
                name={classs.className}
                students={classs.classPartners}
              />
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Profile;
