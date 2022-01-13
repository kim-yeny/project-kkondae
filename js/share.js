const url = 'https://test-kkondae.netlify.app';

function setShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;

  const shareTitle = "꼰대력 테스트"
  const shareDesc = infoList[resultAlt].name;
  const shareImage = url + 'img/result-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  // 카카오 API 기본 구성 (수정본)
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDesc,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      }
    ]
  });
}