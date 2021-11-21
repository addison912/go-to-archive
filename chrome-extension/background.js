chrome.runtime.onInstalled.addListener(() => {
  //create context menus
  chrome.contextMenus.create({
    title: "Go to archive",
    id: "go",
    contexts: ["all"],
  }),
    console.log("created context menu");
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  // inject script
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: false },
    files: ["contentscript.js"],
  });
});
