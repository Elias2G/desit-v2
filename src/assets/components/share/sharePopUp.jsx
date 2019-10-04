import React, { useState } from 'react';

import { Share } from '../../media/icons';

export const SharePopUp = (props) => {
  const [ open, setOpen ] = useState(false);

  return (
    <div style={{width: '20px', height: '20px'}} onClick={() => setOpen(!open)}>
      <Share>

      </Share>
    </div>
  )
};
