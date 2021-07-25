import React from 'react';


const Rejection = ({...props}) => {

  return (
      <div className="rejection">
          <p className="rejection__text">Наш банк не выдаёт ипотечные кредиты меньше 500 000 рублей.</p>
          <p className="rejection__desc">Попробуйте использовать другие параметры для расчёта.</p>

      </div>
  );
};

export default Rejection;