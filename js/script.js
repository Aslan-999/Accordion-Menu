let btn=document.querySelectorAll("#accordion button")
let p=document.querySelectorAll("#accordion p")

for (let i=0; i < btn.length; i++){
    btn[i].onclick = function(){

        for (let j=0; j < p.length; j+=1) {
            p[j].classList.remove("active");
        }


        this.nextElementSibling.classList.add("active")
    }
;
}