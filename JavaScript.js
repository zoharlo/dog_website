var slideIndex = 1; // שמתחיל מ1  הגדרת משתנה גלובלי  
showSlides(slideIndex); //  showSlides ושליחת פרמטר לפונקציה - קריאה לפונקציית של המעבר בין תמונה לתמונה

// החיצים של קדימה/אחורה
function plusSlides(n) { // קריאה לפונקציה שאחראית על קבלת פרמטר מהאינדקס

    //קריאה לפונקציה   showSlides שאחראית על המעבר באמצעות החיצים (קדימה/אחורה) – אם נלחץ על החץ שמעביר אחורה המשתנה ירד ב1 כי הn מוגדר כ 1- ובחץ קדימה יעלה ב1. 
    showSlides(slideIndex += n);
}

// הגדרות התמונות הממוזערות 
function currentSlide(n) {  // פונקציה שמקבלת פרמטרים מתוך האינדקס - שם מוגדר לכל תמונה מספר משלה כך שנלחץ על התמונה היא תוצג לפי מספרה 
    showSlides(slideIndex = n);    // בין התמונה למספרה קריאה לפונקציה של המעבר בין תמונה לתמונה וסנכרון 
}

function showSlides(n) { // הפונקציה של המעבר בין תמונה לתמונה וקבלת פרמטר מהפונקציה הגלובלית 

    var bigImg = document.getElementsByClassName("mySlides"); // הצגת התמונה באופן מלא והצגת סדר התמונות על גבי התמונה עצמה	
    var imgRow = document.getElementsByClassName("demo"); // תצוגת התמונות הממוזערות
    var Text = document.getElementById("caption"); // תצוגה של הסבר התמונה מתחת לתמונה המלאה

    if (n > bigImg.length) {
        // אם מספר הלחיצות גדול מכמות הלחיצות האפשרית (8)  - אז ה slideIndex יחזור לתמונה הראשונה כלומר ל1 והתמונה הראשונה תוצג.
        slideIndex = 1
    }
    // אם מספר הלחיצות אחורה הגיע למקסימום שלו – כלומר 1 אז,  אז ה slideIndex יהיה שווה לאורך התמונות (כמות התמונות כלומר 8) ויציג את התמונה במיקום האחרון (כדי להימנע מלרדת למספר שלילי – שאין תמונה הממוספרת כך).
    if (n < 1) {
        slideIndex = bigImg.length
    }
    for (i = 0; i < bigImg.length; i++) {
        // מעבר על כל התמונות בגודל מלא והעלאת המיקום (  ( iב1  לאחר כל סיבוב של הלולאה.

        //שימוש בתגית style  כדי להחיל הגדרות עיצוב וביטול תצוגת התמונה במיקום i באמצעות הnone דרך מעבר על הלולאה.
        bigImg[i].style.display = "none";
    }
    //שימוש בתגית style  כדי להחיל הגדרות עיצוב והצגת התמונה במיקום i באמצעות הblock דרך חיסור 1 מהמיקום של slideIndex

    bigImg[slideIndex - 1].style.display = "block";

    for (r = 0; r < imgRow.length; r++) {
        // מעבר על כל התמונות הממוזערות באמצעות לולאה והעלאת המיקום  (r)  ב1.
        imgRow[r].className = imgRow[r].className.replace(" active", "");
        // פנייה לCSS דרך - className  active, כך שתצוגת כל התמונות תוחלף מactive לריק – " ", והן יהיו בשחור לבן. 

    }
    imgRow[slideIndex - 1].className += " active";
    //פנייה לCSS החלפת הclassName מריק – " " , לactive – כך שהתמונה הנבחרת תהיה מוצגת בצבע.

    Text.innerHTML = imgRow[slideIndex - 1].alt;

    // שימוש בשם של משתנה ((Text שמוגדר למעלה, כדי להדפיס למשתמש את הטקסט של תיאור התמונה תוך כדי שימוש בתגית alt שנמצאת בhtml בjavaScript.

}
