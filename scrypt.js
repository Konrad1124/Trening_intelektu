
//buttons------------------------------------------------------------------------------------------
const Start = document.getElementById("Start");
const Results = document.getElementById("Results");
const Exit = document.getElementById("Exit");
const BackFromPlayerBoard = document.getElementById("Back1");
const BackFromSelectResults = document.getElementById("Back2");

//panels-------------------------------------------------------------------------------------------
const Game1 = document.getElementById("game1");
const Menu = document.getElementById("Menu");
const playerBoard = document.getElementById("playerBoard");
const selectResults = document.getElementById("selectResults");

//variuables---------------------------------------------------------------------------------------
let GameSequence = [];
let theSmae=false;

//buttons functions--------------------------------------------------------------------------------
Start.addEventListener('click', () => {
    Menu.setAttribute("hidden", "hidden");
    Game1.removeAttribute("hidden");
    ComparingSymbols();
})

Results.addEventListener('click', async () => {
    Menu.setAttribute("hidden", "hidden");
    selectResults.removeAttribute("hidden");
  })

Exit.addEventListener('click', () => {
    if (confirm("Close Window?")) {
        close();
    }
})

BackFromPlayerBoard.addEventListener('click', () => {
    playerBoard.setAttribute("hidden", "hidden");
    Menu.removeAttribute("hidden");
})

BackFromSelectResults.addEventListener('click', () => {
    selectResults.setAttribute("hidden", "hidden");
    Menu.removeAttribute("hidden");
})

//functions----------------------------------------------------------------------------------------
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

//Games--------------------------------------------------------------------------------------------
function ComparingSymbols() {
    var ComparingSymbolsForm = document.createElement("form",{onsubmit: "return ComparingSymbolsResults()"});
    ComparingSymbolsForm.id="Compar"
}
