import React from 'react';

const Success = ({...props}) => {

  return (
      <div className="success">
          <p className="success__text">Наш банк не выдаёт ипотечные кредиты меньше 500 000 рублей.</p>
          <p className="success__desc">Попробуйте использовать другие параметры для расчёта.</p>

      </div>
  );
};

export default Success;