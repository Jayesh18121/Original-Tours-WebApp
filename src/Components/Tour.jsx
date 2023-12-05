import { useState } from "react";

const Tour = ({ id, image,info,name,price, removeId }) => {
  const [show, setShow] = useState(false);
  const getToggle = () => {
    setShow(!show);
  };
  console.log(id);
  return (
    <div>
      <div className="single-tour">
        <img src={image} className="img" />
        <div className="tour-price">{price}</div>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>{show ? info : info.substring(0, 200) + "..."}</p>
          <button className="info-btn" onClick={getToggle}>
            {show ? "Read less..." : "Read More..."}
          </button>
        </div>
        <button className="delete-btn" onClick={() => removeId(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
