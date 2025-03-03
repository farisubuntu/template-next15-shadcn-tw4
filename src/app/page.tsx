import { SiteHeader } from "@/components/site-header"
import { OverviewCard } from "@/components/dashboard/overview-card"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Users, CreditCard, Activity, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Welcome to your Modern UI Dashboard
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              A beautiful, responsive dashboard built with Next.js 15.2.0, Tailwind CSS v4, and shadcn/ui components.
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
        
        <section className="container py-6">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Dashboard Overview</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <OverviewCard 
              title="Total Revenue" 
              value="$45,231.89" 
              description="+20.1% from last month"
              icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
            />
            <OverviewCard 
              title="Active Users" 
              value="2,350" 
              description="+180 new users"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <OverviewCard 
              title="Active Sessions" 
              value="12,234" 
              description="+19% from last week"
              icon={<Activity className="h-4 w-4 text-muted-foreground" />}
            />
            <OverviewCard 
              title="Conversion Rate" 
              value="3.2%" 
              description="+0.4% from yesterday"
              icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
        </section>
        
        <section className="container py-6">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Analytics</h2>
          <div className="grid gap-4 md:grid-cols-5">
            <AnalyticsChart />
            <div className="md:col-span-1">
              <RecentActivity />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Modern UI Dashboard. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Built with Next.js 15.2.0, Tailwind CSS v4, and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  )
}