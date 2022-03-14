function start(){
    getWerte();
    display();
}


/*
* Funktion getWerte
* Ließt alle Werte aus den Inputfeldern aus und speichert sie in Variablen 
*/
function getWerte(){
    let count = 0;
    let wert = 0;
    for(let i = 0; i < fächer.length; i++){
        for(let j = 1; j <= 4; j++){
            if(document.getElementById(fächer[i] + "q" + j).value == ""){
                //Nichts
            }
            else if(document.getElementById(fächer[i] + "q" + j).value > 0){
                wert = wert + document.getElementById(fächer[i] + "q" + j).value * 1;
                count++;
            }
        }
        wert = wert / count;
        addResult(i, wert);
    }
}

function addResult(i,wert){
    let result = fächer[i] + " = " + wert;
    let tmp = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = tmp + "<br>" + result;
}

function display(){
    document.getElementById("inputs").style.display = "none";
    document.getElementById("result").style.display = "block";
}




function genGK(){

}













function feldergenerieren(t, v){
    if(t == 1){
        if(v == 0){
            mfeld = mfeld + "</p> <br>"
            document.getElementById("inmnoten").innerHTML = mfeld
        }
        else if(v > 0){
            mfeld = mfeld + "<input type=number id=calcm"+v+" class=wert min=1 max=6 placeholder=Note>"
            if(document.getElementById("setadvm").value == 2){
                mfeld = mfeld + "<input type=number id=advm"+v+" class=prozent min=1 max=100 placeholder=Gewichtung (In Prozent)>"
            }
            mfeld = mfeld + "<br>"
            feldergenerieren(t, v-1)
        }
    }
    else if(t == 2){
        if(v == 0){
            sfeld = sfeld + "</p> <br>"
            document.getElementById("insnoten").innerHTML = sfeld
        }
        else if(v > 0){
            sfeld = sfeld + "<input type=number id=calcs"+v+" class=wert min=1 max=6 placeholder=Note>"
            if(document.getElementById("setadvs").value == 2){
                sfeld = sfeld + "<input type=number id=advs"+v+" class=prozent min=1 max=100 placeholder=Gewichtung (In Prozent)>"
            }
            sfeld = sfeld + "<br>"
            feldergenerieren(t, v-1)
       }
    }
}

function calculate(m, s){
    if(m > 0){
        if(document.getElementById("calcm"+m).value > 0){
            if(document.getElementById("setadvm").value == 2){
                temp = document.getElementById("advm"+m).value / 100
                mcon = mcon + 1 * temp
                temp = document.getElementById("calcm"+m).value * temp
                mcalc = mcalc + 1 * temp
            }
            else if(document.getElementById("setadvm").value == 1){
                mcalc = mcalc + 1 * document.getElementById("calcm"+m).value
                //console.log("Mcalc pre: " + mcalc)
            }
            if(m == 1){
                mcalc = mcalc / mnoten
                //console.log("Mcalc after: " + mcalc)
            }
            calculate(m-1, s)
        }
        else{
            alert("Nicht alle Felder sind ausgefüllt")
        }
    }
    else if(s > 0){
        if(document.getElementById("calcs"+s).value > 0){
            if(document.getElementById("setadvs").value == 2){
                temp = document.getElementById("calcs"+s).value * (document.getElementById("advs"+s).value / 100)
                mcalc = mcalc + 1 * temp
            }
            else if(document.getElementById("setadvm").value == 1){
                scalc = scalc + 1 * document.getElementById("calcs"+s).value
                //console.log("Scalc pre: " + scalc)
            }
            if(s == 1){
                scalc = scalc/snoten
                //console.log("Scalc after: " + scalc)
            }
            calculate(m,s-1)
        }
        else{
            alert("Nicht alle Felder sind ausgefüllt")
        }
    }
    else if(m == 0 && s == 0){
        if(document.getElementById("setadvm").value == 2 && mcon < 100){
            alert("Du hast zu wenig mündliche Prozent")
        }
        else if(document.getElementById("setadvm").value == 2 && mcon > 100){
            alert("Du hast zu viel mündliche Prozent")
        }
        if(document.getElementById("setadvs").value == 2 && scon < 100){
            alert("Du hast zu wenig schriftliche Prozent")
        }
        else if(document.getElementById("setadvs").value == 2 && scon > 100){
            alert("Du hast zu viel schriftliche Prozent")
        }
        else{
            console.log("M=" + mcalc + "S=" + scalc)
            if(document.getElementById("setvorjahr").value == 2){
                if(document.getElementById("setfach").value = 1){
                    endcalc = 1 * mcalc + 1 * scalc
                    endcalc = endcalc / 2
                    endcalc = endcalc * 3 + 1 * document.getElementById("calcvorjahr").value
                    endcalc = endcalc / 4
                }
                else if(document.getElementById("setfach").value = 2){
                    endcalc = 1 * mcalc * 2 + 1 * scalc
                    endcalc = endcalc / 3
                    endcalc = endcalc * 3 + 1 * document.getElementById("calcvorjahr").value
                    endcalc = endcalc / 4
                }
            }
            else{
                if(document.getElementById("setfach").value = 1){
                    endcalc = 1 * mcalc + 1 * scalc
                    endcalc = endcalc / 2
                }
                else if(document.getElementById("setfach").value = 2){
                    endcalc = 1 * mcalc * 2 + 1 * scalc
                    endcalc = endcalc / 3
                }
            }
            console.log("End=" + endcalc)
            document.getElementById("endmnote").innerHTML= "<p> Du hast einen mündlichen Durchschnitt von " + mcalc + "</p>"
            document.getElementById("endsnote").innerHTML= "<p> Du hast einen schriftlichen Durchschnitt von " + scalc + "</p>"
            document.getElementById("endgnote").innerHTML= "<p> Deine Endnote ist " + endcalc + "</p>"
            document.getElementById("inputs").style.display = "none"
            document.getElementById("ergebnis").style.display = "block"
        }
    }
}

function back(a){
    if(a == 1){
        document.getElementById("settings").style.display = "block"
        document.getElementById("inputs").style.display = "none"
        mfeld = ""
        sfeld = ""
    }
    else if(a == 2){
        document.getElementById("inputs").style.display = "block"
        document.getElementById("ergebnis").style.display = "none"
    }
}