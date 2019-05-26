import React, { Fragment } from 'react';
import { preview } from '../config.json';
import userTypes from '../types/userTypes';

import {
  NavBarContainer,
  NavBarContent,
  NavBarLogoA as LogoLink,
  NavBarItem as ItemLink,
} from '../assets/styles/index';

const NavBar = ({ user }) => {
  console.log(user);
  console.log(userTypes);
  return (
    <NavBarContainer>
      <LogoLink href={preview}>Главная страница</LogoLink>

      <NavBarContent>
        {user.permission === userTypes.admin && <ItemLink to="/patches">Выпуски</ItemLink>}
        {user.permission === userTypes.admin && <ItemLink to="/users">Пользователи</ItemLink>}
        <ItemLink to="/tests">Тесты</ItemLink>
        {user.permission > userTypes.guest && <ItemLink to="/editor">Редактор</ItemLink>}
        {user.permission > userTypes.guest && (
          <Fragment>
            <ItemLink to="/profile">Профиль</ItemLink>
            <ItemLink to="/logout">Выход</ItemLink>
          </Fragment>
        )}
        {user.permission === userTypes.guest && (
          <Fragment>
            <ItemLink to="/login">Вход</ItemLink>
            <ItemLink to="/register">Регистрация</ItemLink>
          </Fragment>
        )}
      </NavBarContent>
    </NavBarContainer>
  );
};

export default NavBar;
