import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import './styles.scss'
import { api } from "../../services/api";
import axios from 'axios';

type IReponse = {
    id: number,
    name: string,
    img: string,
    bowl: number,
    isActive: boolean,
    created_at: Date,
    updated_at: Date
}


export function Luck() {
    const [img1, setImg1] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img2, setImg2] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img3, setImg3] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img4, setImg4] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [bowl, setBowl] = useState('');
    const [cont, setCont] = useState(0);


    async function handleCont(currentStep: number) {
        setCont(currentStep + 1)
    }

    async function handleListPlays() {
        const { data } = await api.get<IReponse[]>(`/bowl?bowl=${bowl}`)

        data.map(async play => {
            switch (play.id) {
                case 6:
                    setImg1(play.img)
                    break;
                case 7:
                    setImg2(play.img)
                    break;
                case 8:
                    setImg3(play.img)
                    break;
                case 9:
                    setImg4(play.img)
                    break;
            }
            handleCont(cont)
        })
    }


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
                <input type="text" onChange={(e) => setBowl(e.target.value)} placeholder="Pote" />
                <button className="button" onClick={() => handleListPlays()}><BiSearchAlt /></button>
            </div>
            <img src="https://uploadnodejs.s3.amazonaws.com/d4d542df290b9cfd6173708e6d7b80d8-messi_graphic.jpg" />
        </div>
    )
}