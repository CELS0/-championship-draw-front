import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import './styles.scss'

type Props = {
    team: string;
    img?: string;
}


export function Team4({ team, img }: Props) {
    const { img61, img62, img63, img64, img65, img66, img67, img68, img69, img70, img71, img72} = useContext(AuthContext)


    return (
        <div className="container-team">
            <div>
                <h2>{team}</h2>
                <div>
                    <img src={img61} />
                    <img src={img62} />
                    <img src={img63} />
                    <img src={img64} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img65} />
                    <img src={img66} />
                    <img src={img67} />
                    <img src={img68} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img69} />
                    <img src={img70} />
                    <img src={img71} />
                    <img src={img72} />
                </div>
            </div>
        </div>
    )
}