import Posts from "@/components/Posts";
import "@/app/globals.css";

const PostsPage = () => {
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
		<div className="posts">
			<h1>All Posts</h1>
			<Posts posts={Dummy_Posts} />
		</div>
	);
};
export default PostsPage;
