import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import { Luck } from '../Luck/Luck'
import { Team1 } from '../Team1/Teams'
import { Team2 } from '../Team2/Teams'
import { Team3 } from '../Team3/Teams'
import { Team4 } from '../Team4/Teams'
import toast, { Toaster } from "react-hot-toast";

import './styles.scss'


var count = 0
export function Home() {
        toast.success("Reset success!")
    
    const { luckPlay, message, handleIsactive, isActive, img } = useContext(AuthContext)
    const [cont, setCont] = useState(0)

    function handleStep(newCont: number) {
        count++;

        console.log(img, message)
        if (count <= 3) {
            setCont(newCont + 1)
        }
        if (count == 4) {
            handleIsactive(false);
            toast.success('Todos jogadores nesse pote já foram sorteados')
            setCont(newCont + 1)
            count = 0
        }

        luckPlay(cont)
    }

    async function handleReset() {
        await api.post('/reset')

        window.location.reload();
    }


    return (
        <>
            <div>
                <Toaster />
                <Luck />
                {isActive == true ?
                    <button className="button-luck" onClick={() => handleStep(cont)}>SORTEAR</button>
                    : null
                }
                <button className="button-reset" onClick={() => handleReset()}>RESET</button>
            </div>
            <div className="contanier-home">
                <Team1 team="Tolima" />
                <Team2 team="Paysandu" />
                <Team3 team="Bragantino" />
                <Team4 team="Andarilhos_do_Sertão" />
            </div>
        </>
    )
}