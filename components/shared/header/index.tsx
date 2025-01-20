import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./nav-items";

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className="flex-start">
                        <Image
                        priority={true}
                        src='/images/logo.svg'
                        width={48}
                        height={48}
                        alt={`${APP_NAME} logo`}
                        />
                        <span className="hidden lg:block font-bold text-2xl ml-3">
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <div className='space-x-2'>
                    <NavItems />
                </div>
            </div>
        </header>
    )
}
 
export default Header;


