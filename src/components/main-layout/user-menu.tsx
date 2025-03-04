import {
	LogOut,
	MoveUpRight,
	Settings,
	CreditCard,
	FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CustomAvatar } from "../ui/custom-avatar";
export interface MenuItemProps {
	label: string;
	value?: string;
	href: string;
	icon?: React.ReactNode;
	external?: boolean;
}

export interface UserMenuProps {
	name: string;
	role: string;
	avatar: React.ReactNode;
	subscription?: string;
}

const defaultProfile: UserMenuProps = {
	name: "Eugene An",
	role: "Prompt Engineer",
	avatar: <CustomAvatar />,
	subscription: "Free Trial",
};

export function UserMenu({
	name = defaultProfile.name,
	role = defaultProfile.role,
	avatar = defaultProfile.avatar,
}: Partial<UserMenuProps> = defaultProfile) {
	const menuItems: MenuItemProps[] = [
		{
			label: "Settings",
			href: "#",
			icon: <Settings className="w-4 h-4" />,
		},
		{
			label: "Terms & Policies",
			href: "#",
			icon: <FileText className="w-4 h-4" />,
			external: true,
		},
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{avatar}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{name}</p>
						<p className="text-xs text-muted-foreground">{role}</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				{menuItems.map((item, index) => (
					<DropdownMenuItem key={index}>
						<Link
							href={item.href}
							target={item.external ? "_blank" : "_self"}
							className="flex items-center gap-2"
						>
							{item.icon}
							{item.label}
						</Link>
					</DropdownMenuItem>
				))}

				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer">
					<LogOut className="mr-2 h-4 w-4" />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
