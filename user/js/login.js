// Define sample credentials
const credentials = [
    { username: "001", password: "hfa36l" },
    { username: "002", password: "jM75gx" },
    { username: "003", password: "pDfj0h" }
];

// Function to handle form submission
function login() {
    // Get the values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the credentials match any in the array
    const validCredential = credentials.find(cred => cred.username === username && cred.password === password);
    
    if (validCredential) {
        alert("Login successful!");
        // Redirect to another page or do something else here
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    login(); // Call the login function
});
