document.getElementById("addButton").onclick = function() {  
    const inputField = document.getElementById("inputSentence");  
    const list = document.getElementById("sentenceList");  
    const sentence = processSentence(inputField.value);  
    
    if (sentence) {  
        const listItem = document.createElement("li");  
        listItem.textContent = sentence;  
        list.appendChild(listItem);  
        inputField.value = ""; // очищаем поле ввода  
    }  
};  

function processSentence(str) {  
    str = str.trim(); // удаляет пробелы с начала и конца  
    const numbers = { "1": "один", "2": "два", "3": "три", "4": "четыре", "5": "пять", "6": "шесть", "7": "семь", "8": "восемь", "9": "девять", "0": "ноль" };  
    return str.replace(/\d/g, match => numbers[match]); // заменяет цифры на слова  
}  

// Задание 2  
document.getElementById("extractSentences").onclick = function() {  
    const text = document.getElementById("textArea").value;  
    const sentences = text.match(/([A-ZА-ЯЁ][^.!?]*[.!?])/g) || [];  
    document.getElementById("results").innerText = "Правильные предложения: \n" + sentences.join("\n");  
};  

document.getElementById("replaceNumbers").onclick = function() {  
    const text = document.getElementById("textArea").value;  
    const replacedText = text.replace(/\d+/g, "NUMBER");  
    document.getElementById("results").innerText = "Текст после замены чисел: \n" + replacedText;  
};  

// Задание 3  
document.getElementById("loginButton").onclick = function() {  
    const username = document.getElementById("username").value;  
    const password = document.getElementById("password").value;  

    if (username && password) {  
        const userData = JSON.parse(localStorage.getItem(username));  
        if (userData) {  
            if (userData.password !== password) {  
                alert("Пароль неверен");  
                return;  
            }  
            loadUserData(userData);  
        } else {  
            createUser(username, password);  
        }  
    } else {  
        alert("Заполните логин и пароль");  
    }  
};  

function loadUserData(userData) {  
    document.getElementById("userDataForm").classList.remove("hidden");  
    document.getElementById("userPosition").value = userData.position;  
    document.getElementById("userDescription").value = userData.description;  
}  

function createUser(username, password) {  
    document.getElementById("userDataForm").classList.remove("hidden");  
    document.getElementById("userPosition").value = "";  
    document.getElementById("userDescription").value = "";  

    document.getElementById("saveButton").onclick = function() {  
        const position = document.getElementById("userPosition").value;  
        const description = document.getElementById("userDescription").value;  
        const userData = { username, password, position, description };  
        localStorage.setItem(username, JSON.stringify(userData));  
        alert("Пользователь создан и данные сохранены");  
    };  
}  

document.getElementById("saveButton").onclick = function() {  
    const username = document.getElementById("username").value;  
    const position = document.getElementById("userPosition").value;  
    const description = document.getElementById("userDescription").value;  
    const userData = { username, password: localStorage.getItem(username).password, position, description };  
    localStorage.setItem(username, JSON.stringify(userData));  
    alert("Данные обновлены и сохранены");  
};  