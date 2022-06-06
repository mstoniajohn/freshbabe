import imageUrlBuilder from '@sanity/image-url';
import sanity from '../lib/sanity';

export function urlFor(source) {
	return imageUrlBuilder(sanity).image(source);
}

export function getDate(date) {
	return new Date(date)?.toLocaleDateString();
}
