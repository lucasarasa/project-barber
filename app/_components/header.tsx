import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SiderbarSheets from "./sidebar-sheets"
import Link from "next/link"

const Header = () => {
  return (
    <div>
      <Card className="rounded-none border-x-0 border-y-0 border-b p-0">
        <CardContent className="flex flex-row items-center justify-between p-4">
          <Link href="/">
            <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
          </Link>

          {/* composition pattern */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="secondary">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SiderbarSheets />
          </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
