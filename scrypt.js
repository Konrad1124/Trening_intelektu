if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register ('./sw.js')
        .catch(err => console.log("Failed to register sw.js"))
  }
  /*
  dodać interakcje
  dodatkowe animacje
  czas gry ograniczony do 15 min
  
    */
  
//buttons------------------------------------------------------------------------------------------
const Start = document.getElementById("Start");
const Results = document.getElementById("Results");
const Exit = document.getElementById("Exit");
const BackFromPlayerBoard = document.getElementById("Back1");
const BackFromSelectResults = document.getElementById("Back2");
const startExercise = document.getElementById("startExercise");
const showData = document.getElementById("Show");
const DelateFile = document.getElementById("Delate");


//panels-------------------------------------------------------------------------------------------
const Game1 = document.getElementById("game1");
const Menu = document.getElementById("Menu");
const playerBoard = document.getElementById("playerBoard");
const selectResults = document.getElementById("selectResults");
const text1 = document.getElementById("name1");
const select = document.getElementById("selectContainer1")
const text2 = document.getElementById("name2");
const select2 = document.getElementById("selectContainer2")

//variuables---------------------------------------------------------------------------------------
const checkbox = document.querySelector("input[name=played]")
let Root ;
let w ;
let fileNames =[];
let gameData = {};
let GameSequence = [];
let GameSequenceNext = 0;
let fileHandle;
let selectList;
let theSmae=false;
let ComparNumbers=[];
let ComparingSymbol=[];
let NumberSequence=new Array(10).fill(0).map(x => Array(10).fill(0));
let NumberSequenceCorect =new Array(10).fill("");
let fadeTime = 5000
let MathCalculations=new Array(21);
let submitAnswer;
let Symbol="";
let form;
let input;
let comparSymbol;
let info;
let time;
let iteration=0;
let temp=0;
let tempArray=[];
//let wordArray='And Fix Own Are Fly Odd Ape Fry Our Ace For Pet Act Got Pat Ask Get Peg Arm God Paw Age Gel Pup Ago Gas Pit Air Hat Put Ate Hit Pot All Has Pop But Had Pin Bye How Rat Bad Her Rag Big His Rub Bed Hen Row Bat Ink Rug Boy Ice Run Bus Ill Rap Bag Jab Ram Box Jug Sow Bit Jet See Bee Jam Saw Buy Jar Set Bun Job Sit Cub Jog Sir Cat Kit Sat Car Key Sob Cut Lot Tap Cow Lit Tip Cry Let Top Cab Lay Tug Can Mat Tow Dad Man Toe Dab Mad Tan Dam Mug Ten Did Mix Two Dug Map Use Den Mum Van Dot Mud Vet Dip Mom Was Day May Wet Ear Met Win Eye Net Won Eat New Wig End Nap War Elf Now Why Egg Nod Who Far Net Way Fat Not Wow Few Nut You Fan Oar Yes Fun One Yak Fit Out Yet Fin Owl Zip Fox Old Zap'.toUpperCase().split(' ')
let wordArray='ABY ACH AHA AJĆ AKR AKT ALE ALG ANI ARA ASY AUA AUĆ AUT BAĆ BAK BAM BAŃ BAR BAŹ BĄK BEK BEZ BEŻ BĘC BIĆ BIŁ BIO BOA BOK BON BÓB BÓG BÓJ BÓL BÓR BUC BUK BUS BYĆ BYK BYŁ BYM BYŚ BYT CAL CEL CEP CIĘ CIP CIŹ CIŻ CLI CŁO CNA CNI CNY COŚ CÓŻ CUĆ CUD CUG CUM CYC CYG CYK CYT CZE CZI CZY ĆMA ĆMĄ ĆMĘ ĆMI ĆMO ĆMY DAĆ DAJ DAL DAŁ DAM DAŃ DAR DĄB DĄĆ DĄŁ DĄS DĄŻ DBA DEK DĘĆ DLA DMĄ DMĘ DNI DNO DOK DOM DÓŁ DRĄ DRĘ DWA DWU DYM ECH EGO EKO ELF EMO EMU ENT EON ERA ERY EWA EWE EWĘ EWY FEZ FUJ GAD GAJ GAR GAZ GAŻ GDY GĘŚ GIN GIŃ GNĄ GNĘ GON GOŃ GRA GRĄ GRĘ GRR GRY GUL GUZ GZĘ GZY HAK HAU HEH HEJ HEL HIT HMM HOP HUT HYC ICH IDĄ IDĘ IDŹ ILE ILU IŚĆ JAD JAJ JAK JAM JAŚ JAW JEJ JEM JEN JEŻ JĘK JUK JUŻ KAC KAŃ KAT KAŹ KAŻ KĄP KĄT KEG KĘS KIC KIJ KIT KŁA KŁY KOC KOG KOŃ KOP KOS KOT KÓŁ KÓP KÓZ KRA KRY KTO KUC KUĆ KUJ KUP KUŚ LAĆ LAG LAK LAS LAT LĄD LEĆ LEJ LEK LEN LEŃ LEP LEW LEŹ LEŻ LĘK LIS LIŻ LNU LNY LOK LOR LÓD LUB LUD LUK LUZ LWY LŻĄ LŻĘ LŻY ŁAD ŁAJ ŁAŁ ŁAM ŁAN ŁAŃ ŁAP ŁAT ŁAŹ ŁĄK ŁBA ŁBY ŁEB ŁEZ ŁOM ŁOŚ ŁÓJ ŁÓW ŁÓŻ ŁUK ŁUP ŁUT ŁYK ŁZA ŁZĄ ŁZĘ ŁZO ŁZY ŁŻĄ ŁŻE ŁŻĘ MAG MAJ MAK MAŹ MAŻ MĄŻ MĘT MIG MIK MIŚ MIT MNĄ MNĘ MOB MOC MOD MOL MÓC MÓD MÓJ MÓL MÓR MÓW MÓŻ MRĘ MUC MUF MUŁ MUR MUS MYĆ MYJ MYK NAĆ NAD NAJ NAM NAS NĘĆ NIĄ NIC NIĆ NIE NIL NIM NIŻ NOC NOS NÓG NÓW NÓŻ NUĆ NUŻ NYŻ OBA OBU OBY OCH ODA ODĄ ODE ODĘ OGR OHO OJĆ OKA OKI OKO OKU OLE ONA ONE ONI ONO ORK OSA OSĄ OSĘ OSY OŚĆ OTO OWA OWĄ OWE OWO ÓCZ PAC PAL PAN PAŃ PAS PAŹ PĄK PĄS PĘD PĘK PĘZ PIĆ PIJ PIŁ PIN PIT PNĄ PNĘ PNI POR PÓL PÓŁ PÓR PRĄ PRĘ PRO PSA PSY PUB PUC PUK PYK PYŁ PYŚ RAD RAF RAJ RAK RAM RAP RAZ RAŹ RĄB RĄK REN ROK ROL RÓB RÓD RÓG RÓJ RÓL RÓW RÓŻ RUM RWĄ RWĘ RYĆ RYK RYŁ RYS RYŚ RYT RYŻ RŻĄ RŻE RŻY SAD SAK SAM SAŃ SĄD SĄG SEN SER SĘK SĘP SIE SIĘ SIŁ SNĄ SNĘ SNU SNY SOK SOS SÓD SÓL SÓW SPA SSĄ SSĘ STO SUM SUŃ SUW SWE SYK SYN SZA ŚLĄ ŚLE ŚLĘ ŚNI ŚPI TAK TAM TAN TAŚ TAŻ TEJ TEN TEŻ TĘP TIK TKA TLĄ TLE TLĘ TLI TŁO TNĄ TNĘ TOM TON TOŃ TOR TOŻ TÓG TRĄ TRĘ TUP TUR TUŻ TYĆ TYŁ TYM TYP TYŚ UCZ UDA UDO UFO ULE ULG UPS UST WAB WAL WAŁ WAM WAN WAS WAT WAŻ WĄS WĄŻ WEŃ WEŹ WĘZ WIĆ WIE WIJ WIŁ WIŃ WIO WIR WIŚ WIZ WOK WOŃ WÓD WÓŁ WÓR WÓZ WRĄ WRE WRĘ WSI WUJ WYĆ WYŁ WYŻ ZAD ZAŚ ZĄB ZDA ZEŃ ZER ZEW ZEZ ZĘZ ZJE ZŁA ZŁĄ ZŁE ZŁO ZŁY ZNA ZOO ZWĄ ZWĘ ZWY ZZA ŹLE ŹLI ŻAK ŻAL ŻAR ŻĄP ŻEL ŻEŃ ŻER ŻRĄ ŻRE ŻRĘ ŻUĆ ŻUJ ŻUK ŻUL ŻUŁ ŻUP ŻUR ŻYĆ ŻYJ ŻYŁ ŻYW'.toUpperCase().split(' ')
let selectedWordArray=[];
let word="";
let letter=""
let letterArray='a, ą, b, c, ć, d, e, ę, f, g, h, i, j, k, l, ł, m, n, o, ó, p, q, r, s, ś, t, u, v, w, x, y, z, ź, ż, z'.toUpperCase().split(', ')
let letterArraySudoku = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
let letersSequenceArray =[];
let SudokuArray =new Array(9).fill('1').map(x => Array(9).fill('1'));
let SudokuArraySolution;
//buttons functions--------------------------------------------------------------------------------


