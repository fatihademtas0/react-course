import React from "react";

function Games({ game }) {
  const { id, name, description, price, link, image } = game;

  return (
    <div>
      <div className="game">
        <img src={image} alt={name} width={300} height={200} />
        <h4 className="name">{name}</h4>
        <p className="game-desc">{description}</p>
        <h3 className="game-price">${price}</h3>
        <a href={link} target="_blank" className="game-link">
          Buy the Game
        </a>
      </div>
    </div>
  );
}

export default Games;
