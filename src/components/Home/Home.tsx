import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Luck } from '../Luck/Luck'
import { Team1 } from '../Team1/Teams'
import { Team2 } from '../Team2/Teams'
import { Team3 } from '../Team3/Teams'
import { Team4 } from '../Team4/Teams'
import './styles.scss'


export function Home() {
    const { luckPlay } = useContext(AuthContext)
    const [cont, setCont] = useState(0)

    function handleStep(newCont: number) {
        setCont(newCont + 1)

        luckPlay(cont)
    }


    return (
        <>
            <div>
                <Luck />
                <button className="button-luck" onClick={() => handleStep(cont)}>SORTEAR</button>
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