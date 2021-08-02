import React, { useEffect } from 'react';

const ESC_PRESS = 27;
const body = document.querySelector('.body');

const Success = ({...props}) => {

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
      props.onSuccessActive(false)
      bodyScroll()
  }
}

  return (
      <div className={props.successActive ? "success success--active" : "success"} onClick={() => props.onSuccessActive(false)} role="dialog" tabIndex="-1">
        <div className="success__content">
          <p className="success__text">Спасибо за обращение в наш банк.</p>
          <p className="success__desc">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
          <button className="success__close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>
  );
};

export default Success;