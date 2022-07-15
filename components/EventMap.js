import { useEffect, useState } from 'react';
import Image from 'next/image';
import Map, { Marker } from 'react-map-gl';
import Geocode from 'react-geocode';
import { FaLess, FaMapPin } from 'react-icons/fa';

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
// set response language. Defaults to english.
Geocode.setLanguage('en');
export default function EventMap({ location, id }) {
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [loading, setLoading] = useState(true);
	const [viewport, setViewport] = useState({
		latitude: 40.712772,
		longitude: -73.935242,
		zoom: 12,
		width: '100%',
		height: '500px',
	});
	useEffect(() => {
		Geocode.fromAddress(location).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng);
				setLat(lat);
				setLng(lng);
				setViewport({ ...viewport, latitude: lat, longitude: lng });
				setLoading(false);
			},
			(error) => {
				console.error(error);
			}
		);
	}, []);

	if (loading) return false;

	console.log(lat, lng);

	return (
		<div className="mx-auto">
			<Map
				{...viewport}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
				initialViewState={{
					longitude: lng,
					latitude: lat,
					zoom: 12,
				}}
				onMove={(evt) => setViewState(evt.viewState)}
				style={{ width: 600, height: 400, margin: '10px auto' }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
				onViewportChange={(vp) => setViewport(vp)}
			>
				<Marker key={id} latitude={lat} longitude={lng}>
					<FaMapPin className="text-green-700 text-3xl font-bold" />
				</Marker>
			</Map>
		</div>
	);
}
