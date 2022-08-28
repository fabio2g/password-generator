const generatePasswordButton = document.querySelector(".generate--password");
const generatedPasswordElement = document.querySelector(".generated--password");
const optionsPasswordButton = document.querySelector(".btn");
const optionsPasswordElement = document.querySelector(".options--password");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const copyPasswordButton = document.querySelector(".copy--password");
const checkLettres = document.getElementById("checkLettres");
const checkNumbers = document.getElementById("checkNumbers");
const checkSymbols = document.getElementById("checkSymbols");

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "!@#$%&*-~^?";
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
};

const charactersLengthValidation = () => {
    let charactersLength = document.getElementById("characters").value;

    if (charactersLength < 5) {
        charactersLength = 5;
    }
    if (charactersLength > 20) {
        charactersLength = 20;
    }

    return charactersLength;
};

const validationCheckbox = () => {
    let checkSelected = [];

    if (checkLettres.checked) {
        checkSelected.push(getLetterLowerCase);
        checkSelected.push(getLetterUpperCase);
    }
    if (checkNumbers.checked) {
        checkSelected.push(getNumber);
    }
    if (checkSymbols.checked) {
        checkSelected.push(getSymbol);
    }
    if (
        !checkLettres.checked &&
        !checkNumbers.checked &&
        !checkSymbols.checked
    ) {
        checkSelected.push(getLetterLowerCase);
    }

    return checkSelected;
};

/**
 * Gera senha customizada com letras maiúsculas, minúsculas,
 * números e caracteres
 */
const getPassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
) => {
    // Refatorar esa parte
    let password = "";
    characters = charactersLengthValidation();

    const generators = validationCheckbox();

    for (let i = 0; i < characters; i++) {
        password += generators[Math.floor(Math.random() * generators.length)]();
    }
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerHTML = password;
    optionsPasswordElement.style.display = "";
    passwordInput.value = password;
    confirmPasswordInput.value = password;
};

/**
 * Copia a senha gerada por getPassword para área de transferência.
 */
copyPasswordButton.addEventListener("click", () => {
    const copyContent = passwordInput;

    copyContent.select();
    copyContent.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyContent.value);
});

generatePasswordButton.addEventListener("click", () => {
    optionsPasswordElement.style.display = "block";
    generatedPasswordElement.style.display = "";
});

optionsPasswordButton.addEventListener("click", () => {
    getPassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});
