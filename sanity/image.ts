import imageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from './env';

// https://www.sanity.io/docs/image-url
const imageBuilder = imageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: any) => {
  if (!source || !source.asset) return null;
  return imageBuilder.image(source).auto('format').fit('max');
};
