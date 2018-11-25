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

    var news = `
      <li><a href="${dir_page}news.html">뉴스</a>
        <ul>
          <li><a href="#">정치</a></li>
          <li><a href="#">경제</a></li>
          <li><a href="#">시사</a></li>
        </ul>
      </li>`;
    var music = `
      <li><a href="${dir_page}music.html">음악</a>
        <ul>
          <li><a href="#">Top 10</a></li>
          <li><a href="#">최신 앨범</a></li>
        </ul>
      </li>`;
    var movie = `
      <li><a href="${dir_page}movie.html">영화</a>
        <ul>
          <li><a href="#">오늘의 추천</a></li>
          <li><a href="#">랭킹</a></li>
          <li><a href="#">평점 및 리뷰</a></li>
        </ul>
      </li>`;
    var book = `
      <li><a href="${dir_page}book.html">책</a>
        <ul>
          <li><a href="#">베스트 셀러</a></li>
          <li><a href="#">스테디 셀러</a></li>
        </ul>
      </li>`;
    var sports = `
      <li><a href="${dir_page}sports.html">스포츠</a>
        <ul>
          <li><a href="#">국내 야구</a></li>
          <li><a href="#">해외 야구</a></li>
          <li><a href="#">국내 축구</a></li>
          <li><a href="#">해외 축구</a></li>
          <li><a href="#">국내 농구</a></li>
          <li><a href="#">해외 농구</a></li>
        </ul>
      </li>`;
    var webtoon =  `
      <li><a href="${dir_page}webtoon.html">웹툰</a></li>`;
    var fun = `
      <li><a href="${dir_page}fun.html">FUN</a></li>`;

    document.write(`
      <div class="tab_top">
        <li><a href="${dir_home}index.html" class="settings"><img src="${dir_img}homeicon.png" alt="" style="display:block;"></a></li>
        <li></li>
        <li><a href="#" class="settings"><img src="${dir_img}tabicon.png" alt="" style="display:block;"></a></li>
      </div>
      <div class="nav_frame">
        <div class="tab_drop">
          <ul>`);

    var i=0;
    while (i<5){
      document.write(storedCookie[0]);
      i++;
    }

    document.write(
          `</ul>
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
}//end makecode
