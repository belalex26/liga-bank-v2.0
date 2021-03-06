import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import logoPops from '../../images/logo-pops.svg';
import modalHoc from '../../hoc/modal-hoc';
import validate from '../../validateInfo/validateInfo-user';

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const Modal = (props) => {

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    if (props.onModalActive) {
      body.style.overflow = `hidden`;
    }
    body.style.overflow = `auto`;
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      props.onModalActive(false);
      bodyScroll();
    }
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    bodyScroll();
    props.onErrors(validate(props.user));
    onAddItemClick();

    if (props.user.userName && props.user.password) {
      props.onModalActive(false);
    }
  };

  const onChangeForm = (evt) => {
    const target = evt.target;
    const value = target.type === `checkbox` ? target.checked : target.value;
    const name = target.name;

    props.onUser({
      ...props.user,
      [name]: value,
    });
  };

  const onPasswordVisible = () => {
    props.onVisiblePassword(!props.visiblePassword);
  };

  const onAddItemClick = () => {
    if (props.user.userName && props.user.password) {
      let newUser = {};

      newUser = props.user;
      props.onUserItems([...props.UserItems, newUser]);

      resetInput();
    }
  };

  const resetInput = () => {
    props.onUser({
      userName: ``,
      password: ``,
    });
  };

  return (
    <div className={props.modalActive ? `modal modal--active` : `modal`} onClick={() => props.onModalActive(false)} role="dialog" tabIndex="-1" >
      <section className={props.modalActive ? `modal__callback modal__callback--active` : `modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <h2 className="modal__title visually-hidden">???????? ?? ???????????? ??????????????</h2>
        <img className="modal__logo" src={logoPops} alt="???????? ???????? ???????????????? ????????" />
        <form className="modal__callback-form" action="#" onSubmit={onSubmitForm}>
          <label className="modal__label" htmlFor="userName">??????????
            {props.errors.userName && <span className="modal__error">{props.errors.userName}</span>}
          </label>
          <input className="modal__input" type="text" id="userName" name="userName" value={props.user.userName} onChange={onChangeForm}/>

          <label className="modal__label" htmlFor="password">????????????
            {props.errors.password && <span className="modal__error">{props.errors.password}</span>}
            <button className="modal__password-visible" type="button" onMouseDown={onPasswordVisible} id="password"></button>
            <a className="modal__password-reset" href="/password-reset">???????????? ?????????????</a>
          </label>
          <input className="modal__input" type={props.visiblePassword ? `text` : `password`} name="password" value={props.user.password} onChange={onChangeForm}/>

          <button className="modal__submit" type="submit">??????????</button>
        </form>
        <button className="modal__close" onClick={() => props.onModalActive(false)} type="button" aria-label="??????????????"></button>
      </section>
    </div>
  );

};

Modal.propTypes = {
  modalActive: PropTypes.bool.isRequired,
  onModalActive: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onErrors: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  onUser: PropTypes.func.isRequired,
  visiblePassword: PropTypes.bool.isRequired,
  onVisiblePassword: PropTypes.func.isRequired,
  UserItems: PropTypes.array.isRequired,
  onUserItems: PropTypes.func.isRequired,
};

export default modalHoc(Modal);
