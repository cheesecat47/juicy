var pages = ['news','music','movie','book','sports','webtoon','fun','setting']
var pageskr = ['뉴스','음악','영화','책','스포츠','웹툰','유머','탭 설정']

var filmchart=[// 링크 주소, 이미지 주소, 영화 제목 순서
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=167638','https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg?type=m99_141_2','완벽한 타인',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=156464','https://movie-phinf.pstatic.net/20181031_68/1540952503496fNRsF_JPEG/movie_image.jpg?type=m99_141_2','보헤미안 랩소디',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=166610','https://movie-phinf.pstatic.net/20181022_107/15401869149163WLen_JPEG/movie_image.jpg?type=m99_141_2','동네사람들',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=173692','https://movie-phinf.pstatic.net/20181019_147/1539926010524SSrS7_JPEG/movie_image.jpg?type=m99_141_2','바울',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=160487','https://movie-phinf.pstatic.net/20181001_87/15383614506431bq1D_JPEG/movie_image.jpg?type=m99_141_2','창궐',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=171750','https://movie-phinf.pstatic.net/20181017_83/15397650480164Sm4J_JPEG/movie_image.jpg?type=m99_141_2','여곡성',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=180002','https://movie-phinf.pstatic.net/20181108_98/1541638739931hvAnU_JPEG/movie_image.jpg?type=m99_141_2','박물관이 진짜 살아있다',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=172819','https://movie-phinf.pstatic.net/20181011_31/1539243181778X4C4H_JPEG/movie_image.jpg?type=m99_141_2','구스범스:몬스터의 역습',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=164155','https://movie-phinf.pstatic.net/20181001_122/153836420654806YHX_JPEG/movie_image.jpg?type=m99_141_2','벽 속에 숨은 마법시계',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=168050','https://movie-phinf.pstatic.net/20180912_118/1536714294340kLm2Y_JPEG/movie_image.jpg?type=m99_141_2','스타 이즈 본',
  'https://movie.naver.com/movie/bi/mi/basic.nhn?code=170879','https://movie-phinf.pstatic.net/20181002_242/1538464541134fcd6K_JPEG/movie_image.jpg?type=m99_141_2','할로윈']

