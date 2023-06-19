export function clear() {
  chrome.storage.local.clear(function () {
    // unorderedListElement.remove();
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
}
