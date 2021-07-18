import React from 'react';

import Logo from '../logo/logo';
import SocialBar from '../social-bar/social-bar';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__content">
                <div className="footer__info">
                    <div className="footer__logo">
                        <Logo />
                    </div>
                
                    <ul className="footer__nav-list">
                        
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/services">
                                Услуги
                            </a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/credit">
                                Рассчитать кредит
                            </a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/contacts">
                                Контакты
                            </a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/support">
                                Задать вопрос
                            </a>
                        </li>
                    </ul>

                    <p className="footer__info-text">
                        150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1051 Ⓒ Лига Банк, 2019 
                    </p>

                    
                </div>
                <div className="footer__contact">
                    <div className="footer__sms">
                        <a className="footer__sms-link" href="sms:[0904]">*0904</a>
                        <p className="footer__sms-info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
                    </div>
                    <div className="footer__phone">
                        <a className="footer__phone-link" href="tel:[88001112233]">8 800 111 22 33</a>
                        <p className="footer__phone-info">Бесплатный для всех городов России</p>
                    </div>
                    <div className="fooler__socials">
                        <SocialBar />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;