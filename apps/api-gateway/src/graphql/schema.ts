import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Player {
    id: String!
    name: String!
    age: Int!
    team_id: String!
    market_value: Float!
  }

  type Query {
    player(id: String!): Player
    players: [Player]
  }
`);

export const root = {
  player: ({ id }: { id: string }) => {
    // Logic to fetch player by ID
    return { id, name: "Lionel Messi", age: 36, team_id: "inter-miami", market_value: 35000000 };
  },
  players: () => {
    // Logic to fetch all players
    return [];
  },
};
