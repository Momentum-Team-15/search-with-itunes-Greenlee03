let input = document.querySelector('#searchBar');
let form = document.querySelector('#form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let search = input.value;
    const url = `https://proxy-itunes-api.glitch.me/search?term=${search}`;
    console.log('searched')

    const allSongs = document.getElementById('allSongs');
    while (allSongs.firstChild) {
        allSongs.removeChild(allSongs.firstChild);
    }
        console.log('removed child element');
    
    
    
    fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json.artistName'},
        // headers: {'Content-Type': 'artworkUrl100', 'artistName', 'trackName', 'previewUrl'},
    })
    
    .then((response) => response.json())
    
    .then((data) => {
        console.log(data.results);
        if (data.results.length === 0) {
            alert('Please enter a Song, Artist or Album');
            input.value = "";
        };
        
        allResults = data.results;
        
        
        return allResults.map(results => {                
            // create html elements
            soundDiv = document.createElement('div');
            const section = document.createElement('section');
                albumCover = document.createElement('img');
                songName = document.createElement('h1');
                artistName = document.createElement('p');
                audio = document.createElement('audio');
                audioSource = document.createElement('source');
            
            
            // console.log(results);
            
            //put stuff on page
            albumCover.src = results.artworkUrl100;
            songName.innerHTML = results.trackName;
            artistName.innerHTML = results.artistName;
            audioSource.src = results.previewUrl;
            audio.controls = true;
            
            section.appendChild(albumCover);
            section.appendChild(artistName);
            section.appendChild(songName);
            section.appendChild(audio);
            audio.appendChild(audioSource);

            allSongs.appendChild(section);
            

            // console.log(allSongs);
            

            // input.value = "";
        })
    })
    
    .catch(error => console.log('DENIED!', error))
})

// function play() {
//     audio.play();
// }
// section.addEventListener('click', => {
//     console.log(audio)
// })

// const searchBtn = document.getElementById('searchBtn');
// searchBtn.addEventListener('click', updateSearch)

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');
    for(let i = 0; i < audio.length; i++) {
        if (audio[i] != event.target) {
            audio[i].pause();
        }
    }
}, true)