"use client";
import Link from "next/link";

import { ThemeToggle } from "@/components/main-layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-layout/main-nav";
import { Search } from "lucide-react";
import * as React from "react";
import { UserMenu } from "./user-menu";
import Image from "next/image";
import AppLogo from "@/assets/app-logo.svg";

let userLoggedIn = true;

export function SiteHeader() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(userLoggedIn);

	return (
		<header className="sticky top-0 z-40 flex justify-center w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				{/* Logo section */}
				<div className="flex gap-6 md:gap-10">
					<Link href="/" className="flex items-center space-x-2">
						<Image src={AppLogo} alt="alt" width={32} height={32} />
						<span className="inline-block font-bold">Modern UI</span>
					</Link>
					<MainNav />
				</div>

				{/* Search Right section */}
				<div className="flex flex-1 items-center justify-end space-x-4">
					{/* Search */}
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<Button variant="outline" size="icon" className="mr-2">
							<Search className="h-4 w-4" />
							<span className="sr-only">Search</span>
						</Button>
					</div>

					<nav className="flex items-center space-x-2">
						<ThemeToggle />

						{/* Sign in and Sign up buttons, only showed if guest user */}
						{isLoggedIn ? (
							<UserMenu />
						) : (
							<>
								<Button variant="outline" size="sm">
									Sign In
								</Button>
								<Button size="sm">Sign Up</Button>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
