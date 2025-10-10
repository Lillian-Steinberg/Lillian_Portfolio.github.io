export default function getImgUrl(name) {
  return new URL(`../assets/images/projects/${name}`, import.meta.url).href;
}
