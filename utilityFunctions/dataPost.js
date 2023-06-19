export function dataPost(tabUrl) {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      tabUrl: tabUrl,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
