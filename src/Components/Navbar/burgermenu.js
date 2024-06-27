import React, { useState } from 'react';


const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="boxx">
      <div 
        className={`burgerButton ${isActive ? 'active mar-top' : 'not-active'}`} 
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ToggleButton;