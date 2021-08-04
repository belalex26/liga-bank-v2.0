import React, {useState} from 'react';

const MainHoc = (Component) => {

  const MainState = () => {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);

      window.addEventListener(`resize`, handleResizeWindow);
      return () => {
        window.removeEventListener(`resize`, handleResizeWindow);
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
