import PostContent from "@/components/post-details/PostContent";
import { getPostData } from "@/utils/postsUtils";

type Props = {
	params: {
		slug: string;
	};
};

const Post = ({ params }: Props) => {
	const { slug } = params;
	const post = getPostData(`${slug}.md`);
	// const { content } = postData;
	// console.log(data);
	return <PostContent post={post} />;
};
export default Post;
