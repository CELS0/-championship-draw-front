import "./styles.scss";

import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { createPlayers } from "../../services/api";

export function Modal() {
  const { setModal } = useContext(AuthContext);
  const [photo, setPhoto] = useState("");
  const [bowl, setbowl] = useState(0);
  const [name, setName] = useState("");

  function handleSaverPlayer() {
    setModal(false);
    createPlayers({ name: name.toUpperCase(), photo, bowl, is_active: true });
  }

  return (
    <div className="container-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Novo jogador</h2>
          <AiOutlineClose size={32} onClick={() => setModal(false)} />
        </div>

        <h4>Nome:</h4>
        <input
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
        ></input>
        <h4>Image:</h4>
        <input
          onChange={(e) => setPhoto(e.target.value)}
          className="modal-input"
        ></input>
        <h4>Pote:</h4>
        <input
          onChange={(e) => setbowl(Number(e.target.value))}
          type={"number"}
          className="modal-input"
        ></input>

        <button className="modal-button" onClick={() => handleSaverPlayer()}>
          Salvar Jogador
        </button>
      </div>
    </div>
  );
}
