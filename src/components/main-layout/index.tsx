"use client";

import { SiteHeader } from "./site-header";
import { ThemeProvider } from "./theme-provider";
import { MainNav } from "./main-nav";

export function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<div className="flex flex-col min-w-full items-center px-4">
				<SiteHeader />
				{children}
			</div>
		</ThemeProvider>
	);
}
