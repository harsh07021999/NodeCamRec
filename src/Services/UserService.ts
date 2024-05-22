import { PrismaClient } from "../../prisma/generated/prisma-client-js";

const prisma = new PrismaClient();

export async function getUser(id: string | undefined) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  return user;
}

export async function createUser(name: string, email: string) {
  return await prisma.user.create({
    data: { name: name, email: email },
  });
}
