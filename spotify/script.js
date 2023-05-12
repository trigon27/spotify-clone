console.log("welcome")
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let marsterPlay = document.getElementById('marsterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName')
let song = [
    { songName:"dhruv - double take (Official Video)", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    { songName:"Pyar ke sadqay ost lyrics", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    { songName:"Leave the Door Open [Official Video]", filepath:"songs/3.mp3", coverpath:"covers/6.jpg"},
    { songName:"Limahl - Never Ending Story ", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    { songName:"Musical Youth - Pass The Dutchie", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    { songName:"Sofia Reyes - 1, 2, 3 ", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
]
songItems.forEach((element ,i)=>{
    element.getElementsByTagName("img")[0].src= song[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
})
// audioElement.play()
//handle play /pause 
marsterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        marsterPlay.classList.remove('fa-play-circle')
        marsterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        marsterPlay.classList.remove('fa-pause-circle')
        marsterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})
//listen events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progres=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progres;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=song[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        marsterPlay.classList.remove('fa-play-circle')
        marsterPlay.classList.add('fa-pause-circle')
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    marsterPlay.classList.remove('fa-play-circle')
    marsterPlay.classList.add('fa-pause-circle')
    })
document.getElementById('previous').addEventListener('click',()=>{
if(songIndex<=0){
    songIndex=0;
}
else{
    songIndex-=1;
}
 audioElement.src=`songs/${songIndex+1}.mp3`;
 masterSongName.innerText=song[songIndex].songName
 audioElement.currentTime=0;
 audioElement.play();
 marsterPlay.classList.remove('fa-play-circle')
 marsterPlay.classList.add('fa-pause-circle')
})
