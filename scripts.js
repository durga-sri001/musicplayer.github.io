const songs = [
  {
    title: "Chudu Chudu",
    artist: "Chandu Ravi",
    movie: "Anaganaga ",
    src:"songs/[iSongs.info] 03 - Chudu Chudu.mp3",
    image: "imgs/Anaganaga.jpg"
  },
  { 
    title: "Adiga",
    artist: "Karthik",
    movie: "HI Nanna",
    src:"songs/[iSongs.info] 09 - Adigaa.mp3",
    image: "imgs/Hi Nanna.jpg"
  },
  { 
    title: "Hey Rangule",
    artist: "Ramya Behara, Anurag Kulkarni",
    movie: "Amaran",
    src:"songs/[iSongs.info] 01 - Hey Rangule.mp3",
    image: "imgs/Amaran img.jpg"
  },
  { 
    title: "Nee Neeli Kannullona",
    artist: "Justin Prabhakaran, Gowtham Bharadwaj",
    movie: "Dear Comrade",
    src:"songs/[iSongs.info] 01 - Nee Neeli Kannullona.mp3",
    image: "imgs/Dear  Cmrd img.jpg"
  },
  { 
    title: "Ooru Palletooru",
    artist: "Mangli, Ram Miryala, Bheems Ceciroleo",
    movie: "Balagam",
    src:"songs/[iSongs.info] 01 - Ooru Palletooru.mp3",
    image: "imgs/Balagam img.jpg"
  },
  { 
    title: "Premalo",
    artist: "Anurag Kulkarni, Sameera Bharadwaj",
    movie: "Court",
    src:"songs/[iSongs.info] 01 - Premalo.mp3",
    image: "imgs/Court img.jpeg"
  },
  { 
    title: "Ye Mera Jaha",
    artist: "KK",
    movie: "Kushi",
    src:"songs/[iSongs.info] 01 - Ye Mera Jaha.mp3",
    image: "imgs/Kushi img.jpg"
  },
  { 
    title: "Ammaye",
    artist: "KK",
    movie: "Kushi",
    src:"songs/[iSongs.info] 02 - Ammaye Sannaga.mp3",
    image: "imgs/Kushi img.jpg"
  },
  { 
    title: "Bujji Thalli",
    artist: "Javed Ali",
    movie: "Thandel",
    src:"songs/[iSongs.info] 02 - Bujji Thalli.mp3",
    image: "imgs/Thandel img.jpg"
  },
  { 
    title: "Kadalalle",
    artist: "Sid Sriram, Aishwarya Ravichandran, Justin Prabhakaran",
    movie: "Dear Comrade",
    src:"songs/[iSongs.info] 02 - Kadalalle.mp3",
    image: "imgs/Dear  Cmrd img.jpg"
  },
  { 
    title: "Manasavacha",
    artist: "Unni Krishnan, Chitra",
    movie: "Godavari",
    src:"songs/[iSongs.info] 02 - Manasavacha.mp3",
    image: "imgs/Godavari img.jpg"
  },
  { 
    title: "Potti Pilla",
    artist: "Ram Miryala",
    movie: "Balagam",
    src:"songs/[iSongs.info] 02 - Potti Pilla.mp3",
    image: "imgs/Balagam img.jpg"
  },
  { 
    title: "Raakasi Gadasu Pilla",
    artist: "Ananya Nair, Rahul Sipligunj, Roshitha, Dhibu Ninan Thomas",
    movie: "Kousalya Krishnamurthy",
    src:"songs/[iSongs.info] 02 - Raakasi Gadasu Pilla.mp3",
    image: "imgs/Kousalya kmurty img.jpg"
  },
  { 
    title: "Namo Namah Shivaya",
    artist: "Anurag Kulkarni, Haripriya",
    movie: "Thandel",
    src:"songs/[iSongs.info] 03 - Namo Namah Shivaya.mp3",
    image: "imgs/Thandel img.jpg"
  },
  { 
    title: "Hilesso Hilesso",
    artist: "Nakash Aziz, Shreya Ghoshal",
    movie: "Thandel",
    src:"songs/[iSongs.info] 04 - Hilesso Hilessa.mp3",
    image: "imgs/Thandel img.jpg"
  },
  { 
    title: "Vendiminnu Neevanta",
    artist: "Krishna Tejasvi, Sireesha Bhagavatula",
    movie: "Amaran",
    src:"songs/[iSongs.info] 04 - Vendiminnu Neevanta.mp3",
    image: "imgs/Amaran img.jpg"
  },
  { 
    title: "Aduvari Matalaku",
    artist: "Muralidhar",
    movie: "Kushi",
    src:"songs/[iSongs.info] 06 - Aduvari Matalaku (1).mp3",
    image: "imgs/Kushi img.jpg"
  },



  



  


  



  

];

const songList = document.getElementById("song-list");
const searchInput = document.getElementById("search-input");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songMovie = document.getElementById("song-movie");
const songImage = document.getElementById("song-image");
const audioPlayer = document.getElementById("audio-player");
const nextUp = document.getElementById("next-up");

let currentSongIndex = -1;

function loadSongs(filter = "") {
  songList.innerHTML = "";
  songs.forEach((song, index) => {
    if (song.title.toLowerCase().includes(filter.toLowerCase())) {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      li.onclick = () => playSong(index);
      songList.appendChild(li);
    }
  });
}

function playSong(index) {
  const song = songs[index];
  currentSongIndex = index;
  songTitle.textContent = song.title;
  songArtist.textContent = `Artist: ${song.artist}`;
  songMovie.textContent = `Movie: ${song.movie}`;
  songImage.src = song.image;
  audioPlayer.src = song.src;
  audioPlayer.play();
  const nextIndex = (index + 1) % songs.length;
  nextUp.textContent = `Next up: ${songs[nextIndex].title} - ${songs[nextIndex].movie}`;
}

audioPlayer.addEventListener("ended", () => {
  const nextIndex = (currentSongIndex + 1) % songs.length;
  playSong(nextIndex);
});

searchInput.addEventListener("input", (e) => {
  loadSongs(e.target.value);
});

loadSongs();
