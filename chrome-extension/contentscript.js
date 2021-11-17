console.log("getting archive");
document.querySelector('meta[name="referrer"]')
  ? document.querySelector('meta[name="referrer"]').remove()
  : null;
let meta = document.createElement("meta");
meta.setAttribute("name", "referrer");
meta.setAttribute("content", "always");
document.head.appendChild(meta);
window.location.href = "http://localhost:3000/arch";
