import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function Home() {
	const Dummy_Posts = [
		{
			title: "Next js 13",
			excerpt: "Next js 13 features",
			date: "2022-01-10",
			image: "/next.js image component.png",
		},
		{
			title: "Next js 13",
			excerpt: "Next js 13 features",
			date: "2022-01-10",
			image: "/next.js image component.png",
		},
		{
			title: "Next js 13",
			excerpt: "Next js 13 features",
			date: "2022-01-10",
			image: "/next.js image component.png",
		},
	];
	return (
		<>
			<Hero />
			<FeaturedPosts posts={Dummy_Posts} />
		</>
	);
}
