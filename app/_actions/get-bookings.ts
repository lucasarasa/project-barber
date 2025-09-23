"use server"

import { endOfDay, startOfDay } from "date-fns"
import { db } from "../_lib/prisma"

interface GetBookingProps {
  serviceId: string
  date: Date
}

export const getBookings = ({ date }: GetBookingProps) => {
  // se fizer com const, colocar async
  //   const bookings = await db.booking.findMany({
  // ou
  return db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date), // less than or equal que é menor ou igual,
        gte: startOfDay(date), // greater than or equal que é maior ou igual, usados para pegar todos os agendamentos do dia
      },
    },
  })
  //   ou
  //   return bookings
}
