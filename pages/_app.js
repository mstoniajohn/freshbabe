import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { LightgalleryProvider } from 'react-lightgallery';
// // some Root.js file
// import 'lightgallery.js/dist/css/lightgallery.css';
import SimpleReactLightbox from 'simple-react-lightbox';
function MyApp({ Component, pageProps }) {
	return (
		<SimpleReactLightbox>
			<Component {...pageProps} />
		</SimpleReactLightbox>
	);
}

export default MyApp;
