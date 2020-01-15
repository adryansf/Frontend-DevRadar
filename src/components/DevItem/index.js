import React from "react";

import "./styles.css";
import remove from "../../assets/times-solid.svg";

export default function DevItem({ dev, handleRemove }) {
  return (
    <li className="dev-item">
      <button>
        <img
          src={remove}
          alt={`remove_${dev.name}`}
          onClick={() => handleRemove(dev._id)}
        />
      </button>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev?.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no GitHub
      </a>
    </li>
  );
}
