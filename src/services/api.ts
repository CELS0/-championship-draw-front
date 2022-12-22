export type IPlay = {
  name: string;
  photo: string;
  bowl: number;
  is_active: boolean;
};

const db: IPlay[] = [];

let bowl: number = 1;

const getBowls = (index: number): IPlay[] => {
  bowl = index;
  let result: IPlay[] = [];
  db.forEach((player) => {
    const onePlayer = player.bowl === index;
    if (onePlayer) {
      result.push(player);
    }
  });

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
};

const api = "";

export { getBowls, api, luckGetPlay, createPlayers };
