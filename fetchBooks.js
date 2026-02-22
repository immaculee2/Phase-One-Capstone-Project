// fetchBooks.js
export async function getBooks(query = "programming") {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=12`);
    const data = await response.json();

    return data.docs.map(book => ({
      id: book.key,
      title: book.title,
      author: book.author_name ? book.author_name[0] : "Unknown",
      cover: book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150x220"
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}