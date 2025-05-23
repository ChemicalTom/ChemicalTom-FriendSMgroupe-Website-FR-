// Function to update the time
    function updateTime() {
      fetch("https://www.timeapi.io/api/time/current/zone?timeZone=Europe/Amsterdam")
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          // Get the element by ID and update the text
          const hoursElement = document.getElementById('Hours');
          hoursElement.textContent = `Il est : ${data.time} et le ` + (data.date);
          
        })
        .catch(error => {
          document.getElementById('Hours').textContent = "Error fetching time.";
          console.error("There was an error:", error);
        });
    }

    // Call the function once when the page loads
    updateTime();