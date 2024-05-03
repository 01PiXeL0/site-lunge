function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById("header-home").addEventListener("click", function() {
    scrollToSection("home");
});

document.getElementById("header-pages").addEventListener("click", function() {
    scrollToSection("pages");
});

document.getElementById("header-offer").addEventListener("click", function() {
    scrollToSection("offer");
});

document.getElementById("header-pricing").addEventListener("click", function() {
    scrollToSection("pricing");
});

document.getElementById("header-shop").addEventListener("click", function() {
    scrollToSection("shop");
});

document.getElementById("orderbutton", "btn").addEventListener("click", function() {
    // Переход на другую страницу
    window.location.href = "order/order.html"; 
});

document.getElementById("info-page").addEventListener("click", function() {
    // Переход на страницу заказа
    window.location.href = "infopage/info.html"; 
});


document.getElementById("backtomain").addEventListener("click", function() {
    // Переход на другую страницу
    window.location.href = "mainpage.html"; 
});

// Получаем ссылку на элементы
var textsElement = document.getElementById("texts");
var orderLeaveButton = document.getElementById("orderleave");

// Добавляем обработчик события на клик по кнопке
orderLeaveButton.addEventListener("click", function() {
    // Удаляем элемент с ID "texts"
    textsElement.remove();

    // Создаем новый элемент h1
    var thanksElement = document.createElement("h1");
    thanksElement.textContent = "Thanks for order";

    // Добавляем новый элемент h1 в конец body
    document.body.appendChild(thanksElement);
});

// Функционал для карточек