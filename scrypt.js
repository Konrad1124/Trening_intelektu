
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
let MathCalculations=new Array(21);
let Symbol="";
let form;
let input;
let comparSymbol;
let info;
let time;
let iteration=0;
let temp=0;
let tempArray=[];
let wordArray='And Fix Own Are Fly Odd Ape Fry Our Ace For Pet Act Got Pat Ask Get Peg Arm God Paw Age Gel Pup Ago Gas Pit Air Hat Put Ate Hit Pot All Has Pop But Had Pin Bye How Rat Bad Her Rag Big His Rub Bed Hen Row Bat Ink Rug Boy Ice Run Bus Ill Rap Bag Jab Ram Box Jug Sow Bit Jet See Bee Jam Saw Buy Jar Set Bun Job Sit Cub Jog Sir Cat Kit Sat Car Key Sob Cut Lot Tap Cow Lit Tip Cry Let Top Cab Lay Tug Can Mat Tow Dad Man Toe Dab Mad Tan Dam Mug Ten Did Mix Two Dug Map Use Den Mum Van Dot Mud Vet Dip Mom Was Day May Wet Ear Met Win Eye Net Won Eat New Wig End Nap War Elf Now Why Egg Nod Who Far Net Way Fat Not Wow Few Nut You Fan Oar Yes Fun One Yak Fit Out Yet Fin Owl Zip Fox Old Zap'.toUpperCase().split(' ')
let selectedWordArray=[];
let word="";
let letterArray='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
let letersSequenceArray =[];
//buttons functions--------------------------------------------------------------------------------
Start.addEventListener('click', () => {
    Menu.setAttribute("hidden", "hidden");
    Game1.removeAttribute("hidden");
    while (Game1.firstChild) {
        Game1.removeChild(Game1.firstChild);
    }

    //for development
    /*switch (Random(1, 3)) {
        case 1:
            ComparingSymbols();
            break;
        case 2:
            Remember2Number();
            break;
        case 3:
            MathOnTime();
            break;
        default:
            break;
    }*/
    //ComparingSymbols();
    //Remember2Number();
    //MathOnTime();
    FindWords();
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
    var width=1300;
    var height=1000;
    window.moveTo((window.screen.availwidth-width)/2,(window.screen.availheight-height)/2);
    window.resizeTo(width,height);
};

function DailyGames(){
    GameSequence = [];
    let i =0;
        do {
            theSmae=false
            temp = Random(1, 5);
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
        time = new Date();
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
    button.id = "StartRemember2Number";
    button.innerHTML= "OK";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartRemember2Number() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }
        iteration=0;
        let Remember2NumberForm = document.createElement("form");
        Remember2NumberForm.id="Compar";

        window[ 'div' + iteration ] = document.createElement("div");
        window[ 'div' + iteration ].classList.add("exercise");
        window[ 'div' + iteration  + 'insaid'] = document.createElement("div");
        window[ 'div' + iteration  + 'insaid'].classList.add("numbersColumns");
        window[ 'div' + iteration ].appendChild(window[ 'div' + iteration  + 'insaid']);
        NumberSequence[iteration].forEach((element2,y) => {
            window[ 'p' + y ] = document.createElement("p");
            window[ 'p' + y ].innerHTML= element2;
            window[ 'div' + iteration  + 'insaid'].appendChild(window[ 'p' + y ]);
        });
        for (let inputNumber = 0; inputNumber < 5; inputNumber++) {
            window[ 'input' + inputNumber ] = document.createElement("input");
            window[ 'input' + inputNumber ].type = "number";
            window[ 'input' + inputNumber ].id = `number${inputNumber}`;
            window[ 'input' + inputNumber ].classList.add("numbers");
            window[ 'input' + inputNumber ].max= "88";
            window[ 'input' + inputNumber ].name= "numbers";
            window[ 'div' + iteration ].appendChild(window[ 'input' + inputNumber ]);
            
        }
       
        Remember2NumberForm.appendChild(window[ 'div' + iteration ]);


        let submitAnswer = document.createElement("button");
        submitAnswer.id = "Remember2NumberResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function Remember2NumberResults() {
            if (iteration==NumberSequence.length-1){
                Game1.setAttribute("hidden", "hidden");
                Menu.removeAttribute("hidden");
                
               
                while (Game1.firstChild) {
                    Game1.removeChild(Game1.firstChild);
                }
            }else{
                
                tempArray=[];
                for (let j = 1; j < 10; j+=2) {
                   tempArray.push(NumberSequence[iteration][j]);
                }
                NumberSequenceCorect[iteration]=tempArray;
                
                form=document.querySelector("#Compar");
                input=form.querySelectorAll("input[name=numbers]");
                
                input.forEach((element,i) => {
                    if (element.valueAsNumber == NumberSequenceCorect[iteration][i]) {
                        console.log("corect")
                    }else{
                        console.log("wrong")
                    }
                });
                while (Remember2NumberForm.firstChild) {
                    Remember2NumberForm.removeChild(Remember2NumberForm.firstChild);
                }


                iteration++;

                window[ 'div' + iteration ] = document.createElement("div");
                window[ 'div' + iteration ].classList.add("exercise");
                window[ 'div' + iteration  + 'insaid'] = document.createElement("div");
                window[ 'div' + iteration  + 'insaid'].classList.add("numbersColumns");
                window[ 'div' + iteration ].appendChild(window[ 'div' + iteration  + 'insaid']);
                NumberSequence[iteration].forEach((element2,y) => {
                    window[ 'p' + y ] = document.createElement("p");
                    window[ 'p' + y ].innerHTML= element2;
                    window[ 'div' + iteration  + 'insaid'].appendChild(window[ 'p' + y ]);
                });
                for (let inputNumber = 0; inputNumber < 5; inputNumber++) {
                    window[ 'input' + inputNumber ] = document.createElement("input");
                    window[ 'input' + inputNumber ].type = "number";
                    window[ 'input' + inputNumber ].id = `number${inputNumber}`;
                    window[ 'input' + inputNumber ].classList.add("numbers");
                    window[ 'input' + inputNumber ].max= "88";
                    window[ 'input' + inputNumber ].name= "numbers";
                    window[ 'div' + iteration ].appendChild(window[ 'input' + inputNumber ]);
                    
                }
            
                Remember2NumberForm.appendChild(window[ 'div' + iteration ]);
            }
        }
        
        Game1.appendChild(Remember2NumberForm);
        Game1.appendChild(submitAnswer);
    }
}

