let frm = document.getElementById("form");
let button = document.getElementById("btn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let number = document.getElementById("phone").value;
  let fed = document.getElementById("text").value;
  let rate = document.getElementById("ratings").value;
  if (!fed || !email || !number || !name) {
    alert("Please fill in all fields before submitting.");
    return;
}
alert("Thank you for your feedback!");
  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", number);
  localStorage.setItem("feedback", fed);
  localStorage.setItem("rating", rate);
  // Retrieve stored data from localStorage
let storedUsername = localStorage.getItem("username") || "No Name Provided";
let mailData = localStorage.getItem("email") || "No Email Provided";
let phone = localStorage.getItem("phone") || "No Phone Provided";
let feedback = localStorage.getItem("feedback") || "No Feedback Provided";
let rating = localStorage.getItem("rating") || "No Rating Provided";

// Create elements
let nam = document.createElement("h1");
let nam1 = document.createElement("p");
let ph = document.createElement("p");
let fedd = document.createElement("p");
let rat = document.createElement("p");

// Set content
nam.innerHTML = `<strong>Name:</strong> ${storedUsername}`;
nam1.innerHTML = `<strong>Email:</strong> ${mailData}`;
ph.innerHTML = `<strong>Phone:</strong> ${phone}`;
fedd.innerHTML = `<strong>Feedback:</strong> ${feedback}`;
rat.innerHTML = `<strong>Rating:</strong> ${rating} ⭐`;

// Create card container
let box = document.createElement("div");
box.style.width = "300px";
box.style.padding = "20px";
box.style.backgroundColor = "#3498db"; // Blue background
box.style.color = "white";
box.style.display = "flex";
box.style.flexDirection = "column"; // Stack elements vertically
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.style.fontSize = "16px";
box.style.fontFamily = "Arial, sans-serif";
box.style.borderRadius = "10px";
box.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
box.style.margin = "20px auto";
box.style.textAlign = "center";


let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.marginTop = "10px";
  removeBtn.style.padding = "8px 15px";
  removeBtn.style.border = "none";
  removeBtn.style.backgroundColor = "#e74c3c";
  removeBtn.style.color = "white";
  removeBtn.style.fontSize = "14px";
  removeBtn.style.cursor = "pointer";
  removeBtn.style.borderRadius = "5px";

removeBtn.addEventListener("click", () => {
    document.body.removeChild(box);
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("feedback");
    localStorage.removeItem("rating");
  });
  // Append content to the box
box.append(nam, nam1, ph, fedd, rat,removeBtn);

// Append box to the body
document.body.appendChild(box);

 

});
