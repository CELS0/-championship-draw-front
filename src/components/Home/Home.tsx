import { Luck } from '../Luck/Luck'
import { Team } from '../Team/Teams'
import './styles.scss'


export function Home() {
    return (
        <>
            <Luck />
            <div className="contanier-home">
                <Team />
                <Team />
                <Team />
                <Team />
            </div>
        </>
    )
}