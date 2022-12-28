 
import React from "react";
const RippleButton = ({ children, onClick }) => {
    const [coords, setCoords] = React.useState({ x: -10, y: -10 });
    const [isRippling, setIsRippling] = React.useState(false);
  
    React.useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
      } else setIsRippling(false);
    }, [coords]);
  
    React.useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);
  
    return (
      <button
        className="ripple-button"
        onClick={e => {
          const rect = e.target.getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);
        }}
      >
        {isRippling ? (
          <span
            className="ripple"
            style={{
              left: coords.x - 20,
              top: coords.y - 20
            }}
          />
        ) : (
          ''
        )}
        <span className="content">{children}</span>
      </button>
    );
  };

  export default RippleButton;