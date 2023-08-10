"use client";
import { FormEvent, useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await fetch("/api/user", {
			method: "POST",
			body: JSON.stringify({
				email,
				name,
				message,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
	return (
		<section className={styles.contact}>
			<h1>How can i help you</h1>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor="message">Message</label>
					<textarea
						name="Message"
						id="Message"
						placeholder="Message"
						required
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
};
export default Form;
