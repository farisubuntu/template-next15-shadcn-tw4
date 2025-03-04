"use client";
import Form from "next/form";
import { SearchButton } from "@/components/ui/search-button";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function GlobalSearch() {
	const [expand, setExpand] = React.useState(false);


	return expand ? (
		<Form action="/search">
			<div className="flex items-center space-x-2">
				<input
					type="text"
					name="query"
					className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
					placeholder="Search"
				/>
				<SearchButton />
			</div>
		</Form>
	) : (
		<Button variant="outline" size="sm" onClick={() => setExpand(true)}>
			<Search />
		</Button>
	);
}
