import React from "react";

function MyButton(func_create, func_submit) {
  return (
    <div className="btn__container">
      <div className="btn__box">
        <button className="my__btn" onClick={func_create}>
          마커 생성하기
        </button>
      </div>
      <div className="btn__box">
        <button className="my__btn" onClick={func_submit}>
          제출하기
        </button>
      </div>
    </div>
  );
}

export default MyButton;
