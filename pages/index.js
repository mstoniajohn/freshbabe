import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import EventCard from '../components/parts/EventCard';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Layout>
			<div className="container h-full ">
				<div className="flex h-screen w-full flex-col items-center justify-center space-y-3">
					<h1 className="text-[#dfff94] text-3xl">Upcoming Events</h1>
				</div>
				<div className="container-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
					<EventCard title="Fresh Event 1" />
					<EventCard title="Fresh Event 2" />
					<EventCard title="Fresh Event 3" />
				</div>
			</div>
		</Layout>
	);
}
