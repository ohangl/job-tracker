fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log("Mock Job Data:", data))
    .catch(error => console.error("Error fetching job data:", error));
