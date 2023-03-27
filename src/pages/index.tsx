import type { NextPage } from "next";

/*
1.  목록 불러오기
  - API : https://stage-backend.heyseller.kr/api/v1/product/list GET
  - Req DTO: SearchProductListDTO
  - Res DTO :  PaginationResDTO<SimpleProductDTO>

  - 상품 아이템의 렌더링은 아래와 같이 해주시면 됩니다.
  ---------------------------------------------------------
  |   이미지   상품명                                편집버튼|           
  ---------------------------------------------------------|
  - 페이지네이션은 구현안하셔도 됩니다.

2. 목록에서 바로 상품명 수정할 수 있게 구현하기
 - 상품명 수정 시 1초 딜레이 후 상품 업데이트 API 요청
    - API : https://stage-backend.heyseller.kr/api/v1/product/:productId PUT
    - Req DTO : UpdateProductDTO
 - *상품명 수정 시 다른 상품 리렌더링되지 않아야 합니다.

3. 팝업 열기
- 상품 편집 버튼을 누르면 상품명을 수정할 수 있는 팝업 보여줘야합니다.
*/

const MainPage: NextPage = () => {
  return <div></div>;
};

export default MainPage;
