// 경마장 용지 
function solution(input){
    const number = Number(input);
    return number;
}

function solution(input){
    return Number(input);
}

solution(1);   //1
solution("2"); //2

// 내 휴가는 너무 소중해
function solution(year){
    if(year === 3){
        return 5;
    }else if(year === 5){
        return 12;
    }else if(year === 10){
        return 30;
    }else{
        return 0;
    }
}

function solution(year){
    if(year === 3) {
        return 5;
    }
    if(year === 5) {
        return 12;
    }
    if(year === 10) {
        return 30;
    }
    return 0;
}

solution(3);  // 5
solution(4);  // 0
solution(5);  // 12
solution(7);  //0
solution(10); //30
