import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo';
import Modal from '../modal/modal';
import MenuHoc from '../../hoc/menu-hoc';

const Menu = ({...props}) => {

  const onModalOpenClick = () => {
    props.onModalActive(true)
  }

  return (
    <>
      <nav className="menu menu--active">
        <button className="menu__button" aria-label="меню">
          <span className="menu__button-icon"></span>
        </button>
          <div className="menu__logo">
            <Logo />
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" href="#services">
                Услуги
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" href="#credit">
                Рассчитать кредит
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" href="/convert">
                Конвертер валют
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" href="#department">
                Контакты
              </Link>
            </li>
        </ul>
        <Link className="menu__navigation-bar" href="/login" onClick={onModalOpenClick}>
          <svg className="menu__navigation-bar-icon" width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z"/>
          </svg>

          <p className="menu__navigation-bar-text">Войти в Интернет-банк</p>
        </Link>
        
        <button className="menu__navigation-only-mobile" type="button" onClick={onModalOpenClick}>
          <svg width="15" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z"/>
          </svg>
        </button>
      </nav>

      <Modal modalActive={props.modalActive} onModalActive={props.onModalActive} aria-hidden="true" />
    </>
  );
};

export default MenuHoc(Menu);