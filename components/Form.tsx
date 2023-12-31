"use client";
import { FormEvent, useState } from "react";
import styles from "./Form.module.css";
import Notification from "./Notification";
import { getMessage } from "@/utils/utils";

const Form = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("pending");
		const res = await getMessage(email, name, message);
		const data = await res.json();
		if (res.ok) {
			setStatus("success");
			setEmail("");
			setMessage("");
			setName("");
		}
		if (!res.ok) {
			setStatus("error");
			throw new Error(data.message || "Something went wrong");
		}
	};
	let notification;
	if (status === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on it's way",
		};
	}
	if (status === "success") {
		notification = {
			status: "success",
			title: " Success!",
			message: "message sent",
		};
	}
	if (status === "error") {
		notification = {
			status: "error",
			title: "Error!",
			message: "Something went wrong",
		};
	}
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
			{notification && (
				<Notification
					status={notification.status}
					message={notification.message}
					title={notification.title}
				/>
			)}
		</section>
	);
};
export default Form;
