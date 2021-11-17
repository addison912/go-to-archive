let main = document.createElement("div");
document.getElementById("archive_root").appendChild(main);

console.log(document.referrer);

const getArchive = async () => {
  return fetch("/api/arch/get", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ referer: document.referrer }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data.html;
    });
};

getArchive().then(async (content) => {
  // console.log(content);
  document.getElementById("archive_root").innerHTML = content;
  //   let contentWrapper = document.createElement("div");
  //   contentWrapper.setAttribute("id", "arch_content_wrapper");
  //   contentWrapper.innerHTML = content;

  //   document
  //     .getElementById("archive_root")
  //     .removeChild(document.querySelector(".loading_spinner"))
  //     .appendChild(contentWrapper);
});
