export type IPlay = {
  name: string;
  photo: string;
  bowl: number;
  is_active: boolean | null;
};

let db: IPlay[] = [];

const initPlayers = () => {
  const dbtes = localStorage.getItem("players");
  const localDb = JSON.parse(dbtes ? dbtes : "");
  db = localDb;
};

let bowl: number = 1;

const bowlDefault: IPlay[] = [
  {
    name: "",
    photo:
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
    is_active: true,
    bowl,
  },
  {
    name: "",
    photo:
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
    is_active: true,
    bowl,
  },
  {
    name: "",
    photo:
      "https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg",
    is_active: true,
    bowl,
  },
  {
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
      result.push(player);
    }
  });

  if (result.length === 0) {
    return bowlDefault;
  }

  return result;
};
const luckGetPlay = (): IPlay => {
  let indexPlay = 0;
  let playersBowl: IPlay[] = [];
  db.forEach((player) => {
    const onePlayer = player.bowl === bowl && player.is_active === true;
    if (onePlayer) {
      playersBowl.push(player);
    }
  });
  indexPlay = Math.floor(Math.random() * playersBowl.length);

  db.forEach((player, index) => {
    if (player.name === "JIU" && player.is_active === true) {
      player.is_active = false;
      indexPlay = index;
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
    console.log("deu bommmmaaaaaaaaaaaa", db);
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

const updadePlayer = (name: string, photo: string, bowl: number) => {
  db.forEach((player) => {
    const onePlayer = player.bowl === bowl && player.photo === photo;
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
    player.is_active = false;
  });
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
  resetPlayers
};
