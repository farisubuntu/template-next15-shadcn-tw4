import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CustomAvatarProps {
	src?: string;
	alt?: string;
	fallback?: string;
}
export function CustomAvatar({
	src = "https://api.dicebear.com/9.x/lorelei/svg",
	alt = "custom-avatar",
	fallback = "CN",
}: CustomAvatarProps) {
	return (
		<Avatar>
			<AvatarImage src={src} alt={alt} />
			<AvatarFallback>{fallback}</AvatarFallback>
		</Avatar>
	);
}
