"use client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <div>
      <Card className="rounded-none border-x-0 border-y-0 border-b p-0">
        <CardContent className="flex flex-row items-center justify-between p-4">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
