// 이달의 우수사원
function solution(vote) {
    const 최다득표수 = Math.max(...vote);

    // vote 배열에서 최다 득표수의 인덱스
    const 최다득표수_인덱스 = vote.indexOf(최다득표수);

    // 배열의 인덱스는 0부터 시작
    // 1부터 시작하는 직원 번호를 구하기 위해 1을 더해줌
    const 직원번호 = 최다득표수_인덱스 + 1;

    return 직원번호;
}

solution([5, 2, 0, 1, 0]);        // 1
solution([0, 0, 1, 7, 0, 4, 2]);  // 4    
