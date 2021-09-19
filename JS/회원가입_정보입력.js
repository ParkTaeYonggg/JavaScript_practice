let literalchk = /[~!@#$%^&*()_+\,\.\<\>\:\;\"\'\{\[\]\}\|\\\`]/gi;

window.onload = () => {
    document.getElementById('idChk').onclick = idCheck;
    document.getElementById('passChk2').onclick = passChk;
    document.getElementById("password2").onkeyup = identifyingPW;
    document.getElementById("password").onkeyup = identifyingPW;
    // document.getElementById('id').addEventListener("click",mustit,{once : true});
    // 바로 아랫줄 표시
    document.getElementById("id").onkeyup = idMust;
    id.addEventListener("click",idevent,{once:true});
    document.getElementById("name").onkeyup = nameChk;
    document.getElementById("infoDiv").onclick = moreInfo;
}

function idCheck() {
    let repo = ["wkddksehd","tlschs"];
    let id = document.getElementById('id');
    for (let i of repo){
        if (id.value === i){
            alert("중복된 ID입니다. \n다시입력해주세요.");
            break;
        } else if (id.value.match(literalchk)){
            alert("특수문자는 사용이 불가능 합니다.");
            break;
        } else if (id.value.match(/[ㄱ-ㅎ ㅏ-ㅣ]/gi)) {
            alert("한글은 사용이 불가능 합니다.");
            break;
        } else if (escape(id.value).length < 6) {
            alert("6자 이상 입력해주세요.");
            break;
        } else {
            alert("사용 가능한 ID입니다.");
            break;
        }
    }
};
function passChk () {
    let number = document.getElementById('password');
    let number2 = document.getElementById('password2');
    let vision = document.getElementById('passChk2');
    let secretNuber = number.value;
    if (number.type === "password"){
        number.type = "text";
        number2.type = "text";
        vision.innerHTML = "비밀번호 <br>가리기";
    } else {
        number.type = "password";
        number2.type = "password";
        vision.innerHTML = "비밀번호 <br>보이기";
    }
};
//////////////////////////////////////////////////////여기까지가 아이디 비번
    // 비밀번호와 비밀번호확인이 일치하는지 하지 않는지.
function identifyingPW () {
    let pw2 = document.getElementById("password2");
    let pwValue = document.getElementById("password").value;
    
    if (this === document.getElementById("password")){
        passMust();
    } else if (this === document.getElementById("password2")) {
        passwordChk();
    }

    if (pw2.value != pwValue){
        pw2.style.color = "red";
    } else {
        pw2.style.color = "white";
    }
};
////////////////////////////////////////////////////////여기까진 패스워드확인
function idMust () {
    let id = document.getElementById("id");
    let idmust = document.getElementById("idMust");
    if (escape(id.value).length === 0) {
        idmust.style.display = "inherit";
        idmust.textContent = "필수입력 항목입니다.";
        idmust.style.color = " rgb(99, 30, 43)";
    } else if (id.value.match(literalchk)) {
        idmust.style.display = "inherit";
        idmust.textContent = "특수문자는 사용이 불가능합니다.";
        idmust.style.color = "red";
    } else if (id.value.match(/[ㄱ-ㅎ ㅏ-ㅣ]/gi)) {
        idmust.style.display = "inherit";
        idmust.textContent = "한글문자는 사용이 불가능합니다.";
        idmust.style.color = "red";
    } else if (id.value.match(/[가-하]/gi)) {
        idmust.style.display = "inherit";
        idmust.textContent = "한글문자는 사용이 불가능합니다.";
        idmust.style.color = "red";
    } else if (escape(id.value).length < 6 || id.value.match(/[a-z A-Z]/gi).length < 4) {
        idmust.style.display = "inherit";
        idmust.textContent = "올바르지 못한 아이디 양식입니다. 6자(영문4자포함)이상";
        idmust.style.color = "rgb(99, 30, 43)";
    } else {
        idmust.style.display = "none";
    }
}
idevent = () => {
    document.getElementById("idMust").textContent = "필수입력 항목입니다.";
    document.getElementById("idMust").style.color = "rgb(99, 30, 43)";
}
///////////////////////////////////////////////////////////여기까진 아이디 필수확인
function passMust() {
    let number = document.getElementById('password');
    let password2 = document.getElementById("password2");
    let passMust2 = document.getElementById("passMust2");
    let pw = document.getElementById("passMust");
    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(number.value)) {
        pw.style.display = "inherit";
        pw.textContent = "올바른 양식이 아닙니다. 최소8자리(특수문자,숫자1개이상포함)";
        pw.style.color = "rgb(99, 30, 43)";
    } else {
        pw.style.display = "none";
    }
    if (password2.value === number.value) {
        passMust2.style.display = "none";
    } else {
        passMust2.textContent = "비밀번호가 일치하지 않아요~!";
        passMust2.style.color = "red";
        passMust2.style.display = "inherit";
    }
}
/////////////////////////////////////////////////////////여기까진 비밀번호확인
function passwordChk () {
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");
    let passMust2 = document.getElementById("passMust2");

    if (escape(password2.value).length === 0) {
        passMust2.textContent = "필수입력 항목입니다.";
        passMust2.style.color = "rgb(99, 30, 43)";
        passMust2.style.display = "inherit";
    } else if (password2.value != password.value) {
        passMust2.textContent = "비밀번호가 일치하지 않아요~!";
        passMust2.style.color = "red";
        passMust2.style.display = "inherit";
    } else {
        passMust2.style.display = "none";
    }
}
//////////////////////////////////////////////////////비밀번호 확인도 끝
nameChk = () => {
    let name = document.getElementById("name");
    let nameMust = document.getElementById("nameMust");

    if (escape(name.value).length === 0) {
        nameMust.textContent = "필수입력 항목입니다.";
        nameMust.style.color = "rgb(99, 30, 43)";
        nameMust.style.display = "inherit";
    } else if (/[0-9]/.test(name.value)) {
        nameMust.textContent = "숫자는 입력이 불가능합니다.";
        nameMust.style.color = "rgb(99, 30, 43)";
        nameMust.style.display = "inherit";
    } else if (!/^(?=.*[가-하]).{2,25}$/.test(name.value)) {
        nameMust.textContent = "최소 2자 이상은 입력하셔야 해요.";
        nameMust.style.color = "rgb(99, 30, 43)";
        nameMust.style.display = "inherit";
    } else {
        nameMust.style.display = "none";
    }
}
///////////////////////////////////////////////////// 상세설정 클래스 토글
moreInfo = () => {
    let job = document.getElementById("infoDiv");
    document.getElementById("buttonDiv").classList.toggle("hide");
}