Start.addEventListener('click', async () => {
    gameData={}
    Menu.setAttribute("hidden", "hidden");
    playerBoard.removeAttribute("hidden");
   
    if(select!=null){
        if (document.getElementById("mySelect1")===null) {
            selectList = document.createElement("select");
            selectList.id = "mySelect1";
            selectList.classList.add("mySelect");
            select.appendChild(selectList);
        }else{
            while (document.getElementById("mySelect1").firstChild) {
                document.getElementById("mySelect1").removeChild(document.getElementById("mySelect1").firstChild);
            }
        }
      }
      fileNames=await filesNames()
      selectList=document.getElementById("mySelect1")
        for (var i = 0; i < fileNames.length; i++) {
          option = document.createElement("option");
          option.value = fileNames[i];
          option.text = fileNames[i];
          selectList.appendChild(option);
      }
})

startExercise.addEventListener('click', async () => {
    
        if (checkbox.value==="played1" && checkbox.checked) {
            //console.log("select")
            fileHandle = await Root.getFileHandle(`${document.getElementById("mySelect1").value}`);
            gameData.time = new Date().getDate()+"."+(new Date().getMonth()+1)+"."+new Date().getFullYear()+" "
                switch (new Date().getHours()) {
                    case 0:
                        gameData.time+="00"+":"
                        break;
                    case 1:
                        gameData.time+="01"+":"
                        break;
                    case 2:
                        gameData.time+="02"+":"
                        break;
                    case 3:
                        gameData.time+="03"+":"
                        break;
                    case 4:
                        gameData.time+="04"+":"
                        break;
                    case 5:
                        gameData.time+="05"+":"
                        break;
                    case 6:
                        gameData.time+="06"+":"
                        break;
                    case 7:
                        gameData.time+="07"+":"
                        break;
                    case 8:
                        gameData.time+="08"+":"
                        break;
                    case 9:
                        gameData.time+="09"+":"
                        break;
                    default:
                        gameData.time+=new Date().getHours()+":"
                        break;
                }
            switch (new Date().getMinutes()) {
                case 0:
                    gameData.time+="00"
                    break;
                case 1:
                    gameData.time+="01"
                    break;
                case 2:
                    gameData.time+="02"
                    break;
                case 3:
                    gameData.time+="03"
                    break;
                case 4:
                    gameData.time+="04"
                    break;
                case 5:
                    gameData.time+="05"
                    break;
                case 6:
                    gameData.time+="06"
                    break;
                case 7:
                    gameData.time+="07"
                    break;
                case 8:
                    gameData.time+="08"
                    break;
                case 9:
                    gameData.time+="09"
                    break;
                default:
                    gameData.time+=new Date().getMinutes()
                    break;
            }

            while (Game1.firstChild) {
                Game1.removeChild(Game1.firstChild);
            }
            DailyGames()
            showNextGame()
            playerBoard.setAttribute("hidden", "hidden");
            Game1.removeAttribute("hidden");
        }else if(checkbox.value==="played1" && !checkbox.checked){
            //console.log("textbox")
            if (text1.value===''|| /\s/g.test(text1.value)) {
                alert("Wprowadź nazwę pliku. Nie powinna zawierać spacji.")
            }else{
                fileHandle = await Root.getFileHandle(`${text1.value}`, {create: true});
                text1.value=''
                gameData.time = new Date().getDate()+"."+(new Date().getMonth()+1)+"."+new Date().getFullYear()+" "
                switch (new Date().getHours()) {
                    case 0:
                        gameData.time+="00"+":"
                        break;
                    case 1:
                        gameData.time+="01"+":"
                        break;
                    case 2:
                        gameData.time+="02"+":"
                        break;
                    case 3:
                        gameData.time+="03"+":"
                        break;
                    case 4:
                        gameData.time+="04"+":"
                        break;
                    case 5:
                        gameData.time+="05"+":"
                        break;
                    case 6:
                        gameData.time+="06"+":"
                        break;
                    case 7:
                        gameData.time+="07"+":"
                        break;
                    case 8:
                        gameData.time+="08"+":"
                        break;
                    case 9:
                        gameData.time+="09"+":"
                        break;
                    default:
                        gameData.time+=new Date().getHours()+":"
                        break;
                }

                switch (new Date().getMinutes()) {
                    case 0:
                        gameData.time+="00"
                        break;
                    case 1:
                        gameData.time+="01"
                        break;
                    case 2:
                        gameData.time+="02"
                        break;
                    case 3:
                        gameData.time+="03"
                        break;
                    case 4:
                        gameData.time+="04"
                        break;
                    case 5:
                        gameData.time+="05"
                        break;
                    case 6:
                        gameData.time+="06"
                        break;
                    case 7:
                        gameData.time+="07"
                        break;
                    case 8:
                        gameData.time+="08"
                        break;
                    case 9:
                        gameData.time+="09"
                        break;
                    default:
                        gameData.time+=new Date().getMinutes()
                        break;
                }
    

                while (Game1.firstChild) {
                    Game1.removeChild(Game1.firstChild);
                }
                DailyGames()
                showNextGame()
                playerBoard.setAttribute("hidden", "hidden");
                Game1.removeAttribute("hidden");
            }
            
        }
    
    //console.log(gameData)
})

Results.addEventListener('click', async () => {
    Menu.setAttribute("hidden", "hidden");
    selectResults.removeAttribute("hidden");

    if(select2!=null){
        
        if (document.getElementById("mySelect2")===null) {
            selectList = document.createElement("select");
            selectList.id = "mySelect2";
            selectList.classList.add("mySelect");
            select2.appendChild(selectList);
        }else{
            while (document.getElementById("mySelect2").firstChild) {
                document.getElementById("mySelect2").removeChild(document.getElementById("mySelect2").firstChild);
            }
        }
      }

      fileNames=await filesNames()
      selectList=document.getElementById("mySelect2")
        for (var i = 0; i < fileNames.length; i++) {
          option = document.createElement("option");
          option.value = fileNames[i];
          option.text = fileNames[i];
          selectList.appendChild(option);
      }
  })

