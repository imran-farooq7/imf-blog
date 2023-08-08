import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import { getFeaturedPosts } from "@/utils/postsUtils";

export default function Home() {
	const posts = getFeaturedPosts();

	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}
