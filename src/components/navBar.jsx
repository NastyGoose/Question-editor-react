import React, { Fragment } from 'react';
import { preview } from '../config.json';

import {
  NavBarContainer,
  NavBarContent,
  NavBarLogoA as LogoLink,
  NavBarItem as ItemLink,
} from '../assets/styles/index';

const NavBar = ({ user }) => (
  <NavBarContainer>
    <LogoLink href={preview}>Главная страница</LogoLink>

    <NavBarContent>
      <ItemLink to="/patches">Выпуски</ItemLink>
      <ItemLink to="/users">Пользователи</ItemLink>
      <ItemLink to="/tests">Тесты</ItemLink>
      <ItemLink to="/editor">Редактор</ItemLink>
      {user && (
        <Fragment>
          <ItemLink to="/profile">Профиль</ItemLink>
          <ItemLink to="/logout">Выход</ItemLink>
        </Fragment>
      )}
      {!user && (
        <Fragment>
          <ItemLink to="/login">Вход</ItemLink>
          <ItemLink to="/register">Регистрация</ItemLink>
        </Fragment>
      )}
    </NavBarContent>
  </NavBarContainer>
);

export default NavBar;
