import React, { useEffect, useState } from 'react';

// Create a file with "foo" as its content
// const file = new File(['foo'], 'foo.txt', {type: 'text/plain'})
// // Upload it
// client.assets
//   .upload('file', file)
//   .then((document) => {
//     console.log('The file was uploaded!', document)
//   })
//   .catch((error) => {
//     console.error('Upload failed:', error.message)
//   })

const PostEvent = () => {
	// add fields to input field
	// validate data type
	// post to BE
	const [file, setFile] = useState('');
	const [event, setEvent] = useState({
		title: '',
		info: '',
		location: '',
		date: new Date(),
		image: file,
	});
	const onFileChange = (event) => {
		setFile(event.target.files[0]);
		console.log('file', event.target.files);
	};
	const onChange = (e) => {
		e.preventDefault();
		setEvent({ ...event, [e.target.name]: e.target.value });
	};

	const addEvent = async () => {
		await fetch('http://localhost:3000/api/events', {
			method: 'POST',
			body: JSON.stringify(event),
		})
			.then((res) => res.json())
			.catch((err) => {
				console.error(err);
			});
	};
	// useEffect(() => {
	// 	addEvent();
	// }, []);
	return (
		<>
			<div className="mt-5 md:mt-0 md:col-span-2 pb-5">
				<h2 className="text-2xl text-[#dfff94] font-medium">Add Event</h2>
				<form onSubmit={addEvent}>
					<div className="shadow overflow-hidden sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-12">
									<input
										type="text"
										name="title"
										placeholder="Event Name"
										value={event.title}
										onChange={onChange}
										className="mt-1 focus:ring-[#dfff94] focus:border-[#dfff94] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-dark text-gray-light"
									/>
								</div>

								<div className="col-span-6">
									<input
										type="date"
										name="date"
										value={event.date}
										onChange={onChange}
										className="mt-1 focus:ring-[#dfff94] focus:border-[#dfff94] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-dark text-gray-light p-2"
									/>
								</div>
								<div className="col-span-6 ">
									<input
										type="text"
										name="time"
										placeholder="Time (exp: 11 PM)"
										autoComplete="event time"
										value={event.time}
										onChange={onChange}
										className="mt-1 focus:ring-[#dfff94] focus:border-[#dfff94] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-dark text-gray-light"
									/>
								</div>

								<div className="col-span-12">
									<input
										type="text"
										name="location"
										value={event.location}
										onChange={onChange}
										id="street-address"
										placeholder="Event Location"
										className="mt-1 focus:ring-[#dfff94] focus:border-[#dfff94] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-dark text-gray-light"
									/>
								</div>

								<div className="col-span-12">
									<input
										type="text"
										name="info"
										placeholder="Event Details"
										value={event.info}
										onChange={onChange}
										className="mt-1 focus:ring-[#dfff94] focus:border-[#dfff94] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-dark text-gray-light"
									/>
								</div>
							</div>
						</div>
						<div className="mt-1 flex justify-center px-6 pt-3 border-2 border-gray-300 border-dashed rounded-md">
							<div className="text-center">
								<svg
									className="mx-auto h-12 w-12 text-[#dfff94]"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div className="flex space-x-3 text-sm text-[#dfff94]">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer  rounded-md font-medium text-[#dfff94]hover:text-[#dfff94] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#dfff94]"
									>
										<span className="underline">Upload Event Image </span>
										<input
											id="file-upload"
											name="file"
											type="file"
											className="sr-only"
											// value={file}
											onChange={onFileChange}
										/>
									</label>
								</div>
							</div>
						</div>

						<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-[#dfff94] bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dfff94] bg-gray-dark"
							>
								Save
							</button>
						</div>
						{file && <img className="w-48" src={file.name} alt={file.name} />}
					</div>
				</form>
			</div>
		</>
	);
};

export default PostEvent;
