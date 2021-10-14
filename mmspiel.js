const anzahlReihen = 8
const anzahlLoecherProReihe = 4

var svgAnzahl = 0
function loecherErstellen(){
    var body = document.getElementsByTagName("body")[0]
    var svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svgAnzahl++
    svg1.id = `svg${svgAnzahl}`
    svg1.setAttribute("viewBox", "0 0 1000 120")
    body.appendChild(svg1) 
    var abstand = 0
    for(var loch = 0; loch < anzahlLoecherProReihe; loch++){
        var grosserKreis= document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        grosserKreis.classList.add("mushroom")
        grosserKreis.classList.add("antiquewhite")
        grosserKreis.setAttribute("cx", (255 + 115*abstand))
        grosserKreis.setAttribute("cy", 55)
        grosserKreis.setAttribute("r", 35)
        abstand++ 
        svg1.appendChild(grosserKreis)
    }
    abstand = 0
    var kleinerKreisId = 1
    for(var loch = 0; loch < anzahlLoecherProReihe; loch++){
        var kleinerKreis= document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        kleinerKreis.classList.add("mushroom")
        kleinerKreis.classList.add("antiquewhite")
        kleinerKreis.setAttribute("cx", (255 + 115*abstand))
        kleinerKreis.setAttribute("cy", 55)
        kleinerKreis.setAttribute("r", 25)
        kleinerKreis.id = (`kleinerKreis${kleinerKreisId}`)
        abstand++
        kleinerKreisId++
        svg1.appendChild(kleinerKreis)
    }
}

function bewertungsLoecher(){
    var svg1 = document.getElementById(`svg${svgAnzahl}`)
    var abstand = 0
    for(var bewertloch = 0; bewertloch < (anzahlLoecherProReihe/2); bewertloch++){
        var grosserBewertKreisOben = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        grosserBewertKreisOben.classList.add("nail")
        grosserBewertKreisOben.classList.add("antiquewhite")
        grosserBewertKreisOben.setAttribute("cx", ((255 + 115*anzahlLoecherProReihe) + 55*abstand))
        grosserBewertKreisOben.setAttribute("cy", 30)
        grosserBewertKreisOben.setAttribute("r", 15)
        var kleinerBewertKreisOben =  document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        kleinerBewertKreisOben.classList.add("nail")
        kleinerBewertKreisOben.classList.add("antiquewhite")
        kleinerBewertKreisOben.setAttribute("cx", ((255 + 115*anzahlLoecherProReihe) + 55*abstand))
        kleinerBewertKreisOben.setAttribute("cy", 30)
        kleinerBewertKreisOben.setAttribute("r", 8)
        abstand++
        svg1.appendChild(grosserBewertKreisOben)
        svg1.appendChild(kleinerBewertKreisOben)
    }
    abstand = 0
    for(var bewertloch = 0; bewertloch< (anzahlLoecherProReihe/2-0.5); bewertloch++){
        var grosserBewertKreisUnten = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        grosserBewertKreisUnten.classList.add("nail")
        grosserBewertKreisUnten.classList.add("antiquewhite")
        grosserBewertKreisUnten.setAttribute("cx", ((255 + 115*anzahlLoecherProReihe) + 55*abstand))
        grosserBewertKreisUnten.setAttribute("cy", 85)
        grosserBewertKreisUnten.setAttribute("r", 15)
        var kleinerBewertKreisUnten =  document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        kleinerBewertKreisUnten.classList.add("nail")
        kleinerBewertKreisUnten.classList.add("antiquewhite")
        kleinerBewertKreisUnten.setAttribute("cx", ((255 + 115*anzahlLoecherProReihe) + 55*abstand))
        kleinerBewertKreisUnten.setAttribute("cy", 85)
        kleinerBewertKreisUnten.setAttribute("r", 8)
        abstand++
        svg1.appendChild(grosserBewertKreisUnten)
        svg1.appendChild(kleinerBewertKreisUnten)
    }
}



function reihenErstellen(){
    for(var reihe = 0; reihe< anzahlReihen; reihe++){
        loecherErstellen()
        bewertungsLoecher()
    }
}
 

