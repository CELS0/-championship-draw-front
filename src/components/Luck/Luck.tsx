import { useContext, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./styles.scss";
import { getBowls, getPlayerByPhoto } from "../../services/api";
import { AuthContext } from "../../contexts/auth";

type IReponse = {
  id: number;
  name: string;
  img: string;
  bowl: number;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
};

export function Luck() {
  const [img1, setImg1] = useState(
    "https://torneifranca.s3.amazonaws.com/perfil.jpg"
  );
  const [img2, setImg2] = useState(
    "https://torneifranca.s3.amazonaws.com/perfil.jpg"
  );
  const [img3, setImg3] = useState(
    "https://torneifranca.s3.amazonaws.com/perfil.jpg"
  );
  const [img4, setImg4] = useState(
    "https://torneifranca.s3.amazonaws.com/perfil.jpg"
  );
  const [bowl, setBowl] = useState(1);
  const { handleIsactive, setModal, modal, getUpdadePlayer } =
    useContext(AuthContext);

  useEffect(() => {
    handleListPlays();
  }, [modal]);

  function handleListPlays() {
    handleIsactive(true);
    const result = getBowls(bowl);
    var count = 0;
    result.map((play) => {
      count++;
      switch (count) {
        case 1:
          setImg1(play.photo);
          break;
        case 2:
          setImg2(play.photo);
          break;
        case 3:
          setImg3(play.photo);
          break;
        case 4:
          setImg4(play.photo);
          handleIsactive(false);
          break;
      }
    });
  }

  function handleUpdatePlayer(photoPlayer: string) {
    const player = getPlayerByPhoto(photoPlayer);

    if (player) {
      const { id, name, photo, bowl } = player;
      getUpdadePlayer(id, name, photo, bowl);
    } else {
      getUpdadePlayer(
        1,
        "",
        "https://torneifranca.s3.amazonaws.com/perfil.jpg",
        0
      );
    }

    setModal(true);
  }

  return (
    <div className="container-luck">
      <img src="https://torneifranca.s3.amazonaws.com/camp.jpeg" />
      <div className="content-luck">
        <h1>SORTEIO CAMPEONATO DOS FRANÇAS</h1>
        <h2>Jogadores do Pote: {bowl}</h2>
        <div>
          <img src={img1} onClick={() => handleUpdatePlayer(img1)} />
          <img src={img2} onClick={() => handleUpdatePlayer(img2)} />
          <img src={img3} onClick={() => handleUpdatePlayer(img3)} />
          <img src={img4} onClick={() => handleUpdatePlayer(img4)} />
        </div>
        <input
          type="number"
          onChange={(e) => setBowl(Number(e.target.value))}
          placeholder="Número do pote"
        />
        <button className="button" onClick={() => handleListPlays()}>
          <BiSearchAlt />
        </button>
      </div>
      <img src="https://torneifranca.s3.amazonaws.com/ganhadores.jpeg" />
    </div>
  );
}
