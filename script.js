const videoElement = document.getElementById('video')
const button = document.getElementById('button')


// Prompt the user to select a media stream, pass to video element then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream


        videoElement.addEventListener('loadedmetadata', () => {
            videoElement.play()
        })


    } catch (error) {
        // catch error here
        console.log('whoops error here:', error)
    }


}

button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    
    try {
        // Start Picture in Picture
        await videoElement.requestPictureInPicture();
    } catch (error) {
        console.log('Error during Picture in Picture:', error);
    } finally {
        // Reset the button
        button.disabled = false;
    }
});


// on load

selectMediaStream()