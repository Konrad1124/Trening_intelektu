const Start = document.getElementById("Start");
const Results = document.getElementById("Results");
const Exit = document.getElementById("Exit");
const Game1 = document.getElementById("game1");
let GameSequence = [];
Start.addEventListener('click', () => {
    DailyGames();
})


Exit.addEventListener('click', () => {
    if (confirm("Close Window?")) {
        close();
    }
})

function DailyGames(){
    for (let i = 0; i < 5; i++) {
        do {
            let temp = Math.floor(Math.random() * 5);
            console.log(temp);
            GameSequence.forEach(element => {
                if(element==temp){
                    GameSequence[i]=temp;
                }
            })
        } while ( GameSequence[i] != '');
        
    }
    console.log(GameSequence);
    //document.getElementById("Start").innerText=GameSequence;
}