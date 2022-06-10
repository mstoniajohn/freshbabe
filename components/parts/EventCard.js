import React from 'react';
import { getDate, urlFor } from '../../utils/getImageUrl';
import { RSVPInput } from './RSVPInput';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const EventCard = ({
	title = '',
	image,
	info = '',
	subtitle = '',
	date = '',
	time = '',
	slug = '',
}) => {
	return (
		<div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden lg:max-w-2xl text-[#fff]">
			<div className="flex flex-col lg:flex-row">
				<div className="lg:shrink-0">
					<img
						className="h-48 w-full object-cover lg:h-full lg:w-48"
						src={image !== '' && urlFor(image)}
						alt="Fresh Babe Events"
					/>
				</div>
				<div className="py-3 md:p-6">
					<Link href={`events/${slug}`}>
						<a>
							<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
								{title}
							</div>
						</a>
					</Link>

					<p className="text-gray">
						<span>{getDate(date)}</span> at <span>{time}</span>
					</p>
					{/* TODO: Link to event page? */}
					<a
						href="#"
						className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
					>
						{subtitle}
					</a>
					<div className="mt-2 mb-4 text-slate-500">
						<PortableText value={info} />
					</div>

					<RSVPInput event={title} />
				</div>
			</div>
		</div>
	);
};

export default EventCard;
