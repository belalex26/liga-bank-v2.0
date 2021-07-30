import React from 'react';

const Success = ({...props}) => {

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