import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import { Luck } from '../Luck/Luck'
import { Team } from '../Team/Teams'
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
                <Team team="Tolima"/>
                <Team team="Paysandu"/>
                <Team team="Bragantino"/>
                <Team team="Andarilhos_do_Sertão"/>
            </div>
        </>
    )
}