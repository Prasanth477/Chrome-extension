let bookmarkButton = document.getElementById("button1");
let clearButton = document.getElementById("clearButton");
let unorderedListElement = document.getElementById("unorderedList");

function openCenteredWindow({ url, width, height }) {
  const pos = {
    x: screen.width / 2 - width / 2,
    y: screen.height / 2 - height / 2,
  };

  const features = `width=${width} height=${height} left=${pos.x} top=${pos.y}`;

  return window.open(url, "_blank", features);
}

chrome.storage.local.get({ urlList: [] }, function (item) {
  let newUrlList = item.urlList;
  if (newUrlList.length < 1) {
    const noitemText = document.createElement("li");
    noitemText.innerHTML = "Add the bookmarks";
  } else {
    newUrlList.map((singleUrl) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${singleUrl}`;
      unorderedListElement.appendChild(listItem);
    });
  }
});

bookmarkButton.addEventListener("click", () => {
  // chrome.storage.local.set({ logged_in: true });
  // console.log("loggedin", chrome.browserAction.getBadgeBackgroundColor);
  // chrome.browserAction.setPopup({
  //   popup: "login.html",
  // });
  //   chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  //     let url = tabs[0].url;
  //     chrome.storage.local.set({ bookmarked: url });
  //     console.log("url", url);
  //   });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tabUrl = tabs[0].url;
    chrome.storage.local.get({ urlList: [] }, function (item) {
      let newUrlList = item.urlList;
      if (newUrlList.indexOf(tabUrl) === -1) {
        newUrlList.push(tabUrl);
      }
      chrome.storage.local.set({ urlList: newUrlList });
      console.log(newUrlList);
      //   newUrlList.map((singleUrl) => {
      //     const listItem = document.createElement("h3");
      //     listItem.innerHTML = `${singleUrl}`;
      //     unorderedList.appendChild(listItem);
      //   });

      // Prepare ul dom structure

      // Get all li items and push it in ul element
      // Use push/append/add to add recent element at the end of the list
    });
  });
});

clearButton.addEventListener("click", () => {
  chrome.storage.local.clear(function () {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
});
