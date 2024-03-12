export default function fetchData() {
    return fetch("http://localhost:3000/data") // Return the fetch promise
        .then((response) => response.json())
        .then((data) => {
            // // Parse data and select specific items
            // const filteredData = data.map((item) => {
            //     return {
            //         author: item.author,
            //         content: item.content,
            //         // Add more properties as needed
            //     };
            // });

            const filteredData = data.filter((info) => {
                return info.author === "James Kidd"
            })

            // Render selected data in HTML
            const dataContainer = document.getElementById("selected-author");
            dataContainer.innerHTML = "";


            filteredData.forEach((item) => {
                const div = document.createElement("div");

                div.innerHTML = `<p><strong>Author:</strong> ${item.author}</p>
                               <p><strong>Content:</strong> ${item.content}</p>`;
                // Add more HTML for other properties

                dataContainer.appendChild(div);
            });

            return filteredData; // Return the selected data
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            throw error; // Throw the error to propagate it to the caller
        });
}

// Call the fetchData function when the page loads
// window.onload = () => {
//     fetchData()
//         .then((filteredData) => {
//             // console.log("Selected data:", filteredData); // Access the selected data here
//             console.log(filteredData[1]);


//         })
//         .catch((error) => {
//             // Handle error
//         });
// };

window.onload = fetchData;
