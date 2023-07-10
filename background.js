chrome.runtime.onInstalled.addListener(function () {
  let contexts = [
    "page",
    "selection",
    "link",
    "editable",
    "image",
    "video",
    "audio",
  ];
  for (let i = 0; i < contexts.length; i++) {
    let context = contexts[i];
    let title = "Test '" + context + "' menu item";
    chrome.contextMenus.create({
      title: title,
      contexts: [context],
      id: context,
    });
  }

  let parent = chrome.contextMenus.create({
    title: "Test parent item",
    id: "parent",
  });
  chrome.contextMenus.create({
    title: "Child 1",
    parentId: parent,
    id: "child1",
  });
  chrome.contextMenus.create({
    title: "Child 2",
    parentId: parent,
    id: "child2",
  });
});

// //message listener from content script
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") {
//     chrome.action.setPopup({
//       popup: "afterSignin/bookmark.html",
//     });
//   }
//   sendResponse({ farewell: "goodbye" });
// });

// chrome.storage.local.get(["logged_in"]).then((result) => {
//   if (result.logged_in) {
//     chrome.action.setPopup({
//       popup: "afterSignin/bookmark.html",
//     });
//     console.log("crct");
//   } else {
//     console.log("error");
//   }
//   console.log("loggedinState", result.logged_in);
//   // console.log("Value currently is " + result.logged_in);
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.localstorage == "username") {
    sendResponse({
      username: JSON.parse(localStorage.getItem("users"))[0].username,
    });
    chrome.action.setPopup({
      popup: "afterSignin/bookmark.html",
    });
  } else if (request.localstorage == "password") {
    sendResponse({
      password: JSON.parse(localStorage.getItem("users"))[0].password,
    });
    chrome.action.setPopup({
      popup: "afterSignin/bookmark.html",
    });
  } else sendResponse({});
});
