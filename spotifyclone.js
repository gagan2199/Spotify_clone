console.log("hey listeners");


// song1.play();

// let songElement = document.getElementById('playicon');

let songs = [
    { songName: "1song", filePath: '1song.mp3', coverPath: "ram" },
    { songName: "2mp3", filePath: 'Perfect.mp3', coverPath: "Perfect.jpg" },
    { songName: "3mp3", filePath: 'Memories.mp3', coverPath: "Memories.jpg" },
    { songName: "4mp3", filePath: 'Dope.mp3', coverPath: "ram" },
    { songName: "5mp3", filePath: 'Let Me Love You.mp3', coverPath: "Let Me Love You.jpg" }

];


let song1 = new Audio('1song.mp3');
    let playicon = document.getElementById('playicon');
    // playicon.addEventListener('click', playit);

    // function playit() {

    //     let song1 = new Audio('1song.mp3');
    //     return song1.play();
    // }
    playicon.addEventListener('click', ()=>
    {
        if(song1.paused || song1.currentTime<=0)
        {
            song1.play();
        }
        else
        {
            song1.pause();
        }
    });


    let playline= document.getElementById('playline');

    song1.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
    });

    // console.log(playline);

