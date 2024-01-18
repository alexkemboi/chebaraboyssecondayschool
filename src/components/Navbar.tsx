"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpeg";
import Image from "next/image";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookF,
	faTwitter,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const body = document.body;
		if (darkMode) {
			body.classList.add("dark-mode");
		} else {
			body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	const menuItems = [
		{ name: "Home", link: "/home" },
		{ name: "About", link: "/about" },
		{ name: "Management", link: "/management" },
		{ name: "School", link: "/the-school" },
		{ name: "Chapel", link: "/chapel" },
		{ name: "Photo Gallery", link: "/photo-gallery" },
		{ name: "Tenders", link: "/ahs-tenders" },
		{ name: "Contact", link: "/contact" }
	];
	const schoolContactInfo = {
		socialMedia: [
			{
				platform: "Phone",
				icon: <FontAwesomeIcon icon={faPhone} />,
				link: `Tel:+254725777449`
			},
			{
				platform: "Email",
				icon: <FontAwesomeIcon icon={faEnvelope} />,
				link: `mailto: mhskabarak@gmail.com`
			},
			{
				platform: "Facebook",
				icon: <FontAwesomeIcon icon={faFacebookF} />,
				link: "https://facebook.com/chebaraboys"
			},
			{
				platform: "Twitter",
				icon: <FontAwesomeIcon icon={faTwitter} />,
				link: "https://twitter.com/chebaraboys"
			},
			{
				platform: "Instagram",
				icon: <FontAwesomeIcon icon={faInstagram} />,
				link: "https://instagram.com/chebaraboys"
			}
		]
	};
	return (
		<nav className="bg-cyan-950">
			<div className=" px-5 sm:px-10 md:px-16 lg:px-20 py-5 ">
				<div className="flex flex-col items-center sm:flex-row sm:justify-between">
					<div className="flex items-center mb-3 sm:mb-0">
						{schoolContactInfo.socialMedia.map((item, index) => (
							<a
								key={index}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mr-3 sm:mr-4 lg:mr-6">
								{item.icon}
							</a>
						))}
					</div>
					<div className="flex flex-col items-center sm:flex-row">
						<div className="mb-3 sm:mb-0 sm:mr-3 md:mr-4 lg:mr-6">
							<a
								href={schoolContactInfo.socialMedia[0].link}
								className="mr-3 sm:mr-4 lg:mr-6">
								{schoolContactInfo.socialMedia[0].icon}{" "}
								{schoolContactInfo.socialMedia[0].link}
							</a>
						</div>
						<div>
							<a
								href={schoolContactInfo.socialMedia[1].link}
								className="mr-3 sm:mr-4 lg:mr-6">
								{schoolContactInfo.socialMedia[1].icon}{" "}
								{schoolContactInfo.socialMedia[1].link}
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="relative bg-zinc-300 flex items-center justify-between h-20 w-full ">
				<div className="rounded-full overflow-hidden w-10 md:mx-20 h-auto ">
					<Image
						src={logo}
						alt="Description"
					/>
				</div>
				<div className="absolute inset-y-0 left-0 flex flex-row  justify-end sm:hidden  w-full">
					<button
						type="button"
						className="inline-flex items-center px-10 rounded-md text-cyan-950 hover:text-gray-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
						onClick={toggleMenu}>
						<span className="sr-only">Open</span>
						<FontAwesomeIcon
							icon={faBars}
							className="h-6 w-6"
						/>
					</button>
				</div>
				<div className=" flex items-center justify-center sm:items-center sm:justify-center sm-border-0 md:border md:border-1 border-gray-700 rounded-full m-auto p-2">
					<div className="hidden sm:block sm:ml-6 ">
						<div className="flex  space-x-4">
							{menuItems.map((menuItem, index) => (
								<Link
									key={index}
									href={menuItem.link}>
									<span className="text-cyan-950 hover:bg-cyan-850 font-semibold text-xl  px-3 py-2 rounded-md text-sm font-medium">
										{menuItem.name}
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{isOpen && (
				<div
					className="z-50 border-r border-b hover:opacity-100 border-gray-700 sm:hidden absolute left-0 top-0 w-1/2 bg-slate-50 transition-transform transform h-8/8 animate-slideIn delay-200"
					id="mobile-menu">
					<div className="border-b  border-gray-500 text-right flex flex-row justify-between w-auto h-2/2 z-10">
						<div className="rounded-full overflow-hidden w-10 md:m-0 h-10 m-5">
							<Image
								src={logo}
								alt="Description"
							/>
						</div>

						<button
							type="button"
							className="inline-flex  p-2 rounded-md text-cyan-950 font-bold hover:text-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border m-5"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleMenu}>
							<span className="sr-only">Toggle menu</span>

							<FontAwesomeIcon
								icon={faTimes}
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className="px-2 pt-2 pb-3 space-y-1 bg-slate-50 flex flex-col">
						{menuItems.map((menuItem, index) => (
							<Link
								key={index}
								href={menuItem.link}>
								<span className="text-cyan-950 font-bold text-lg hover:bg-gray-700 font-bold hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									{menuItem.name}
								</span>
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
