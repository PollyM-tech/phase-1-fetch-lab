function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => resp.json())
    .then((json) => {
      // Pass the JSON data to renderBooks()
      renderBooks(json);

      // Finding the 5th book
      const fifthBook = json[4]; // Use json, not JSON
      console.log('The 5th book in the series:', fifthBook);

      // Finding the 1031st character
      fetch('https://anapioficeandfire.com/api/characters/1031')
        .then((resp) => resp.json())
        .then((character) => {
          console.log('The 1031st character in the series:', character.name);
        })
        .catch((error) => {
          console.error('Error fetching character:', error);
        });

      // Finding the total number of pages
      const totalPages = json.reduce((total, book) => total + book.numberOfPages, 0);
      console.log('Total number of pages of all the books:', totalPages);
    })
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});