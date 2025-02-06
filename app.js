
document.addEventListener("DOMContentLoaded", () => {
    const jokeContainer = document.getElementById("joke");
    const jokeButton = document.getElementById("getJoke");
    
        jokeButton.addEventListener("click", fetchJoke);
    // Hent en joke, når siden indlæses
        fetchJoke(); 

    // random joke api
fetch("https://icanhazdadjoke.com/", { 
    headers: {
        "accept": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))

    function fetchJoke() {
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                "accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            jokeContainer.innerHTML = data.joke;
        });
    }

 
});