var uebersichtPilze = document.createElementNS("http://www.w3.org/2000/svg", "svg")
function farbigePilze(){
    var body = document.getElementsByTagName("body")[0]
    uebersichtPilze.id = "uebersichtPilze"
    uebersichtPilze.setAttribute("viewBox", "0 0 1000 120")
    pilzGruen()
    pilzBlau()
    pilzRot()
    pilzGelb()
    pilzOrange()
    pilzPink()
    body.appendChild(uebersichtPilze)
}

function pilzGruen(){
    var pilzGr = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    pilzGr.classList.add("mushroom")
    pilzGr.classList.add("green")
    pilzGr.setAttribute("cx", 140)
    pilzGr.setAttribute("cy", 55)
    pilzGr.setAttribute("r", 50)
    uebersichtPilze.appendChild(pilzGr)
}

function pilzBlau(){
    var pilzB = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    pilzB.classList.add("mushroom")
    pilzB.classList.add("blue")
    pilzB.setAttribute("cx", 715)
    pilzB.setAttribute("cy", 55)
    pilzB.setAttribute("r", 50)
    uebersichtPilze.appendChild(pilzB)
}

function pilzRot(){
    var pilzR = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    pilzR.classList.add("mushroom")
    pilzR.classList.add("red")
    pilzR.setAttribute("cx", 485)
    pilzR.setAttribute("cy", 55)
    pilzR.setAttribute("r", 50)
    uebersichtPilze.appendChild(pilzR)
}

function pilzGelb(){
    var pilzR = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    pilzR.classList.add("mushroom")
    pilzR.classList.add("yellow")
    pilzR.setAttribute("cx", 255)
    pilzR.setAttribute("cy", 55)
    pilzR.setAttribute("r", 50)
    uebersichtPilze.appendChild(pilzR)
}

function pilzOrange(){
    var pilzO = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    pilzO.classList.add("mushroom")
    pilzO.classList.add("orange")
    pilzO.setAttribute("cx", 370)
    pilzO.setAttribute("cy", 55)
    pilzO.setAttribute("r", 50)
    uebersichtPilze.appendChild(pilzO)
}

function pilzPink(){
    var pilzP = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    pilzP.classList.add("mushroom")
    pilzP.classList.add("purple")
    pilzP.setAttribute("cx", 600)
    pilzP.setAttribute("cy", 55)
    pilzP.setAttribute("r", 50)
    uebersichtPilze.appendChild(pilzP)
}


function ReihenAnklickbarMachen(){
    var kleinerKreisNummer = 1
    var svgNummer = 1
    for(reihe=0; reihe < anzahlReihen; reihe++){
        var svg1 = document.getElementById(`svg${svgNummer}`)
        kleinerKreisNummer = 1
        for(var i=0; i < anzahlLoecherProReihe; i++){
            var circles = svg1.getElementById(`kleinerKreis${kleinerKreisNummer}`)
            
            circles.addEventListener("click" , function(){
            klasseAendernWennMausklick(this)
            }) 
            kleinerKreisNummer++
        }
        svgNummer++
    }
}

    

function klasseAendernWennMausklick(loch){
    loch.setAttribute("r", 50)
    if(loch.classList.contains ("antiquewhite")){
        loch.classList.remove("antiquewhite")
        loch.classList.add("green")
    }
    else{
        if(loch.classList.contains("green")){
            loch.classList.remove("green")
            loch.classList.add("yellow")
        }
        else{
            if(loch.classList.contains("yellow")){
            loch.classList.remove("yellow")
            loch.classList.add("orange")
            }
            else{
                if(loch.classList.contains("orange")){
                loch.classList.remove("orange")
                loch.classList.add("red")
                }
                else{
                    if(loch.classList.contains("red")){
                    loch.classList.remove("red")
                    loch.classList.add("purple")
                    }
                    else{
                        if(loch.classList.contains("purple")){
                        loch.classList.remove("purple")
                        loch.classList.add("blue")
                        }
                        else{
                            if(loch.classList.contains("blue")){
                            loch.classList.remove("blue")
                            loch.classList.add("green")
                            }
                        }
                    }
                }
            }
        }
    } 
}

farbigePilze()
reihenErstellen()
ReihenAnklickbarMachen()