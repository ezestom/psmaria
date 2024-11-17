"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import xIcon from "@/public/icons/x.svg";
import "./Form.css";
import logo from "@/public/logo.png";
import band from "@/public/logo-azul.png";
import { Button } from "../ui/button";
import Image from "next/image";

export function Form({
	h1,
	subtitle,
	button,
	toast_message,
	name,
	company,
	email,
	email_placeholder,
	message,
	message_placeholder,
	send,
	message_2,
}) {
	const [dialog, setDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSuccess()) {
			toast(
				"Information successfully submitted! Thank you for your trust.",
				{
					type: "success",
				}
			);
			closeDialog();
		}
	}, []); // Agrega las dependencias aquí

	const openDialog = () => {
		setDialog(true);
		document.body.style.overflow = "hidden";
		document.getElementById("navbar").style.display = "none";
		// document.getElementById("progress").style.display = "none";
	};

	const closeDialog = () => {
		setDialog(false);
		document.body.style.overflow = "auto";
		document.getElementById("navbar").style.display = "flex";
		// document.getElementById("progress").style.display = "flex";
	};

	const isMessageSuccess = () => {
		return (
			new URLSearchParams(window.location.search).get("success") ===
			"true"
		);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		setIsLoading(true);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(
					`Server responded with ${response.status}: ${errorText}`
				);
			}

			toast(
				"Information successfully submitted! Thank you for your trust.",
				{
					type: "success",
				}
			);

			setTimeout(() => {
				const redirectTo = "/sent-message";

				closeDialog();
				window.location.href = redirectTo;
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error(
				`There was a problem submitting the form, please try again. (Error: ${error.message})`
			);
			setIsLoading(false); // Asegúrate de desactivar el loading en caso de error
		}
	};

	return (
		<div className="relative flex items-center mt-10 justify-center z-10 m-auto">
			<Toaster />
			{/* <div className="flex w-full items-center justify-center">
				<a
					href="https://librecounter.org/referer/show"
					target="_blank"
					className="w-2 absolute bottom-5 mx-auto ml-7"
					name="referer">
					<img
						src="https://librecounter.org/counter.svg"
						referrerPolicy="unsafe-url"
						alt="counter component"
					/>
				</a>
			</div> */}
			<span className="flex  btn-form">
				<Button onClick={openDialog} id="open-dialog" type="submit">
					{button}
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"></path>
					</svg>
				</Button>
			</span>

			{dialog && (
				<dialog
					open
					className="backdrop-blur  flex items-center justify-center fixed top-0  w-full h-full">
					<div className="-z-10 mt-20 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rebeccapurple_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
					<section
						className="backdrop-blur-md flex items-center justify-center overflow-hidden  "
						id="form-section">
						<div className="w-96 p-8">
							<main className="flex items-center justify-center">
								<div
									className=" bg-neutral-100  shadow-md rounded-xl relative"
									id="input-container">
									<Button
										className="absolute z-100 top-0 right-0 "
										onClick={closeDialog}>
										<Image
											className="w-4 h-4 "
											src={xIcon}
											alt="x-icon"
											id="close-dialog"
										/>
									</Button>
									<h1 className="font-bold mx-2 text-gray-900 text-xl sm:text-2xl ">
										{h1}
									</h1>

									<p className="mt-4 text-sm leading-relaxed mx-2 text-gray-700">
										{subtitle}
									</p>
									{isLoading && (
										<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-3xl">
											<span className="loader"></span>
										</div>
									)}
									<form
										onSubmit={handleSubmit}
										method="POST"
										action="https://formsubmit.co/ezequielstom@gmail.com"
										className="mt-8 gap-6 mx-2">
										<input
											type="hidden"
											name="_subject"
											value="📃 Santa María | 📩 Nuevo Mensaje!"
										/>
										<input
											type="hidden"
											name="_autoresponse"
											value={toast_message}></input>

										<input
											type="hidden"
											name="_captcha"
											value="false"
										/>

										<div className="col-span-6 sm:col-span-3">
											<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
												{name}
												<input
													type="text"
													name="name"
													id="name"
													placeholder="Juan Perez"
													required
													className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
												{company}
												<input
													type="text"
													name="company"
													id="company"
													placeholder="Plásticos Santa María"
													required
													className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label className="flex justify-start items-start py-2 flex-col text-sm  font-medium text-gray-700">
												{email}
												<input
													className="p-2 my-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													type="email"
													name="email"
													id="email"
													required
													placeholder={
														email_placeholder
													}
												/>
											</label>
										</div>
										<fieldset>
											<legend className="flex flex-col items-start justify-start text-sm py-2 font-medium text-gray-700 ">
												{message}
												<textarea
													name="message"
													id="message"
													required
													className="w-full border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 max-h-[100px]"
													placeholder={
														message_placeholder
													}></textarea>
											</legend>
										</fieldset>

										<div className="flex justify-center flex-col pt-4 gap-4">
											<Button type="submit">
												{send}
											</Button>
											<p className="mt-4 text-sm text-gray-700 font-semibold sm:mt-0 text-center ">
												✉️ {message_2}
											</p>
										</div>
									</form>
								</div>
							</main>
						</div>
					</section>
				</dialog>
			)}
		</div>
	);
}
