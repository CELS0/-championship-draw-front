import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type AutheResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    bowl: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    handleBowl: (newBowl: string) => void;
    luckPlay: (numberBowl: number) => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
    children: ReactNode;
}

export function AuthProvider(props: AuthProvider) {
    const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=473ca6385c1f1ae4800b';
    const [user, setUser] = useState<User | null>(null)
    const [bowl, setBowl] = useState('')

    const [img1, setImg1] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img2, setImg2] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img3, setImg3] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img4, setImg4] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')

    async function signIn(githubCode: string) {
        const response = await api.post<AutheResponse>('/authenticate', {
            code: githubCode,
        })

        const { token, user } = response.data;

        localStorage.setItem('@dowhile:token', token)
        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user)
    }

    function handleBowl(newBowl: string) {
        setBowl(newBowl)
    }


    async function luckPlay(numberBowl: number) {
        const { data } = await api.get(`/luck?bowl=${bowl}`)
        const { img } = data;

        console.log('AAAAAAA',img)
        console.log('OOOOOOO',numberBowl)
        console.log('UUUUUUUU',img1)


        switch (numberBowl) {
            case 0:
                setImg1(img)
                break;
            case 1:
                setImg2(img)
                break;
            case 2:
                setImg3(img)
                break;
            case 3:
                setImg4(img)
                break;
        }

    }



    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithGithubCode, githubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithGithubCode)

            signIn(githubCode)
        }
    })

    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token')

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<User>('/profile').then(response => {
                setUser(response.data)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user, handleBowl, bowl, luckPlay, img1, img2, img3, img4 }}>
            {props.children}
        </AuthContext.Provider>
    )
}