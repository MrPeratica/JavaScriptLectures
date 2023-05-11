const jokeElement = document.getElementById('joke');
const newJokeButton = document.getElementById('joke-btn');

    document.addEventListener('DOMContentLoaded', function() {
    newJokeButton.addEventListener('click', generateJoke);
    generateJoke();

    function generateJoke() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const jokeData = JSON.parse(this.responseText);
          jokeElement.innerHTML = jokeData.value;
        } else if (this.readyState === 4) {
          jokeElement.innerHTML = 'Error getting Chuck Norris joke. Please try again later.';
        }
      };
      xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
      xhr.send();
    }
  });