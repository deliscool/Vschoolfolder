const form = document["baddieTracker"]

const button = document.getElementById("submit")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("fired")


    const gomB = document.getElementById("goombas").value
    const bob = document.getElementById("bobOmbs").value
    const cheep = document.getElementById("cheepCheeps").value

    const gomBPest = parseInt(gomB)
    const bobPest = parseInt(bob)
    const cheepPest = parseInt(cheep)                                     
    
    const totalPestCaught = gomBPest + bobPest + cheepPest; 
    const totalCost = (gomBPest * 5) + (bobPest * 7) + (cheepPest * 11);
    const x = document.getElementById("totalPest")
   
    const m = document.createTextNode("Total Pest:" + " " + totalPestCaught + "......." + "Total service cost:" + " " + totalCost);
    x.appendChild(m)
}) 