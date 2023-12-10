// start translate header 
var languageData;
var isEnglish = true; // تحديد اللغة الافتراضية

function loadLanguageData(language) {
    var langFile = language === 'en' ? 'english.json' : 'arabic.json';
    return fetch(langFile)
        .then(response => response.json())
        .then(data => {
            languageData = data;
            updateUI();
        });
}

function updateUI() {

    var serviceUl=document.querySelectorAll('.services-container .service-card .service-overlay ul');

    

    if (!isEnglish) {

        for(i=0 ; i<serviceUl.length ; i++){serviceUl[i].style.direction='rtl'};
        


           

    } else {

        for(i=0 ; i<serviceUl.length ; i++){serviceUl[i].style.direction='ltr'};

    }


}

function changeLanguage() {
    if (isEnglish) {
        loadLanguageData('ar');
        isEnglish = false; 
        document.querySelector('.lang #langText').innerHTML="AR";// تحديث قيمة isEnglish
        localStorage.setItem('language', 'ar');

    } else {
        loadLanguageData('en');
        isEnglish = true; // تحديث قيمة isEnglish
        document.querySelector('.lang #langText').innerHTML="EN";
        localStorage.setItem('language', 'en');

    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Check for the selected language in local storage
    var selectedLanguage = localStorage.getItem('language');

    // If a language is stored, load it; otherwise, use the default language (English)
    if (selectedLanguage) {
        loadLanguageData(selectedLanguage);
        // Update isEnglish accordingly
        isEnglish = selectedLanguage === 'en';
        document.querySelector('.lang #langText').innerHTML = isEnglish ? "EN" : "AR";
    } else {
        loadLanguageData('en'); // Default language is English
    }

    // Rest of your code...
});
// end translate header 



// start open list when click 



document.addEventListener('DOMContentLoaded', function () {
    var barsIcon = document.querySelector('.fa-bars');
    var timesIcon = document.querySelector('.fa-times');
    var listContainer = document.querySelector('.list-container');
    barsIcon.addEventListener('click', function () {
        listContainer.style.opacity = '1';
        listContainer.style.transform = 'translateX(0)';

    });

    timesIcon.addEventListener('click', function () {
        listContainer.style.opacity = '0';
        listContainer.style.transform = 'translateX(173px)';


    });
});



// end open list when click 



// handle navbar links to add underline when click on it 
function handleClick(event) {
    // Remove 'active' class from all elements
    let elements = document.querySelectorAll('.list-header a');
    elements.forEach(function (element) {
        element.classList.remove('active');
    });

    // Add 'active' class to the clicked element
    event.target.classList.add('active');

    // Store the clicked item in local storage
    localStorage.setItem('activeItem', event.target.getAttribute('href'));
}

// Check for an active item in local storage
document.addEventListener('DOMContentLoaded', function() {
    let activeItem = localStorage.getItem('activeItem');
    if (activeItem) {
        let elements = document.querySelectorAll('.list-header a');
        elements.forEach(function (element) {
            if (element.getAttribute('href') === activeItem) {
                element.classList.add('active');
            }
        });
    }
});




