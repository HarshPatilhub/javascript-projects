document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const moviesContainer = document.getElementById('moviesContainer');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchMovies(searchTerm);
        }
    });

    function searchMovies(searchTerm) {
        const apiKey = '413c00fd';
        const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayMovies(data.Search);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
                alert('Error fetching movie data. Please try again.');
            });
    }

    function displayMovies(movies) {
        if (!movies) {
            moviesContainer.innerHTML = '<p>No movies found</p>';
            return;
        }

        moviesContainer.innerHTML = movies.map(movie => `
            <div class="movie">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100'}" alt="${movie.Title}">
                <p>Title: ${movie.Title}</p>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            </div>
        `).join('');
    }
});
