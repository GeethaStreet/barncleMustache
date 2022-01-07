
let mainTemplate = require("../hbd/main.handlebars"); 
function createHTML() {
    let animalFacts = document.getElementById('animalFacts');

    let obj = {
        backgroundImage: 'https://loremflickr.com/640/360',
        barncleFacts: [
            {
            "fact": "1: Barnacles are crustaceans.",
            "details": "Although they were once thought to be related to snails, it turns out that barnacles are actually related to crabs. If you look at the animal inside the hard plates, it is possible to recognize their crab-like body plan.",
            "displayed": true,
            },
            {
                "fact": "2: They eat with their legs.",
                "details": "Because barnacles are sessile animals, they have no need for the walking legs that many of their crustacean relatives possess. Their legs have adapted over time to a different use. They utilize their modified legs, called cirri, to sweep tiny food particles from the water column and pass them to their mouth parts inside their protective plates.",
                "displayed": false,
            },
            {
                "fact": "3: They can be parasites.",
                "details": "They have a wide range of body plans, but one of the most bizarre is the rhizocephalan barnacle, which is an internal parasite in other crustaceans. ",
                "displayed": false,
            },
            {
                "fact": "4: Those round marks on manatee backs are barnacle scars.",
                "details": "There is a specific type of barnacle that attaches itself to manatees. When manatees enter the relative warmth of the springs during the winter months, the barnacles can\’t survive in the freshwater and die. Eventually they fall off, leaving behind a round-ish scar on the manatee’s back.",
                "displayed": false,
            },
            {
                "fact": "5: They have the longest penis relative to body size of any animal.",
                "details": "Opting for internal fertilization, the exceptionally long penis of some barnacle species increases the odds that there will be another barnacle within reach to receive the sperm. The larvae are then released into the water column to settle as they will.",
                "displayed": false,
            }
        ]
    }

    animalFacts.innerHTML = mainTemplate(obj);
    console.log('hello')
    const btns = document.getElementsByClassName("answerButton");
    
    Array.from(btns).forEach(btn => {
        btn.addEventListener('click', e => {
             let trackerId = e.target.getAttribute("data-id")
             console.log(trackerId);
        });
     
     });
}

document.addEventListener('DOMContentLoaded', () => { createHTML()}); 