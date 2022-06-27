import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const RSVPInput = ({ event }) => {
	const router = useRouter();
	const form = useRef();
	const [emailAddress, setEmailAddress] = useState({
		from_email: '',
		event,
	});

	const onChange = async (e) => {
		e.preventDefault();
		setEmailAddress({ ...emailAddress, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
		toast("Thank you! Can't wait to see you there!", {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		emailjs
			.send(
				'default_service',
				'template_a2g99tq',
				emailAddress,
				process.env.NEXT_PUBLIC_EMAILJS_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					// router.reload();
				},
				(error) => {
					console.log(error.text);
				}
			);
		setEmailAddress({
			from_email: '',
			event: null,
		});
	};
	return (
		<form onSubmit={sendEmail}>
			<input
				type="email"
				name="from_email"
				placeholder="Email Address"
				value={emailAddress.from_email}
				required
				onChange={onChange}
				className="mt-1 focus:ring-[#dfff94] focus:border-[#dfff94] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-[#000000ee]"
			/>

			<button
				type="submit"
				className="mt-3 bg-transparent rounded-xl py-2 w-full px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-green border-2 hover:bg-green hover:text-gray-dark"
			>
				RSVP Now
			</button>
		</form>
	);
};
