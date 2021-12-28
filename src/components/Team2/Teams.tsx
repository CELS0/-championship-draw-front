import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import './styles.scss'

type Props = {
    team: string;
    img?: string;
}


export function Team2({ team, img }: Props) {
    const { img21, img22, img23, img24, img25, img26, img27, img28, img29,img30,img31,img32} = useContext(AuthContext)


    return (
        <div className="container-team">
            <div>
                <h2>{team}</h2>
                <div>
                    <img src={img21} />
                    <img src={img22} />
                    <img src={img23} />
                    <img src={img24} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img25} />
                    <img src={img26} />
                    <img src={img27} />
                    <img src={img28} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img29} />
                    <img src={img30} />
                    <img src={img31} />
                    <img src={img32} />
                </div>
            </div>
        </div>
    )
}