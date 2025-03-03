import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function RecentActivity() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
				<CardDescription>Latest actions performed in the system</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{activities.map((activity, index) => (
						<div key={index} className="flex items-center gap-4">
							<Avatar>
								<AvatarImage src={activity.userImage} alt={activity.user} />
								<AvatarFallback>
									{activity.user.substring(0, 2).toUpperCase()}
								</AvatarFallback>
							</Avatar>
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none">{activity.user}</p>
								<p className="text-sm text-muted-foreground">{activity.action}</p>
							</div>
							<div className="ml-auto text-xs text-muted-foreground">
								{activity.time}
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
export interface IActivity {
	user: string;
	userImage: string;
	action: string;
	time: string;
}
const activities = [
	{
		user: "Sarah Johnson",
		userImage:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
		action: "Updated project settings",
		time: "2 hours ago",
	},
	{
		user: "Michael Chen",
		userImage:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
		action: "Created a new task",
		time: "5 hours ago",
	},
	{
		user: "Emily Rodriguez",
		userImage:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
		action: "Completed project milestone",
		time: "1 day ago",
	},
	{
		user: "David Kim",
		userImage:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
		action: "Added new team member",
		time: "2 days ago",
	},
];
