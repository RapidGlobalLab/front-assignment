import type { NextPage } from "next";
import { FC } from "react";

/*
  1. 상품 편집
  - 팝업에는 이미지(selectedThumbnailUrl), 상품명 Input, 수정버튼이 있어야합니다.
  - 수정버튼을 누르면 업데이트 API를 요청합니다.
  - API : https://stage-backend.heyseller.kr/api/v1/product/:productId PUT
  - Req DTO : UpdateProductDTO
  - API가 정상적으로 반환되면 팝업을 닫고 목록에서 해당 상품을 리렌더링 시켜줍니다.
  - 이떄 수정한 상품명이 반영돼야합니다.

  2. 상품 이미지 클릭시 이미지 팝업 열리기
  - 상품 이미지 클릭시 이미지 팝업이 열립니다.

  3. 모든 팝업은 ESC버튼을 누르면 최상단 팝업만 닫혀야 합니다.
*/

interface IProps {}

const EditPopup: FC<IProps> = () => {
  return <div></div>;
};

export default EditPopup;
