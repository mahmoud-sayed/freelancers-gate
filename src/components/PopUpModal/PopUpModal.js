import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
const PopUpModal = ({ open, children }) => {
  if (!open) return null;
  return (
    <section className='popup-wrapper'>
      <div className='overlay'></div>
      <div className='popup'>
        <div className='popup-content'>
          {children}
        </div>
      </div>
    </section>
  );
};
export default PopUpModal;

ReactDOM.render(<PopUpModal />, document.getElementById('portal'));
