fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const jobList = document.getElementById("job-list");
        if (data.length > 0) {
            data.slice(0, 5).forEach(job => {
                const jobItem = document.createElement("div");
                jobItem.textContent = `${job.title} - (Placeholder Job)`;
                jobItem.classList.add("job-item");
                jobList.appendChild(jobItem);
            });
        } else {
            jobList.innerHTML = "<p>No job listings available.</p>";
        }
    })
    .catch(error => {
        console.error("Error fetching job data:", error);
        document.getElementById("job-list").innerHTML = "<p>Could not load jobs. Try again later.</p>";
    });
