function playImgAnimation1(){
	const img1 = document.getElementById('myImg1');
	const img2 = document.getElementById('myImg2');
	setTimeout(() => {
	img1.style.left = "0px";
	img1.style.opacity = "1";	
	setTimeout(() => {	
		img2.style.left = "495px";	
		img2.style.opacity = "0.9";	
	}, 0);
	}, 30);		
};
function playImgAnimation2(){
	const img1 = document.getElementById('myImg1');
	const img2 = document.getElementById('myImg2');
	setTimeout(()=>{
	img2.style.left = "-400px";
	img2.style.opacity = "0.3";
	setTimeout(() => {
		img1.style.left = "-200px";
		img1.style.opacity = "0";
	}, 200);
	},30);
};
playImgAnimation1();
window.addEventListener('LoginImageMove1', () => {
    playImgAnimation1();
    console.log('LoginImageMove2 已触发');
});
window.addEventListener('LoginImageMove2', () => {
    playImgAnimation2();
    console.log('LoginImageMove2 已触发');
});