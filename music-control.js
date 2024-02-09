
let music = new Audio('resource/audio/song-13.mp3');
let songs = [
    {
        id: '1',
        ArtistName: 'Mithoon, Uttam Singh',
        tittle: `Gaddar-2`,
        poster: 'resource/hindi-img-1.jpeg'
    },
    {
        id: '2',
        ArtistName: `Nikhil D'Souza`,
        tittle: `  Alvida`,
        poster: 'resource/hindi-img-2.jpeg'
    },
    {
        id: '3',
        ArtistName: 'Taaruk Raina',
        tittle: `Kho Gaye`,
        poster: 'resource/hindi-img-3.jpeg'
    },
    {
        id: '4',
        ArtistName: 'Atif Aslam',
        tittle: `Pahali Dafa`,
        poster: 'resource/hindi-img-4.jpeg'
    },
    {
        id: '5',
        ArtistName: 'Arijit Singh, Sukriti Kakar',
        tittle: `Pathan`,
        poster: 'resource/hindi-img-5.jpeg'
    },
    {
        id: '6',
        ArtistName: 'Ambili Menon',
        tittle: ` Meri Galati`,
        poster: 'resource/hindi-img-6.jpeg'
    },
    {
        id: '7',
        ArtistName: 'Arijit Singh',
        tittle: ` Marjjawa`,
        poster: 'resource/hindi-img-7.jpeg'
    },
    {
        id: '8',
        ArtistName: 'Naushad Khan',
        tittle: ` Bhula Dunga`,
        poster: 'resource/hindi-img-8.jpeg'
    },
    {
        id: '9',
        ArtistName: ' Jubin Nautiyal',
        tittle: `Kabil`,
        poster: 'resource/hindi-img-9.jpeg'
    },
    {
        id: '10',
        ArtistName: 'Tory Lanez ',
        tittle: ` KLOK`,
        poster: 'resource/eng-img-1.jpeg'
    },
    {
        id: '11',
        ArtistName: 'One Direction',
        tittle: `Party Night`,
        poster: 'resource/eng-img-2.jpeg'
    },
    {
        id: '12',
        ArtistName: 'Katy party',
        tittle: `you`,
        poster: 'resource/eng-img-3.jpeg'
    },
    {
        id: '13',
        ArtistName: 'Camila Cabillo',
        tittle: `Havana`,
        poster: 'resource/eng-img-4.jpeg'
    },
    {
        id: '14',
        ArtistName: 'Saulja Boys',
        tittle: `Rockstar`,
        poster: 'resource/eng-img-5.jpeg'
    },
    {
        id: '15',
        ArtistName: 'BADSHAH',
        tittle: `Toxic`,
        poster: 'resource/eng-img-6.jpeg'
    },
    {
        id: '16',
        ArtistName: 'Nick Caves',
        tittle: `Red Right Hand`,
        poster: 'resource/eng-img-7.jpeg'
    },
    {
        id: '17',
        ArtistName: 'Param singh',
        tittle: `Daru Badnam`,
        poster: 'resource/eng-img-8.jpeg'
    },
    {
        id: '18',
        ArtistName: 'Katy Perry',
        tittle: ` Roar`,
        poster: 'resource/eng-img-9.jpeg'
    },
    {
        id: '19',
        ArtistName: 'bear bear & friends',
        tittle: `Glow Night`,
        poster: 'resource/eng-img-10.jpeg'
    },
    {
        id: '20',
        ArtistName: 'Gurru Randhawa',
        tittle: `Morni`,
        poster: 'resource/new-release-1.jpeg'
    },
    {
        id: '21',
        ArtistName: 'Honey singh',
        tittle: 'Blue Eyes',
        poster: 'resource/new-release-2.jpeg'
    },
    {
        id: '22',
        ArtistName: 'Meharbaan',
        tittle: `Meharbaan`,
        poster: 'resource/new-release-3.jpeg'
    },
    {
        id: '23',
        ArtistName: 'Harnoor',
        tittle: `Taare`,
        poster: 'resource/new-release-4.jpeg'
    }
]

