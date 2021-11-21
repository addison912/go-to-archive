chrome.runtime.onInstalled.addListener(() => {
  //create context menus
  console.log("here");
  chrome.contextMenus.create({
    title: "Go to archive",
    id: "go",
    contexts: ["all"],
  }),
    console.log("created context menu");
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  //   chrome.tabs.executeScript(tab.id, {
  //     code: `console.log(${JSON.stringify(info.pageUrl)})`,
  //   });
  //   console.log(info);
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: false },
    files: ["contentscript.js"],
  });
});
