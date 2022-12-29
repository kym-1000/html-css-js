let target = document.querySelector('#dynamic');

dynamic(randomString()); // 실행되는 문장 1

function randomString(){
let stringArr=['전 세계 관광명소를!','당신은 언제나 가능!','당장 떠나라',
                '원하는곳 어디든!','떠나지 않겠나?'];
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
let selectStringArr = selectString.split("");
return selectStringArr;
}


//한글자씩 텍스트 출력함수
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        // shift는 배열의 요소를 하나 제거 하고 그 값을 반환!
        setTimeout(function(){  // 지연시간!
            dynamic(randomArr);  // 자기 함수를 다시 부른다!
        },80);
    }else{ // 남은 문자열이 없다면
        setTimeout(resetTyping,3000); 
        //함수를 불러오고 3초만큼 지연
    }
}

//타이핑 리셋
function resetTyping(){
    target.textContent ="";
    dynamic(randomString());
}
function blink(){
    target.classList.toggle('active');
}


setInterval(blink,500); // 실행 되는 문장 2
