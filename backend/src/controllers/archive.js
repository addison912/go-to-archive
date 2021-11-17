const puppeteer = require("puppeteer"),
  { user_agent_list } = require("../config/config");

module.exports = {
  get: async (req, res) => {
    // console.log(req.headers);
    const browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--headless",
        "--disable-gpu",
        "--window-size=1920x1080",
      ],
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      user_agent_list[Math.floor(Math.random() * user_agent_list.length)]
    );

    try {
      const url = `https://archive.md/${req.body.referer}`;
      console.log(url);
      await page.goto(url);

      const selector = await page.evaluate(() => {
        return document.querySelector(".TEXT-BLOCK a").getAttribute("href");
      });
      console.log(selector);
      await page.goto(selector);
      //   let htmlString = await page.content();
      let htmlString = await page.evaluate(() => {
        let main = document.querySelector(".html");
        let root = document.createElement("div");
        root.setAttribute(
          "style",
          document.body.getAttribute("style")
            ? document.body.getAttribute("style")
            : ""
        );
        root.setAttribute("id", "arch_root");
        document.body.appendChild(root);
        document.getElementById("arch_root").appendChild(main);
        document.body.removeChild(document.querySelector("body > center"));
        return document.querySelector("body").innerHTML;
      });
      newHTML = htmlString.replace(/src="\//g, `src="https://archive.md/`);

      console.log(typeof newHTML);
      res.json({ html: newHTML });
    } catch (err) {
      console.error(err);
      res.json({ html: "<div>Not available</div>" });
    }
    await browser.close();
  },
};
