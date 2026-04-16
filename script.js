let books = [];

// Add Book
function addBook() {
    let id = document.getElementById("bookId").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    books.push({ id, title, author, issued: false });

    updateDashboard();
}

// View Books
function viewBooks() {
    let output = "";

    books.forEach(b => {
        output += `<div>
            ${b.id} | ${b.title} | ${b.author} | 
            ${b.issued ? "Issued" : "Available"}
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}

// Borrow
function borrowBook() {
    let id = prompt("Enter Book ID");

    let book = books.find(b => b.id == id);

    if (book && !book.issued) {
        book.issued = true;
        updateDashboard();
        alert("Book Borrowed");
    } else {
        alert("Not Available");
    }
}

// Return
function returnBook() {
    let id = prompt("Enter Book ID");

    let book = books.find(b => b.id == id);

    if (book && book.issued) {
        book.issued = false;
        updateDashboard();
        alert("Book Returned");
    } else {
        alert("Invalid");
    }
}

// Update Dashboard
function updateDashboard() {
    let total = books.length;
    let issued = books.filter(b => b.issued).length;
    let available = total - issued;

    document.getElementById("totalBooks").innerText = total;
    document.getElementById("issuedBooks").innerText = issued;
    document.getElementById("availableBooks").innerText = available;

    viewBooks();
}