var webtoonchart=[
  'https://comic.naver.com/webtoon/list.nhn?titleId=183559&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','신의 탑',
  'https://comic.naver.com/webtoon/list.nhn?titleId=648419&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/648419/thumbnail/thumbnail_IMAG10_1421195d-13be-4cde-bcf9-0c78d51c5ea3.jpg', '뷰티풀 군바리',
  'https://comic.naver.com/webtoon/list.nhn?titleId=602910&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/602910/thumbnail/thumbnail_IMAG10_ec235b6e-c4fa-47ab-8141-36c4f1572a79.jpg', '윈드브레이커',
  'https://comic.naver.com/webtoon/list.nhn?titleId=654774&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/654774/thumbnail/thumbnail_IMAG10_b85f5350-ca68-4300-ab15-036d9ee060c8.jpg', '소녀의 세계',
  'https://comic.naver.com/webtoon/list.nhn?titleId=679519&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/679519/thumbnail/title_thumbnail_20160601180804_t83x90.jpg', '대학일기',
  'https://comic.naver.com/webtoon/list.nhn?titleId=597478&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/597478/thumbnail/thumbnail_IMAG10_487d19d8-3547-43a0-aa94-10ef7fc94cda.jpg', '평범한 8반',
  'https://comic.naver.com/webtoon/list.nhn?titleId=702422&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/702422/thumbnail/thumbnail_IMAG10_8a7d3a98-291e-4fec-b399-7b8219c90854.jpg', '니편내편',
  'https://comic.naver.com/webtoon/list.nhn?titleId=713975&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/713975/thumbnail/thumbnail_IMAG10_2c34bc9e-747c-4257-bf48-a67a560dca0a.jpg', '데드라이프',
  'https://comic.naver.com/webtoon/list.nhn?titleId=714886&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/714886/thumbnail/thumbnail_IMAG10_dbf1c5f4-08ec-47f6-bd6d-ab6304d907de.jpg', '신을 죽이는 방법',
  'https://comic.naver.com/webtoon/list.nhn?titleId=675554&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/675554/thumbnail/thumbnail_IMAG10_66613407-1041-4f4f-ad8a-1983361f932e.jpg', '가우스전자 시즌3~4',
  'https://comic.naver.com/webtoon/list.nhn?titleId=714185&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/714185/thumbnail/thumbnail_IMAG10_b09f7c2d-7083-467b-95bc-4dace9c21b6f.jpg', '링크보이',
  'https://comic.naver.com/webtoon/list.nhn?titleId=716857&weekday=mon','https://shared-comic.pstatic.net/thumb/webtoon/716857/thumbnail/thumbnail_IMAG10_cf1f325d-f0de-452d-a996-7e95cee200f4.jpg', '오늘의 순정망화'
]
var musicchart=[
  'https://www.youtube.com/watch?v=pBuZEGYXA6E&start_radio=1&list=RDQMzfFT2PnTg24','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','관련 재생목록 - 멜론 2018년 11월 4주차',
  'https://www.youtube.com/watch?v=9SpUjUYtvlE','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','멜론 매일라디오 2018년 11월 3주차 신곡 100곡[광고없음]',
  'https://www.youtube.com/watch?v=Q3LAwX6nKFo','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','[ 멜론i ] 2018년 11월 넷째주(4주차) 최신 멜론i차트 TOP20 !! . 워너원 봄바람 집 불꽃놀이 제니 SOLO 트와이스 YESorYES 엑소 Tempo 아이유 폴킴',
  'https://www.youtube.com/watch?v=dzLeQBX_5_U','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','멜론 관느 리뷰 2018년 11월 4주차 신곡 TOP 100 [광고X]',
  'https://www.youtube.com/watch?v=_37eGPzYAxE','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','광고없는 유튜브 최신가요 멜론 2018년 11월 3주차 챠트 TOP 1위~50위 발라드 인기가요 좋은노래 모음 연속재생',
  'https://www.youtube.com/watch?v=xQ9PwfRs_es&list=PLZXN1d3t4Yztp4oYLsleSJa1a-puwQn1T','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','멜론차트 2018년 12월 1주차 TOP 100 [최신가요] 연속듣기 - 매일업데이트',
  'https://www.youtube.com/watch?v=-K29Wl6lsjM','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','KPOP 멜론차트 2018년 11월3주차 최신노래 연속재생',
  'https://www.youtube.com/watch?v=RN-cRsF-Cxk','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','광고없는 유튜브 최신가요 멜론 2018년 11월 2주차 챠트 TOP 1위~50위 발라드 인기가요 좋은노래 모음 연속재생',
  'https://www.youtube.com/watch?v=HL179tacctk','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','최신가요 멜론 2018년 11월 4주차 챠트 TOP 1위~50위 광고없는 발라드 인기가요 좋은노래 모음 연속재생',
  'https://www.youtube.com/watch?v=JTprd1E0rDM','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','월간 멜론 TOP20 ♬♬ 2018년 11월 4주차 광고없는 신곡모음 연속듣기 ♬♬ Best korea Songs playlist 2018',
  'https://www.youtube.com/watch?v=MnLu0pKfnGQ','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','광고없는 최신가요 멜론 2018년 11월 4주차 챠트 TOP 1위~50위 발라드 인기가요 좋은노래 모음 연속재생',
  'https://www.youtube.com/watch?v=_qmcg4vqmVg','https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/title_thumbnail_20160516123017_t83x90.jpg','밤에 듣기 좋은 감성 발라드 베스트 24곡 [가사첨부]'

]


