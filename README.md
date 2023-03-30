과제내용과 DTO 첨부해드립니다.
API 호출 시ReactQuery와 Axios 이용해주셔야 합니다.

구현 내용
## 1. 로그인하기
    API : https://stage-backend.heyseller.kr/api/v1/auth/login POST
    - Req DTO : LoginDTO  ( name : rapid , password : rapid123! )
  - 로그인 성공 시 access_token 토큰이 반환됩니다.
  - 토큰을 원하는 곳에 저장하신 뒤 메인페이지(Route : /)로 이동시켜주세요.
  - 2번 문제부터 API 호출 시 header Authorization에 `Bearer ${토큰}` 를 넣어주셔야 합니다.

## 2. 목록 불러오기
    API : https://stage-backend.heyseller.kr/api/v1/product/list GET
    - Req DTO: SearchProductListDTO
    - Res DTO :  PaginationResDTO<SimpleProductDTO>
  - 상품 아이템의 렌더링은 아래와 같이 해주시면 됩니다.
   ---------------------------------------------------------
   |   이미지   상품명                                편집버튼|            
   ---------------------------------------------------------|
 - 페이지네이션은 구현안하셔도 됩니다.

## 3. 목록에서 바로 상품명 수정할 수 있게 구현하기
 - 상품명 수정 시 1초 딜레이 후 상품 업데이트 API 요청
      API : https://stage-backend.heyseller.kr/api/v1/product/:productId PUT
       - Req DTO : UpdateProductDTO
 - **상품명 수정 시 다른 상품이 리렌더링이 되면 안됩니다.**


## 4. 상품 편집
  - 상품 편집 버튼을 누르면 상품명을 수정할 수 있는 모달을 보여줍니다.
  - **모든 모달은 ESC버튼을 누르면 최상단 팝업만 닫혀야 합니다.**
  - 모달에는 이미지(selectedThumbnailUrl), 상품명 Input, 수정버튼이 있어야합니다.
  - 수정버튼을 누르면 업데이트 API를 요청합니다.
  
        API : https://stage-backend.heyseller.kr/api/v1/product/:productId PUT
        Req DTO : UpdateProductDTO
  - API가 정상적으로 반환되면 팝업을 닫고 해당 상품을 리렌더링 시켜줍니다.
  - 수정한 상품명이 반영돼야합니다.


## 5. 상품 이미지 클릭시 이미지 모달 열리기
   - 상품 이미지 클릭시 이미지 모달이 열립니다.
   - 모달은 레이어처럼 여러개 열 수 있어야합니다. ( 메인페이지 위에 상품 편집 모달 위에 이미지 편집 모달)
   - 이미지 모달은 이미지만 보여주면 됩니다.
   - 오른족 상단에 모달을 닫을 수 있는 x 버튼이 있어야합니다.
   - **모든 팝업은 ESC버튼을 누르면 최상단 팝업만 닫혀야 합니다.**
  
