import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import logoPops from '../../images/logo-pops.svg'

import ModalHoc from '../../hoc/modal-hoc';
import { Link } from 'react-router-dom';

const body = document.querySelector('.body');

const ESC_PRESS = 27;

const Modal = (props) => {

    useEffect(() => {
        document.addEventListener('keydown', onClose, {passive: true})
        return () => document.removeEventListener('keydown', onClose)
    })

    const onChangeForm = (evt) => {
        const target = evt.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        props.setValues({
            ...props.values,
            [name]: value,
        })

      };

    const bodyScroll = () => {
        if (props.onModalActive === true) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    }

    const onClose = (evt) => {
        if (evt.keyCode === ESC_PRESS) {
            props.onModalActive(false)
            bodyScroll()
        }
    }


    const onSubmitForm = (evt) => {
        evt.preventDefault();
    
        bodyScroll()
    }

      
  return (
    <div className={props.modalActive ? "modal modal--active" : "modal"} onClick={() => props.onModalActive(false)} role="dialog" tabIndex="-1" >
        <section className={props.modalActive ? "modal__callback modal__callback--active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title visually-hidden">Вход в личный кабинет</h2>
            <img className="modal__logo" src={logoPops} alt="Лига Банк интернет банк" />
            <form className="modal__callback-form" action="#" onSubmit={onSubmitForm}>
                <label className="modal__label" htmlFor="userName">Логин</label>
                <input className="modal__input" type="email" name="userName"/>

                <label className="modal__label" htmlFor="password">Пароль
                    <Link className="modal__password-reset" href="/password-reset">Забыли пароль?</Link>
                </label>
                <input className="modal__input" type="password" name="password"/>

                <button className="modal__submit" type="submit">Войти</button>
            </form>
            <button className="modal__close" onClick={() => props.onModalActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );

};

Modal.prototype = {
    rating: PropTypes.number.isRequired,
    onChangeForm: PropTypes.func.isRequired
};

export default ModalHoc(Modal);