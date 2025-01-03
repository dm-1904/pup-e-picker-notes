// const myHeaders = {
//   "Content-Type": "application/json",
// };

// const rawBody = JSON.stringify({
//   title: "note 4",
//   content: "I'm note 4",
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

// I don't need any of the above commented out code
// because of what I added to the fetch request

const createNote = ({ title, content }) =>
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title, // title: title,  (object shorthand property)
      content, // content: content,
    }),
  })
    .then((data) => data.json())
    .then(console.log);

// .then((response) => response.text())
// .then((result) => console.log(result))
// .catch((error) => console.log("error", error));
