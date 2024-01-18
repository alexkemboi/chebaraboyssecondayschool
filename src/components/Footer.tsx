"use client";
import { useEffect } from "react";
import Link from "next/link";
const Footer = () => {
	useEffect(() => {}, []);
	const links = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Management", link: "/management" },
		{ name: "The School", link: "/the-school" },
		{ name: "Chapel", link: "/chapel" },
		{ name: "Photo Gallery", link: "/photo-gallery" },
		{ name: "CBHS Tenders", link: "/ahs-tenders" },
		{ name: "Contact", link: "/contact" }
	];
	return (
		<section
			id="footer"
			className="bg-cyan-950 ">
			<footer className=" py-5 border-t border-gray-500">
				<div className="md:flex md:flex-row md:justify-between md:pl-10 md:pr-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:m-4">
					<div className="p-2 w-auto sm:m-2 sm:flex sm:flex-row sm:justify-center">
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.link}>
								<p className="text-neutral-100 hover: hover:text-white px-1 py-2 rounded-md text-sm font-medium">
									{link.name}
								</p>
							</Link>
						))}
					</div>
					<div className="rounded-full  p-2  md:flex md:flex-row md:justify-end md:items-end sm:flex sm:flex-row sm:justify-center sm:items-center">
						<p className="text-teal-400 text-sm text-center">
							Developed by © ikonex systems &copy; {new Date().getFullYear()}
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
