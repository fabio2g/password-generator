const generatePasswordButton = document.querySelector(".generate--password");
const generatedPasswordElement = document.querySelector(".generated--password");
const optionsPasswordButton = document.querySelector(".btn");
const optionsPasswordElement = document.querySelector(".options--password");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const copyPasswordButton = document.querySelector(".copy--password");

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

/**
 * Gera senha customizada com letras maiúsculas, minúsculas,
 * números e caracteres
 * @param {string} getLetterLowerCase
 * @param {string} getLetterUpperCase
 * @param {string} getNumber
 * @param {string} getSymbol
 */
const getPassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
) => {
    let password = "";
    let passwordLength = document.getElementById("characters").value;

    if (passwordLength > 20) {
        passwordLength = 20;
    } else if (passwordLength < 5) {
        passwordLength = 5;
    }

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,
    ];

    for (let i = 0; i < passwordLength; i++) {
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
