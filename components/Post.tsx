import Image from "next/image";
import Link from "next/link";
import styles from "@/components/post.module.css";

type Props = {
	title: string;
	image: string;
	date: string;
	excerpt: string;
	slug: string;
};
const Post = ({ date, excerpt, image, title, slug }: Props) => {
	const dataFormating = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
	});
	return (
		<li className={styles.post}>
			<Link href={`/posts/${slug}`}>
				<div className={styles.image}>
					<Image src={image} width={400} height={200} alt={title} />
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<p>{dataFormating}</p>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
};
export default Post;
