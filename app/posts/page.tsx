import Posts from "@/components/Posts";
import "@/app/globals.css";
import { getAllPosts } from "@/utils/postsUtils";

const PostsPage = () => {
	const posts = getAllPosts();
	return (
		<div className="posts">
			<h1>All Posts</h1>
			<Posts posts={posts} />
		</div>
	);
};
export default PostsPage;
