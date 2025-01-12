        // Function to show the popup :)
        function openPopup() {
            document.getElementById('PopupCM').style.display = 'block';
        }

        // Function to close the popup :D
        function closePopup() {
            document.getElementById('PopupCM').style.display = 'none';
        }


        //COPYMAILLLL
        // Function to copy email to clipboard
function copyEmail() {
    const email = "kaziaidahhaque@gmail.com"; // The email you want to copy
  
    // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = email;
    document.body.appendChild(tempTextArea);
  
    // Select and copy the email text
    tempTextArea.select();
    document.execCommand("copy");
  
    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);
  
    // Show feedback message
    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";
  
    // Hide feedback message after 2 seconds
    setTimeout(function() {
      feedback.style.display = "none";
    }, 2000);
  }
  

  