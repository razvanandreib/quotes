function fetchData() {
    fetch("http://localhost:3000/data")
        .then((response) => response.json())
        .then((data) => {
            // Render data in HTML
            const dataContainer = document.getElementById("data-container");
            dataContainer.innerHTML = "";

            data.forEach((item) => {
                const div = document.createElement("div");

                div.innerHTML = `<p><strong>Author:</strong> ${item.author}</p>
                               <p><strong>Content:</strong> ${item.content}</p>
                               <p><strong>Tag:</strong> ${item.tag}</p>`;

                dataContainer.appendChild(div);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
}

// Call the fetchData function when the page loads
window.onload = fetchData;
