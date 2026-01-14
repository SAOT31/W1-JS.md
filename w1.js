function validateAge(userAge) {
    return userAge >= 18;
}

function validateStatus(isActive) {
    return isActive === true;
}

function notifyUser(message) {
    alert(message);
    console.log(message);
}

// --- Main Execution ---

// 1. User Inputs
let userName = prompt("Enter your name:") || "Guest";
let age = Number(prompt("Enter your age:"));
let email = prompt("Enter your email:");

// confirm() returns true (OK) or false (Cancel)
let isActive = confirm("Is the user currently active?");

// Log initial data summary
console.log(
    `User Profile:\nName: ${userName}\nAge: ${age}\nEmail: ${email}\nActive: ${isActive}`
);

// 2. Validation & Login Logic
if (validateAge(age) && validateStatus(isActive)) {
    
    notifyUser(`Credentials verified for ${userName}. Starting login process...`);

    // 3. Password System (Max 3 attempts)
    const CORRECT_PASS = "admin123";
    let accessGranted = false;

    for (let i = 1; i <= 3; i++) {
        let inputPass = prompt(`Password Check (Attempt ${i}/3):`);

        if (inputPass === CORRECT_PASS) {
            accessGranted = true;
            break; // Exit loop on success
        } else {
            alert("Incorrect password.");
        }
    }

    // Final Access Check
    if (accessGranted) {
        notifyUser("SUCCESS: System access granted.");
    } else {
        notifyUser("ERROR: Account locked due to excessive failed attempts.");
    }

} else {
    // Access Denied handling
    if (!validateAge(age)) {
        notifyUser("DENIED: User is under 18.");
    } else {
        notifyUser("DENIED: User account is inactive.");
    }
}
