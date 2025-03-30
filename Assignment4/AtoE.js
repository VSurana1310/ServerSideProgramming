// Assignment->4

// A. 
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}

function validateInput(value) {
    if (value < 0) {
        console.log("Invalid input");
    } else {
        console.log("Valid input");
    }
}

for (let i = 1; i <= 5; i++) {
    console.log("Item ", i);
}

// B.
function showAlert() {
    alert("Form submitted successfully!");
}

function confirmDelete() {
    return confirm("Are you sure you want to delete this item?");
}

function getUserInput() {
    let userInput = prompt("Enter your name:");
    document.getElementById("displayName").innerText = userInput;
}

// C. 
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").innerText = "Text changed!";
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
});

document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "red";
});

function addItem() {
    let item = document.createElement("li");
    item.textContent = "New Item";
    document.getElementById("itemList").appendChild(item);
}

// D. 
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!emailPattern.test(email)) {
        alert("Invalid email");
        return false;
    }
    
    if (!passwordPattern.test(password)) {
        alert("Invalid Password");
        return false;
    }
    
    return true;
}

// E. 
function showDateTime() {
    document.getElementById("dateTime").innerText = new Date();
}

function generateRandomNumber() {
    document.getElementById("randomNumber").innerText = Math.floor(Math.random() * 100);
}

async function fetchWeather() {
    let response = await fetch('http://api.weatherapi.com/v1/current.json?key=7d03259d085d48c2802130500252903&q=Indore&aqi=no');
    let data = await response.json();
    console.log(data);
    document.getElementById("weather").innerText = `Temperature: ${data.main.temp}K`;
}
