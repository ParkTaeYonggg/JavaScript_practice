let date = new Date();
    let i = date.getSeconds();
    let days = ["월", "화", "수", "목", "금", "토", "일"];
    let day = date.getDay() + 6; // 데이를 배열에 담아 요일

    time = () => {
        document.getElementById("year").innerHTML = date.getFullYear() + "년";
        document.getElementById("month").innerHTML = date.getMonth() + "월";
        document.getElementById("day").innerHTML = date.getDate() + "일";
        document.getElementById("day2").innerHTML = days[day];
    }
    window.onload = () => {
    time();

        setInterval(() => {
            let sec = new Date().getSeconds();
            let min = new Date().getMinutes();
            let hou = new Date().getHours();

            document.getElementById("second").innerHTML = sec;
            document.getElementById("minute").innerHTML = min;
            document.getElementById("hour").innerHTML = hou;
            if (hou === 0) {
                date = new Date();
                time();
            }
        },1000);
        //////////여기부턴 스케줄표 스크립트
        document.getElementById("change").onclick = changeMode;
        document.getElementById("change2").onclick = changeMode;
        document.getElementById("change3").onclick = moreInfo;
        document.getElementById("memoPlus").onclick = addMemo;
        document.getElementById("delete").onclick = deleteMomo;
        document.getElementById("memoContent").onclick = memoShow;

        // 키업시 메모 저장
        document.getElementById("expand").querySelector("input").onkeyup = memoDumDum;

    }        
    changeMode = () => {
        document.getElementById("watch_main").classList.toggle("hide");
        document.getElementById("schedule").classList.toggle("show");
    }
    moreInfo = () => {
        document.getElementById("schedule").classList.toggle("more");
        document.getElementById("memoContent").classList.toggle("more");
        document.getElementById("delete").classList.toggle("sideMove");
        document.getElementById("zoomOut").classList.toggle("out");
        document.getElementById("zoomIn").classList.toggle("in");
    }
    let arrMemo = [];
    addMemo = () => {
        let memo = document.getElementById("memoContent");
        let temp = prompt("메모장 제목을 입력해주세요.");
        if (temp != null) {
            arrMemo.push(temp);
        // memo.append(`<div class = memo ${temp}`);
            let plus = document.createElement(`div`);
            plus.classList.add(`memo`);
            plus.classList.add(temp);
            plus.innerHTML = temp;
            memo.appendChild(plus);

        // 여기에 메모차일드 추가 자리. --> 삭제함.
        // ---> 자원낭비가 심해서 제이슨 파일로 내용만 불러오는 방식으로 변경함.
            // contentChild(memo.getElementsByClassName(temp),temp);
        }
    }
    deleteMomo = () => {
        if (arrMemo.length != 0){
            let temp = prompt("삭제할 메모장의 이름을 입력하세요.");
            // let delClass = document.getElementById("formTag").getElementsByTagName("input"); --> 제이슨으로 바꿈
            let delClass2 = document.getElementsByClassName(temp);
            if (arrMemo.find(function (value) {
                if (value === temp) {
                    return true;
                } else {
                    return false;
                }
            })){
                for(let i = 0; i < delClass2.length; i++){
                    // delClass[i].remove(); --> 제이슨으로 바꿈
                    arrMemo.splice(arrMemo.indexOf(temp),1);
                    delClass2[i].remove();
                    if (document.getElementsByClassName("write")[0] != undefined) {
                        document.getElementById("expand").classList.toggle("write");
                    }
                }
            } else {
                alert("해당 메모장은 없습니다.");
            }
        } else {
            alert("생성된 메모장이 없습니다.");
        }
    }
    let memo_container = new Map(); // 여기가 제이슨 값 담을 그릇임.
    function memoShow (e) {
        if (document.getElementById("memoContent") != e.target){
            let memozang = document.getElementById("expand");
            memozang.classList.toggle("write");
            
            // 제이슨 값을 메모장에 입력할 메소드 만들기.
            memoDum(e);
        }
    }
    let names = "";
    // 제이슨 값을 메모장에 입력할 메소드 만들기.
    function memoDum(dum) {
        let myClick = dum.target.getAttribute("class");
        let sliceClass = myClick.slice(4).trim();
        let form = document.getElementById("memoContent").getElementsByClassName(sliceClass);
        names = form;

        if (memo_container.get(names) === undefined) {
            document.getElementById("expand").querySelector("input").value = "메모를 입력하세요.";
        } else {
            document.getElementById("expand").querySelector("input").value = memo_container.get(names);    
        }
        
    }

    function memoDumDum () {
        let text = {"key":names,"values":document.getElementById("expand").querySelector("input").value};
        memo_container.set(text.key,text.values);
    }