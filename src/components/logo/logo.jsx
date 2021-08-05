import React from 'react';
import {Picture} from 'react-responsive-picture';
import {Link} from 'react-router-dom';

import logoForPS from '../../images/logo.svg';
import logoForTablet from '../../images/logo tablet.png';
import logoForMobile from '../../images/logo mobile.png';

const Logo = () => {

  return (
    <Link to="/">
      <Picture
        alt="Лига Банк"
        sources = {[
          {
            srcSet: logoForMobile,
            media: `(max-width: 767px)`,
          },
          {
            srcSet: logoForTablet,
            media: `(max-width: 1023px)`,
          },
          {
            srcSet: logoForPS,
            type: `image/webp`
          }
        ]}
      />
    </Link>
  );
};

export default Logo;
