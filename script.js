// Function to display an alert
function sayHello() {
    alert("Hello, World!");
}

// Function to update the progress bar
function updateProgress() {
    let progressBar = document.getElementById("dynamicProgressBar");
    let width = 0;
    
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += 10;
            progressBar.style.width = width + "%";
        }
    }, 500);
}

// Function to increment the counter
let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById("counterValue").innerText = counter;
}

// Function to change the background color of the card
function changeCardColor(button) {
    let colors = ["#f54242", "#42f554", "#4287f5", "#f5e142", "#e142f5"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.parentElement.style.backgroundColor = randomColor;
}

// Function to show the current date and time
function showDateTime() {
    let now = new Date();
    let formattedDateTime = now.toLocaleString();
    document.getElementById("dateTimeDisplay").innerText = formattedDateTime;
}

// Function to add a to-do item
function addTodo() {
    let todoInput = document.getElementById("todoInput");
    let todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        let todoList = document.getElementById("todoList");
        let listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `${todoText} <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Delete</button>`;
        todoList.appendChild(listItem);
        todoInput.value = ""; 
    }
}

// Function to filter items in the search list
function filterItems() {
    let searchInput = document.getElementById("searchInput");
    let filter = searchInput.value.toLowerCase();
    let itemList = document.getElementById("itemList");
    let items = itemList.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        let txtValue = items[i].textContent || items[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Function to toggle the image gallery
function toggleGallery() {
    let gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.classList.toggle("d-none");
    }
}