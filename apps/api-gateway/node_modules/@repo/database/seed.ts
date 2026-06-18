import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Create some players
  const p1 = await prisma.player.create({
    data: {
      name: 'Lionel Messi',
      age: 36,
      team_id: '123e4567-e89b-12d3-a456-426614174000',
      market_value: 35000000.00,
    }
  });

  const p2 = await prisma.player.create({
    data: {
      name: 'Kevin De Bruyne',
      age: 32,
      team_id: '123e4567-e89b-12d3-a456-426614174001',
      market_value: 60000000.00,
    }
  });

  const p3 = await prisma.player.create({
    data: {
      name: 'Virgil van Dijk',
      age: 32,
      team_id: '123e4567-e89b-12d3-a456-426614174002',
      market_value: 45000000.00,
    }
  });

  console.log('Database seeded with 3 players.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
