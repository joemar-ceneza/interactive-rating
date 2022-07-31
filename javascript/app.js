const btns = document.querySelectorAll(".numbers");

btns.forEach(function(btn){
    btn.addEventListener("click", function(whichBtn){
        const styles = whichBtn.currentTarget.classList;
        if(styles.contains("one")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "hidden";
            document.querySelector(".three-star").style.visibility = "hidden";
            document.querySelector(".four-star").style.visibility = "hidden";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(styles.contains("two")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "hidden";
            document.querySelector(".four-star").style.visibility = "hidden";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(styles.contains("three")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "visible";
            document.querySelector(".four-star").style.visibility = "hidden";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(styles.contains("four")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "visible";
            document.querySelector(".four-star").style.visibility = "visible";
            document.querySelector(".five-star").style.visibility = "hidden";
        } else if(styles.contains("five")){
            document.querySelector(".one-star").style.visibility = "visible";
            document.querySelector(".two-star").style.visibility = "visible";
            document.querySelector(".three-star").style.visibility = "visible";
            document.querySelector(".four-star").style.visibility = "visible";
            document.querySelector(".five-star").style.visibility = "visible";
        }
    });
});