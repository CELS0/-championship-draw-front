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
    "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg"
  );
  const [img2, setImg2] = useState(
    "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg"
  );
  const [img3, setImg3] = useState(
    "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg"
  );
  const [img4, setImg4] = useState(
    "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg"
  );
  const [bowl, setBowl] = useState(1);
  const { handleIsactive, setModal, modal, getUpdadePlayer } =
    useContext(AuthContext);

  const [photoPlayer, setPhotoPlayer] = useState("");
  const [bowlPlayer, setbowlPlayer] = useState(0);
  const [namePlayer, setNamePlayer] = useState("");

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
      const { name, photo, bowl } = player;
      getUpdadePlayer(name, photo, bowl);
    }else{
      getUpdadePlayer('', '', 0);
    }

    setModal(true);
  }

  return (
    <div className="container-luck">
      <img src="https://uploadnodejs.s3.amazonaws.com/a7ac5fcf44c1a2f79eba08652301fcdc-maxresdefault.jpg" />
      <div className="content-luck">
        <h1>SORTEIO CAMPEONATO DOS FRANÇAS</h1>
        <h2>Jogadores do Pote</h2>
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
      <img src="https://uploadnodejs.s3.amazonaws.com/d4d542df290b9cfd6173708e6d7b80d8-messi_graphic.jpg" />
    </div>
  );
}
