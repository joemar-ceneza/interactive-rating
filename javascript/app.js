const rating = document.querySelector(".rating-container");
const btns = document.querySelectorAll(".numbers");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error-message");
const success = document.querySelector(".success-container");
const result = document.querySelector("#result");
let selected = "";

btns.forEach(function(btn){
    btn.addEventListener("click", function(whichBtn){
        const btnStar = whichBtn.currentTarget.classList;
        selected = whichBtn.target.textContent;
        error.style.visibility = "hidden";

        if(btnStar.contains("one")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "hidden";
            document.querySelector(".three-star").style.visibility = "hidden";
            document.querySelector(".four-star").style.visibility = "hidden";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(btnStar.contains("two")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "hidden";
            document.querySelector(".four-star").style.visibility = "hidden";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(btnStar.contains("three")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "visible";
            document.querySelector(".four-star").style.visibility = "hidden";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(btnStar.contains("four")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "visible";
            document.querySelector(".four-star").style.visibility = "visible";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(btnStar.contains("five")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "visible";
            document.querySelector(".four-star").style.visibility = "visible";
            document.querySelector(".five-star").style.visibility = "visible";
        }
    });
});

submit.addEventListener("click", function() {
    if (selected === ""){
        error.style.visibility = "visible";
    } else{
        error.style.visibility = "hidden";
        rating.style.display = "none";
        success.style.display = "block"
        result.textContent = selected;
    }
});