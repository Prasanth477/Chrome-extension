//here user details validation should be added . then only the message should be passed to backgorund

document.getElementById("loginForm").addEventListener("submit", async () => {
  const response = await chrome.runtime.sendMessage({ greeting: "hello" });
  // do something with response here, not outside the function
  console.log(response);
});
