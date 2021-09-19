window.onload = function(){
    // 1. 동의하기 클릭했을 때 전체클릭.
    document.form1.allAgree.onclick = allCheck;
    // 전체를 감싸는 태그의 네임이 필요함. -> 그리고 자손의 네임이 필요함.

    // 2. 필수항목 체크 안 하면 안넘어가게 해두기.
    document.form1.onsubmit = falseSubmit;

    // 3. 회원가입 페이지 이동.
}

function falseSubmit () {
    if (!document.form1.chk1.checked){    
        alert("이용약관 1장에 동의를 해주십시오.");
        return false;
    } else if (!document.form1.chk2.checked){
        alert("이용약관 2장에 동의를 해주십시오.");
        return false;
    }
    return true;
}

function allCheck() {
    if (this.checked){
        console.log("실행됨. -> 온일떄");
        document.form1.chk1.checked = true;
        document.form1.chk2.checked = true;
        document.form1.chk3.checked = true;
    } else {
        console.log("실행됨. -> 오프일떄");
        document.form1.chk1.checked = false;
        document.form1.chk2.checked = false;
        document.form1.chk3.checked = false;
    }
}
// 자바에서 배웠던 뷰어라고 보면 될 것 같다.

