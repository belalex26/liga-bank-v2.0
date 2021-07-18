import React from 'react';
import { Picture } from 'react-responsive-picture';

import logoForPS from '../../images/logo.svg';
import logoForTablet from '../../images/logo tablet.png';
import logoForMobile from '../../images/logo mobile.png';

const Logo = () => {

  return (
    <Picture
        sources = {[
            {
                srcSet: logoForMobile,
                media: "(max-width: 767px)",
            },
            {
                srcSet: logoForTablet,
                media: "(max-width: 1023px)",
            },
            {
                srcSet: logoForPS,
                type: "image/webp"
            }
        ]}
    />
  );
};

export default Logo;