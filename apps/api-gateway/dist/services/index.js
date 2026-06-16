"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayers = void 0;
const database_1 = require("@repo/database");
const prisma = new database_1.PrismaClient();
const getPlayers = async () => {
    return prisma.player.findMany();
};
exports.getPlayers = getPlayers;
