import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import "./styles.scss";

type Props = {
  team: string;
  img?: string;
};

export function Team1({ team, img }: Props) {
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  } = useContext(AuthContext);

  return (
    <div className="container-team">
      <div>
        <h2>{team}</h2>
        <div>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </div>
      </div>
      <div>
        <div>
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
          <img src={img8} />
        </div>
      </div>
      <div>
        <div>
          <img src={img9} />
          <img src={img10} />
          <img src={img11} />
          <img src={img12} />
        </div>
      </div>
    </div>
  );
}