Array.from(document.getElementsByClassName('song-horizontal')).forEach((elm, i) => {
    elm.getElementsByTagName('img')[0].src = songs[i].poster;
    elm.getElementsByTagName('p')[0].innerHTML = songs[i].tittle;
    elm.getElementsByTagName('span')[0].innerHTML = "sep 23 2025";
});
//Audio Controller
function musicControl() {
    let audioPlay = document.getElementById('audio-play');
    audioPlay.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
            music.play();
            audioPlay.classList.remove('fa-circle-play');
            audioPlay.classList.add('fa-circle-pause');
        } else {
            music.pause();
            audioPlay.classList.add('fa-circle-play');
            audioPlay.classList.remove('fa-circle-pause');
        }
    })
    document.body.addEventListener('keydown', (e) => {
        if (e.key == " " || e.code == "Space") {
            console.log("space key pressed");
            if (music.paused || music.currentTime <= 0) {
                music.play();
                audioPlay.classList.remove('fa-circle-play');
                audioPlay.classList.add('fa-circle-pause');
            } else {
                music.pause();
                audioPlay.classList.add('fa-circle-play');
                audioPlay.classList.remove('fa-circle-pause');
            }
        }
    })
}
musicControl();
function playSongChangeMaster(songId) {
    for (let index in songs) {
        if (songId != songs[index].id)
            continue;
        else {
            audioControlTittle.innerHTML = songs[index].tittle;
            audioControlArtistName.innerHTML = songs[index].ArtistName;

            break;
        }
    }
    music.src = `resource/audio/song-${songId}.mp3`;
    music.play();
    //for hindi song
    if (songId < 10) {
        audioControlPoster.src = `resource/hindi-img-${songId}.jpeg`
    }
    //for new release song section
    else if (songId >= 20 && songId <= 23) {
        music.src = `resource/audio/new-song-${songId}.mp3`;
        audioControlPoster.src = `resource/new-release-${songId - 19}.jpeg`
        // music.play();
    }
    else {
        audioControlPoster.src = `resource/eng-img-${songId - 9}.jpeg`
    }
    audioPlay.classList.remove('fa-circle-play');
    audioPlay.classList.add('fa-circle-pause');
}
//Return id by Song Tittle
function GiveId(songTittle) {
    for (let obj of songs) {
        if (obj.tittle == songTittle)
            return obj.id;
    }
}
//Audio song changer Index by uniqe id
let songId;
let audioControlPoster = document.getElementById('poster-audio-controller');
var audioControlTittle = document.getElementById('audioControllerTittle');
let audioControlArtistName = document.getElementById('audioControllerArtistName');
Array.from(document.getElementsByClassName('songList')).forEach((el) => {
    el.addEventListener('click', (em) => {
        songId = em.currentTarget.id;
        //content of masterPlay and song play by function
        playSongChangeMaster(songId);
    });
});
//Change color of favorite icon on click
Array.from(document.getElementsByClassName('queue-list-icon')).forEach((el) => {
    el.addEventListener('click', (em) => {
        let currIcon = em.currentTarget;
        currIcon.classList.toggle('heartIconActive');
        currIcon.classList.toggle('fa-solid');
    });
});
//Song movement in master play
function master() {
    let Prev = document.getElementById('prev');
    let Next = document.getElementById('next');
    let Repeat = document.getElementById('prev');
    const masterFavIcon = document.getElementById('masterFavIcon');
    let currentSongTittle = document.getElementById('audioControllerTittle').innerText;
    songId = GiveId(currentSongTittle);
    //Change master fav icon on active
    masterFavIcon.addEventListener('click', () => {
        masterFavIcon.classList.toggle('heartIconActive');
        masterFavIcon.classList.toggle('fa-solid');
    })
    //previous icon
    Prev.addEventListener('click', () => {
        songId--;
        if (songId < 1)
            songId = 23;
        playSongChangeMaster(songId);
    })
    //next icon
    Next.addEventListener('click', () => {
        songId++;
        if (songId > 23)
            songId = 1;
        playSongChangeMaster(songId);
    })
    //Repeat and not repeat icon.

}
master();

//time on audio controller
let curTime = document.getElementById('currentStart');
let endTime = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');
music.addEventListener('timeupdate', () => {
    let song_cur = music.currentTime;
    let song_dur = music.duration;
    let min1 = Math.floor(song_cur / 60);
    let sec1 = Math.floor(song_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    curTime.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(song_dur / 60);
    let sec2 = Math.floor(song_dur % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    endTime.innerText = `${min2}:${sec2}`;

    //progress bar
    let progressbar = parseInt((song_cur / song_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * (music.duration / 100)
});

//volume up and down
let vol = document.getElementById('vol');
let volBar = document.getElementById('volBar');
let volDot = document.getElementById('volDot');
vol.addEventListener('change', () => {
    let Volume = vol.value;
    volBar.style.width = `${Volume}%`;
    volDot.style.left = `${Volume}%`;
    music.volume = Volume / 100;
})
// Mouse Event
function togglePlayBtn(className) {
    Array.from(className).forEach((el) => {
        el.addEventListener('mouseover', (em) => {
            let currIcon = em.currentTarget;
            let icon = currIcon.lastElementChild;
            if (!icon.classList.contains('fa-pause')) {
                icon.classList.add('fa-play');
            }
        });
        el.addEventListener('click', (em) => {
            let currIcon = em.currentTarget;
            let icon = currIcon.lastElementChild;
            if (icon.classList.contains('fa-play')) {
                music.play();
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            }
            else {
                music.pause();
                icon.classList.add('fa-play');
                icon.classList.remove('fa-pause');
            }
        });
        el.addEventListener('mouseleave', (em) => {
            let currIcon = em.currentTarget;
            let icon = currIcon.lastElementChild;
            icon.classList.remove('fa-play');
        });
    });
}
// Mouse Event on Artist function invocation
togglePlayBtn(document.getElementsByClassName('artist'));
// Mouse Event on new releases song function invocation
togglePlayBtn(document.getElementsByClassName('new-releases-img-container'));
function Popup() {
    let x = document.getElementById("popup-box");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}