var bookchart=[
  '','http://image.kyobobook.co.kr/images/book/large/282/l9788965402282.jpg','인공지능을 위한 수학 머신러닝',
  '','http://image.kyobobook.co.kr/images/book/large/979/l9791160505979.jpg','케라스 창시자에게 배우는 딥러닝(Deep Learning with Python) ',
  '','http://image.kyobobook.co.kr/images/book/large/636/l9788968484636.jpg','밑바닥부터 시작하는 딥러닝',
  '','http://image.kyobobook.co.kr/images/book/large/925/l9791188612925.jpg','블록체인 무엇인가?',
  '','http://image.kyobobook.co.kr/images/book/large/422/l9791188621422.jpg','심층 학습(제이펍의 인공지능 시리즈 13)',
  '','http://image.kyobobook.co.kr/images/book/large/453/l9791188621453.jpg','하이퍼레저 패브릭으로 배우는 블록체인 ',
  '','http://image.kyobobook.co.kr/images/book/large/255/l9791188621255.jpg','패턴 인식과 머신 러닝(제이펍의 인공지능 시리즈 11)',
  '','http://image.kyobobook.co.kr/images/book/large/731/l9791162240731.jpg','핸즈온 머신러닝',
  '','http://image.kyobobook.co.kr/images/book/large/232/l9791158391232.jpg','텐서플로 딥러닝 프로젝트(실전활용!)(위키북스 데이터 사이언스 시리즈 24)',
  '','http://image.kyobobook.co.kr/images/book/large/546/l9788966260546.jpg','알고리즘 문제 해결 전략 세트(프로그래밍 대회에서 배우는)(전2권) 프로그래밍 대회에서 배우는『알고리즘 문제 해결 전략 세트』',
  '','http://image.kyobobook.co.kr/images/book/large/441/l9791162240441.jpg','처음 배우는 딥러닝 수학',
  '','http://image.kyobobook.co.kr/images/book/large/006/l9791161752006.jpg','컴퓨터 비전과 딥러닝'

]

var newschart=[
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002299.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181201114059547_1.jpg','51년 장수 괴도 만화·애니 루팡3세 우리가 흔히 말하는 오덕(Otaku)은 해당 분야를 잘 아는 마니아를 뜻함과 동시에 팬덤 등 열정을 상징하는 말로도 통합니다. IT조선은 2018년 시작과 함께 애니메이션・만화・영화・게임 등 오덕 문화로 상징되는 팝컬처(Pop Culture) 콘텐츠에 대한 이야기를 풀어가고자 합니다. 어린시절..',
  'http://it.chosun.com/site/data/html_dir/2018/12/01/2018120100013.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181201092135860_1.jpg','메탈빌드 그레이트 마징가 등 5선IT조선은 매주 토요일 한 주간 예약판매가 시작된 피규어・프라모델 상품 중 팝컬쳐 마니아의 눈길을 끌기 충분한 모형 신상품 다섯 개를 엄선해 소개합니다.',
  'http://it.chosun.com/site/data/html_dir/2018/11/20/2018112001016.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181120115654701_1.jpg','[알림] IT조선이 라이브 포토 리포터를 모집합니다조선미디어 그룹의 ICT 전문 매체인 IT조선이 ‘오늘과 지금’을 생생하게 전달할 ‘투데이나우(TodayNow)’의 라이브 포토 리포터를 모집합니다.',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002567.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181201092153898_1.jpg','[이번 주 신상품] 시린랩스 피네이·갤럭시노트9 알파인 화이트IT조선을 통해 11월 26일부터 11월 30일까지 소개된 신상품을 ‘이번 주 신상품’으로 묶어 소개합니다.◇ 시린랩스 피네이',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002637.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181130204500851_1.jpg','정부, 클라우드 장애 아마존 조사 착수정부가 22일 클라우드 접속 장애를 빚은 아마존웹서비스(AWS)에 대한 조사에 착수한다. AWS 한국법인은 26일 조사 권한을 가진 과학기술정보통신부(이하 과기정통부) 산하 중앙전파관리소로부터 다음주 중 조사를 하겠다는 통보를 받은 것으로 알려졌다.이는 AWS 서비스 장애, 이에 다른 이용자 고지, 피해..',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002604.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181130204422442_1.png','독일, 시장지배력 남용 혐의로 아마존 조사 독일 반독점당국이 아마존의 시장지배력 남용 혐의에 대해 조사에 들어갔다. 아마존에 있어 독일은 전 세계에서 두 번째로 큰 시장이다. 29일(현지시각) 영국 파이낸셜타임스(FT)에 따르면 독일 연방카르텔청의 안드레아스 문트 청장은 "아마존은 독일에서 가장 큰 온라인 소매업자인 동시에 가장 큰 시장 역할을 ..',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002594.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181130204350247_1.jpg','구광모 LG 회장 등 상속세 9215억원 신고 구광모 LG그룹 회장을 비롯한 상속인이 9000억원대 상속세를 신고하고, 이중 1차 상속세액 납부를 완료한 것으로 30일 확인됐다.지주사 LG그룹 한 관계자는 "구 회장 등 상속인이 고(故) 구본무 회장의 LG 주식에 대한 상속세 9215억원 등을 과세 당국에 신고했다"며 "연부연납 제도를 통해 향후 최..',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002569.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181130204203265_1.jpg','이통3사, 12월 1일 5G 전파 발사 과학기술정보통신부(이하 과기정통)는 30일 이통3사가 2018년도분 주파수 할당 대가를 납부함에 따라 주파수 할당 통지서를 배부했다고 밝혔다.이통3사는 5G 상용화를 위한 정부의 행정적 절차가 모두 끝냈고, 12월 1일 0시 5G 서비스를 개시한다.',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002369.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181130204014283_1.jpg','삼성, 반도체 투자 줄이고도 점유율 21% 1위 삼성전자가 올해 전 세계 반도체 업체 중 가장 많은 시설투자액을 집행할 것으로 조사됐다. SK하이닉스도 1년새 설비투자를 가장 많이 늘린 업체로 등극했다.30일 시장조사업체 IC인사이츠에 따르면, 2018년 전 세계 반도체 업체의 시설투자 규모는 총 1071억4000만달러(120조1580억원)로 추산된다..',
  'http://it.chosun.com/site/data/html_dir/2018/11/30/2018113002294.html','http://itimg.chosun.com/sitedata/itchosun/section_image/20181130174645930_1.jpg','AWS, 머신 러닝 기반 차세대 AI 기능·서비스 13종 공개아마존웹서비스(Amazon Web Services, 이하 AWS)가 26일부터 30일(현지시각)까지 미국 라스베이거스에서 열리는 연례 기술 콘퍼런스 ‘AWS 리인벤트(re:Invent) 2018’에서 자사의 새로운 머신 러닝 기반 기능 및 서비스 13종을 대거 공개했다.'
  //'https://movie.naver.com/movie/bi/mi/basic.nhn?code=170879','https://movie-phinf.pstatic.net/20181002_242/1538464541134fcd6K_JPEG/movie_image.jpg?type=m99_141_2','할로윈']

]

