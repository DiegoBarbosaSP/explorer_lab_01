import "./css/index.css"
import IMask from "imask"
// Criar uma var para armazenar e acessar o documento//
const ccBgColor01 = document.querySelector(".cc-bg svg> g g:nth-child(1) path");
// Usar esta funcionalidade para to set os atributos//
// in setAttubute, first one acess the atribute, and the second, define the object.//
// ccBgColor01.setAttribute("fill", "blue");

const ccBgColor02 = document.querySelector(".cc-bg svg> g g:nth-child(2) path");


const searchVisaImg = document.querySelector(".visaImg");

// Security code 
const securityCode = document.querySelector("#security-code");
const securityCodePatern = {
    mask: "0000"
};
const securityCodeMasked = IMask(securityCode, securityCodePatern)

// ExpireDate
const expirationDate = document.querySelector("#expiration-date");
const expirationDatePattern = {
    mask: "MM{/}YY",
    blocks: {
        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),
            to: String(new Date().getFullYear() + 10).slice(2),
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
        }
    }
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

//cardNumber
const cardNumber = document.querySelector("#card-number");
const cardPattern = {
    mask: [
        {
            mask: "0000 0000 0000 0000",
            // Utilizar expressão regular
            regex: /^4\d{0,15}/,
            cardtype: "visa",
        },
        {
            mask: "0000 0000 0000 0000",
            // Utilizar expressão regular 
            regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
            cardtype: "mastercard",
        },
        {
            mask: "0000 0000 0000 0000",
            cardtype: "default",
        },
    ],
    dispatch: function (appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, "")
        const findMask = dynamicMasked.compiledMasks.find(function (item) {
            return number.match(item.regex)
        })
        console.log(findMask);

        return findMask
    }
    
}
const cardNumberMasked = IMask(cardNumber, cardPattern)

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
    searchVisaImg.setAttribute("src", `cc-${type}.svg`)
}

setCardType("default")
