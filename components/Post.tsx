import Image from "next/image";
import Link from "next/link";
import styles from "@/components/post.module.css";

type Props = {
	title: string;
	image: string;
	date: Date;
	excerpt: string;
};
const Post = ({ date, excerpt, image, title }: Props) => {
	const dataFormating = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
	});
	return (
		<li className={styles.post}>
			<Link href={""}>
				<div className={styles.image}>
					<Image src={image} width={300} height={200} alt={title} />
				</div>
				<div className={styles.content}>
					<h2>{title}</h2>
					<p>{dataFormating}</p>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
};
export default Post;
