const images = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const imageUrl = path => {
  if (!path?.startsWith('/projects/')) return path
  return images[`../assets${path}`] ?? path
}
const publicUrl = path => path?.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path

export const resolveProjectImages = project => ({
  ...project,
  headerImage: imageUrl(project.headerImage),
  demoUrl: publicUrl(project.demoUrl),
  images: project.images?.map(image => ({ ...image, src: imageUrl(image.src) })),
  videos: project.videos?.map(video => ({ ...video, src: publicUrl(video.src), poster: imageUrl(video.poster) })),
})
