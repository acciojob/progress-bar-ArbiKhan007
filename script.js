//your JS code here. If required.
const circles=document.querySelectorAll(".circle");
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");

let currActive=1;

next.addEventListener("click", ()=>{
	currActive++;
	prev.disabled=false;

	if(currActive>circles.length){
		currActive=circles.length;
	}

	update();
});

prev.addEventListener("click", ()=>{
	currActive--;
	if(currActive==1) prev.disabled=true;

	if(currActive<1){
		currActive=1;
	}

	update();
});

function update(){
	circles.forEach((circle, idx)=>{
		if(idx<currActive){
			circle.classList.add("active");
		}else{
			circle.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".circle.active");

    // *** Update Progress Line ***
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}