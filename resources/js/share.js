const url = 'https://project-kkondae.netlify.app/';

function setShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  
  const shareTitle = "▼ 꼰대력 테스트 결과"
  const shareDesc = infoList[resultAlt].name;

  // const shareImage = url + 'resources/img/result-' + resultAlt + '.png';
  const shareImage = url + 'resources/img/share.png';
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
        title: '결과 보러가기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      }
    ]
  });
}