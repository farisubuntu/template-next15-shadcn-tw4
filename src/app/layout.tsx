import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {MainLayout} from "@/components/main-layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Modern UI Dashboard",
	description: "A modern UI dashboard built with Next.js and shadcn/ui",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
