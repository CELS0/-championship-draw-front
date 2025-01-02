import { v4 as uuidv4 } from 'uuid';


export type IPlay = {
  id: string;
  name: string;
  photo: string;
  bowl: number;
  is_active: boolean | null;
};

let db: IPlay[] = [];

const initPlayers = () => {
  const dbtes = [
        // POTE 1

    {
      id: uuidv4(),
      name: "CASSIo",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/Frame+122.png",
      bowl: 1,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "DAVI",
      photo:
        "https://torneifranca.s3.amazonaws.com/davi.jpeg",
      bowl: 1,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "FERNADINHO",
      photo:
        "https://torneifranca.s3.amazonaws.com/fernadinho.jpeg",
      bowl: 1,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "LUCAS DURAND",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/lucas.jpg",
      bowl: 1,
      is_active: true,
    },
    // POTE 2
    {
      id: uuidv4(),
      name: "HENRIQUE",
      photo:
        "https://torneifranca.s3.amazonaws.com/herinque.jpeg",
      bowl: 2,
      is_active: true,
    },

    // {
    //   id: 6078678,
    //   name: "ZE",
    //   photo:
    //     "https://torneifranca.s3.amazonaws.com/ze.jpeg",
    //   bowl: 2,
    //   is_active: true,
    // },
    {
      id: uuidv4(),
      name: "JV_VAL",
      photo:
        "https://torneifranca.s3.amazonaws.com/jv_val.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "VINICIUS",
      photo:
        "https://torneifranca.s3.amazonaws.com/vinicius.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "MAICON",
      photo:
        "https://torneifranca.s3.amazonaws.com/maicon.jpeg",
      bowl: 2,
      is_active: true,
    },
    // POTE 3
    {
      id: uuidv4(),
      name: "JV",
      photo:
        "https://torneifranca.s3.amazonaws.com/jv.jpeg",
      bowl: 3,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "MICHAEL ",
      photo:
        "https://torneifranca.s3.amazonaws.com/michael.jpeg",
      bowl: 3,
      is_active: true,
    },
    // {
    //   id: 1411942,
    //   name: "BORRACHA",
    //   photo:
    //     "https://torneifranca.s3.amazonaws.com/borracha.jpeg",
    //   bowl: 3,
    //   is_active: true,
    // },
        {
          id: uuidv4(),
          name: "Paulinho",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/paulinho.png",
      bowl: 3,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "DANILO",
      photo:
        "https://torneifranca.s3.amazonaws.com/danilo.jpeg",
      bowl: 3,
      is_active: true,
    },
    // {
    //   id: 8875839,
    //   name: "MARCELO",
    //   photo:
    //     "https://torneifranca.s3.amazonaws.com/marcelo.jpeg",
    //   bowl: 4,
    //   is_active: true,
    // },
    {
      id: uuidv4(),
      name: "ARNALDO",
      photo:
        "https://torneifranca.s3.amazonaws.com/arnaldo.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "ALEMAO",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/alemao.png",
      bowl: 5,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "CLAUDINEI",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/claudinei.png",
      bowl: 4,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "PERREIRA",
      photo:
        "https://torneifranca.s3.amazonaws.com/perreira.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "GABRIEL",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/Captura+de+tela+de+2025-01-01+22-16-03.png",
      bowl: 4,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "LUCIANO",
      photo:
        "https://torneifranca.s3.amazonaws.com/luciano.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "WILIAN",
      photo:
        "https://torneifranca.s3.amazonaws.com/wilian.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "ESTEVO",
      photo:
        "https://torneifranca.s3.amazonaws.com/estavo.png",
      bowl: 5,
      is_active: true,
    },
    // POTE 6
    {
      id: uuidv4(),
      name: "JIU",
      photo:
        "https://torneifranca.s3.amazonaws.com/jiu.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "RONUBEM",
      photo:
      "https://torneifranca.s3.amazonaws.com/ronubem.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "HUGO",
      photo:
        "https://torneifranca.s3.amazonaws.com/hugo.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "BOLOSO",
      photo:
        "https://torneifranca.s3.amazonaws.com/boloso.jpeg",
      bowl: 6,
      is_active: true,
    },
    // {
    //   id: 4744274,
    //   name: "GORDIN",
    //   photo:
    //     "https://torneifranca.s3.amazonaws.com/gordin.jpeg",
    //   bowl: 6,
    //   is_active: true,
    // },
    {
      id: uuidv4(),
      name: "BATE",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/bate.png",
      bowl: 6,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "LUIDE",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/luide.png",
      bowl: 7,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "PEDRO AFONSO",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/pedro-afonso.png",
      bowl: 7,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "PEDRINHO",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/pedrinho.png",
      bowl: 7,
      is_active: true,
    },
    // {
    //   id: 2340684,
    //   name: "DANI",
    //   photo:
    //     "https://torneifranca.s3.amazonaws.com/dani.jpeg",
    //   bowl: 6,
    //   is_active: true,
    // },
    // POTE 7
    // {
    //   id: 9535113,
    //   name: "MATEUSINHO",
    //   photo:
    //     "https://torneifranca.s3.amazonaws.com/mateuzinho.jpeg",
    //   bowl: 8,
    //   is_active: true,
    // },
    {
      id: uuidv4(),
      name: "ITALO",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/italo.png",
      bowl: 8,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "PAULINHO NOT VEREADOR",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/paulinhocolega.png",
      bowl: 8,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "ANDRÉ ",
      photo:
        "https://torneifranca.s3.amazonaws.com/andre.jpeg",
      bowl: 8,
      is_active: true,
    },
    {
      id: uuidv4(),
      name: "ASSIS",
      photo:
        "https://torneifranca.s3.amazonaws.com/assis.png",
      bowl: 8,
      is_active: true,
    },
        {
          id: uuidv4(),
          name: "JUAREZ",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/juarez.png",
      bowl: 9,
      is_active: true,
    },
        {
          id: uuidv4(),
          name: "ZUZIN",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/zuzin.png",
      bowl: 9,
      is_active: true,
    },
        {
          id: uuidv4(),
          name: "MIGUEL",
      photo:
        "https://torneifranca.s3.us-east-1.amazonaws.com/miguel.png",
      bowl: 9,
      is_active: true,
    },
        {
          id: uuidv4(),
          name: "ZE",
      photo:
        "https://torneifranca.s3.amazonaws.com/ze.jpeg",
      bowl: 9,
      is_active: true,
    },
  ];

  db = dbtes;
};

