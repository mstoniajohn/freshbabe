import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbBrandInstagram } from 'react-icons/tb';
import { ToastContainer } from 'react-toastify';
import Header from './Header';

const Layout = ({ children, title }) => {
	return (
		<div className="bg-[#000000]">
			<Head>
				<title>Fresh Babe | {title}</title>
				<meta
					name="description"
					content="Bringing you the best events to any city"
				/>
				<link
					rel="icon"
					href="/FRESH_BABE_RGB_TRANSPARENT.png"
					className="rounded-full h-8 w-8 "
				/>
			</Head>
			<Header />

			<ToastContainer />
			<Link href="/" passHref>
				<a className=" flex items-center justify-center">
					<img
						className="block md:hidden h-8 "
						src="/FRESH_BABE_RGB_TRANSPARENT.png"
						alt="FreshBabe"
					/>
					<img
						className="hidden md:block h-20"
						src="/FRESH_BABE_RGB_TRANSPARENT.png"
						alt="FreshBabe"
					/>{' '}
				</a>
			</Link>

			<main className="bg-[#000000] h-full z-0">{children}</main>
			<footer className="bg-[#000000] text-center pt-40 flex flex-col space-y-4 justify-center items-center">
				<div className="text-gray ">
					{/* social */}
					<a
						href="https://www.instagram.com/the.freshbabe/"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex items-center justify-center space-x-1"
					>
						<TbBrandInstagram className="text-3xl text-green" />{' '}
						<span className="text-green-200">@the.freshbabe</span>
					</a>
					&copy; All Rights Reserved. 2022
				</div>
				<div className="flex justify-center">
					<a
						href="https://www.toniaroganti.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-dark mt-4 r"
					>
						<span>Site created by Tonia Roganti</span>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
