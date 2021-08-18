import React, {useState} from 'react';

const MainHoc = (Component) => {

  const MainState = () => {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
      const windowResizeHandler = () => setWidth(window.innerWidth);

      window.addEventListener(`resize`, windowResizeHandler);
      return () => {
        window.removeEventListener(`resize`, windowResizeHandler);
      };
    }, []);


    return (
      <Component
        width={width} onWidth={setWidth}
      />
    );

  };
  return MainState;
};

export default MainHoc;
