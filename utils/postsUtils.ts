import fs from "fs";
import matter from "gray-matter";
import path from "path";
const postsPath = path.join(process.cwd(), "posts");
export const getPostData = (fileName: string) => {
	const fullPath = path.join(postsPath, fileName);
	const fileContent = fs.readFileSync(fullPath, "utf-8");
	const { data, content } = matter(fileContent);
	// console.log(data, "data");
	const postSlug = fileName.replace(/\.md$/, "");
	const postData = {
		slug: postSlug,
		...data,
		content,
	};
	return postData;
};
export const getAllPosts = () => {
	const postsFile = fs.readdirSync(postsPath);
	const allPosts = postsFile.map((postFile) => {
		return getPostData(postFile);
	});
	const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

	return sortedPosts;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.filter((post) => post.isFeatured);
	return featuredPosts;
};
