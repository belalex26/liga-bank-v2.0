import React from 'react';


const Rejection = ({...props}) => {

  const renderTarget= () => {
    if (props.target === 'Ипотечное кредитование') {
      return('ипотечные кредиты')
    } else {
      return('автомобильные кредиты')
    }
  }

  return (
      <div className="rejection">
          <p className="rejection__text">Наш банк не выдаёт {renderTarget()} меньше 200 000 рублей.</p>
          <p className="rejection__desc">Попробуйте использовать другие параметры для расчёта.</p>

      </div>
  );
};

export default Rejection;