import "./css/index.css"
// Criar uma var para armazenar e acessar o documento//
const ccBgColor01 = document.querySelector(".cc-bg svg> g g:nth-child(1) path");
// Usar esta funcionalidade para to set os atributos//
// in setAttubute, first one acess the atribute, and the second, define the object.//
// ccBgColor01.setAttribute("fill", "blue");

const ccBgColor02 = document.querySelector(".cc-bg svg> g g:nth-child(2) path");

const searchVisaImg = document.querySelector(".visaImg")
// ccBgColor02.setAttribute("fill", "green")

// Criar uma function para armazenar e executar todo o cod.//


function setCardType(type) {
    const setColorCard = {
        visa: ["#436D99", "#22D57F2"],
        mastercard: ["#DF6F29", "#C69347"],
        default: ["black", "gray"],
    }

    ccBgColor01.setAttribute("fill", setColorCard[type][0]);
    ccBgColor02.setAttribute("fill", setColorCard[type][1]);
    searchVisaImg.setAttribute("src",`cc-${type}.svg`)
}

setCardType("default")
