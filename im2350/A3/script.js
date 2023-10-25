//MOUSE HOVER EFFECT TO PLAY/PAUSE VIDEO
//When user hover their cursor over the video element, the video will automatically play, otherwise it is just a static thumbnmail. This interaction can provide a more engaging user experience, reducing number of clicks. A downside, however, is that the hover is can only be used on a desktop, mobile user would need to tap on the video to play/pause it. 
var myVideo=document.getElementById("box");

function playPause()
{
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}


