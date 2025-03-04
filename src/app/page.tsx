import { OverviewCard } from "@/components/dashboard/overview-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { Button } from "@/components/ui/button";
import {
	ArrowUpRight,
	Users,
	CreditCard,
	Activity,
	BarChart3,
} from "lucide-react";

import { IOverviewCardProps } from "@/components/dashboard/overview-card";

const overviewCards: IOverviewCardProps[] = [
	{
		title: "Total Revenue",
		value: "$45,231.89",
		description: "+20.1% from last month",
		icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Sales",
		value: "$45,231.89",
		description: "+20.1% from last month",
		icon: <Users className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Customers",
		value: "2,345",
		description: "+20.1% from last month",
		icon: <Activity className="h-4 w-4 text-muted-foreground" />,
	},
	{
		title: "Page Views",
		value: "2,345",
		description: "+20.1% from last month",
		icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
	},
];
export default function Home() {
	return (
		<>
			<main className="container">
				{/* Hero section */}
				<section className="flex flex-col gap-6 pt-6 pb-8 ">
					<div className="flex max-w-[980px] flex-col items-start gap-2">
						<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
							Welcome to your Modern UI Dashboard
						</h1>
						<p className="max-w-[700px] text-lg text-muted-foreground">
							A beautiful, responsive dashboard built with Next.js 15.2.0, Tailwind CSS
							v4, and shadcn/ui components.
						</p>
					</div>
					<div className="flex gap-4">
						<Button>Get Started</Button>
						<Button variant="outline">
							Documentation
							<ArrowUpRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</section>

				{/* Overview section */}
				<section className="container py-6">
					<h2 className="mb-6 text-2xl font-bold">Dashboard Overview</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
						{overviewCards.map((card, index) => (
							<OverviewCard
								key={index}
								title={card.title}
								value={card.value}
								description={card.description}
								icon={card.icon}
							/>
						))}
					</div>
				</section>

				{/* Analytics section */}
				<section className="container py-6">
					<h2 className="mb-6 text-2xl font-bold tracking-tight">Analytics</h2>
					<div className="grid lg:grid-cols-2 gap-4">
						<AnalyticsChart />
						<RecentActivity />
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t py-6">
				<div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-center text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} Modern UI Dashboard. All rights
						reserved.
					</p>
					<p className="text-center text-sm text-muted-foreground">
						Built with Next.js 15.2.0, Tailwind CSS v4, and shadcn/ui
					</p>
				</div>
			</footer>
		</>
	);
}