var makecode={
  maketab:function(currentpage){
    var dir;              // 경로 나타낼 변수
    if(currentpage=="")
      dir="./src/pages/";  // ""이면 index에서 넘어오는 거니까 하위 경로 붙여줌
    else dir="./";         // 아니면 같은 폴더에서 옮기는거.

    // document.write();를 하면 html에 쓸 수 있다. 꼭 코드가 아니라도 쓸 수 있음.
    // ``는 템플릿..... ""나 ''처럼 쓸 수 있고 `` 안에서 따옴표 사용가능.
  //  document.write(`
    //  <div class="frame"><!-- 전체 프레임 -->
      //  <div class="tab"><!-- 상단 탭 -->
      //`);
      var i=0;
      while (i<pages.length){
        if(currentpage==pages[i]){  // currentpage일 때는 tabNow로 색깔 다르게 표시한다.
          // a 태그는 링크 만드는 태그. href 안에 있는게 링크 url.
          // dir변수 + pages에 있는 이름 + .html 확장자 -> 전체 경로.
          // `` 안에 변수를 사용하고 싶을 땐 ${변수이름} 쓰면 된다.
          document.write(`<div><a href="${dir}${pages[i]}.html" class="tabNow">${pageskr[i++]}</a></div>`);
        }
        else{ // 지금 누른 탭이 아니면 그냥 tabitem
          document.write(`<div><a href="${dir}${pages[i]}.html" class="tabitem">${pageskr[i++]}</a></div>`);
        }
      }// end while
      document.write(`
        </div>
      </div>
        `);
  },
  makedropdowntab:function(storedCookie,currentpage){
    var dir_page, dir_img, dir_home;              // 경로 나타낼 변수
    if(currentpage==""){
      dir_page="./src/pages/";  // ""이면 index에서 넘어오는 거니까 하위 경로 붙여줌
      dir_img = "./src/img/";
      dir_home = "./";
    }
    else{
      dir_page="./";         // 아니면 같은 폴더에서 옮기는거.
      dir_img="../img/";
      dir_home = "../../";
    }

    document.write(`
      <div class="tab_top">
        <li onclick="displayMenu()" class="settings"><img src="${dir_img}tabicon.png" alt="" style="display:block;"></li>
        <li><a href="${dir_home}index.html" class="settings"><img src="${dir_img}homeicon.png" alt="" style="display:block;"></a></li>
      </div>
      <div class="nav_frame">
        <div class="tab_drop">
          <ul id="tab">`);

    var i=0;
    while (i<5){
      switch (storedCookie[i]) {
        case 'news':
          document.write(`
            <li><a href="${dir_page}news.html">뉴스</a>
            <ul>
              <li><a href="#">정치</a></li>
              <li><a href="#">경제</a></li>
              <li><a href="#">시사</a></li>
            </ul>
          </li>`);
          break;
        case 'music':
          document.write(`
            <li><a href="${dir_page}music.html">음악</a>
              <ul>
                <li><a href="#">Top 10</a></li>
                <li><a href="#">최신 앨범</a></li>
              </ul>
            </li>`);
            break;
        case 'movie':
          document.write(`
            <li><a href="${dir_page}movie.html">영화</a>
              <ul>
                <li><a href="#">오늘의 추천</a></li>
                <li><a href="#">랭킹</a></li>
                <li><a href="#">평점 및 리뷰</a></li>
              </ul>
            </li>`);
          break;
        case 'book':
          document.write(`
            <li><a href="${dir_page}book.html">책</a>
              <ul>
                <li><a href="#">베스트 셀러</a></li>
                <li><a href="#">스테디 셀러</a></li>
              </ul>
            </li>`);
          break;
        case 'sports':
          document.write(`
            <li><a href="${dir_page}sports.html">스포츠</a>
              <ul>
                <li><a href="#">국내 야구</a></li>
                <li><a href="#">해외 야구</a></li>
                <li><a href="#">국내 축구</a></li>
                <li><a href="#">해외 축구</a></li>
                <li><a href="#">국내 농구</a></li>
                <li><a href="#">해외 농구</a></li>
              </ul>
            </li>`);
          break;
        case 'webtoon':
          document.write(`
            <li><a href="${dir_page}webtoon.html">웹툰</a></li>`);
          break;
        case 'fun':
          document.write(`
            <li><a href="${dir_page}fun.html">FUN</a></li>`);
          break;
        default:
      }
      i++;
    }

    document.write(
          `<li><a href="${dir_home}메인페이지.html" onclick="displayMenu()">탭 설정</a></li>
          </ul>
        </div>
      </div>
      `);
  },
  makechart:function(){
    var i=0;
    while (i<filmchart.length){  //나중에 크롤링으로 해결할거.
      document.write(`
        <a href="${filmchart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
          <img src="${filmchart[i+1]}" alt="${filmchart[i+2]}">
          <h3 class="filmname">${filmchart[i+2]}</h3>
        </a>
        `);
        i+=3;
    }
  }
  ,
  makechartwebtoon:function(){
    var i=0;
   while(1){
    document.write(`
      <a href="${webtoonchart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
        <img src="${webtoonchart[i+1]}" alt="${webtoonchart[i+2]}">
        <h3 class="webtoon">${webtoonchart[i+2]}</h3>
      </a>
      `);
      i+=3;
      if(i==36)break;


      }
    }
  ,
  makechartmusic:function(){
  var i=0;
  while(1){
document.write(`
    <a href="${musicchart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
    <img src="${musicchart[i+1]}" alt="${musicchart[i+2]}">
    <h3 class="music">${musicchart[i+2]}</h3>
  </a>
  `);
  i+=3;
  if(i==36)break;
}
}
  ,
makechartbook:function(){
  var i=0;
  while(1){
  document.write(`

      <img src="${bookchart[i+1]}" alt="${bookchart[i+2]}">
      <h3 class="book">${bookchart[i+2]}</h3>
    `);
    i+=3;
    if(i==36)break;

}
}
,
makechartnews:function(){
  var i=0;
  while(1){
document.write(`
    <a href="${newschart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
    <img src="${newschart[i+1]}" alt="${newschart[i+2]}">
    <h3 class="news">${newschart[i+2]}</h3>
  </a>
  `);
  i+=3;
  if(i==30)break;
}
}
}//end makecode

function displayMenu(){
  var x = document.getElementById('tab');

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