function MathOnTime() {
    MathCalculations.fill(0);
    for (let i = 0; i < MathCalculations.length; i++) {

        let tempFirstNumber=Random(1,99);
        let tempSecondNumber=Random(1,99);
        let tempOperationSymbol="";
        let tempIfGood=false;
        switch (Random(0,3)) {
            case 0:
                tempOperationSymbol="*";
                if ((tempFirstNumber * tempSecondNumber)<200) {
                    tempIfGood=true;
                }
                break;
            case 1:
                tempOperationSymbol="/";
                if (Number.isInteger(tempFirstNumber / tempSecondNumber)) {
                    tempIfGood=true;
                }
                break;
            case 2:
                tempOperationSymbol="-";
                if ((tempFirstNumber - tempSecondNumber)>0) {
                    tempIfGood=true;
                }
                break;
            case 3:
                tempOperationSymbol="+";
                if ((tempFirstNumber + tempSecondNumber)<120) {
                    tempIfGood=true;
                }
                break;  
        }
        if (tempIfGood==true) {
            MathCalculations[i] ={
                FirstNumber:tempFirstNumber,
                SecondNumber:tempSecondNumber,
                OperationSymbol:tempOperationSymbol
            }
        } else {
            i--;
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

        
        let MathOnTimeForm = document.createElement("form");
        MathOnTimeForm.id="Compar";

        window[ 'div' ] = document.createElement("div");
        window[ 'div' ].classList.add("row");

        window[ 'div' + 'column1'] = document.createElement("div");
        window[ 'div' + 'column1'].id = "column1";
        window[ 'div' + 'column1'].classList.add("column");
        window[ 'div' ].appendChild( window[ 'div' + 'column1']);

        window[ 'div' + 'column2'] = document.createElement("div");
        window[ 'div' + 'column2'].id = "column2";
        window[ 'div' + 'column2'].classList.add("column");
        window[ 'div' ].appendChild( window[ 'div' + 'column2']);

        window[ 'div' + 'column3'] = document.createElement("div");
        window[ 'div' + 'column3'].id = "column3";
        window[ 'div' + 'column3'].classList.add("column");
        window[ 'div' ].appendChild( window[ 'div' + 'column3']);

        iteration = 0;
        let column = 1;
        MathCalculations.forEach((element,i) => {
            if (iteration < (MathCalculations.length/3)-1) {
                window[ 'p' + i ] = document.createElement("p");
                window[ 'p' + i ].innerHTML= `${element.FirstNumber} ${element.OperationSymbol} ${element.SecondNumber}`;
                window[ 'div' + `column${column}`].appendChild(window[ 'p' + i ]);
                window[ 'input' + i ] = document.createElement("input");
                window[ 'input' + i ].type = "number";
                window[ 'input' + i ].id = `number${i}`;
                window[ 'input' + i ].name= "numbers";
                window[ 'input' + i ].classList.add("result");
                window[ 'div' + `column${column}`].appendChild(window[ 'input' + i ]);
                iteration++;
            }else{
                window[ 'p' + i ] = document.createElement("p");
                window[ 'p' + i ].innerHTML= `${element.FirstNumber} ${element.OperationSymbol} ${element.SecondNumber}`;
                window[ 'div' + `column${column}`].appendChild(window[ 'p' + i ]);
                window[ 'input' + i ] = document.createElement("input");
                window[ 'input' + i ].type = "number";
                window[ 'input' + i ].id = `number${i}`;
                window[ 'input' + i ].name= "numbers";
                window[ 'input' + i ].classList.add("result");
                window[ 'div' + `column${column}`].appendChild(window[ 'input' + i ]);
                column++;
                iteration = 0;
            }
        });
    
        MathOnTimeForm.appendChild( window[ 'div' ]);
        
        let submitAnswer = document.createElement("button");
        submitAnswer.id = "MathResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        
        submitAnswer.onclick = function MathResults() {
            time=new Date().getTime()-time.getTime();
            console.log(time)
            form=document.querySelector("#Compar");
            input=form.querySelectorAll("input[name=numbers]");
            input.forEach((element,i) => {
                switch (MathCalculations[i].OperationSymbol) {
                    case "*":
                        temp= MathCalculations[i].FirstNumber * MathCalculations[i].SecondNumber
                        break;
                    case "/":
                        temp= MathCalculations[i].FirstNumber / MathCalculations[i].SecondNumber
                        break;
                    case "-":
                        temp= MathCalculations[i].FirstNumber - MathCalculations[i].SecondNumber
                        break;
                    case "+":
                        temp= MathCalculations[i].FirstNumber + MathCalculations[i].SecondNumber
                        break;
                }
                if(element.valueAsNumber==temp){
                    console.log("corect")
                }else{
                    console.log("wrong")
                }
            })

            Game1.setAttribute("hidden", "hidden");
            Menu.removeAttribute("hidden");
                
               
            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
        }
        time = new Date();  
        Game1.appendChild(MathOnTimeForm);
        Game1.appendChild(submitAnswer);
    }
}

function FindWords() {
    temp=0;
    selectedWordArray=[];
    word="";
    while(letersSequenceArray.toString().replaceAll(",","").length<686){
        if (Random(0,100)<7) {
            console.log('i')
            word=wordArray[Random(0,(wordArray.length)-1)];
            letersSequenceArray.push(word);
            temp++;
            selectedWordArray.push(word);
        } else {
            letersSequenceArray.push(letterArray[Random(0,(letterArray.length)-1)]);
        }
    }
    console.log(letersSequenceArray.toString().replaceAll(",",""))
    console.log(selectedWordArray)
    console.log(temp)
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Find the words in the sequence of letters below and write them below a sequence. Try to do it as quickly as possible."
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
        let FindWordsForm = document.createElement("form");
        FindWordsForm.id="Compar";

        window[ 'div' ] = document.createElement("div");
        window[ 'div' ].id = "sequence";
        window[ 'div' ].classList.add("sequence");
        window[ 'p' ] = document.createElement("p");
        window[ 'p' ].innerHTML=letersSequenceArray.toString().replaceAll(",","");
        window[ 'div' ].appendChild( window[ 'p' ]);
        FindWordsForm.appendChild( window[ 'div' ]);

        for (let inputNumber = 0; inputNumber < temp; inputNumber++) {
            window[ 'input' + inputNumber ] = document.createElement("input");
            window[ 'input' + inputNumber ].type = "text";
            window[ 'input' + inputNumber ].id = `text${inputNumber}`;
            window[ 'input' + inputNumber ].classList.add("textBox");
            window[ 'div' ].appendChild(window[ 'input' + inputNumber ]);
            
        }



        let submitAnswer = document.createElement("button");
        submitAnswer.id = "FindWordsResults";
        submitAnswer.innerHTML= "Submit";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function FindWordsResults() {
            time=new Date().getTime()-time.getTime();
            console.log(time)


            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
        }
        time = new Date();
        Game1.appendChild(FindWordsForm);
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