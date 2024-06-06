// Define sample credentials
const credentials = [
    { username: "admin@exmple.com", password: "gidy3£(07" },
    { username: "001", password: "\G7yaldpz!" },
    { username: "002", password: "[M'/0828k=" },
    { username: "003", password: "\G7yald78" }
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
            window.location.href = "do.not.disturb.me"; 
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    login(); // Call the login function
});