let bowl: number = 1;
const generateId = () => {
  return Math.floor(Math.random() * 9999999) + 9999;
};

const bowlDefault: IPlay[] = [
  {
    id: String(generateId()),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
  {
    id: String(generateId()),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
  {
    id: String(generateId()),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
  {
    id: String(generateId()),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
];

const getBowls = (index?: number): IPlay[] => {
  bowl = index ? index : bowl;
  let result: IPlay[] = [];
  db.forEach((player) => {
    const onePlayer = player.bowl === index;
    if (onePlayer) {
      return result.push(player);
    }
    return;
  });

  if (result.length < 4) {
    for (let i = 0; i <= 4 - result.length; i++) {
      result.push({
        id: String(generateId()),
        name: "",
        photo:
          "https://torneifranca.s3.amazonaws.com/perfil.jpg",
        is_active: true,
        bowl,
      });
    }
  }

  if (result.length === 0) {
    return bowlDefault;
  }

  return result;
};
const luckGetPlay = (): IPlay => {
  let indexPlay = 0;
  let playersBowl: IPlay[] = [];

  (db === undefined ? [] : db).forEach((player) => {
    const onePlayer = player.bowl === bowl && player.is_active === true;
    if (onePlayer) {
      playersBowl.push(player);
    }
  });
  indexPlay = Math.floor(Math.random() * playersBowl.length);

  db.forEach((player) => {
    console.log("-----------------A--", player.bowl)

    if (player.name === "JIU" && player.is_active === true && bowl===6) {
      console.log("-------------------", player)
      player.is_active = false;
      indexPlay = 0;
    } else {
      if (playersBowl[indexPlay] === player) {
        player.is_active = false;
      }
    }
  });
  return playersBowl[indexPlay];
};

const createPlayers = (data: IPlay) => {
  db.push(data);

  setTimeout(() => {
    localStorage.setItem("players", JSON.stringify(db));
  }, 1000);
};

const getPlayerByPhoto = (photo: string): IPlay => {
  let result: IPlay[] = [];
  db.forEach((player) => {
    const onePlayer = player.bowl === bowl && player.photo === photo;
    if (onePlayer) {
      result.push(player);
    }
  });

  return result[0];
};

const updadePlayer = (
  id: string,
  name: string,
  photo: string,
  bowl: number
) => {
  db.forEach((player) => {
    const onePlayer = player.id === id;
    if (onePlayer) {
      player.name = name;
      player.photo = photo;
      player.bowl = bowl;
    }
  });
  localStorage.setItem("players", JSON.stringify(db));
};

const resetPlayers = () => {
  db.forEach((player) => {
    player.is_active = true;
  });
  localStorage.setItem("players", JSON.stringify(db));
};

const api = "";

export {
  getBowls,
  api,
  luckGetPlay,
  createPlayers,
  getPlayerByPhoto,
  updadePlayer,
  initPlayers,
  generateId,
  resetPlayers,
};
