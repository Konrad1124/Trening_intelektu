
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
let NumberSequenceCorect =new Array(10).fill("");
let MathCalculations=new Array(20);
let Symbol="";
let form;
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
    ComparingSymbols();
    //Remember2Number();
    //MathOnTime();
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
window.onload = function() {
    console.log("ss")
    var width=1200;
    var height=900;
    window.moveTo((window.screen.availwidth-width)/2,(window.screen.availheight-height)/2);
    window.resizeTo(width,height);
};

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
            window[ 'div' + i ] = document.createElement("div");
            window[ 'div' + i ].classList.add("line");
            window[ 'div' + i ].innerHTML=`<p class=\"paragraph1\">${element[0]}</p>
            <p class=\"paragraph2\">
            <input type=\"radio\" value=\"<\" name=\"symbols${i}\" class = \"customRadio\"><label for=\"outline\">\<</label>
            <input type=\"radio\" value=\"=\" name=\"symbols${i}\" class = \"customRadio\"><label for=\"outline\">\=</label>
            <input type=\"radio\" value=\">\" name=\"symbols${i}\" class = \"customRadio\"><label for=\"outline\">\></label>
            </p>
            <p class=\"paragraph3\">${element[1]}</p>`;
            ComparingSymbolsForm.appendChild(window[ 'div' + i ]);
        });
        let submitAnswer = document.createElement("button");
        submitAnswer.id = "ComparingSymbolsResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function ComparingSymbolsResults() {
            time=new Date().getTime()-time.getTime();
            console.log(time)
            if (document.querySelector(`input[name=symbols1]`)!=null) {
                ComparingSymbol
                .forEach((element,i) => {
                    input = document.querySelectorAll(`input[name=symbols${i}]`);
                    for (const radio of input) {
                        if (radio.checked) {
                            console.log(radio.value)
                            switch (radio.value) {
                                case "<":
                                    if ( ComparingSymbol[i][0]>ComparingSymbol[i][1]) {
                                        console.log(i+" dobrze")
                                    }else{
                                        console.log(i+" źle")
                                    }
                                    break;
                                case "=":
                                    if ( ComparingSymbol[i][0]=ComparingSymbol[i][1]) {
                                        console.log(i+" dobrze")
                                    }else{
                                        console.log(i+" źle")
                                    }
                                    break;
                                case ">":
                                    if ( ComparingSymbol[i][0]<ComparingSymbol[i][1]) {
                                        console.log(i+" dobrze")
                                    }else{
                                        console.log(i+" źle")
                                    }
                                    break;
                            }
                            break;
                        }else if (radio.value == ">") {
                            console.log("brak odpowiedzi")
                        }
                        

                    }
                });
            }
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
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }

        let Remember2NumberForm = document.createElement("form");
        Remember2NumberForm.id="Compar";
        NumberSequence.forEach((element,x) => {
            window[ 'div' + x ] = document.createElement("div");
            window[ 'div' + x ].classList.add("numbersColumns");
            element.forEach((element2,y) => {
                window[ 'p' + y ] = document.createElement("p");
                window[ 'p' + y ].innerHTML= element2;
                window[ 'div' + x ].appendChild(window[ 'p' + y ]);
            });
            window[ 'input' + x ] = document.createElement("input");
            window[ 'input' + x ].type = "number";
            window[ 'input' + x ].id = `number${x}`;
            window[ 'input' + x ].classList.add("numbers");
            window[ 'input' + x ].max= "9999999999";
            window[ 'input' + x ].name= "numbers";
            window[ 'div' + x ].appendChild(window[ 'input' + x ]);
            Remember2NumberForm.appendChild(window[ 'div' + x ]);
        });
        let submitAnswer = document.createElement("button");
        submitAnswer.id = "Remember2NumberResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function Remember2NumberResults() {
            let temp=[];
             for (let i = 0; i < 10; i++) {
                temp=[];
                for (let j = 1; j < 10; j+=2) {
                    temp.push(NumberSequence[i][j]);
                }
                NumberSequenceCorect[i]=temp;
            }
            console.log(NumberSequenceCorect)
            form=document.querySelector("#Compar");
            input=form.querySelectorAll("input[name=numbers]");
           
                
            
            


            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
        }
        Game1.appendChild(Remember2NumberForm);
        Game1.appendChild(submitAnswer);
    }
}

function MathOnTime() {
    MathCalculations.fill(0);
    for (let i = 0; i < MathCalculations.length; i++) {

        MathCalculations[i] ={
            FirstNumber:Random(1,99),
            SecondNumber:Random(1,99),
            OperationSymbol:x =>{switch (Random(0,3)) {
                case 0:
                   return "*";
                case 1:
                    return "/";
                case 2:
                    return "-";
                case 3:
                    return "+";  
            }}

        }
        switch (Random(0,3)) {
            case 0:
                MathCalculations[i].OperationSymbol="*";
                break;
            case 1:
                MathCalculations[i].OperationSymbol="/";
                break;
            case 2:
                MathCalculations[i].OperationSymbol="-";
                break;
            case 3:
                MathCalculations[i].OperationSymbol="+";
                break;  
        }
    }


    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Do arithmetic calculations as quickly as possible."
    let button = document.createElement("button");
    button.id = "StartMath";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartMath() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }
        

        let submitAnswer = document.createElement("button");
        submitAnswer.id = "MathResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function MathResults() {
            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
            
        }
        Game1.appendChild(submitAnswer);
    }
}

function FindWords() {
    


    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Find the words in the sequence of letters below and circle them. Time yourself and try to do it as quickly as possible."
    let button = document.createElement("button");
    button.id = "StartFindWords";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartFindWords() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }
        

        let submitAnswer = document.createElement("button");
        submitAnswer.id = "FindWordsResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function FindWordsResults() {
            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
            
        }
        Game1.appendChild(submitAnswer);
    }
}

function Sudoku() {
    
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Complete the letter Sudoku puzzle as quickly as possible, remembering that a given letter can only appear once in each small square (3x3 fields), in each column and each row."
    let button = document.createElement("button");
    button.id = "StartSudoku";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartSudoku() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }
        

        let submitAnswer = document.createElement("button");
        submitAnswer.id = "SudokuResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function SudokuResults() {
            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
            
        }
        Game1.appendChild(submitAnswer);
    }
}