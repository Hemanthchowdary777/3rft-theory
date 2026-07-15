import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from './sanityClient';

const builder = createImageUrlBuilder(sanityClient);

export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="1067" viewBox="0 0 800 1067"%3E%3Crect fill="%23E8E4DF" width="800" height="1067"/%3E%3Ctext fill="%239A9590" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';

export function urlFor(source) {
  if (!source?.asset?._ref && !source?.asset?.url) {
    return null;
  }
  return builder.image(source);
}

export function getImageUrl(source, options = {}) {
  const imageBuilder = urlFor(source);
  if (!imageBuilder) {
    return PLACEHOLDER_IMAGE;
  }

  const { width = 800, height, quality = 80 } = options;
  let built = imageBuilder.width(width).quality(quality);

  if (height) {
    built = built.height(height);
  }

  return built.url() || PLACEHOLDER_IMAGE;
}

export function getProductImageUrls(images) {
  if (!images?.length) {
    return [PLACEHOLDER_IMAGE];
  }

  const urls = images
    .map((image) => getImageUrl(image))
    .filter((url) => url && url !== PLACEHOLDER_IMAGE);

  return urls.length ? urls : [PLACEHOLDER_IMAGE];
}
