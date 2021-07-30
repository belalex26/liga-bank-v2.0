import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';
import logoPops from '../../images/logo-pops.svg'
import ModalHoc from '../../hoc/modal-hoc';
import validate from '../../validateInfo';

const body = document.querySelector('.body');
const ESC_PRESS = 27;

const Modal = (props) => {

    useEffect(() => {
        document.addEventListener('keydown', onClose, {passive: true})
        return () => document.removeEventListener('keydown', onClose)
    })

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
        evt.preventDefault()
        bodyScroll()
        props.setErrors(validate(props.user))
        onAddItemClick()

        if (props.user.userName && props.user.password) {
            props.onModalActive(false)
        }
    }

    const onChangeForm = (evt) => {
        const target = evt.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        props.onUser({
            ...props.user,
            [name]: value,
        })
      };

    const onPasswordVisible = () => {
        props.onVisiblePassword(!props.visiblePassword) 
    }

    const onAddItemClick = () => {
        if (props.user.userName && props.user.password) {
            let newUser = {}

            newUser = props.user
            props.onUserItems([...props.UserItems, newUser])

            resetInput()
        }
    }

    const resetInput = () => {
        props.onUser({
            userName: '',
            password: '',
        })
    }
      
  return (
    <div className={props.modalActive ? "modal modal--active" : "modal"} onClick={() => props.onModalActive(false)} role="dialog" tabIndex="-1" >
        <section className={props.modalActive ? "modal__callback modal__callback--active" : "modal__callback"} onClick={evt => evt.stopPropagation()}>
            <h2 className="modal__title visually-hidden">Вход в личный кабинет</h2>
            <img className="modal__logo" src={logoPops} alt="Лига Банк интернет банк" />
            <form className="modal__callback-form" action="#" onSubmit={onSubmitForm}>
                <label className="modal__label" htmlFor="userName">Логин
                    {props.errors.userName && <span className="modal__error">{props.errors.userName}</span>}
                </label>
                <input className="modal__input" type="text" name="userName" min="3" max="20" value={props.user.userName} onChange={onChangeForm}/>

                <label className="modal__label" htmlFor="password">Пароль
                    {props.errors.password && <span className="modal__error">{props.errors.password}</span>}
                    <button className="modal__password-visible" type="button" onMouseDown={onPasswordVisible}></button>
                    <a className="modal__password-reset" href="/password-reset">Забыли пароль?</a>
                </label>
                <input className="modal__input" type={props.visiblePassword ? "text" : "password"} name="password" min="6" max="10" value={props.user.password} onChange={onChangeForm}/>

                <button className="modal__submit" type="submit">Войти</button>
            </form>
            <button className="modal__close" onClick={() => props.onModalActive(false)} type="button" aria-label="Закрыть"></button>
        </section>
  </div>
  );

};

export default ModalHoc(Modal);