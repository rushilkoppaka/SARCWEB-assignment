const likebtn = document.querySelector('.like-btn');
const likebtnContainer =document.querySelector('.likebtn-container')

likebtn.addEventListener('click',()=>{
	likebtnContainer.innerHTML += '<div class=" react row"><div><button class="laugh btn-primary"  type="submit">XD</button><button class="frown btn-dark"  type="submit">:(</button><button class="smile btn-success"  type="submit">:)</button><button class="suprised btn-success"  type="submit">:O</button></div></div>';
	const reaction1 = document.querySelector('.laugh');
	const reaction2 = document.querySelector('.frown');
	const reaction3 = document.querySelector('.smile');
	const reaction4 = document.querySelector('.suprised');

	reaction1.addEventListener('click',()=>{
		document.querySelector('.like-btn').style.backgroundColor= "red";
		document.querySelector('.like-btn').innerText='XD';
		reaction2.style.visibility='hidden';
		reaction3.style.visibility='hidden';
		reaction4.style.visibility='hidden';
		reaction1.style.visibility='hidden';

	});
	reaction2.addEventListener('click',()=>{
		document.querySelector('.like-btn').style.backgroundColor= "red";
		document.querySelector('.like-btn').innerText=':(';
		reaction1.style.visibility='hidden';
		reaction3.style.visibility='hidden';
		reaction4.style.visibility='hidden';
		reaction2.style.visibility='hidden';

	});
	reaction3.addEventListener('click',()=>{
		document.querySelector('.like-btn').style.backgroundColor= "red";
		document.querySelector('.like-btn').innerText=':)';
		reaction2.style.visibility='hidden';
		reaction1.style.visibility='hidden';
		reaction4.style.visibility='hidden';
		reaction3.style.visibility='hidden';

		
	});
	reaction4.addEventListener('click',()=>{
		document.querySelector('.like-btn').style.backgroundColor= "red";
		document.querySelector('.like-btn').innerText=':O';
		reaction2.style.visibility='hidden';
		reaction3.style.visibility='hidden';
		reaction1.style.visibility='hidden';
		reaction4.style.visibility='hidden';

		
	});
});

