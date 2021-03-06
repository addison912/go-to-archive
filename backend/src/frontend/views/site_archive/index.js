let main = document.createElement("div");
document.getElementById("archive_root").appendChild(main);

referrer = document.referrer.replace(/\?.*/, "");
console.log(referrer);

const getArchive = async () => {
  return fetch("/api/arch/get", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ referer: referrer }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data.html;
    });
};

getArchive().then(async (content) => {
  // console.log(content);
  // document.getElementById("archive_root").innerHTML = content;
  let contentWrapper = document.createElement("div");
  contentWrapper.setAttribute("id", "arch_content_wrapper");
  contentWrapper.innerHTML = content;
  let spinner = document.querySelector(".loading_spinner");
  spinner ? spinner.remove() : null;

  document.getElementById("archive_root").appendChild(contentWrapper);
});
