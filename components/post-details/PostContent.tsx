import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostHeader from "./PostHeader";
import styles from "./postcontent.module.css";
import Image from "next/image";

type Props = {
	post: {
		title: string;
		excerpt: string;
		date: string;
		image: string;
		content: string;
	};
};
// const PostContent = ({ data, content }: Props) => {
// 	return (
// 		<article className={styles.content}>
// 			<PostHeader title={data.title} image={data.image} />
// 			<ReactMarkdown>{content}</ReactMarkdown>
// 		</article>
// 	);
// };
const PostContent = ({ post }: Props) => {
	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={post.image} />
			<ReactMarkdown
				components={{
					img: () => (
						<Image
							src={"/nextjs-file-based-routing.png"}
							alt={"file-based-routing"}
							width={600}
							height={300}
						/>
					),
				}}
			>
				{post.content}
			</ReactMarkdown>
		</article>
	);
};
export default PostContent;
