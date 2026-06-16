"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = exports.schema = void 0;
const graphql_1 = require("graphql");
exports.schema = (0, graphql_1.buildSchema)(`
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
exports.root = {
    player: ({ id }) => {
        // Logic to fetch player by ID
        return { id, name: "Lionel Messi", age: 36, team_id: "inter-miami", market_value: 35000000 };
    },
    players: () => {
        // Logic to fetch all players
        return [];
    },
};
