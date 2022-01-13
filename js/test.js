const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');

const endPoint = 19;
let yesNum = 0;
let idx;

// 뒤로 가기
function backList() {
    if ( idx <= 0 ) {
        alert('맨 처음 질문입니다 ｡◕‿◕｡❀');
        return false;
    } else {
        idx -= 1;
        yesNum -= 1;
        setList(idx);
    }
}

// Result 페이지 세팅
function setResult(yesNum) {
    // QnA 사라지고 Result 등장
    qna.style.WebkitAnimaion = "fadeOut 0.5s"
    qna.style.animation = "fadeOut 0.5s"
    setTimeout(() => {
        result.style.WebkitAnimaion = "fadeIn 0.5s"
        result.style.animation = "fadeIn 0.5s"
        setTimeout(() => {
            qna.style.display = 'none';
            result.style.display = 'block';
        }, 350);
    }, 350);


    // 합산한 yesNum 값에 따른 Result
    let point;

    if (yesNum == 0) {
        point = 0;
    } else if (yesNum < 8) {
        point = 1;
    } else if (yesNum < 16) {
        point = 2;
    } else if (yesNum < 21) {
        point = 3;
    } else {
        return false;
    }

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    // 넘버링된 이미지 호출
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/result-' + point + '.png';

    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

// Yes or No 버튼 누를 때마다 값 계산
function calResult(num) {
    yesNum += num;

    // 버튼을 눌렀을 때, idx가 마지막이라면 결과페이지로 이동
    if (idx === endPoint) {
        setResult(yesNum);
        return;
    } else {
        // idx가 마지막이 아니라면 ++idx 질문 페이지 출력
        setList(++idx);
    }
}

// qna 리스트 세팅
function setList(idx) {
    var status = document.querySelector('.statusBar');
    status.style.width = (95 / endPoint) * idx + '%';

    var q = document.querySelector('.qstnBox');
    q.innerHTML = qstnList[idx];
}

// '시작하기' 버튼 클릭
function start() {
    main.style.WebkitAnimaion = "fadeOut 0.8s"
    main.style.animation = "fadeOut 0.8s"
    setTimeout(() => {
        qna.style.WebkitAnimaion = "fadeIn 0.8s"
        qna.style.animation = "fadeIn 0.8s"
        setTimeout(() => {
            main.style.display = 'none';
            qna.style.display = 'block';
        }, 350);
        idx = 0;
        setList(idx);
    }, 350);
}