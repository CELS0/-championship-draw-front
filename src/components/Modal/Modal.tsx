import "./styles.scss";

import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { createPlayers, getBowls, updadePlayer } from "../../services/api";

export function Modal() {
  const { setModal, namePlayer, photoPlayer, bowlPlayer } =
    useContext(AuthContext);
  const [photo, setPhoto] = useState("");
  const [bowl, setbowl] = useState(0);
  const [name, setName] = useState("");

  function handleSaverPlayer() {
    setModal(false);

    if (
      photoPlayer ===
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg"
    ) {
      createPlayers({ name: name.toUpperCase(), photo, bowl, is_active: true });
    } else {
      updadePlayer(name.toUpperCase(), photo, bowl);
    }
  }

  useEffect(() => {
    handleAddPlayer();
  }, []);

  function handleAddPlayer() {
    const result = getBowls();

    setName(namePlayer);
    setPhoto(
      photoPlayer ===
        "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg"
        ? ""
        : photoPlayer
    );
    setbowl(bowlPlayer);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
        ></input>
        <h4>Image:</h4>
        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="modal-input"
        ></input>
        <h4>Pote:</h4>
        <input
          value={bowl}
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
