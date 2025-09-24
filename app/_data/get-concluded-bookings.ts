"use server"

import { getServerSession } from "next-auth"
import { db } from "../_lib/prisma"
import { authOptions } from "../_lib/auth"

export const getCocludedBookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return []
  }
  return db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lte: new Date(), // less than or equal to que serve para pegar datas passadas
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: { date: "asc" },
  })
}
