const carouselImg = document.querySelectorAll('.carousel-img img');
const carousel = document.querySelector('.carousel-img');



const prevBtn = document.querySelector('#prevBtn');

const nextBtn = document.querySelector('#nextBtn');

let counter=1;
const size = carouselImg[0].clientWidth;



carousel.style.transform = 'translateX('+ (-size*counter)+'px)';

nextBtn.addEventListener('click', ()=>{
	
	if(counter>= carouselImg.length-1) {
		return;
	}
	carousel.style.transition='0.4s ease 0.4s';
	counter++;
	carousel.style.transform = 'translateX('+ (-size*counter)+'px)';

});
prevBtn.addEventListener('click', ()=>{
	if(counter<=0) {
		return;
	}	
	carousel.style.transition='0.4s ease 0.4s';
	counter--;
	carousel.style.transform = 'translateX('+ (-size*counter)+'px)';

});

carousel.addEventListener('transitionend',()=>{
	if (carouselImg[counter].id==='firstClone') {
		carousel.style.transition='none';
		counter= 1;
		carousel.style.transform = 'translateX('+ (-size*counter)+'px)';

	}
	if (carouselImg[counter].id==='lastClone') {
		carousel.style.transition='none';
		counter= carouselImg.length-2;
		carousel.style.transform = 'translateX('+ (-size*counter)+'px)';

	}
});
