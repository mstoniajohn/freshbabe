import React from 'react';
import { getDate, urlFor } from '../../utils/getImageUrl';
import { RSVPInput } from './RSVPInput';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
// import { IoLocationOutline } from 'react-icons/';
import {
	CalendarIcon,
	ClockIcon,
	LocationMarkerIcon,
} from '@heroicons/react/outline';

const EventCard = ({
	title = '',
	image,
	info = '',
	subtitle = '',
	date = '',
	time = '',
	slug = '',
	location = '',
}) => {
	return (
		<div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden lg:max-w-2xl text-[#fff]">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
				<div className="">
					<Link href={`events/${slug}`}>
						<a className="cursor-pointer">
							<img
								className=" object-cover"
								src={image !== '' && urlFor(image)}
								alt="Fresh Babe Events"
							/>
						</a>
					</Link>
				</div>
				<div className="py-3 md:p-6">
					<Link href={`events/${slug}`}>
						<a className="cursor-pointer">
							<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
								{title}
							</div>
						</a>
					</Link>
					<div className="flex space-x-2 items-center">
						<LocationMarkerIcon className="h-4 w-4 text-green" />
						<p className="text-gray-light text-sm">{location}</p>
					</div>
					<div className="flex md:space-x-4 space-x-3 items-center">
						<div className="flex items-center space-x-2">
							<CalendarIcon className="h-4 text-green" />
							<span>{getDate(date)}</span>
						</div>

						<div className="text-gray-light flex items-center space-x-2">
							<ClockIcon className="h-4 text-green" />
							<span> {time}</span>
						</div>
					</div>

					{/* TODO: Link to event page? */}
					<a
						href="#"
						className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
					>
						{subtitle}
					</a>
					<div className="mt-2 mb-4 text-slate-500 font-bold text-[#dfff94]">
						{/* <PortableText value={info.substring(0, 200)} /> */}

						<Link href={`events/${slug}`}>...read more about this event</Link>
					</div>

					<RSVPInput event={title} />
				</div>
			</div>
		</div>
	);
};

export default EventCard;
