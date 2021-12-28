import { Luck } from '../Luck/Luck'
import { Team } from '../Team/Teams'
import './styles.scss'


export function Home() {
    return (
        <>
            <Luck />
            <div className="contanier-home">
                <Team team="Tolima"/>
                <Team team="Paysandu"/>
                <Team team="Bragantino"/>
                <Team team="Andarilhos_do_Sertão"/>
            </div>
        </>
    )
}