
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
let ComparNumbers=[];
let ComparingSymbol=[];
let Symbol="";


//buttons functions--------------------------------------------------------------------------------
Start.addEventListener('click', () => {
    Menu.setAttribute("hidden", "hidden");
    Game1.removeAttribute("hidden");
    while (Game1.firstChild) {
        Game1.removeChild(Game1.firstChild);
    }
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

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//Games--------------------------------------------------------------------------------------------
function ComparingSymbols() {
    ComparNumbers=[];
    ComparingSymbol=[];
    SymbolsTypes=["p","+","@","b","!","w","=","m","&","-","%","*","Y","<","o","}","L"]
    let number=0;
    let difrence=0;
    let temp1="";
    let temp2="";
    for (let i = 0; i < 10; i++) {
        number=Random(9,35);
        difrence=Random(-4,4);
        ComparNumbers[i]=[number,number-difrence]
    }
    ComparNumbers.forEach((element,i) => {
        temp1="";
        temp2="";
        Symbol=SymbolsTypes[Random(0,SymbolsTypes.length-1)]
        for (let a = 0; a < element[0]; a++) {
            temp1+=Symbol;
        }
        for (let a = 0; a < element[1]; a++) {
            temp2+=Symbol;
        }
        ComparingSymbol[i]=[temp1,temp2]
    });

    let ComparingSymbolsForm = document.createElement("form");
    ComparingSymbolsForm.id="Compar";
    ComparingSymbol
    .forEach((element,i) => {
        window[ 'Div' + i ] = document.createElement("div");
        window[ 'Div' + i ].innerHTML=`<p class=\"paragraph1\">`+element[0]+`</p><select id=\"symbols${i}\" name=\"symbols${i}\" class=\"mySelect\"><option value=\">\">></option><option value=\"=\">=</option><option value=\"<\"><</option> </select><p class=\"paragraph1\">`+element[1]+`</p>`
        ComparingSymbolsForm.appendChild(window[ 'Div' + i ]);
    });
    

    Game1.appendChild(ComparingSymbolsForm);
    
}
