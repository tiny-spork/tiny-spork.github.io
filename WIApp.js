document.addEventListener("click", function() {
    if (stopped) {
    stopped = false;
    randomText()
    }
    else {
        stopped = true;
}
    });


var stopped = true
const usedText = []
const usedBackground = []
function randomText() {
        let randomIndex = Math.floor(Math.random() * 12);
        while (usedText.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * 12);
        };
        usedText.push(randomIndex)
        if (usedText.length > 8) {
            usedText.shift()
        };

        let randomBackground = Math.floor(Math.random() * 6);
        while (usedBackground.includes(randomBackground)) {
            randomBackground = Math.floor(Math.random() * 6);
        }
        usedBackground.push(randomBackground)
        if (usedBackground.length > 3) {
            usedBackground.shift()
        };
        let text = document.getElementById("text")
        let bg = document.getElementById("container")
        switch (randomIndex) {
            case 0:  
                text.innerHTML = "How did you feel the first time Graham referenced Dostoyevsky and you had no idea what he was talking about?";
                break;
            case 1:
                text.innerHTML = "Did you eat all the peanut butter-filled pretzel bites?";
                break;
            case 2:
                text.innerHTML = "How did it feel to be locked in an asylum-themed room for an hour with all your coworkers?";
                break;
            case 3:
                text.innerHTML = "Have you ever unsubscribed from an author's newsletter?";
            case 4:
                text.innerHTML = "Which of Graham's books have you been borrowing for six months?";
                break;
            case 5:
                text.innerHTML = "How would you cast the TV show \"Friends\" with the staff of Wise Ink?";
                break;
            case 6:
                text.innerHTML = "Been a while since we thought about Jeff Peters. How do you think he's doing?";
                break;
            case 7:
                text.innerHTML = "Remember when Pat wore ties? <br> To an internship? Who was that meant to impress?";
                break;
            case 8:
                text.innerHTML = "Do you REALLY want to watch Cats? Really?";
                break;
            case 9:
                text.innerHTML = "Would you rather watch Frozen 2 four times in a row or read the unabridged version of The Stand?";
                break;
            case 10:
                text.innerHTML = "Why don't you listen to Pat's Christmas mashup albums? How do you think Pat feels about that?";
                break;
            case 11: 
                text.innerHTML = "Which of our cover designers would you trust to design the invitations to your funeral?";
                break;
        };
        switch(randomBackground) {
            case 1:
                bg.style.backgroundImage = 'url("tiny spark backgorunds-01.png")';
                break;
            case 2: 
                bg.style.backgroundImage = 'url("tiny spark backgorunds-02.png")';
                break;
            case 3: 
                bg.style.backgroundImage = 'url("tiny spark backgorunds-03.png")';
                break;
            case 4: 
                bg.style.backgroundImage = 'url("tiny spark backgorunds-04.png")';
            case 5:
                bg.style.backgroundImage = 'url("tiny spark backgorunds-05.png")';
                break;
            case 6: 
                bg.style.backgroundImage = 'url("tiny spark backgorunds-06.png")';
                break;

        }
        setTimeout(()=>{
            if (!stopped) {
                randomText();
        } }, 100);
        
    } 




