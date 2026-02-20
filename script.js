4// جنس الجنين لتحديد اللون عند آخر دائرة
let realGender = "boy"; // "boy" أو "girl"

// جميع الدوائر
let circles = document.querySelectorAll(".scratch");

// ترتيب الألوان لبقية الدوائر (8 دوائر أولى)
let pattern = ["girl","boy","boy","boy","girl","girl","girl","boy"];

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        if(circle.classList.contains("done")) return; // منع الضغط مرة ثانية
        circle.classList.add("done");

        // نعرض صورة البصمة بدل النص
        circle.innerHTML = '<img src="feet.png" style="width:40px;height:40px;">';

        if(index === 8){ // آخر دائرة
            // اللون حسب جنس الجنين
            circle.style.backgroundColor = realGender==="boy"?"#4da6ff":"#ff6ec7";

            // تشغيل الموسيقى
            let music = new Audio("music.mp3");
            music.play();
        } else {
            // باقي الدوائر حسب pattern
            circle.style.backgroundColor = pattern[index]==="boy"?"#4da6ff":"#ff6ec7";
        }
    });
});
