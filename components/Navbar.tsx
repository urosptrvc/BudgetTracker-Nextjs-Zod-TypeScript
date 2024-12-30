import React from 'react'
import Logo, {LogoMobile} from "@/components/Logo";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs';
import {ThemeSwitcherBtn} from "@/components/ThemeSwitcherBtn";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";

function Navbar() {
    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    )
}

const items = [
    {label: "Dashboard", link: "/dashboard"},
    {label: "Transactions", link: "/transactions"},
    {label: "Manage", link: "/manage"},
]


function MobileNavbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="block border-separate bg-background md:hidden">
            <nav className="container flex items-center justify-between px-8">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"ghost"} size={"icon"}>
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col gap-1 pt-4">
                        {items.map((item) => (
                            <NavbarItem
                                key={item.label}
                                label={item.label}
                                link={item.link}
                                clickCallback={() => setIsOpen((prev) => !prev)}
                            />
                        ))}
                    </SheetContent>
                </Sheet>
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <LogoMobile />
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherBtn />
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </nav>
        </div>
    )
}
function DesktopNavbar() {
    return (
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className="container flex items-center justify-between px-8">
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <Logo />
                    <div className="flex h-full"></div>
                    {items.map((item) => (
                        <NavbarItem
                        key={item.label}
                        link={item.link}
                        label={item.label}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherBtn />
                    <UserButton afterSignOutUrl="/sign-in"/>
                </div>
            </nav>
        </div>
    )
}

function NavbarItem({ label, link, clickCallback }:
                    { label: string; link: string, clickCallback? : () => void }) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return(
        <div className="relative flex items-center">
            <Link href={link}
                  className={cn(
                buttonVariants({variant: "ghost"}),
                "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
                isActive && "text-foreground"
            )}
                onClick = {() => {
                    if(clickCallback) clickCallback();
            }}
            >
                {label}
            {isActive && (
                <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] 2-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"/>
            )}
            </Link>
        </div>
    )
}
export default Navbar
