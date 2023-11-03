const Start = document.getElementById("Start");
const Results = document.getElementById("Results");
const Exit = document.getElementById("Exit");
const Game1 = document.getElementById("game1");
let GameSequence = [];
let theSmae=false;
Start.addEventListener('click', () => {
    DailyGames();
})


Exit.addEventListener('click', () => {
    if (confirm("Close Window?")) {
        close();
    }
})

function DailyGames(){
    GameSequence = [];
    let i =0;
        do {
            theSmae=false
            let temp = Math.floor(Math.random() * 5);
            if (GameSequence.length != 0) {
                GameSequence.forEach(element => {
                    
                    if(element==temp){
                        theSmae=true;
                    }
                })
            }
            
            if ( theSmae==false) {
                
                GameSequence[i]=temp
                i++;
            }
        } while ( i!=5);
        
    document.getElementById("game1").innerText=GameSequence;
}