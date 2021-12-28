import { useState } from "react";
import { Team } from "../Team/Teams";
import './styles.scss'

export function Luck() {
    const [img1, setImg1] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img2, setImg2] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img3, setImg3] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img4, setImg4] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    return (
        <div className="container-luck">
            <img src="https://uploadnodejs.s3.amazonaws.com/a7ac5fcf44c1a2f79eba08652301fcdc-maxresdefault.jpg" />
            <div className="content-luck">
                <h1>SORTEIO CAMPEONATO DOS FRANÇAS</h1>
                <h2>Jogadores do Pote</h2>
                <div>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                </div>
                <button>SORTEAR</button>
            </div>
            <img src="https://uploadnodejs.s3.amazonaws.com/d4d542df290b9cfd6173708e6d7b80d8-messi_graphic.jpg" />
        </div>
    )
}