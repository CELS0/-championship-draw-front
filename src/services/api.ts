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
    {
      id: 4408284,
      name: "VINÍCIUS FRANÇA",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/7422217f141fce11102cfd1f4aea2058-vinicius.jpeg",
      bowl: 1,
      is_active: true,
    },
    {
      id: 4689046,
      name: "CÁSSIO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/a4e793a48626e9e3e7f787847cefefe5-cassio.jpg",
      bowl: 1,
      is_active: true,
    },
    {
      id: 5107380,
      name: "MATEUS BORRACHA ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/c9f5b2dd320a09604deeff0888638871-borracha.jpg",
      bowl: 1,
      is_active: true,
    },
    {
      id: 1574746,
      name: "FABRÍCIO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+17.44+1.png",
      bowl: 1,
      is_active: true,
    },
    {
      id: 1172722,
      name: "ZÉ ROBERTO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/f79349ad86f31fef7014212755b93a40-ze.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 924870,
      name: "DAVI COBRÃO ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/05f0ad1d5ed28e77d9e0e9d2d1b92a02-davi.jpg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 6078678,
      name: "MICHAEL",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/1381fb17dc4465bb52537a920d9520c8-michael.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 3714601,
      name: "LUIZ EDUARDO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+17.43.08.jpeg",
      bowl: 2,
      is_active: true,
    },
    {
      id: 5260060,
      name: "MAICON GUEDES",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.08+1.png",
      bowl: 3,
      is_active: true,
    },
    {
      id: 1038669,
      name: "MARCELO ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/0f3b69808145188229515030a0376464-marcelo.jpg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 1411942,
      name: "MATHEUS PEREIRA",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/203044c5371d847c1cb598942caab152-pereira.jpeg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 4972295,
      name: "JOÃO VICTOR ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/4af44284ada397a9c42c62250e85b6c2-vitin.jpg",
      bowl: 3,
      is_active: true,
    },
    {
      id: 8875839,
      name: "JUAREZ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/4f2884c5987e014b99775e311efdcf10-juarezz.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 2384525,
      name: "FELIPE DE EVALDO ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+17.49+1.png",
      bowl: 4,
      is_active: true,
    },
    {
      id: 8248850,
      name: "BOLOSO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/2c0d8e8eb53169eedebf2905373019ce-boloso.jpeg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 2219605,
      name: "HUGO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/105602c3baa9ce1e767a11e91c7639bc-hugo.jpg",
      bowl: 4,
      is_active: true,
    },
    {
      id: 7435708,
      name: "JIU",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/fe2dafd1c97a141fe26577b95841b5f8-laser.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 4773606,
      name: "PEDRO AFONSO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/8604b72e33038008f72192e784ef34ef-pa.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 2507472,
      name: "RONALDO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+17.48.29.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 3357365,
      name: "RONUBEM",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.24.24.jpeg",
      bowl: 5,
      is_active: true,
    },
    {
      id: 9444853,
      name: "WALTER ORIGINAL ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/676445d8f151e245004769f30d161a6a-walter.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 4744274,
      name: "ZUZIN",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/eb36240407c57accd92481bd0c413945-zu.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 2340684,
      name: "JOAQUIM",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.32.16.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 3966774,
      name: "NEIMAR",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.31.21.jpeg",
      bowl: 6,
      is_active: true,
    },
    {
      id: 9535113,
      name: "MATEUSINHO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.34.45.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: 9394436,
      name: "ANDRÉ ",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.33.13.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: 9711288,
      name: "WELDER",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.33.54.jpeg",
      bowl: 7,
      is_active: true,
    },
    {
      id: 7814839,
      name: "FERNANDO",
      photo:
        "https://uploadnodejs.s3.amazonaws.com/WhatsApp+Image+2022-12-28+at+18.27.12.jpeg",
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
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
    is_active: true,
    bowl,
  },
  {
    id: generateId(),
    name: "",
    photo:
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
    is_active: true,
    bowl,
  },
  {
    id: generateId(),
    name: "",
    photo:
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
    is_active: true,
    bowl,
  },
  {
    id: generateId(),
    name: "",
    photo:
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
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
          "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
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
    if (player.name === "JIU" && player.is_active === true) {
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
