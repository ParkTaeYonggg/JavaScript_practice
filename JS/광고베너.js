 // 전역변수
 let arrPic = [];
 let idx = 0;
 for (let i = 0; i < 5; i++) {
         arrPic.push(`simg0${i+1}`);
     }
 // 윈도우
 window.onload = () => {
     // 변수
     let pic = document.getElementById("pic");
     let left = document.getElementById("left");
     let right = document.getElementById("right");
     // 이벤트 함수
     left.onclick = changLeft;
     right.onclick = changeRight;
     timeInterval();
 }
 // 타이머 광고 전환
 timeInterval = () => {
     // 변수
     let pic = document.getElementById("pic");
     
     // 함수
     let timer = setInterval(function(){
         idx++;
        if (idx >= 5) {
            idx = 0;
        };
         pic.setAttribute("src",`사진/${arrPic[idx]}.jpg`);
         console.log("타이머"+idx);
        
     },5000);
 }
 changLeft = () => {
    idx--;
    if (idx < 0){
        idx = 4;
    }
     let pic = document.getElementById("pic");
     pic.setAttribute("src",`사진/${arrPic[idx]}.jpg`);
     console.log("왼쪽"+idx);
    
 }
 changeRight = () => {
     idx++;
     if (idx >= 5) {
        idx = 0;
    }
     let pic = document.getElementById("pic");
     console.log("오른쪽"+idx);
     pic.setAttribute("src",`사진/${arrPic[idx]}.jpg`);
     
 }
 