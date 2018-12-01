var pages = ['news','music','movie','book','entertainment','webtoon','fun','setting']
var pageskr = ['뉴스','음악','영화','책','연예','웹툰','유머','탭 설정']

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

var webtoonchartMon=[
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
var webtoonchartTue=[
"https://comic.naver.com/webtoon/list.nhn?titleId=570503&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/570503/thumbnail/thumbnail_IMAG10_5719a3fe-81f4-4a0c-8c27-eca1631e8384.jpg","연애혁명",
"https://comic.naver.com/webtoon/list.nhn?titleId=697685&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/697685/thumbnail/thumbnail_IMAG10_f8d868ff-0505-498c-ac37-d11a7f952496.jpg","신과함께 (재)",
"https://comic.naver.com/webtoon/list.nhn?titleId=557672&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/557672/thumbnail/title_thumbnail_20130508182053_t83x90.jpg","기기괴괴",
"https://comic.naver.com/webtoon/list.nhn?titleId=708378&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/708378/thumbnail/thumbnail_IMAG10_a274b9a0-0775-44b2-b34f-3199b07a4db4.jpg","타인은 지옥이다",
"https://comic.naver.com/webtoon/list.nhn?titleId=679519&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/679519/thumbnail/title_thumbnail_20160601180804_t83x90.jpg","대학일기",
"https://comic.naver.com/webtoon/list.nhn?titleId=715772&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/715772/thumbnail/thumbnail_IMAG10_45108665-e46e-49f7-9ee5-ded04dbbc6d0.jpg","좀비딸",
"https://comic.naver.com/webtoon/list.nhn?titleId=570506&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/570506/thumbnail/title_thumbnail_20130710192300_t83x90.jpg","최강전설 강해효",
"https://comic.naver.com/webtoon/list.nhn?titleId=710761&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710761/thumbnail/thumbnail_IMAG10_9f8253a1-2318-4c0d-8d9e-f044f2203d4c.jpg","하드캐리",
"https://comic.naver.com/webtoon/list.nhn?titleId=699415&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/699415/thumbnail/thumbnail_IMAG10_64dbd565-a463-4cb8-b4bb-131bd082cc44.jpg","간 떨어지는 동거",
"https://comic.naver.com/webtoon/list.nhn?titleId=131385&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/131385/thumbnail/thumbnail_IMAG10_c5053bcc-3b95-473d-bfe1-e4256bf56b58.jpg","쿠베라",
"https://comic.naver.com/webtoon/list.nhn?titleId=699659&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/699659/thumbnail/thumbnail_IMAG10_e12f7293-375d-4612-87e7-1b1db2dc9fb0.jpg","좋아하는 부분",
"https://comic.naver.com/webtoon/list.nhn?titleId=675554&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/675554/thumbnail/thumbnail_IMAG10_66613407-1041-4f4f-ad8a-1983361f932e.jpg","가우스전자 시즌3~4"
/*"/webtoon/list.nhn?titleId=670144&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/670144/thumbnail/title_thumbnail_20151230192753_t83x90.jpg","가담항설",
"/webtoon/list.nhn?titleId=701700&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/701700/thumbnail/thumbnail_IMAG10_91d1c77b-9ad9-43ce-8299-ed986700c65a.jpg","트롤트랩",
"/webtoon/list.nhn?titleId=703836&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/703836/thumbnail/thumbnail_IMAG10_0b455b43-e9f1-463c-9245-f95df0b37572.jpg","파도를 찾아라!",
"/webtoon/list.nhn?titleId=637931&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/637931/thumbnail/thumbnail_IMAG10_064f190a-2f70-4149-b9af-760bfdede057.jpg","전자오락수호대",
"/webtoon/list.nhn?titleId=703847&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/703847/thumbnail/thumbnail_IMAG10_84e87edb-b292-4d7d-bd7e-c04f1f07de39.jpg","35cm",
"/webtoon/list.nhn?titleId=716857&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/716857/thumbnail/thumbnail_IMAG10_cf1f325d-f0de-452d-a996-7e95cee200f4.jpg","오늘의 순정망화",
"/webtoon/list.nhn?titleId=714293&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/714293/thumbnail/thumbnail_IMAG10_c41a3966-caa6-4dce-8620-5c2fc683be50.jpg","캉타우",
"/webtoon/list.nhn?titleId=707671&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/707671/thumbnail/thumbnail_IMAG10_0d9e9403-412a-4848-9f8c-3f98b49bd2ff.jpg","소유",
"/webtoon/list.nhn?titleId=718018&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/718018/thumbnail/thumbnail_IMAG10_87cf0268-b797-42c7-beac-13234b03eaff.jpg","알고있지만",
"/webtoon/list.nhn?titleId=710639&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710639/thumbnail/thumbnail_IMAG10_b8254d4d-67b7-4f18-867b-1ff63e5f304a.jpg","5kg을 위하여",
"/webtoon/list.nhn?titleId=646358&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/646358/thumbnail/title_thumbnail_20150120174956_t83x90.jpg","백귀야행지",
"/webtoon/list.nhn?titleId=710768&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710768/thumbnail/thumbnail_IMAG10_c369febb-0d09-42b1-9adc-88a0caf3a0d4.jpg","아르마",
"/webtoon/list.nhn?titleId=715935&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/715935/thumbnail/thumbnail_IMAG10_59de051a-22f9-4912-a5b8-d627993835fc.jpg","롤랑롤랑",
"/webtoon/list.nhn?titleId=694805&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/694805/thumbnail/thumbnail_IMAG10_8859cee3-a70b-45ff-b047-04a8be9d2c46.jpg","하나의 하루",
"/webtoon/list.nhn?titleId=693444&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/693444/thumbnail/thumbnail_IMAG10_35e3e217-ec81-4f9c-9bb6-36c2bc956b68.jpg","Doll 체인지",
"/webtoon/list.nhn?titleId=710748&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710748/thumbnail/thumbnail_IMAG10_669c1d34-7e18-4e90-ba56-0acdac0931b9.jpg","호러와 로맨스",
"/webtoon/list.nhn?titleId=670145&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/670145/thumbnail/title_thumbnail_20160105121235_t83x90.jpg","킬더킹",
"/webtoon/list.nhn?titleId=160469&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/160469/thumbnail/title_thumbnail_20100616174201_t83x90.jpg","특수 영능력 수사반",
"/webtoon/list.nhn?titleId=710755&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710755/thumbnail/thumbnail_IMAG10_c5aa159d-596e-417a-a575-efc4c7c06bc2.jpg","그랜드 배틀 토너먼트",
"/webtoon/list.nhn?titleId=703629&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/703629/thumbnail/thumbnail_IMAG10_e92d5bd9-01a6-462a-9bd8-6b8e697875ea.jpg","열대어",
"/webtoon/list.nhn?titleId=710390&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710390/thumbnail/thumbnail_IMAG10_7c16a585-dd55-48a3-b382-4264b7da7dd2.jpg","비둘기가 물고 온 남자"
*/]

var webtoonchartWed=[
  "https://comic.naver.com/webtoon/list.nhn?titleId=651673&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/651673/thumbnail/thumbnail_IMAG10_3c7a2e4c-376e-4856-9f03-6ba554dcd62a.jpg","유미의 세포들",
  "https://comic.naver.com/webtoon/list.nhn?titleId=626907&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/626907/thumbnail/title_thumbnail_20150407141027_t83x90.jpg","복학왕",
  "https://comic.naver.com/webtoon/list.nhn?titleId=662774&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/662774/thumbnail/thumbnail_IMAG10_fddc4c8b-fbe6-422c-9777-590d98f4dc9e.jpg","고수",
  "https://comic.naver.com/webtoon/list.nhn?titleId=667573&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/667573/thumbnail/title_thumbnail_20151120112903_t83x90.jpg","연놈",
  "https://comic.naver.com/webtoon/list.nhn?titleId=670143&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/670143/thumbnail/title_thumbnail_20160108202909_t83x90.jpg","헬퍼 2 : 킬베로스",
  "https://comic.naver.com/webtoon/list.nhn?titleId=710747&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/710747/thumbnail/thumbnail_IMAG10_b1079a8d-2d5e-49df-8f30-05b3e215170b.jpg","세상은 돈과 권력",
  "https://comic.naver.com/webtoon/list.nhn?titleId=718020&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/718020/thumbnail/thumbnail_IMAG10_7c551d69-62f1-4869-b365-88f38a70553f.jpg","귀곡의 문",
  "https://comic.naver.com/webtoon/list.nhn?titleId=703307&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/703307/thumbnail/thumbnail_IMAG10_0c6ab332-3b2b-4d18-bc97-b512c038087a.jpg","신암행어사",
  "https://comic.naver.com/webtoon/list.nhn?titleId=703308&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/703308/thumbnail/thumbnail_IMAG10_33415f77-8f6d-4a14-aec9-fcaa74e20a8a.jpg","신석기녀",
  "https://comic.naver.com/webtoon/list.nhn?titleId=710760&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/710760/thumbnail/thumbnail_IMAG10_c87cd43e-e5a1-4b66-b0c5-c6f9bdbacd51.jpg","이츠마인",
  "https://comic.naver.com/webtoon/list.nhn?titleId=642598&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/642598/thumbnail/title_thumbnail_20160117000448_t83x90.jpg","조선왕조실톡",
  "https://comic.naver.com/webtoon/list.nhn?titleId=603159&weekday=wed","https://shared-comic.pstatic.net/thumb/webtoon/603159/thumbnail/thumbnail_IMAG10_9c8174b9-022f-466f-acd5-1274aecee71c.jpg","레사 시즌2~3"
]
var webtoonchartThu=[
"https://comic.naver.com/webtoon/list.nhn?titleId=570503&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/570503/thumbnail/thumbnail_IMAG10_5719a3fe-81f4-4a0c-8c27-eca1631e8384.jpg","연애혁명",
"https://comic.naver.com/webtoon/list.nhn?titleId=697685&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/697685/thumbnail/thumbnail_IMAG10_f8d868ff-0505-498c-ac37-d11a7f952496.jpg","신과함께 (재)",
"https://comic.naver.com/webtoon/list.nhn?titleId=557672&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/557672/thumbnail/title_thumbnail_20130508182053_t83x90.jpg","기기괴괴",
"https://comic.naver.com/webtoon/list.nhn?titleId=708378&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/708378/thumbnail/thumbnail_IMAG10_a274b9a0-0775-44b2-b34f-3199b07a4db4.jpg","타인은 지옥이다",
"https://comic.naver.com/webtoon/list.nhn?titleId=679519&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/679519/thumbnail/title_thumbnail_20160601180804_t83x90.jpg","대학일기",
"https://comic.naver.com/webtoon/list.nhn?titleId=715772&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/715772/thumbnail/thumbnail_IMAG10_45108665-e46e-49f7-9ee5-ded04dbbc6d0.jpg","좀비딸",
"https://comic.naver.com/webtoon/list.nhn?titleId=570506&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/570506/thumbnail/title_thumbnail_20130710192300_t83x90.jpg","최강전설 강해효",
"https://comic.naver.com/webtoon/list.nhn?titleId=710761&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/710761/thumbnail/thumbnail_IMAG10_9f8253a1-2318-4c0d-8d9e-f044f2203d4c.jpg","하드캐리",
"https://comic.naver.com/webtoon/list.nhn?titleId=699415&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/699415/thumbnail/thumbnail_IMAG10_64dbd565-a463-4cb8-b4bb-131bd082cc44.jpg","간 떨어지는 동거",
"https://comic.naver.com/webtoon/list.nhn?titleId=131385&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/131385/thumbnail/thumbnail_IMAG10_c5053bcc-3b95-473d-bfe1-e4256bf56b58.jpg","쿠베라",
"https://comic.naver.com/webtoon/list.nhn?titleId=699659&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/699659/thumbnail/thumbnail_IMAG10_e12f7293-375d-4612-87e7-1b1db2dc9fb0.jpg","좋아하는 부분",
"https://comic.naver.com/webtoon/list.nhn?titleId=675554&weekday=thu","https://shared-comic.pstatic.net/thumb/webtoon/675554/thumbnail/thumbnail_IMAG10_66613407-1041-4f4f-ad8a-1983361f932e.jpg","가우스전자 시즌3~4"
]

var webtoonchartFri=[
"https://comic.naver.com/webtoon/list.nhn?titleId=318995&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/318995/thumbnail/title_thumbnail_20110407182655_t83x90.jpg","갓 오브 하이스쿨",
"https://comic.naver.com/webtoon/list.nhn?titleId=641253&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/641253/thumbnail/title_thumbnail_20141120112141_t83x90.jpg","외모지상주의",
"https://comic.naver.com/webtoon/list.nhn?titleId=701081&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/701081/thumbnail/thumbnail_IMAG10_7120be5e-b5c7-4727-aba5-cb500c6098ab.jpg","스위트홈",
"https://comic.naver.com/webtoon/list.nhn?titleId=552960&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/552960/thumbnail/title_thumbnail_20130905153649_t83x90.jpg","더 게이머",
"https://comic.naver.com/webtoon/list.nhn?titleId=670149&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/670149/thumbnail/thumbnail_IMAG10_e7b9a026-42a9-447c-a5b5-af0c71626e50.jpg","테러맨",
"https://comic.naver.com/webtoon/list.nhn?titleId=119874&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/119874/thumbnail/title_thumbnail_20150706185233_t83x90.jpg","덴마",
"https://comic.naver.com/webtoon/list.nhn?titleId=651664&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/651664/thumbnail/title_thumbnail_20150326153630_t83x90.jpg","밥 먹고 갈래요?",
"https://comic.naver.com/webtoon/list.nhn?titleId=668101&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/668101/thumbnail/title_thumbnail_20151203204442_t83x90.jpg","결계녀",
"https://comic.naver.com/webtoon/list.nhn?titleId=710754&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/710754/thumbnail/thumbnail_IMAG10_88e596b9-3712-4ff4-95a7-280b663200ae.jpg","화장 지워주는 남자",
"https://comic.naver.com/webtoon/list.nhn?titleId=712362&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/712362/thumbnail/thumbnail_IMAG10_568fc3ff-2c5f-40f9-a8d0-34c3e59fa0a5.jpg","개를 낳았다",
"https://comic.naver.com/webtoon/list.nhn?titleId=675554&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/675554/thumbnail/thumbnail_IMAG10_66613407-1041-4f4f-ad8a-1983361f932e.jpg","가우스전자 시즌3~4",
"https://comic.naver.com/webtoon/list.nhn?titleId=700844&weekday=fri","https://shared-comic.pstatic.net/thumb/webtoon/700844/thumbnail/thumbnail_IMAG10_7511a21d-75f1-4ac8-9d24-df2e89f535b2.jpg","걸어서 30분"
]

var webtoonchartSat=[
"https://comic.naver.com/webtoon/list.nhn?titleId=651673&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/651673/thumbnail/thumbnail_IMAG10_3c7a2e4c-376e-4856-9f03-6ba554dcd62a.jpg","유미의 세포들",
"https://comic.naver.com/webtoon/list.nhn?titleId=597447&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/597447/thumbnail/title_thumbnail_20131102162055_t83x90.jpg","프리드로우",
"https://comic.naver.com/webtoon/list.nhn?titleId=650305&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/650305/thumbnail/title_thumbnail_20161209212128_t83x90.jpg","호랑이형님",
"https://comic.naver.com/webtoon/list.nhn?titleId=670139&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/670139/thumbnail/thumbnail_IMAG10_7293f981-bf32-45ae-b75e-df181b253688.jpg","부활남",
"https://comic.naver.com/webtoon/list.nhn?titleId=703843&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/703843/thumbnail/thumbnail_IMAG10_c587a99e-c3e7-49a4-985a-88c8d950017f.jpg","비질란테",
"https://comic.naver.com/webtoon/list.nhn?titleId=642700&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/642700/thumbnail/title_thumbnail_20141219235553_t83x90.jpg","공복의 저녁식사",
"https://comic.naver.com/webtoon/list.nhn?titleId=670150&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/670150/thumbnail/title_thumbnail_20160122200146_t83x90.jpg","나노리스트",
"https://comic.naver.com/webtoon/list.nhn?titleId=677737&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/677737/thumbnail/title_thumbnail_20160415184239_t83x90.jpg","대가리",
"https://comic.naver.com/webtoon/list.nhn?titleId=703630&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/703630/thumbnail/thumbnail_IMAG10_f0337ccf-b55e-47d9-bb47-131b396f1bb6.jpg","어글리후드",
"https://comic.naver.com/webtoon/list.nhn?titleId=622644&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/622644/thumbnail/title_thumbnail_20150127152059_t83x90.jpg","아메리카노 엑소더스",
"https://comic.naver.com/webtoon/list.nhn?titleId=702672&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/702672/thumbnail/thumbnail_IMAG10_4313f60c-b034-49ae-9edc-877c859b64f3.jpg","노곤하개",
"https://comic.naver.com/webtoon/list.nhn?titleId=682637&weekday=sat","https://shared-comic.pstatic.net/thumb/webtoon/682637/thumbnail/title_thumbnail_20160729190602_t83x90.jpg","놓지마 정신줄 시즌2"
]

var webtoonchartSun=[
"https://comic.naver.com/webtoon/list.nhn?titleId=708378&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/708378/thumbnail/thumbnail_IMAG10_a274b9a0-0775-44b2-b34f-3199b07a4db4.jpg","타인은 지옥이다",
"https://comic.naver.com/webtoon/list.nhn?titleId=697656&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/697656/thumbnail/thumbnail_IMAG10_7d08e994-e6e9-437f-9001-e3cd28892a8a.jpg","조의 영역",
"https://comic.naver.com/webtoon/list.nhn?titleId=670152&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/670152/thumbnail/title_thumbnail_20160122210643_t83x90.jpg","열렙전사",
"https://comic.naver.com/webtoon/list.nhn?titleId=710751&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/710751/thumbnail/thumbnail_IMAG10_eed99ea4-5908-4445-b89a-d3881797f909.jpg","약한영웅",
"https://comic.naver.com/webtoon/list.nhn?titleId=651617&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/651617/thumbnail/thumbnail_IMAG10_6e112c5d-a48f-4eca-9e0f-b8f8fb048346.jpg","연애의 정령",
"https://comic.naver.com/webtoon/list.nhn?titleId=557676&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/557676/thumbnail/thumbnail_IMAG10_e44c2148-c07b-4ccb-b53a-1fee1c6e2122.jpg","다이스(DICE)",
"https://comic.naver.com/webtoon/list.nhn?titleId=699658&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/699658/thumbnail/thumbnail_IMAG10_7a3fecc7-6bcf-4fcd-b1cb-101e8b480480.jpg","오늘도 사랑스럽개",
"https://comic.naver.com/webtoon/list.nhn?titleId=119874&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/119874/thumbnail/title_thumbnail_20150706185233_t83x90.jpg","덴마",
"https://comic.naver.com/webtoon/list.nhn?titleId=703307&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/703307/thumbnail/thumbnail_IMAG10_0c6ab332-3b2b-4d18-bc97-b512c038087a.jpg","신암행어사",
"https://comic.naver.com/webtoon/list.nhn?titleId=642598&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/642598/thumbnail/title_thumbnail_20160117000448_t83x90.jpg","조선왕조실톡",
"https://comic.naver.com/webtoon/list.nhn?titleId=655746&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/655746/thumbnail/thumbnail_IMAG10_0a5175a6-514f-47f8-8d70-6d3893d396c0.jpg","마법스크롤 상인 지오",
"https://comic.naver.com/webtoon/list.nhn?titleId=698469&weekday=sun","https://shared-comic.pstatic.net/thumb/webtoon/698469/thumbnail/thumbnail_IMAG10_890975d8-f226-4e26-87b2-a002af9c9ebf.jpg","언원티드"
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

var entertainmentschart=[
"https://tv.naver.com/v/4666090","https://phinf.pstatic.net/tvcast/20181201_99/fSRHc_1543651005715tVwxB_PNG/T9201812010019.PNG?type=nfc184_104_q90","키 · 센 척 안 해(KEY · One of Those Nigh",
"https://tv.naver.com/v/4666064","https://phinf.pstatic.net/tvcast/20181201_278/NxmR4_1543650705659hKdI8_JPEG/T9201812010018.jpg?type=nfc184_104_q90","키 · Good Good(KEY · Good Good",
"https://tv.naver.com/v/4666063","https://phinf.pstatic.net/tvcast/20181201_285/CUN1b_1543650703392mAkkC_JPEG/T9201812010017.jpg?type=nfc184_104_q90","레드벨벳 ·  RBB(Red Velvet · Really Bad",
"https://tv.naver.com/v/4666030","https://phinf.pstatic.net/tvcast/20181201_27/93OWD_1543650103129VwAPn_JPEG/T9201812010014.jpg?type=nfc184_104_q90","워너원 ·  봄바람(Wanna One · Spring Breez",
"https://tv.naver.com/v/4665980","https://phinf.pstatic.net/tvcast/20181201_187/3Ky6N_1543649509839Pedgn_PNG/T9201812010013.PNG?type=nfc184_104_q90","워너원·  술래(Wanna One · Hide and Seek)",
"https://tv.naver.com/v/4665979","https://phinf.pstatic.net/tvcast/20181201_282/adg5D_1543649502283husKE_PNG/T9201812010012.PNG?type=nfc184_104_q90","제니 ·  SOLO(JENNIE · SOLO",
"https://tv.naver.com/v/4665953","https://phinf.pstatic.net/tvcast/20181201_209/bKXWO_1543649204801lqHvn_PNG/T9201812010011.PNG?type=nfc184_104_q90","송민호 - 아낙네(MINO - FIANCÉ",
"https://tv.naver.com/v/4665939","https://phinf.pstatic.net/tvcast/20181201_185/2pmxU_15436489308173Icpc_PNG/T9201812010010.PNG?type=nfc184_104_q90","송민호 - 어울려요(MINO - Her",
"https://tv.naver.com/v/4665938","https://phinf.pstatic.net/tvcast/20181201_77/Nxpw4_15436489031881PksP_PNG/T9201812010009.PNG?type=nfc184_104_q90","뉴이스트 - HELP ME(NU`EST W  - HELP ME)",
"https://tv.naver.com/v/4665918","https://phinf.pstatic.net/tvcast/20181201_134/shFNG_1543648606602x5H16_PNG/T9201812010008.PNG?type=nfc184_104_q90","이엑스아이디 - 알러뷰(EXID -  I LOVE YOU",
"https://tv.naver.com/v/4665917","https://phinf.pstatic.net/tvcast/20181201_254/UbDJh_1543648600116wOhOX_PNG/T9201812010007.PNG?type=nfc184_104_q90","마마무 -  Wind Flower(MAMAMOO  - Wind ",
"https://tv.naver.com/v/4665891","https://phinf.pstatic.net/tvcast/20181201_22/9L1CO_1543648305398xvjzS_PNG/T9201812010006.PNG?type=nfc184_104_q90","엔시티 127 -  Simon Says(NCT 127 - Sim",
"https://tv.naver.com/v/4665851","https://phinf.pstatic.net/tvcast/20181201_120/C9Q9G_1543647701872iw7AS_PNG/T9201812010005.PNG?type=nfc184_104_q90","러블리즈 - 찾아가세요(Lovelyz - Lost N Found",
"https://tv.naver.com/v/4665856","https://phinf.pstatic.net/tvcast/20181201_164/GXTTt_1543647764734bcAB3_PNG/T9201812010004.PNG?type=nfc184_104_q90","더보이즈 -  No Air(THE BOYZ  -  No Air)",
"https://tv.naver.com/v/4665831","https://phinf.pstatic.net/tvcast/20181201_272/naI0Q_1543647403058FqMut_PNG/T9201812010003_1.PNG?type=nfc184_104_q90","스트레이 키즈 -  Get(Stray Kids  - Get Co",
"https://tv.naver.com/v/4665808","https://phinf.pstatic.net/tvcast/20181201_14/QFrPo_1543647102822OxSAF_PNG/T9201812010002.PNG?type=nfc184_104_q90","네이처 -  썸(NATURE  -  Youll Be Mine",
"https://tv.naver.com/v/4664053","https://phinf.pstatic.net/tvcast/20181201_226/fYOvo_1543626129175iu8oB_JPEG/1543626101541.jpg?type=nfc184_104_q90","[선공개] ※심멎주의※ 열정 가득한 워너원의 '롤리폴리' 댄스♬",
"https://tv.naver.com/v/4663889","https://phinf.pstatic.net/tvcast/20181201_186/PIRlK_1543622563508tKSoH_JPEG/B120180884_EPI0006_31_B.jpg?type=nfc184_104_q90","★미공개 대방출★ 깨발랄 넘치는 홍보 사진 촬영",


]


var moviechart=[
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=97612","https://movie-phinf.pstatic.net/20180927_158/1538023433590U7S2w_JPEG/movie_image.jpg?type=m99_141_2","그랜드 부다페스트 호텔",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=154255","https://movie-phinf.pstatic.net/20181029_21/1540774701820gU85o_JPEG/movie_image.jpg?type=m99_141_2","신비한 동물들과 그린델왈드의 범죄",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=156464","https://movie-phinf.pstatic.net/20181031_68/1540952503496fNRsF_JPEG/movie_image.jpg?type=m99_141_2","보헤미안 랩소디",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=71760","https://movie-phinf.pstatic.net/20181019_192/1539926516385x2hHY_JPEG/movie_image.jpg?type=m99_141_2","청설",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=176354","https://movie-phinf.pstatic.net/20181109_286/1541743345207CtoXg_JPEG/movie_image.jpg?type=m99_141_2","번 더 스테이지: 더 무비",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=155356","https://movie-phinf.pstatic.net/20181011_124/15392221324972UPeA_JPEG/movie_image.jpg?type=m99_141_2","미쓰백",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=158626","https://movie-phinf.pstatic.net/20180307_227/15203992433853TIaa_JPEG/movie_image.jpg?type=m99_141_2","셰이프 오브 워터: 사랑의 모양",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=144906","https://movie-phinf.pstatic.net/20181031_264/1540949415228uy0j3_JPEG/movie_image.jpg?type=m99_141_2","베일리 어게인",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=160487","https://movie-phinf.pstatic.net/20181001_87/15383614506431bq1D_JPEG/movie_image.jpg?type=m99_141_2","창궐",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=167638","https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg?type=m99_141_2","완벽한 타인",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=179139","https://movie-phinf.pstatic.net/20181022_106/1540170285123a57tG_JPEG/movie_image.jpg?type=m99_141_2","출국",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=76667","https://movie-phinf.pstatic.net/20111223_289/1324622149942dtKyL_JPEG/movie_image.jpg?type=m99_141_2","울지마 톤즈",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=164192","https://movie-phinf.pstatic.net/20181105_232/1541392865465aVb5V_JPEG/movie_image.jpg?type=m99_141_2","국가부도의 날",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=152156","https://movie-phinf.pstatic.net/20181005_242/1538714564568GYBzR_JPEG/movie_image.jpg?type=m99_141_2","원더풀 고스트",
  "https://movie.naver.com/movie/bi/mi/basic.nhn?code=155123","https://movie-phinf.pstatic.net/20161103_256/1478160313724rHuDS_JPEG/movie_image.jpg?type=m99_141_2","미스 사이공: 25주년 특별 공연"

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
        case 'entertainment':
          document.write(`
            <li><a href="${dir_page}sports.html">연예</a>
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
makechartwebtoonMon:function(){
    var i=0;


    while(1){
    document.write(`
      <a href="${webtoonchartMon[i]}" class="filmchart_grid_item" style="text-decoration:none;">
        <img src="${webtoonchartMon[i+1]}" alt="${webtoonchartMon[i+2]}">
        <h3 class="webtoon">${webtoonchartMon[i+2]}</h3>
      </a>
      `);
      i+=3;
      if(i==36)break;
}
}
,
makechartwebtoonTue:function(){
  var i=0;


  while(1){
  document.write(`
    <a href="${webtoonchartTue[i]}" class="filmchart_grid_item" style="text-decoration:none;">
      <img src="${webtoonchartTue[i+1]}" alt="${webtoonchartTue[i+2]}">
      <h3 class="webtoon">${webtoonchartTue[i+2]}</h3>
    </a>
    `);
    i+=3;
    if(i==36)break;
}
}
,
makechartwebtoonThu:function(){
  var i=0;


  while(1){
  document.write(`
    <a href="${webtoonchartThu[i]}" class="filmchart_grid_item" style="text-decoration:none;">
      <img src="${webtoonchartThu[i+1]}" alt="${webtoonchartThu[i+2]}">
      <h3 class="webtoon">${webtoonchartThu[i+2]}</h3>
    </a>
    `);
    i+=3;
    if(i==36)break;
}
}
,
makechartwebtoonWed:function(){
  var i=0;


  while(1){
  document.write(`
    <a href="${webtoonchartWed[i]}" class="filmchart_grid_item" style="text-decoration:none;">
      <img src="${webtoonchartWed[i+1]}" alt="${webtoonchartWed[i+2]}">
      <h3 class="webtoon">${webtoonchartWed[i+2]}</h3>
    </a>
    `);
    i+=3;
    if(i==36)break;
}
}
,
makechartwebtoonFri:function(){
  var i=0;


  while(1){
  document.write(`
    <a href="${webtoonchartFri[i]}" class="filmchart_grid_item" style="text-decoration:none;">
      <img src="${webtoonchartFri[i+1]}" alt="${webtoonchartFri[i+2]}">
      <h3 class="webtoon">${webtoonchartFri[i+2]}</h3>
    </a>
    `);
    i+=3;
    if(i==36)break;
}
}
,
makechartwebtoonSat:function(){
  var i=0;


  while(1){
  document.write(`
    <a href="${webtoonchartSat[i]}" class="filmchart_grid_item" style="text-decoration:none;">
      <img src="${webtoonchartSat[i+1]}" alt="${webtoonchartSat[i+2]}">
      <h3 class="webtoon">${webtoonchartSat[i+2]}</h3>
    </a>
    `);
    i+=3;
    if(i==36)break;
}
}
,
makechartwebtoonSun:function(){
  var i=0;


  while(1){
  document.write(`
    <a href="${webtoonchartSun[i]}" class="filmchart_grid_item" style="text-decoration:none;">
      <img src="${webtoonchartSun[i+1]}" alt="${webtoonchartSun[i+2]}">
      <h3 class="webtoon">${webtoonchartSun[i+2]}</h3>
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

,
    makechartentertainment:function(){
  var i=0;
  while(1){
document.write(`
    <a href="${entertainmentschart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
    <img src="${entertainmentschart[i+1]}" alt="${entertainmentschart[i+2]}">
    <h3 class="entertainment">${entertainmentschart[i+2]}</h3>
  </a>
  `);
  i+=3;
  if(i==54)break;
}
},
  
makechartmovie:function(){
  var i=0;
  while(1){
document.write(`
    <a href="${moviechart[i]}" class="filmchart_grid_item" style="text-decoration:none;">
    <img src="${moviechart[i+1]}" alt="${moviechart[i+2]}">
    <h3 class="entertainment">${moviechart[i+2]}</h3>
  </a>
  `);
  i+=3;
  if(i==45)break;
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
