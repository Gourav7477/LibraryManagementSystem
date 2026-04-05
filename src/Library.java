import java.util.ArrayList;

class Library {

    ArrayList<Book> books = new ArrayList<>();

    // Add book
    void addBook(Book book) {
        books.add(book);
        System.out.println("Book added successfully.");
    }

    // View all books
    void viewBooks() {
        for (Book b : books) {
            System.out.println(b.id + " | " + b.title + " | " + b.author +
                    " | " + (b.isIssued ? "Issued" : "Available"));
        }
    }

    // Borrow book
    void borrowBook(int id) {
        for (Book b : books) {
            if (b.id == id && !b.isIssued) {
                b.isIssued = true;
                System.out.println("Book borrowed successfully.");
                return;
            }
        }
        System.out.println("Book not available.");
    }

    // Return book
    void returnBook(int id) {
        for (Book b : books) {
            if (b.id == id && b.isIssued) {
                b.isIssued = false;
                System.out.println("Book returned successfully.");
                return;
            }
        }
        System.out.println("Invalid return.");
    }
}