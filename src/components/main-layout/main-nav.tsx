"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	title: string;
	description?: string;
	items?: ListItemProps[];
}
export interface MainNavProps {
	items: ListItemProps[];
}

const menuItems: ListItemProps[] = [
	{
		href: "/",
		title: "Dashboard",
		description: "Your website's analytics overview",
	},
	{
		href: "/components",
		title: "Components",
		description: "Standard button elements and variants",
		items: [
			{
				href: "/components/buttons",
				title: "Buttons",
				description: "Standard button elements and variants",
			},
			{
				href: "/components/cards",
				title: "Cards",
				description: "Versatile card components for various content",
			},
			{
				href: "/components/forms",
				title: "Forms",
				description: "Form components and validation examples",
			},
			{
				href: "/components/tables",
				title: "Tables",
				description: "Data tables with sorting and filtering",
			},
		],
	},
	{
		href: "/analytics",
		title: "Analytics",
	},
];

export function MainNav({
	itemsList = menuItems,
}: {
	itemsList?: ListItemProps[];
}) {
	const pathname = usePathname();

	return (
		<NavigationMenu>
			<NavigationMenuList>
        
				{menuItems.map((item) => (
					<NavigationMenuItem key={item.href}>
						<Link href={item.href} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{item.title}
							</NavigationMenuLink>
						</Link>
						{item.items && (
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{item.items.map((item) => (
										<ListItem key={item.href} href={item.href} title={item.title}>
											{item.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
