import PostHeader from "./PostHeader";
import styles from "./postcontent.module.css";

type Props = {};
const PostContent = (props: Props) => {
	const DUMMY_POST = {
		title: "Next js 13",
		excerpt: "Next js 13 features",
		date: "2022-01-10",
		image: "/next.js image component.png",
		content: "# this is the first post",
	};
	return (
		<article className={styles.content}>
			<PostHeader title={DUMMY_POST.title} image={DUMMY_POST.image} />
			{DUMMY_POST.content}
		</article>
	);
};
export default PostContent;
