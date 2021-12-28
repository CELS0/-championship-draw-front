import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import { Luck } from '../Luck/Luck'
import { Team } from '../Team/Teams'
import './styles.scss'


export function Home() {
    const { bowl } = useContext(AuthContext)

    async function luckPlay() {
        const { data } = await api.get(`/luck?bowl=${bowl}`)
        console.log(data)
    }

    return (
        <>
            <div>
                <Luck />
                <button className="button-luck" onClick={()=>luckPlay()}>SORTEAR</button>

            </div>
            <div className="contanier-home">
                <Team team="Tolima" />
                <Team team="Paysandu" />
                <Team team="Bragantino" />
                <Team team="Andarilhos_do_Sertão" />
            </div>
        </>
    )
}