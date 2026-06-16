import { PrismaClient } from '@repo/database';

const prisma = new PrismaClient();

export const getPlayers = async () => {
  return prisma.player.findMany();
};
