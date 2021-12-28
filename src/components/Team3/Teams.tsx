import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import './styles.scss'

type Props = {
    team: string;
    img?: string;
}


export function Team3({ team, img }: Props) {
    // const [img1, setImg1] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    // const [img2, setImg2] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    // const [img3, setImg3] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    // const [img4, setImg4] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img5, setImg5] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img6, setImg6] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img7, setImg7] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img8, setImg8] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img9, setImg9] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img10, setImg10] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img11, setImg11] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img12, setImg12] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')

    const { img41, img42, img43, img44 } = useContext(AuthContext)


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
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                    <img src={img8} />
                </div>
            </div>
            <div>
                <div>
                    <img src={img9} />
                    <img src={img10} />
                    <img src={img11} />
                    <img src={img12} />
                </div>
            </div>
        </div>
    )
}