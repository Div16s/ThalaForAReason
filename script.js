function modifyInputText(inputText){
    let res = "";
    for(let i=0; i<inputText.length; i++){
        if(i===inputText.length-1) res += inputText[i];
        else res += inputText[i]+'+';
    }

    return res;
}

function checkInput() {
    const inputText = document.getElementById('inputBox').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    const displayText = document.getElementById('displayText');
    const video = document.getElementById('backgroundVideo');
    submitButton.innerHTML = 'Finding the reason...'; // Clear button text

    let input_sum = 0;

    for (let i = 0; i < inputText.length; i++) {
        const digit = parseInt(inputText[i]);
        if (!isNaN(digit)) {
            input_sum += digit;
        }
    }

    if (inputText.includes('7') || inputText.length === 7 || input_sum === 7) {
        setTimeout(function(){
            submitButton.innerHTML = 'Find Reason';
            resultDiv.style.display = 'block';
            const finalText = modifyInputText(inputText);
            displayText.innerText = finalText + ' = 7, Thala For A Reason👑';
            playVideo("bolejokoyal.mp4");
        },1500);
        
    } else {
        setTimeout(function(){
            submitButton.innerHTML = 'Find Reason';
            resultDiv.style.display = 'block';
            displayText.innerText = "Moye Moye!🙂";
            playVideo("MoyeMoye.mp4"); // Replace with the actual path to your audio file
        },1500);
        
    }
}

function playVideo(source) {
    const video = document.getElementById('backgroundVideo');
    video.src = source;
    video.load();
    video.play();
}
