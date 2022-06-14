import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@components/layout/Layout';

import { Container } from '@mui/system';

const Contact = () => {
	const [postMessage, setPostMessage] = useState({
		from_name: '',
		from_email: '',
		message: '',
		phone: '',
	});
	const { from_name, from_email, message, phone } = postMessage;

	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		setPostMessage({
			...postMessage,
			[name]: value,
		});
	};
	console.log(postMessage);

	const onSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'default_service',
				'template_cg0cbn3',
				postMessage,
				`0los4Zw09Lh1XAn0t`
			)
			.then(
				(result) => {
					console.log(result.text);
					setPostMessage({
						from_name: '',
						from_email: '',
						message: '',
						phone: '',
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Layout title="Contact">
			<Container>
				<div className="mt-10 sm:mt-0">
					<div className="md:grid md:grid-cols-2 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Send us a message
								</h3>
								<p className="mt-1 text-sm text-gray-600">
									Use a permanent address where you can receive mail.
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<form onSubmit={onSubmit}>
								<div className="shadow overflow-hidden sm:rounded-md">
									<div className="px-4 py-5 bg-white sm:p-6">
										<div className="grid grid-cols-6 gap-6">
											<div className="col-span-12">
												<label
													htmlFor="from_name"
													className="block text-sm font-medium text-gray-700"
												>
													Full Name
												</label>
												<input
													type="text"
													name="from_name"
													value={from_name}
													onChange={onChange}
													autoComplete="given-name"
													className="mt-1 focus:ring-[#CFAC9F] focus:border-[#CFAC9F] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>

											<div className="md:col-span-6 col-span-12 ">
												<label
													htmlFor="email-address"
													className="block text-sm font-medium text-gray-700"
												>
													Email address
												</label>
												<input
													type="text"
													name="from_email"
													onChange={onChange}
													value={from_email}
													required
													autoComplete="email"
													className="mt-1 focus:ring-[#CFAC9F] focus:border-[#CFAC9F] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>

											<div className="md:col-span-6 col-span-12 ">
												<label
													htmlFor="phone"
													className="block text-sm font-medium text-gray-700"
												>
													phone
												</label>
												<input
													type="number"
													name="phone"
													onChange={onChange}
													value={phone}
													autoComplete="number"
													className="mt-1 focus:ring-[#CFAC9F] focus:border-[#CFAC9F] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
												/>
											</div>
											<div className="col-span-12">
												<div>
													<label
														htmlFor="message"
														className="block text-sm font-medium text-gray-700"
													>
														Message
													</label>
													<div className="mt-1">
														<textarea
															name="message"
															rows={3}
															value={message}
															required
															onChange={onChange}
															className="shadow-sm focus:ring-[#CFAC9F] focus:border-[#CFAC9F] mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
															placeholder="Send us a message"
															defaultValue={''}
														/>
													</div>
													<p className="mt-2 text-sm text-gray-500">
														Order Products or enquire about the product and
														more.
													</p>
												</div>
											</div>

											{/* <div className="md:col-span-6 col-span-12">
												<label
													htmlFor="country"
													className="block text-sm font-medium text-gray-700"
												>
													Country
												</label>
												<select
													onChange={() =>
														setPostMessage({
															...postMessage,
															[e.target.name]: e.target.selected,
														})
													}
													name="country"
													value={country}
													autoComplete="country-name"
													className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#CFAC9F] focus:border-[#CFAC9F] sm:text-sm"
												>
													<option>Grenada</option>

													<option>United States</option>
													<option>Canada</option>
													<option>United Kingdom</option>
												</select>
											</div> */}
										</div>
									</div>
									<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
										<button
											type="submit"
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#CFAC9F] hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CFAC9F]"
										>
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default Contact;
