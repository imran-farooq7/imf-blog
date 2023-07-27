import Posts from "./Posts";
import styles from "./featuredpost.module.css";

type Props = {
	posts: {
		title: string;
		image: string;
		date: string;
		excerpt: string;
	}[];
};
const FeaturedPosts = ({ posts }: Props) => {
	return (
		<div className={styles.latest}>
			<h2>Featured posts</h2>
			<Posts posts={posts} />
		</div>
	);
};
export default FeaturedPosts;
