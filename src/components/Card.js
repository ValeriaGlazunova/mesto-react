import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__trash-btn element__trash-btn_visible' : 'element__trash-btn'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `...`; 
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <button
        className={cardDeleteButtonClassName}
        aria-label="удалить"
        type="button"
      ></button>
      <img
        className="element__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-box">
          <button
            aria-label="лайк"
            className="element__like-btn"
            type="button"
          ></button>
          <span className="element__like-nmb">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
