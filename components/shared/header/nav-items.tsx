import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoreVertical } from "lucide-react";

const NavItems = () => {
  const items = (
    <>
      <ModeToggle />
      <Button asChild variant='ghost'>
        <Link href="/cart">
          <ShoppingCart className="mr-2" />
          Cart
        </Link>
      </Button>
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon className="mr-2" />
          Sign In
        </Link>
      </Button>
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className='hidden md:flex space-x-2'>
        {items}
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
            <MoreVertical />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through our site using the options below.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              {items}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default NavItems; 