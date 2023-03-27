import type { NextPage } from "next";

/*
  - API : https://stage-backend.heyseller.kr/api/v1/auth/login POST
  - Req DTO : LoginDTO  ( name : t , password : t )
  - 로그인 성공 시 access_token 토큰이 반환됩니다.
  - 토큰을 원하는 곳에 저장하신 뒤 메인페이지(Route : /)로 이동시켜주세요.
  - 로그인 API를 제외한 모든 API 호출 시 header Authorization에 `Bearer ${토큰}` 를 넣어주셔야 합니다.
*/

const LoginPage: NextPage = () => {
  return <div></div>;
};

export default LoginPage;
