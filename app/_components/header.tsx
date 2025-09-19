"use client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <div>
      <Card className="rounded-none border-x-0 border-y-0 border-b p-0">
        <CardContent className="flex flex-row items-center justify-between p-4">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

          {/* composition pattern */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar>

                <div>
                  <p className="font-bold">Lucas Sarasa</p>
                  <p className="text-xs">lucas@fswbarber.io</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                  <Button
                    className="justify-start gap-2"
                    variant="ghost"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon size={18} />
                      Inicio
                    </Link>
                  </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                  <CalendarIcon size={18} />
                  Agendamentos
                </Button>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                  <Button
                    key={option.title}
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    <Image
                      alt={option.title}
                      src={option.imageUrl}
                      height={18}
                      width={18}
                    />
                    {option.title}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2">
                  <LogOutIcon size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
