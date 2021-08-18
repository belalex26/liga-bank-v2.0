import React, {useState} from 'react';

const CalculatorHoc = (Component) => {

  const CalculatorState = () => {

    const [target, setTarget] = useState(`Выберите цель кредита`);
    const [selectActive, setSelectActive] = useState(false);

    const [questionnaireActive, setQuestionnaireActive] = useState(false);
    return (
      <Component
        selectActive={selectActive} onSelectActive={setSelectActive}
        questionnaireActive={questionnaireActive} onQuestionnaireActive={setQuestionnaireActive}
        target={target} onTarget={setTarget}
      />
    );

  };
  return CalculatorState;
};

export default CalculatorHoc;
