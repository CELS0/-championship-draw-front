import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { Luck } from "../Luck/Luck";
import { Team1 } from "../Team1/Teams";
import { Team2 } from "../Team2/Teams";
import { Team3 } from "../Team3/Teams";
import { Team4 } from "../Team4/Teams";
import toast, { Toaster } from "react-hot-toast";

import "./styles.scss";
import { Modal } from "../Modal/Modal";
import { initPlayers, resetPlayers } from "../../services/api";

var count = 0;
export function Home() {
  const { luckPlay, message, handleIsactive, modal, img } =
    useContext(AuthContext);

  const [cont, setCont] = useState(0);

  function handleStep(newCont: number) {
    count++;

    if (count <= 3) {
      setCont(newCont + 1);
    }
    if (count == 4) {
      handleIsactive(false);
      toast.success("Todos jogadores nesse pote já foram sorteados");
      setCont(newCont + 1);
      count = 0;
    }

    luckPlay(cont);
  }

  useEffect(() => {
    initPlayers();
  }, []);

  async function handleReset() {
    toast.success("Reset success!");
    setTimeout(() => {
      resetPlayers()
      window.location.reload();
    }, 1000);
  }

  return (
    <>
      <div>
        <Toaster />
        <Luck />
        <button className="button-luck" onClick={() => handleStep(cont)}>
          SORTEAR
        </button>
        <button className="button-reset" onClick={() => handleReset()}>
          RESET
        </button>
      </div>
      <div className="contanier-home">
        <Team1 team="Andarilhos_do_Sertão" />
        <Team2 team="Paysandu" />
        <Team3 team="Bragantino" />
        <Team4 team="Tolima" />
      </div>
      {modal && <Modal />}
    </>
  );
}
