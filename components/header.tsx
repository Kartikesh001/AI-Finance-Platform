import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkuser";

const Header = async() => {
  await checkUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/okkk.jpg"
            alt="wealth-logo"
            width={60}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Auth buttons */}
        <div className="flex items-center space-x-4">
            <SignedIn>
                <Link href={"/dashboard"} className="text-gray-600 hover:text-red-600 flex items-center gap-2">
                <Button variant="outline">
                    <LayoutDashboard size={18}/>
                <span className="hidden md:inline">Dashboard</span>
                </Button>
                </Link>
                <Link href={"/transactions/create"}>
                <Button >
                    <PenBox size={18}/>
                <span className="hidden md:inline">Transactions</span>
                </Button>
                </Link>




            </SignedIn>
          <SignedOut>
            <Button variant="outline">login</Button>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{
                elements:{
                AvatarBox:"w-10 h-10 rounded-full",
                }
            }}/>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
