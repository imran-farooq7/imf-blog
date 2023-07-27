import Post from "./Post";
import styles from "@/components/posts.module.css";

type Props = {
	posts: [
		{
			title: string;
			image: string;
			date: Date;
			excerpt: string;
		}
	];
};
const Posts = ({ posts }: Props) => {
	return (
		<ul className={styles.grid}>
			{posts.map((post) => {
				return (
					<Post
						date={post.date}
						excerpt={post.excerpt}
						image={post.image}
						title={post.title}
					/>
				);
			})}
		</ul>
	);
};
export default Posts;
