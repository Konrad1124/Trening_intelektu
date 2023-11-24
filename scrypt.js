
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
let NumberSequence=new Array(10).fill(0).map(x => Array(10).fill(0));

let Symbol="";
let input;
let comparSymbol;
let info;
let time;
//buttons functions--------------------------------------------------------------------------------
Start.addEventListener('click', () => {
    Menu.setAttribute("hidden", "hidden");
    Game1.removeAttribute("hidden");
    while (Game1.firstChild) {
        Game1.removeChild(Game1.firstChild);
    }
    //ComparingSymbols();
    Remember2Number()
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
        if (temp1.length<temp2.length) {
            let dif =temp2.length - temp1.length;
            for (let i = 0; i < dif; i++) {
                temp1+=" ";
            }
        } else {
            let dif =temp1.length - temp2.length;
            for (let i = 0; i < dif; i++) {
                temp2+=" ";
            }
        }
        ComparingSymbol[i]=[temp1,temp2];
    });
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Visually compare the number of the same symbols on the left and right. Select the =,<,> sign. Try to keep the time as short as possible."
    let button = document.createElement("button");
    button.id = "StartComparingSymbols";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartComparingSymbols() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }

        time = new Date();
        let ComparingSymbolsForm = document.createElement("form");
        ComparingSymbolsForm.id="Compar";
        ComparingSymbol
        .forEach((element,i) => {
            window[ 'p' + i ] = document.createElement("p");
            window[ 'p' + i ].classList.add("paragraph1");
            window[ 'p' + i ].innerHTML=element[0]+`<select id=\"symbols${i}\" name=\"symbols${i}\" class=\"mySelect\"><option value=\" \"> </option><option value=\">\">></option><option value=\"=\">=</option><option value=\"<\"><</option> </select>`+element[1];
            ComparingSymbolsForm.appendChild(window[ 'p' + i ]);
        });
        let submitAnswer = document.createElement("button");
        submitAnswer.id = "ComparingSymbolsResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function ComparingSymbolsResults() {
            if (document.querySelector(`#symbols1`)!=null) {
                ComparingSymbol
                .forEach((element,i) => {
                    input = document.querySelector(`#symbols${i}`);
                    switch (input.selectedIndex) {
                        case 0:
                            console.log("brak odpowiedzi")
                            break;
                        case 1:
                            if ( ComparingSymbol[i][0]>ComparingSymbol[i][1]) {
                                console.log(i+" dobrze")
                            }else{
                                console.log(i+" źle")
                            }
                            break;
                        case 2:
                            if ( ComparingSymbol[i][0]=ComparingSymbol[i][1]) {
                                console.log(i+" dobrze")
                            }else{
                                console.log(i+" źle")
                            }
                            break;
                        case 3:
                            if ( ComparingSymbol[i][0]<ComparingSymbol[i][1]) {
                                console.log(i+" dobrze")
                            }else{
                                console.log(i+" źle")
                            }
                            break;
                        default:
                            break;
                    }
                });
            }
            time=new Date().getTime()-time.getTime();
            console.log(time)
            Game1.setAttribute("hidden", "hidden");
            Menu.removeAttribute("hidden");
            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
        };
        Game1.appendChild(ComparingSymbolsForm);
        Game1.appendChild(submitAnswer);

    }
}

function Remember2Number(){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            NumberSequence[i][j]=Random(9,88);
        }
    }
    console.log(NumberSequence)
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Read all the numbers in the column. As you read, remember every other digit. Write the memorized numbers under the column in the correct order."
    let button = document.createElement("button");
    button.id = " StartRemember2Number";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartRemember2Number() {
        
        let submitAnswer = document.createElement("button");
        submitAnswer.id = "Remember2NumberResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function Remember2NumberResults() {

        }
        Game1.appendChild(submitAnswer);
    }
}

function Math() {
    
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML=""
    let button = document.createElement("button");
    button.id = "StartMath";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartMath() {


        let submitAnswer = document.createElement("button");
        submitAnswer.id = "MathResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function MathResults() {

        }
        Game1.appendChild(submitAnswer);
    }
}


function FindWords() {
    
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML=""
    let button = document.createElement("button");
    button.id = "StartFindWords";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartFindWords() {


        let submitAnswer = document.createElement("button");
        submitAnswer.id = "FindWordsResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function FindWordsResults() {

        }
        Game1.appendChild(submitAnswer);
    }
}

function Sudoku() {
    
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML=""
    let button = document.createElement("button");
    button.id = "StartSudoku";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartSudoku() {


        let submitAnswer = document.createElement("button");
        submitAnswer.id = "SudokuResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function SudokuResults() {

        }
        Game1.appendChild(submitAnswer);
    }
}