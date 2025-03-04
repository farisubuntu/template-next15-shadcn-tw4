async function getSearchResults(query: string) {
	return {
		query: query,
		results: [
			{
				id: "1",
				description: `This is the first result for ${query}`,
				url: "https://google.com",
			},
			{
				id: "2",
				description: `This is the second result for ${query}`,
				url: "https://google.com",
			},
			{
				id: "3",
				description: `This is the third result for ${query}`,
				url: "https://google.com",
			},
		],
	};
}
export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const params = await searchParams;
	const query = params.query as string;
	const results = await getSearchResults(query);

	console.log("results", results);

	return <div>{JSON.stringify(results, null, 2)}</div>;
}
