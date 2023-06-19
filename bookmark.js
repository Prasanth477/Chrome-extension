import { clear } from "./utilityFunctions/clearFunction.js";
import { dataPost } from "./utilityFunctions/dataPost.js";

//displaying the  urls list
chrome.storage.local.get({ urlList: [] }, (item) => {
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

//Urls saving logic
let unorderedListElement = document.getElementById("unorderedList");
let bookmarkButtonContainer = document.getElementById(
  "bookmarkButtonContainer"
);
let tabUrl = "";
chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
  tabUrl = tabs[0].url;
});
// if (true) {
const bookmarkButton = document.createElement("button");
bookmarkButton.classList.add("button");
bookmarkButton.textContent = "click here to bookmark";
bookmarkButtonContainer.appendChild(bookmarkButton);

bookmarkButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabUrl = tabs[0].url;
    //post
    dataPost(tabUrl);
    chrome.storage.local.get({ urlList: [] }, (item) => {
      let newUrlList = [...item.urlList];
      if (newUrlList.indexOf(tabUrl) === -1) {
        newUrlList.unshift(tabUrl);
      }
      chrome.storage.local.set({ urlList: newUrlList });
      const listItem = document.createElement("li");
      listItem.innerHTML = `${tabUrl}`;
      unorderedList.appendChild(listItem);
    });
  });
});
// } else {
//   const noBookmarkText = document.createElement("h3");
//   noBookmarkText.innerHTML = "this cant be added as bookmark";
//   bookmarkButtonContainer.appendChild(noBookmarkText);
// }

//clearButton
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => clear());

//options BUtton
document.getElementById("threeDots").addEventListener("click", showDropdown);
function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//messaging    // to do
(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" });
  // do something with response here, not outside the function
  console.log(response);
})();
