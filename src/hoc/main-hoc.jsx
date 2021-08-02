import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MainHoc = (Component) => {
    
    const MainState = () => {
        const [width, setWidth] = useState(window.innerWidth);

        React.useEffect(() => {
            const handleResizeWindow = () => setWidth(window.innerWidth);
      
             window.addEventListener("resize", handleResizeWindow);
             return () => {
               window.removeEventListener("resize", handleResizeWindow);
             };
           }, []);


        return (
            <Component
                width={width} onWidth={setWidth}
            />
        );
    
    }
    return MainState;
}

MainHoc.prototype = {
    width: PropTypes.number.isRequired,
    onWidth: PropTypes.func.isRequired,
  };

export default MainHoc