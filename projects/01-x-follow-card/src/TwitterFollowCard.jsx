import React, { useState } from "react";

const TwitterFollowCard = ({ children, formattedUserName, userName, initialFollowing }) => {
  // Guardo la imagen en una variable.
  const imgSrc = `https://unavatar.io/twitter/${userName}`;
  // Hook para darle funcionalidad al botón de seguir.
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  // Mostramos el texto de "Seguir" o "Siguiendo" según la condición.
  const btnText = isFollowing ? "Siguiendo" : "Seguir";
  // Cambiamos la clase del botón sí btnText es true o false.
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  // Creamos la función "handleClick" para hacer funcionar el hook previo.
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      {/* Contenido de la izquierda */}
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgSrc} alt={children} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formattedUserName(userName)}
          </span>
        </div>
      </header>
      {/* Contenido de la derecha */}
      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{btnText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
