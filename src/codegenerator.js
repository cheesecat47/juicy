var pages = ['뉴스','음악','영화','스포츠','책','탭 설정']
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
    document.write(`
      <div class="frame"><!-- 전체 프레임 -->
        <div class="tab"><!-- 상단 탭 -->
      `)
      var i=0;
      while (i<pages.length){
        if(currentpage==pages[i]){  // currentpage일 때는 tabNow로 색깔 다르게 표시한다.
          document.write(`<div><a href="" class="tabNow">${pages[i++]}</a></div>`)
        }
        else{ //아니면 그냥 tabitem
          document.write(`<div><a href="" class="tabitem">${pages[i++]}</a></div>`)
        }
      }// end while
      document.write(`
        </div>
      </div>
        `)
  },
  makechart:function(){
    var i=0;
    while (i<filmchart.length){
      document.write(`
        <a href="${filmchart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
          <img src="${filmchart[i+1]}" alt="${filmchart[i+2]}">
          <h3 class="filmname">${filmchart[i+2]}</h3>
        </a>
        `)
        i+=3;
    }
  }
}//end makecode
