import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import { Luck } from '../Luck/Luck'
import { Team } from '../Team/Teams'
import './styles.scss'


export function Home() {
    const { luckPlay } = useContext(AuthContext)
    const [img, setImg] = useState('')


    return (
        <>
            <div>
                <Luck />
                <button className="button-luck" onClick={() => luckPlay()}>SORTEAR</button>
            </div>
            <div className="contanier-home">
                <Team team="Tolima" img={img}/>
                <Team team="Paysandu" img={img}/>
                <Team team="Bragantino" img={img}/>
                <Team team="Andarilhos_do_Sertão" img={img} />
            </div>
        </>
    )
}