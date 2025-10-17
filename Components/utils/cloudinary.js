
const CLOUD_NAME = "dzvvb0z0h";  

/**
 * Generate a Cloudinary URL for an image
 * @param {string} publicId - The image filename as it appears in Cloudinary (e.g. "chef.png")
 * @param {string} options - Transformations like "f_auto,q_auto,w_800"
 */
export function cldUrl(publicId, options = "f_auto,q_auto") {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${options}/${publicId}`;
}
