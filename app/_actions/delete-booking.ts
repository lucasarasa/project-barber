"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteBooking = async (bookingId: string) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  })
  revalidatePath("/bookings") // caminho que quero revalidar, serve para atualizar a pagina apos a acao
}
