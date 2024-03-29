export type IPlay = {
  id: number;
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
      id: 4408284,
      name: "VINICIUS",
      photo:
        "https://torneifranca.s3.amazonaws.com/vinicius.jpeg",
      bowl: 1,
      is_active: true,
    },
    {
      id: 4689046,
      name: "DAVI",
      photo:
        "https://torneifranca.s3.amazonaws.com/davi.jpeg",
      bowl: 1,
      is_active: true,
    },
    {
      id: 5107380,
      name: "FERNADINHO",
      photo:
        "https://torneifranca.s3.amazonaws.com/fernadinho.jpeg",
      bowl: 1,
      is_active: true,
    },
    {
      id: 1574746,
      name: "JV_VAL",
      photo:
        "https://torneifranca.s3.amazonaws.com/jv_val.jpeg",
      bowl: 1,
      is_active: true,
    },
    // POTE 2
    {
      id: 1172722,
      name: "HENRIQUE",
      photo:
        "https://torneifranca.s3.amazonaws.com/herinque.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 924870,
      name: "CASSIo",
      photo:
        "https://torneifranca.s3.amazonaws.com/cassio.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 6078678,
      name: "ZE",
      photo:
        "https://torneifranca.s3.amazonaws.com/ze.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 3714601,
      name: "MAICON",
      photo:
        "https://torneifranca.s3.amazonaws.com/maicon.jpeg",
      bowl: 2,
      is_active: true,
    },
    // POTE 3
    {
      id: 5260060,
      name: "JV",
      photo:
        "https://torneifranca.s3.amazonaws.com/jv.jpeg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 1038669,
      name: "MICHAEL ",
      photo:
        "https://torneifranca.s3.amazonaws.com/michael.jpeg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 1411942,
      name: "BORRACHA",
      photo:
        "https://torneifranca.s3.amazonaws.com/borracha.jpeg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 4972295,
      name: "DANILO",
      photo:
        "https://torneifranca.s3.amazonaws.com/danilo.jpeg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 8875839,
      name: "MARCELO",
      photo:
        "https://torneifranca.s3.amazonaws.com/marcelo.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 2384525,
      name: "ARNALDO",
      photo:
        "https://torneifranca.s3.amazonaws.com/arnaldo.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 8248850,
      name: "PERREIRA",
      photo:
        "https://torneifranca.s3.amazonaws.com/perreira.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 2219605,
      name: "LUCIANO",
      photo:
        "https://torneifranca.s3.amazonaws.com/luciano.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 7435708,
      name: "BOLOSO",
      photo:
        "https://torneifranca.s3.amazonaws.com/boloso.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 4773606,
      name: "PEDRO AFONSO",
      photo:
        "https://torneifranca.s3.amazonaws.com/hugo.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 2507472,
      name: "WILIAN",
      photo:
        "https://torneifranca.s3.amazonaws.com/wilian.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 3357365,
      name: "ESTEVO",
      photo:
        "https://torneifranca.s3.amazonaws.com/estavo.png",
      bowl: 5,
      is_active: true,
    },
    // POTE 6
    {
      id: 3966774,
      name: "JIU",
      photo:
        "https://torneifranca.s3.amazonaws.com/jiu.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 9444853,
      name: "RONUBEM",
      photo:
      "https://torneifranca.s3.amazonaws.com/ronubem.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 4744274,
      name: "GORDIN",
      photo:
        "https://torneifranca.s3.amazonaws.com/gordin.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 2340684,
      name: "DANI",
      photo:
        "https://torneifranca.s3.amazonaws.com/dani.jpeg",
      bowl: 6,
      is_active: true,
    },
    // POTE 7
    {
      id: 9535113,
      name: "MATEUSINHO",
      photo:
        "https://torneifranca.s3.amazonaws.com/mateuzinho.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: 9394436,
      name: "ANDRÉ ",
      photo:
        "https://torneifranca.s3.amazonaws.com/andre.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: 9711288,
      name: "PAULINHO",
      photo:
        "https://torneifranca.s3.amazonaws.com/paulinho.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: 7814839,
      name: "ASSIS",
      photo:
        "https://torneifranca.s3.amazonaws.com/assis.png",
      bowl: 7,
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
    id: generateId(),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
  {
    id: generateId(),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
  {
    id: generateId(),
    name: "",
    photo:
      "https://torneifranca.s3.amazonaws.com/perfil.jpg",
    is_active: true,
    bowl,
  },
  {
    id: generateId(),
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
        id: generateId(),
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
  id: number,
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