Exit.addEventListener('click', () => {
    if (confirm("Zamknąć okno?")) {
        let newWindow = window.open(location, '_self');
        setTimeout(function() {
            newWindow.close();
        }, 500);
        
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

showData.addEventListener('click', async () => {
    fileHandle = await Root.getFileHandle(`${document.getElementById("mySelect2").value}`);
    w.postMessage(["read", fileHandle]);
    selectResults.setAttribute("hidden", "hidden");
    while (Game1.firstChild) {
        Game1.removeChild(Game1.firstChild);
    }
    Game1.removeAttribute("hidden");
    
    
})

DelateFile.addEventListener('click', async () => {
    

    if (confirm("Delate File")) {
        await Root.removeEntry(`${document.getElementById("mySelect2").value}`);
        while (document.getElementById("mySelect2").firstChild) {
            document.getElementById("mySelect2").removeChild(document.getElementById("mySelect2").firstChild);
        }
        fileNames=await filesNames()
        selectList=document.getElementById("mySelect2")
            for (var i = 0; i < fileNames.length; i++) {
            option = document.createElement("option");
            option.value = fileNames[i];
            option.text = fileNames[i];
            selectList.appendChild(option);
        }
    } 
})


//functions----------------------------------------------------------------------------------------
window.onload = async function() {
    //console.log("ss")
    
    var width=1300;
    var height=1000;
    window.moveTo((window.screen.availwidth-width)/2,(window.screen.availheight-height)/2);
    window.resizeTo(width,height);

    checkbox.checked = false;
    checkbox.addEventListener("change", e => {
        
                if (e.target.checked) {
                    text1.style.visibility = "hidden"
                    select.removeAttribute("hidden");
                }else{
                    select.setAttribute("hidden", "hidden");
                    text1.style.visibility = "visible"
                }
                
    })
    
    Root = await navigator.storage.getDirectory()
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
          w = new Worker("worker.js");
        }
      } else {
        console.log("Sorry, your browser does not support Web Workers...");
      }

      w.addEventListener('message', function(e) {
        let showFile = document.createElement("div");
        showFile.id="showData";
        tempArray=[]
        tempArray=e.data
        tempArray.pop();
        tempArray.forEach((element,i) => {
            tempArray[i]=JSON.parse(element)
        });
        //console.log(tempArray)
        displayData(tempArray, showFile)
        backToFileSelect = document.createElement("button");
        backToFileSelect.id = "backToFileSelect";
        backToFileSelect.innerHTML= "Wróć";
        backToFileSelect.classList.add("Buttons");
        if (GameSequenceNext<0) {
            backToFileSelect.onclick = function backToFileSelectButton() {
                Game1.setAttribute("hidden", "hidden");
                selectResults.removeAttribute("hidden");
                while (Game1.firstChild) {
                    Game1.removeChild(Game1.firstChild);
                }
                gameData={}
            }
        }else{
            GameSequenceNext=-1
            backToFileSelect.onclick = function backToFileSelectButton() {
                Game1.setAttribute("hidden", "hidden");
                Menu.removeAttribute("hidden");
                while (Game1.firstChild) {
                    Game1.removeChild(Game1.firstChild);
                }
                gameData={}
            }
        }
        
        Game1.appendChild(showFile);
        Game1.appendChild(backToFileSelect);
        
    }, false);
    if(!(navigator.userAgent.indexOf("Chrome") != -1) || (navigator.userAgent.indexOf("OPR") != -1)){
        //console.log("nie chrome")
        alert("Jeśli chcesz zainastalować aplikacje jako osobne okno, użyj przeglądarki Chrome.")
    }
}



function DailyGames(){
    GameSequence = [];
    GameSequenceNext = -1;
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
        GameSequence.push(6)
}

function showNextGame() {
    while (Game1.firstChild) {
        Game1.removeChild(Game1.firstChild);
    }
    if (GameSequenceNext<0) {
        Greating()
    } else {
        switch (GameSequence[GameSequenceNext]) {
            case 1:
                ComparingSymbols();
                break;
            case 2:
                Remember2Number();
                break;
            case 3:
                MathOnTime();
                break;
            case 4:
                FindWords();
                break;
            case 5:
                Sudoku();
                break;
            case 6:
                End()
                break;
        }
    }
    
    GameSequenceNext++;
}

async function filesNames(){
    tempArray= []
    for await (let handle of Root.values()) {
        tempArray.push(
            handle.name
        )
    }
    return tempArray
}

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rowCorect(number, row){
    return SudokuArray[row].includes(number);
}

function columnCorect(number, column){
    for (let i = 0; i < 9; i++) {
        if (SudokuArray[i][column]===number) {
            return true
        }
    }
    return false
}

function boxCorect(number,row,column){
    for (let i = (Math.floor( row/3)*3); i < (Math.floor( row/3)*3)+3; i++) {
        for (let j = (Math.floor( column/3)*3); j < (Math.floor( column/3)*3)+3; j++) {
            if (SudokuArray[i][j]===number) {
                return true
            }
        }
    }
    return false
}

function generateGoodSudoku(){
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (SudokuArray[i][j]===' ') {
                for (let number = 1; number < 10; number++) {
                    if (!(rowCorect(number,i)||columnCorect(number,j)||boxCorect(number,i,j))) {
                        SudokuArray[i][j]=number;
                        if(generateGoodSudoku()){
                            return true;
                        }
                        SudokuArray[i][j]=" "
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function chenged(x,i,j, stoper) {
    if((x.target.value!==" " || x.target.value!=="" )&& tempArray.includes(x.target.value.toUpperCase().trim())){
        SudokuArray[i][j]=x.target.value.toUpperCase().trim()
        x.target.value= SudokuArray[i][j]
    }else{
        x.target.value=""
    }
    if(JSON.stringify(SudokuArray)===JSON.stringify(SudokuArraySolution)){
        submitAnswer.style.display = 'inline-block'
        time=new Date().getTime()-time.getTime();
        gameData.Sudoku={time: `${time}`}
        //console.log(time)
        clearInterval(stoper);
    }

}

function displayData(dataArray, container){
    dataArray.reverse();
    dataArray.forEach((element,i) => {
       let gameDate = document.createElement("p");
        gameDate.innerHTML= "Data: " + element.time
        container.appendChild(gameDate);
        gameDate.style.cssText = `
        font-size: 20px;
        `;

        let ComparingSymbolsDiv = document.createElement("div");
        ComparingSymbolsDiv.classList.add("ComparingSymbolsDiv");
        ComparingSymbolsDiv.innerHTML = "Porównanie symboli"
        window[ 'ptime' ] = document.createElement("p");
        var minutes = Math.floor((element.ComparingSymbols.time % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((element.ComparingSymbols.time % (1000 * 60)) / 1000);
        switch (minutes) {
            case 0:
                minutes="00"
                break;
            case 1:
                minutes="01"
                break;
            case 2:
                minutes="02"
                break;
            case 3:
                minutes="03"
                break;
            case 4:
                minutes="04"
                break;
            case 5:
                minutes="05"
                break;
            case 6:
                minutes="06"
                break;
            case 7:
                minutes="07"
                break;
            case 8:
                minutes="08"
                break;
            case 9:
                minutes="09"
                break;
        }
        switch (seconds) {
            case 0:
                seconds="00"
                break;
            case 1:
                seconds="01"
                break;
            case 2:
                seconds="02"
                break;
            case 3:
                seconds="03"
                break;
            case 4:
                seconds="04"
                break;
            case 5:
                seconds="05"
                break;
            case 6:
                seconds="06"
                break;
            case 7:
                seconds="07"
                break;
            case 8:
                seconds="08"
                break;
            case 9:
                seconds="09"
                break;
        }
        window[ 'ptime' ].innerHTML = "Czas: " + minutes + ":" + seconds;
        window[ 'ptime' ].style.cssText = `
        font-size: 16px;
        text-align: left;
        `;
        ComparingSymbolsDiv.appendChild( window[ 'ptime' ]);

        for (let i = 0; i < 10; i++) {
            window[ 'p' + i + 1 ] = document.createElement("p");
            window[ 'p' + i + 1 ].innerHTML="Porównanie\<\/br\>" ;
            window[ 'p' + i + 1 ].style.cssText = `
                    font-size: 16px;
                    text-align: center;
                `;
            ComparingSymbolsDiv.appendChild(window[ 'p' + i + 1 ]);

            window[ 'p' + i + 2 ] = document.createElement("p");
            window[ 'p' + i + 2 ].style.cssText = `
                    font-size: 12px;
                    text-align: center;
                `;
            eval('p' + i + '2.innerHTML= element.ComparingSymbols.comaprasment'+i+'.comaprasment' )
            ComparingSymbolsDiv.appendChild(window[ 'p' + i + 2  ]);

            window[ 'p' + i + 3 ] = document.createElement("p");
            eval('p' + i + '3.innerHTML= "Wynik: " + element.ComparingSymbols.comaprasment'+i+'.result;' )
            window[ 'p' + i + 3 ].style.cssText = `
            font-size: 16px;
            text-align: left;
            `;
            ComparingSymbolsDiv.appendChild(window[ 'p' + i + 3  ]);
        }
        container.appendChild(ComparingSymbolsDiv);

        let FindWordsDiv = document.createElement("div");
        FindWordsDiv.innerHTML="Znajdywanie słów"
        FindWordsDiv.style.cssText = `
        font-size: 25px;
        text-align: center;
        `;

        let innerP= document.createElement("p");
        minutes = Math.floor((element.FindWords.time % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((element.FindWords.time % (1000 * 60)) / 1000);
        switch (minutes) {
            case 0:
                minutes="00"
                break;
            case 1:
                minutes="01"
                break;
            case 2:
                minutes="02"
                break;
            case 3:
                minutes="03"
                break;
            case 4:
                minutes="04"
                break;
            case 5:
                minutes="05"
                break;
            case 6:
                minutes="06"
                break;
            case 7:
                minutes="07"
                break;
            case 8:
                minutes="08"
                break;
            case 9:
                minutes="09"
                break;
        }
        switch (seconds) {
            case 0:
                seconds="00"
                break;
            case 1:
                seconds="01"
                break;
            case 2:
                seconds="02"
                break;
            case 3:
                seconds="03"
                break;
            case 4:
                seconds="04"
                break;
            case 5:
                seconds="05"
                break;
            case 6:
                seconds="06"
                break;
            case 7:
                seconds="07"
                break;
            case 8:
                seconds="08"
                break;
            case 9:
                seconds="09"
                break;
        }


        innerP.innerHTML= "Wynik " + element.FindWords.Score+"\<\/br\>Czas: " + minutes + ":" + seconds;
        innerP.style.cssText = `
        font-size: 16px;
        text-align: center;
        `;
        FindWordsDiv.appendChild(innerP);
        container.appendChild(FindWordsDiv);


        let MathOnTimeDiv = document.createElement("div");
        MathOnTimeDiv.classList.add("MathOnTimeDiv");
        
        let MathOnTimeDivTitle = document.createElement("div");
        MathOnTimeDivTitle.classList.add("MathOnTimeDivTitle");
        MathOnTimeDivTitle.innerHTML = "Obliczenia na czas";
        MathOnTimeDiv.appendChild(MathOnTimeDivTitle);

        let MathOnTimeDivTime = document.createElement("div");
        MathOnTimeDivTime.classList.add("MathOnTimeDivTime");
        minutes = Math.floor((element.MathOnTime.time % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((element.MathOnTime.time % (1000 * 60)) / 1000);
        switch (minutes) {
            case 0:
                minutes="00"
                break;
            case 1:
                minutes="01"
                break;
            case 2:
                minutes="02"
                break;
            case 3:
                minutes="03"
                break;
            case 4:
                minutes="04"
                break;
            case 5:
                minutes="05"
                break;
            case 6:
                minutes="06"
                break;
            case 7:
                minutes="07"
                break;
            case 8:
                minutes="08"
                break;
            case 9:
                minutes="09"
                break;
        }
        switch (seconds) {
            case 0:
                seconds="00"
                break;
            case 1:
                seconds="01"
                break;
            case 2:
                seconds="02"
                break;
            case 3:
                seconds="03"
                break;
            case 4:
                seconds="04"
                break;
            case 5:
                seconds="05"
                break;
            case 6:
                seconds="06"
                break;
            case 7:
                seconds="07"
                break;
            case 8:
                seconds="08"
                break;
            case 9:
                seconds="09"
                break;
        }
        MathOnTimeDivTime.innerHTML = "Czas: " + minutes + ":" + seconds;
        MathOnTimeDiv.appendChild(MathOnTimeDivTime);


        let MathOnTimeDiv1 = document.createElement("div");
        MathOnTimeDiv1.classList.add("MathOnTimeDiv1");
        MathOnTimeDiv.appendChild(MathOnTimeDiv1);


        let MathOnTimeDiv2 = document.createElement("div");
        MathOnTimeDiv2.classList.add("MathOnTimeDiv1");
        MathOnTimeDiv.appendChild(MathOnTimeDiv2);

        let MathOnTimeDiv3 = document.createElement("div");
        MathOnTimeDiv3.classList.add("MathOnTimeDiv1");
        MathOnTimeDiv.appendChild(MathOnTimeDiv3);

        for (let i = 0; i < 21; i++) {
            window[ 'p' + i ] = document.createElement("p");
            switch (i%3) {
                case 0:
                    MathOnTimeDiv1.appendChild(window[ 'p' + i ]);
                    break;
                case 1:
                    MathOnTimeDiv2.appendChild(window[ 'p' + i ]);
                    break;
                case 2:
                    MathOnTimeDiv3.appendChild(window[ 'p' + i ]);
                    break;
            }
            eval('p' + i + '.innerHTML="Równanie " + element.MathOnTime.equasion'+i+'.mathEquasion+"\<\/br\>Wynik: " + element.MathOnTime.equasion'+i+'.result;');
        }
        container.appendChild(MathOnTimeDiv);


        let Remember2NumberDiv = document.createElement("div");
        Remember2NumberDiv.classList.add("Remember2NumberDiv");
        Remember2NumberDiv.innerHTML = "Zapamiętywanie co drugiego numeru";
        

        for (let i = 0; i < 10; i++) {
            window[ 'p' + i ] = document.createElement("p");
            eval('p' + i + '.innerHTML= element.Remember2Number.Column'+i+'.Number0+" " +element.Remember2Number.Column'+i+'.Number1+" " +element.Remember2Number.Column'+i+'.Number2+" " +element.Remember2Number.Column'+i+'.Number3+" " +element.Remember2Number.Column'+i+'.Number4+"\<\/br\>"+ element.Remember2Number.Column'+ i+'.column+"\<\/br\>\<\/br\>\<\/br\>"')
            Remember2NumberDiv.appendChild(window[ 'p' + i ]);
        }
        container.appendChild(Remember2NumberDiv);


        let SudokuDiv = document.createElement("div");
        SudokuDiv.classList.add("SudokuDiv");
        SudokuDiv.innerHTML= "Sudoku"
        window[ 'p' ] = document.createElement("p");
        if (element.Sudoku.time === "Pominięto") {
            window[ 'p' ].innerHTML="Pominięto";
        }else{
            minutes = Math.floor((element.Sudoku.time % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((element.Sudoku.time % (1000 * 60)) / 1000);
            switch (minutes) {
                case 0:
                    minutes="00"
                    break;
                case 1:
                    minutes="01"
                    break;
                case 2:
                    minutes="02"
                    break;
                case 3:
                    minutes="03"
                    break;
                case 4:
                    minutes="04"
                    break;
                case 5:
                    minutes="05"
                    break;
                case 6:
                    minutes="06"
                    break;
                case 7:
                    minutes="07"
                    break;
                case 8:
                    minutes="08"
                    break;
                case 9:
                    minutes="09"
                    break;
            }
            switch (seconds) {
                case 0:
                    seconds="00"
                    break;
                case 1:
                    seconds="01"
                    break;
                case 2:
                    seconds="02"
                    break;
                case 3:
                    seconds="03"
                    break;
                case 4:
                    seconds="04"
                    break;
                case 5:
                    seconds="05"
                    break;
                case 6:
                    seconds="06"
                    break;
                case 7:
                    seconds="07"
                    break;
                case 8:
                    seconds="08"
                    break;
                case 9:
                    seconds="09"
                    break;
            }
            window[ 'p' ].innerHTML="Czas: " + minutes + ":" + seconds;
        }

        


        SudokuDiv.appendChild(window[ 'p' ]);
        container.appendChild(SudokuDiv);

        let spacer = document.createElement("p");
        spacer.classList.add("spacer");
        container.appendChild(spacer);
    });

    
}
  

//Games--------------------------------------------------------------------------------------------
function Greating(){
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="W tej chwili rozpoczniesz serię krótkich ćwiczeń, które pomogą Ci zapobiec demencji w przyszłości."
    let button = document.createElement("button");
    button.id = "Start";
    button.innerHTML= "Dalej";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function Start() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }
        showNextGame();
    }
}

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
        ComparNumbers[i]=[number,number-difrence];
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
    info.innerHTML="Porównaj wizualnie liczbę tych samych symboli po lewej i prawej stronie. Wybierz znak =,<,>. Staraj się, aby czas był jak najkrótszy."
    let button = document.createElement("button");
    button.id = "StartComparingSymbols";
    button.innerHTML= "Dalej";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartComparingSymbols() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }

        
        let ComparingSymbolsForm = document.createElement("form");
        ComparingSymbolsForm.id="Compar";
        window[ 'timer' ] = document.createElement("p");
        window[ 'timer' ].innerHTML =  "00" + ":" + "00";
        Game1.appendChild(window[ 'timer' ]);
        window[ 'timer' ].style.cssText = `
        font-size: 25px;
        text-align: right;
        `;

        ComparingSymbol.forEach((element,i) => {
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


        var stoper = setInterval(function() {
            var now = new Date().getTime();
            var distance = now - time;
          
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            switch (minutes) {
                case -1:
                    minutes="00"
                    break;
                case 0:
                    minutes="00"
                    break;
                case 1:
                    minutes="01"
                    break;
                case 2:
                    minutes="02"
                    break;
                case 3:
                    minutes="03"
                    break;
                case 4:
                    minutes="04"
                    break;
                case 5:
                    minutes="05"
                    break;
                case 6:
                    minutes="06"
                    break;
                case 7:
                    minutes="07"
                    break;
                case 8:
                    minutes="08"
                    break;
                case 9:
                    minutes="09"
                    break;
            }
            switch (seconds) {
                case -1:
                    minutes="00"
                    break;
                case 0:
                    seconds="00"
                    break;
                case 1:
                    seconds="01"
                    break;
                case 2:
                    seconds="02"
                    break;
                case 3:
                    seconds="03"
                    break;
                case 4:
                    seconds="04"
                    break;
                case 5:
                    seconds="05"
                    break;
                case 6:
                    seconds="06"
                    break;
                case 7:
                    seconds="07"
                    break;
                case 8:
                    seconds="08"
                    break;
                case 9:
                    seconds="09"
                    break;
            }


        
            window[ 'timer' ].innerHTML =  minutes + ":" + seconds;
          
            
        }, 1000);




        submitAnswer = document.createElement("button");
        submitAnswer.id = "ComparingSymbolsResults";
        submitAnswer.innerHTML= "Zatwierdź";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function ComparingSymbolsResults() {
            time=new Date().getTime()-time.getTime();
            clearInterval(stoper);
            //console.log(time)
            gameData.ComparingSymbols={time: `${time}`}
            if (document.querySelector(`input[name=symbols1]`)!=null) {
                ComparingSymbol.forEach((element,i) => {
                    input = document.querySelectorAll(`input[name=symbols${i}]`);
                    for (const radio of input) {
                        if (radio.checked) {
                            //console.log(radio.value)
                            switch (radio.value) {
                                case "<":
                                    if ( element[0]<element[1]) {
                                        //console.log(i+" dobrze")
                                        gameData.ComparingSymbols["comaprasment"+i]={
                                            result: "Dobrze",
                                            comaprasment: `${element[0]} < ${element[1]}`
                                        }
                                    }else{
                                        ////console.log(i+" źle")
                                        gameData.ComparingSymbols["comaprasment"+i]={
                                            result: "Źle",
                                            comaprasment: `${element[0]} < ${element[1]}`
                                        }
                                    }
                                    break;
                                case "=":
                                    if ( element[0]==element[1]) {
                                        //console.log(i+" dobrze")
                                        gameData.ComparingSymbols["comaprasment"+i]={
                                            result: "Dobrze",
                                            comaprasment: `${element[0]} = ${element[1]}`
                                        }
                                    }else{
                                        //console.log(i+" źle")
                                        gameData.ComparingSymbols["comaprasment"+i]={
                                            result: "Źle",
                                            comaprasment: `${element[0]} = ${element[1]}`
                                        }
                                    }
                                    break;
                                case ">":
                                    if ( element[0]>element[1]) {
                                        //console.log(i+" dobrze")
                                        gameData.ComparingSymbols["comaprasment"+i]={
                                            result: "Dobrze",
                                            comaprasment: `${element[0]} > ${element[1]}`
                                        }
                                    }else{
                                        //console.log(i+" źle")
                                        gameData.ComparingSymbols["comaprasment"+i]={
                                            result: "Źle",
                                            comaprasment: `${element[0]} > ${element[1]}`
                                        }
                                    }
                                    break;
                            }
                            break;
                        }else if (radio.value == ">") {
                            //console.log("brak odpowiedzi")
                            gameData.ComparingSymbols["comaprasment"+i]={
                                result: "Brak odpowiedzi",
                                comaprasment: `${element[0]} ? ${element[1]}`
                            }
                        }
                        

                    }
                });
            }
            
            showNextGame();
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
    gameData.Remember2Number={};
    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Przeczytaj wszystkie liczby w kolumnie. Czytając, zapamiętaj o co drugą cyfre. Następnie wpisz zapamiętane liczby we właściwej kolejności.    "
    let button = document.createElement("button");
    button.id = "StartRemember2Number";
    button.innerHTML= "Dalej";
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
        

        window[ 'timer' ] = document.createElement("p");
        window[ 'timer' ].id="timer";
        window[ 'timer' ].innerHTML =  "00" + ":0" + Math.floor((fadeTime % (1000 * 60)) / 1000);
        Game1.appendChild(window[ 'timer' ]);
        window[ 'timer' ].style.cssText = `
        font-size: 25px;
        text-align: right;
        `;

        submitAnswer = document.createElement("button");
        submitAnswer.style.visibility = 'hidden';
        window[ 'div' + iteration ] = document.createElement("div");
        window[ 'div' + iteration ].classList.add("exercise");
        window[ 'div' + iteration  + 'insaid'] = document.createElement("div");
        window[ 'div' + iteration  + 'insaid'].classList.add("numbersColumns");

        var time = new Date().getTime() + fadeTime + 1000;
        setTimeout(function() {
            window[ 'div' + iteration  + 'insaid'].setAttribute("hidden", "hidden");
        }, fadeTime);
        window[ 'div' + iteration ].appendChild(window[ 'div' + iteration  + 'insaid']);
        NumberSequence[iteration].forEach((element2,y) => {
            window[ 'p' + y ] = document.createElement("p");
            window[ 'p' + y ].innerHTML= element2;
            window[ 'div' + iteration  + 'insaid'].appendChild(window[ 'p' + y ]);
        });
        
        var stoper = setInterval(function() {
            var now = new Date().getTime();
            var distance = time - now;
            //console.log(distance)
            var minutes ="00";
            var seconds ="00";
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
            switch (minutes) {
                case -1:
                    minutes="00";
                    break;
                case 0:
                    minutes="00";
                    break;
                case 1:
                    minutes="01";
                    break;
                case 2:
                    minutes="02";
                    break;
                case 3:
                    minutes="03";
                    break;
                case 4:
                    minutes="04";
                    break;
                case 5:
                    minutes="05";
                    break;
                case 6:
                    minutes="06";
                    break;
                case 7:
                    minutes="07";
                    break;
                case 8:
                    minutes="08";
                    break;
                case 9:
                    minutes="09";
                    break;
            }
            switch (seconds) {
                case -1:
                    minutes="00";
                    break;
                case 0:
                    seconds="00";
                    break;
                case 1:
                    seconds="01";
                    break;
                case 2:
                    seconds="02";
                    break;
                case 3:
                    seconds="03";
                    break;
                case 4:
                    seconds="04";
                    break;
                case 5:
                    seconds="05";
                    break;
                case 6:
                    seconds="06";
                    break;
                case 7:
                    seconds="07";
                    break;
                case 8:
                    seconds="08";
                    break;
                case 9:
                    seconds="09";
                    break;
            }

            window[ 'timer' ].innerHTML =  minutes + ":" + seconds;
        }, 1000);


        for (let inputNumber = 0; inputNumber < 5; inputNumber++) {
            window[ 'input' + inputNumber ] = document.createElement("input");
            window[ 'input' + inputNumber ].type = "number";
            window[ 'input' + inputNumber ].id = `number${inputNumber}`;
            window[ 'input' + inputNumber ].classList.add("numbers");
            window[ 'input' + inputNumber ].max= "88";
            window[ 'input' + inputNumber ].name= "numbers";
            
            setTimeout(function() {
                window[ 'div' + iteration ].appendChild(window[ 'input' + inputNumber ]);
                submitAnswer.style.visibility = 'visible';
                window[ 'timer' ].setAttribute("hidden", "hidden");
                clearInterval(stoper);
            }, fadeTime);
            
            
        }
       
        Remember2NumberForm.appendChild(window[ 'div' + iteration ]);


        
        submitAnswer.id = "Remember2NumberResults";
        submitAnswer.innerHTML= "Zatwierdź";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function Remember2NumberResults() {
            if (iteration==NumberSequence.length-1){
                submitAnswer.style.visibility = 'hidden';
                tempArray=[];
                for (let j = 1; j < 10; j+=2) {
                   tempArray.push(NumberSequence[iteration][j]);
                }
                NumberSequenceCorect[iteration]=tempArray;
                
                form=document.querySelector("#Compar");
                input=form.querySelectorAll("input[name=numbers]");
                
                gameData.Remember2Number["Column"+iteration]={
                    column: NumberSequence[iteration],
                }

                input.forEach((element,i) => {
                    if (element.valueAsNumber == NumberSequenceCorect[iteration][i]) {
                        //console.log("corect")
                        gameData.Remember2Number["Column"+iteration][`Number${i}`] = "Dobrze"
                    }else{
                        //console.log("wrong")
                        gameData.Remember2Number["Column"+iteration][`Number${i}`] = "Źle"
                    }
                });
                showNextGame();
            }else{
                submitAnswer.style.visibility = 'hidden';
                tempArray=[];
                for (let j = 1; j < 10; j+=2) {
                   tempArray.push(NumberSequence[iteration][j]);
                }
                NumberSequenceCorect[iteration]=tempArray;
                
                form=document.querySelector("#Compar");
                input=form.querySelectorAll("input[name=numbers]");
                
                gameData.Remember2Number["Column"+iteration]={
                    column: NumberSequence[iteration],
                }

                input.forEach((element,i) => {
                    if (element.valueAsNumber == NumberSequenceCorect[iteration][i]) {
                        //console.log("corect")
                        gameData.Remember2Number["Column"+iteration][`Number${i}`] = "Dobrze"
                    }else{
                        //console.log("wrong")
                        gameData.Remember2Number["Column"+iteration][`Number${i}`] = "Źle"
                    }
                });
                while (Remember2NumberForm.firstChild) {
                    Remember2NumberForm.removeChild(Remember2NumberForm.firstChild);
                }


                iteration++;
                
                window[ 'timer' ]=document.getElementById("timer")
                window[ 'timer' ].removeAttribute("hidden")
                window[ 'timer' ].innerHTML =  "00" + ": 0" + Math.floor((fadeTime % (1000 * 60)) / 1000);
    

                window[ 'div' + iteration ] = document.createElement("div");
                window[ 'div' + iteration ].classList.add("exercise");
                window[ 'div' + iteration  + 'insaid'] = document.createElement("div");
                window[ 'div' + iteration  + 'insaid'].classList.add("numbersColumns");
                setTimeout(function() {
                    window[ 'div' + iteration  + 'insaid'].setAttribute("hidden", "hidden");
                }, fadeTime);
                window[ 'div' + iteration ].appendChild(window[ 'div' + iteration  + 'insaid']);
                NumberSequence[iteration].forEach((element2,y) => {
                    window[ 'p' + y ] = document.createElement("p");
                    window[ 'p' + y ].innerHTML= element2;
                    window[ 'div' + iteration  + 'insaid'].appendChild(window[ 'p' + y ]);
                });

                var time = new Date().getTime() + fadeTime+ 1000;
                var stoper = setInterval(function() {
                    var now = new Date().getTime();
                    var distance = time - now;
                    //console.log(distance)
                    var minutes ="00"
                    var seconds ="00"
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    switch (minutes) {
                        case -1:
                            minutes="00";
                            break;
                        case 0:
                            minutes="00";
                            break;
                        case 1:
                            minutes="01";
                            break;
                        case 2:
                            minutes="02";
                            break;
                        case 3:
                            minutes="03";
                            break;
                        case 4:
                            minutes="04";
                            break;
                        case 5:
                            minutes="05";
                            break;
                        case 6:
                            minutes="06";
                            break;
                        case 7:
                            minutes="07";
                            break;
                        case 8:
                            minutes="08";
                            break;
                        case 9:
                            minutes="09";
                            break;
                    }
                    switch (seconds) {
                        case -1:
                            minutes="00";
                            break;
                        case 0:
                            seconds="00";
                            break;
                        case 1:
                            seconds="01";
                            break;
                        case 2:
                            seconds="02";
                            break;
                        case 3:
                            seconds="03";
                            break;
                        case 4:
                            seconds="04";
                            break;
                        case 5:
                            seconds="05";
                            break;
                        case 6:
                            seconds="06";
                            break;
                        case 7:
                            seconds="07";
                            break;
                        case 8:
                            seconds="08";
                            break;
                        case 9:
                            seconds="09";
                            break;
                    }

                    window[ 'timer' ].innerHTML =  minutes + ":" + seconds;
                  
                    
                }, 1000);

                for (let inputNumber = 0; inputNumber < 5; inputNumber++) {
                    window[ 'input' + inputNumber ] = document.createElement("input");
                    window[ 'input' + inputNumber ].type = "number";
                    window[ 'input' + inputNumber ].id = `number${inputNumber}`;
                    window[ 'input' + inputNumber ].classList.add("numbers");
                    window[ 'input' + inputNumber ].max= "88";
                    window[ 'input' + inputNumber ].name= "numbers";
                   
                    setTimeout(function() {
                        window[ 'div' + iteration ].appendChild(window[ 'input' + inputNumber ]);
                        submitAnswer.style.visibility = 'visible';
                        window[ 'timer' ].setAttribute("hidden", "hidden");
                        clearInterval(stoper);
                    }, fadeTime);
                    
                    
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
    info.innerHTML="Wykonaj obliczenia arytmetyczne tak szybko, jak to możliwe."
    let button = document.createElement("button");
    button.id = "StartMath";
    button.innerHTML= "Dalej";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartMath() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }

        
        let MathOnTimeForm = document.createElement("form");
        MathOnTimeForm.id="Compar";

        window[ 'timer' ] = document.createElement("p");
        window[ 'timer' ].innerHTML =  "00" + ":" + "00";
        Game1.appendChild(window[ 'timer' ]);
        window[ 'timer' ].style.cssText = `
                font-size: 25px;
                text-align: right;
                `;

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
                window[ 'input' + i ].value="0"
                window[ 'input' + i ].type = "number";
                window[ 'input' + i ].id = `number${i}i`;
                window[ 'input' + i ].name= "numbers";
                window[ 'input' + i ].classList.add("result");
                window[ 'div' + `column${column}`].appendChild(window[ 'input' + i ]);
                iteration++;
            }else{
                window[ 'p' + i ] = document.createElement("p");
                window[ 'p' + i ].innerHTML= `${element.FirstNumber} ${element.OperationSymbol} ${element.SecondNumber}`;
                window[ 'div' + `column${column}`].appendChild(window[ 'p' + i ]);
                window[ 'input' + i ] = document.createElement("input");
                window[ 'input' + i ].value="0"
                window[ 'input' + i ].type = "number";
                window[ 'input' + i ].id = `number${i}i`;
                window[ 'input' + i ].name= "numbers";
                window[ 'input' + i ].classList.add("result");
                window[ 'div' + `column${column}`].appendChild(window[ 'input' + i ]);
                column++;
                iteration = 0;
            }
        });
    
        MathOnTimeForm.appendChild( window[ 'div' ]);
        
        
        var stoper = setInterval(function() {
            var now = new Date().getTime();
            var distance = now - time;
          
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            switch (minutes) {
                case -1:
                    minutes="00"
                    break;
                case 0:
                    minutes="00"
                    break;
                case 1:
                    minutes="01"
                    break;
                case 2:
                    minutes="02"
                    break;
                case 3:
                    minutes="03"
                    break;
                case 4:
                    minutes="04"
                    break;
                case 5:
                    minutes="05"
                    break;
                case 6:
                    minutes="06"
                    break;
                case 7:
                    minutes="07"
                    break;
                case 8:
                    minutes="08"
                    break;
                case 9:
                    minutes="09"
                    break;
            }
            switch (seconds) {
                case -1:
                    minutes="00"
                    break;
                case 0:
                    seconds="00"
                    break;
                case 1:
                    seconds="01"
                    break;
                case 2:
                    seconds="02"
                    break;
                case 3:
                    seconds="03"
                    break;
                case 4:
                    seconds="04"
                    break;
                case 5:
                    seconds="05"
                    break;
                case 6:
                    seconds="06"
                    break;
                case 7:
                    seconds="07"
                    break;
                case 8:
                    seconds="08"
                    break;
                case 9:
                    seconds="09"
                    break;
            }

            window[ 'timer' ].innerHTML =  minutes + ":" + seconds;
          
            
        }, 1000);




        submitAnswer = document.createElement("button");
        submitAnswer.id = "MathResults";
        submitAnswer.innerHTML= "Zatwierdź";
        submitAnswer.classList.add("Buttons");
        
        submitAnswer.onclick = function MathResults() {
            time=new Date().getTime()-time.getTime();
            clearInterval(stoper);
            //console.log(time)
            gameData.MathOnTime={time: `${time}`}
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
                    //console.log("corect")
                    gameData.MathOnTime["equasion"+i]={
                        result: "Dobrze",
                        mathEquasion: `${MathCalculations[i].FirstNumber} ${MathCalculations[i].OperationSymbol} ${MathCalculations[i].SecondNumber}`
                    }
                }else{
                    //console.log("wrong")
                    gameData.MathOnTime["equasion"+i]={
                        result: "Źle",
                        mathEquasion: `${MathCalculations[i].FirstNumber} ${MathCalculations[i].OperationSymbol} ${MathCalculations[i].SecondNumber}`
                    }
                }
            })

            showNextGame();
        }
        time = new Date();  
        Game1.appendChild(MathOnTimeForm);
        Game1.appendChild(submitAnswer);
    }
}

function FindWords() {
    temp=0;
    selectedWordArray=[];
    letersSequenceArray =[]
    word="";
    letter=""
    let wordFinded=0;
    let el
    while(letersSequenceArray.toString().replaceAll(",","").length<686){
        if (Random(0,100)<7) {
            word=wordArray[Random(0,(wordArray.length)-1)];
            letersSequenceArray.push(word);
            temp++;
            selectedWordArray.push(word);
        } else {
            letter=letterArray[Random(0,(letterArray.length)-1)];
            if (letersSequenceArray[letersSequenceArray.length-2]!=undefined&&letersSequenceArray[letersSequenceArray.length-1]!=undefined) {
                if(wordArray.indexOf(letersSequenceArray[letersSequenceArray.length-2].slice(-1)+letersSequenceArray[letersSequenceArray.length-1].slice(-1)+letter)>-1){
                    continue;
                }else{
                    letersSequenceArray.push(letter);
                }
            }else{
                letersSequenceArray.push(letter);
            }
        }
    }
    //console.log( letersSequenceArray.toString().replaceAll(",","").length) 

    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Znajdź w sekwencji słowa z literami drzewa. Spróbuj zrobić to tak szybko, jak to możliwe."
    let button = document.createElement("button");
    button.id = "StartFindWords";
    button.innerHTML= "Dalej";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartFindWords() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }
        let FindWordsForm = document.createElement("form");
        FindWordsForm.id="Compar";

        
        window[ 'timer' ] = document.createElement("p");
        window[ 'timer' ].innerHTML =  "00" + ":" + "00";
        Game1.appendChild(window[ 'timer' ]);
        window[ 'timer' ].style.cssText = `
        font-size: 25px;
        text-align: right;
        `;


        window[ 'div' ] = document.createElement("div");
        window[ 'div' ].id = "sequence";
        window[ 'div' ].classList.add("sequence");
        window[ 'p' ] = document.createElement("p");
        letersSequenceArray.forEach((element,i) => {
            if(element.length!=1){
                window[ 'p' ].innerHTML+=`<a href=\"\#link${i}\" title=\"${element}\" id=\"link${i}\" onclick="function() link${i} {return textLink(${element},this);}" class=\"linkNotClicked\">${element}</a>`
            }else{
                window[ 'p' ].innerHTML+=element
            }
        });
        window[ 'div' ].appendChild( window[ 'p' ]);
        FindWordsForm.appendChild( window[ 'div' ]);

        window[ 'pCounter' ] = document.createElement("p");
        window[ 'pCounter' ].id = "Counter";
        window[ 'pCounter' ].innerHTML=wordFinded+" / "+temp;
        window[ 'div' ].appendChild( window[ 'pCounter' ]);

        var stoper = setInterval(function() {
            var now = new Date().getTime();
            var distance = now - time;
          
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            switch (minutes) {
                case -1:
                    minutes="00"
                    break;
                case 0:
                    minutes="00"
                    break;
                case 1:
                    minutes="01"
                    break;
                case 2:
                    minutes="02"
                    break;
                case 3:
                    minutes="03"
                    break;
                case 4:
                    minutes="04"
                    break;
                case 5:
                    minutes="05"
                    break;
                case 6:
                    minutes="06"
                    break;
                case 7:
                    minutes="07"
                    break;
                case 8:
                    minutes="08"
                    break;
                case 9:
                    minutes="09"
                    break;
            }
            switch (seconds) {
                case -1:
                    minutes="00"
                    break;
                case 0:
                    seconds="00"
                    break;
                case 1:
                    seconds="01"
                    break;
                case 2:
                    seconds="02"
                    break;
                case 3:
                    seconds="03"
                    break;
                case 4:
                    seconds="04"
                    break;
                case 5:
                    seconds="05"
                    break;
                case 6:
                    seconds="06"
                    break;
                case 7:
                    seconds="07"
                    break;
                case 8:
                    seconds="08"
                    break;
                case 9:
                    seconds="09"
                    break;
            }

            window[ 'timer' ].innerHTML =  minutes + ":" + seconds;
          
            
        }, 1000);

        submitAnswer = document.createElement("button");
        submitAnswer.id = "FindWordsResults";
        submitAnswer.innerHTML= "Zatwierdź";
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function FindWordsResults() {
            time=new Date().getTime()-time.getTime();
            clearInterval(stoper);
            //console.log(time)
            gameData.FindWords={time: `${time}`}
            //console.log(wordFinded+" / "+temp)
            gameData.FindWords.Score=`${wordFinded} / ${temp}`
            showNextGame();
        }
        
        Game1.appendChild(FindWordsForm);
        Game1.appendChild(submitAnswer);

        function textLink(word, link){
            wordFinded++;
            window[ 'pCounter' ].innerHTML=wordFinded+" / "+temp;
            link.setAttribute('class', 'linkClicked');
            link.onclick = function(event) {
                event.preventDefault();
             }
            
            return false;
        }
        time = new Date();
    }
}

function Sudoku() {
    SudokuArray.map(x => x.fill(' '));
    for (let i = 0; i < 9; i) {
        temp=Random(1,9);
        if (SudokuArray[0].includes(temp)==false) {
            SudokuArray[0][i]=temp;
            i++;
        }
    }
    
    generateGoodSudoku()
    
        temp=0
        tempArray=[]
        temp=Random(0,letterArraySudoku.length-9)
        tempArray=letterArraySudoku.slice(temp,temp+9)
        SudokuArray.forEach((element,i) => {
            element.forEach((number,j) => {
                SudokuArray[i][j]=tempArray[number-1]
            });
        });

        
    
    SudokuArraySolution=JSON.parse(JSON.stringify(SudokuArray));
    for(let i=0;i<Random(25,50);i++){
        SudokuArray[Random(0,8)][Random(0,8)]=" "
    }
    /*
    console.log(" -----------------------------")
      for(let i=0; i<SudokuArraySolution.length; i++){
          if(i !== 0 && i%3 === 0){
              console.log(" -----------------------------")
          }
          let string = ""
          for(let j=0; j<SudokuArraySolution[i].length; j++){
              if(j%3 === 0){
                  string += "|"
              }
              string += " "+SudokuArraySolution[i][j]+" "
          }
          console.log(string + "|")
      }
      console.log(" -----------------------------")
    */

    info = document.createElement("div");
    info.id = "info";
    info.innerHTML="Ułóż jak najszybciej sudoku z literami, pamiętając, że dana litera może pojawić się tylko raz w każdym małym kwadracie (pola 3x3), w każdej kolumnie i każdym rzędzie."
    let button = document.createElement("button");
    button.id = "StartSudoku";
    button.innerHTML= "Dalej";
    button.classList.add("Buttons");
    Game1.appendChild(info);
    Game1.appendChild(button);
    button.onclick = function StartSudoku() {
        while (Game1.firstChild) {
            Game1.removeChild(Game1.firstChild);
        }

        window[ 'div' ] = document.createElement("div");
        window[ 'div' ].classList.add("sudokuDiv");
        window[ 'p' ] = document.createElement("p");
        window[ 'div' ].appendChild(window[ 'p' ]);
        window[ 'p' ].innerHTML= JSON.stringify(tempArray).replaceAll(/[\[\]",]/g, "");
        
        window[ 'timer' ] = document.createElement("p");
        window[ 'timer' ].innerHTML =  "00" + ":" + "00";
        window[ 'div' ].appendChild(window[ 'timer' ]);

        window[ 'tabele' ] = document.createElement("table");
        window[ 'div' ].appendChild(window[ 'tabele' ]);

        window[ 'tabeleBody' ] = document.createElement("tbody");
        window[ 'tabele' ].appendChild(window[ 'tabeleBody' ]);

        var stoper = setInterval(function() {
            var now = new Date().getTime();
            var distance = now - time;
          
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            switch (minutes) {
                case -1:
                    minutes="00";
                    break;
                case 0:
                    minutes="00";
                    break;
                case 1:
                    minutes="01";
                    break;
                case 2:
                    minutes="02";
                    break;
                case 3:
                    minutes="03";
                    break;
                case 4:
                    minutes="04";
                    break;
                case 5:
                    minutes="05";
                    break;
                case 6:
                    minutes="06";
                    break;
                case 7:
                    minutes="07";
                    break;
                case 8:
                    minutes="08";
                    break;
                case 9:
                    minutes="09";
                    break;
            }
            switch (seconds) {
                case -1:
                    minutes="00";
                    break;
                case 0:
                    seconds="00";
                    break;
                case 1:
                    seconds="01";
                    break;
                case 2:
                    seconds="02";
                    break;
                case 3:
                    seconds="03";
                    break;
                case 4:
                    seconds="04";
                    break;
                case 5:
                    seconds="05";
                    break;
                case 6:
                    seconds="06";
                    break;
                case 7:
                    seconds="07";
                    break;
                case 8:
                    seconds="08";
                    break;
                case 9:
                    seconds="09";
                    break;
            }

            window[ 'timer' ].innerHTML =  minutes + ":" + seconds;
          
            
        }, 1000);

        for (let i = 0; i < 9; i++) {
            window[ 'tr' + i ] = document.createElement("tr");
            window[ 'tabeleBody' ].appendChild(window[ 'tr' + i ]);
            for (let j = 0; j < 9; j++) {
                window[ 'td' + j ] = document.createElement("td");
                window[ 'tr' + i ].appendChild(window[ 'td' + j ]);
                window[ "input" + j + i] = document.createElement("input");
                window[ "input" + j + i].id = `input${i}${j}`;
                window[ "input" + j + i].classList.add("sudoku");
                window[ "input" + j + i].maxlength="1";
                window[ "input" + j + i].value = SudokuArray[i][j];
                window[ "input" + j + i].disabled = SudokuArray[i][j] !== " ";
                window[ "input" + j + i].onchange = (x)=>chenged(x,i,j, stoper);
                window[ 'td' + j ].appendChild(window[ "input" + j + i]);
            }
        }

        skip = document.createElement("button");
        skip.id = "SudokuResults";
        skip.innerHTML= "Pomiń";
        skip.classList.add("Buttons");
        skip.onclick = function SudokuResults() {
            clearInterval(stoper);
            gameData.Sudoku={time: `Pominięto`}
            showNextGame();
        }
        


        submitAnswer = document.createElement("button");
        submitAnswer.id = "SudokuResults";
        submitAnswer.innerHTML= "Zatwierdź";
        submitAnswer.style.display = 'none'
        submitAnswer.classList.add("Buttons");
        submitAnswer.onclick = function SudokuResults() {
            
            showNextGame();
        }
        Game1.appendChild(window[ 'div' ]);
        Game1.appendChild(submitAnswer);
        Game1.appendChild(skip);
        time = new Date();
    }
}

function End() {
    while (Game1.firstChild) {
        Game1.removeChild(Game1.firstChild);
    }
    //console.log(gameData)
    w.postMessage(["save", fileHandle, gameData]);
    setTimeout(function() {
        w.postMessage(["read", fileHandle]);
    }, 50);
    gameData={}

}