/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';

const navigation = [
	{ name: 'About', href: 'about', current: false },
	{ name: 'Contact', href: 'contact', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const router = useRouter();
	return (
		<Disclosure as="nav" className="bg-[#000000] z-50">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#baca94] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon
											className="block h-6 w-6 text-[#dfff94]"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block h-6 w-6 text-[#dfff94]"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<Link href="/" passHref>
									<a className="flex-shrink-0 flex items-center">
										{/* <img
											className="block md:hidden h-8 rounded-full"
											src="/FRESH_BABE_RGB_TRANSPARENT.png"
											alt="FreshBabe"
										/> */}
										<img
											className="hidden md:block h-8"
											src="/FRESH_BABE_RGB_TRANSPARENT.png"
											alt="FreshBabe"
										/>{' '}
									</a>
								</Link>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link key={item.name} href={item.href}>
												<a
													className={classNames(
														router.pathname.includes(item.name.toLowerCase())
															? 'bg-gray-900 text-[#dfff94] underline'
															: 'text-[#dfff94] hover:bg-gray-700 hover:text-[#baca94]',
														'px-3 py-2 rounded-md text-sm font-medium '
													)}
													aria-current={
														router.pathname.includes(item.name.toLowerCase())
															? 'page'
															: undefined
													}
												>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								{/* <Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#dfff94]">
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												src="/orange.jpg"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700'
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-[#dfff94]'
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-[#dfff94]'
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu> */}
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										router.pathname.includes(item.name.toLowerCase())
											? 'bg-gray-900 text-[#baca94]'
											: 'text-[#dfff94] hover:bg-gray-700 hover:text-[#baca94]',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={
										router.pathname.includes(item.name.toLowerCase())
											? 'page'
											: undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
