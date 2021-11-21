console.log("getting archive");
document.querySelector('meta[name="referrer"]')
  ? document.querySelector('meta[name="referrer"]').remove()
  : null;
let meta = document.createElement("meta");
meta.setAttribute("name", "referrer");
meta.setAttribute("content", "always");
document.head.appendChild(meta);
window.location = "http://archive.tidepooltech.net/arch";
function onload() {
  console.log("here");
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
}
