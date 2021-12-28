import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import './styles.scss'

type Props = {
    team: string;
    img?: string;
}


export function Team3({ team, img }: Props) {
    const { img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52} = useContext(AuthContext)


    return (
        <div className="container-team">
            <div>
                <h2>{team}</h2>
                <div>
                    <img src={img41} />
                    <img src={img42} />
                    <img src={img43} />
                    <img src={img44} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img45} />
                    <img src={img46} />
                    <img src={img47} />
                    <img src={img48} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img49} />
                    <img src={img50} />
                    <img src={img51} />
                    <img src={img52} />
                </div>
            </div>
        </div>
    )
}