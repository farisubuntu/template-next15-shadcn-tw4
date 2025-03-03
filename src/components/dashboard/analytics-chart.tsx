"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts"

const data = [
  { name: "Jan", visitors: 1200, pageViews: 4000, conversions: 240 },
  { name: "Feb", visitors: 1900, pageViews: 5000, conversions: 300 },
  { name: "Mar", visitors: 2200, pageViews: 6000, conversions: 380 },
  { name: "Apr", visitors: 2800, pageViews: 7500, conversions: 420 },
  { name: "May", visitors: 3500, pageViews: 9000, conversions: 520 },
  { name: "Jun", visitors: 3200, pageViews: 8500, conversions: 480 },
  { name: "Jul", visitors: 3800, pageViews: 10000, conversions: 550 },
]

export function AnalyticsChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>
          Website traffic and conversion metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="area">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="area" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="pageViews" stackId="1" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" />
                <Area type="monotone" dataKey="visitors" stackId="2" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" />
                <Area type="monotone" dataKey="conversions" stackId="3" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="bar" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visitors" fill="hsl(var(--chart-1))" />
                <Bar dataKey="pageViews" fill="hsl(var(--chart-2))" />
                <Bar dataKey="conversions" fill="hsl(var(--chart-3))" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}