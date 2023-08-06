import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/postsUtils";

export default function Home() {
	const posts = getAllPosts();

	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}
