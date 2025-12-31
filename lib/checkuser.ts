export const runtime = "nodejs";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  const existingUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (existingUser) return existingUser;

  const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

  return await db.user.create({
    data: {
      clerkUserId: user.id,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
      name,
    },
  });
};
