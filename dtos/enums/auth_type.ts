export const AUTH_TYPE = {
  REGISTER: 'REGISTER',
  FIND_ID_EMAIL: 'FIND_ID_EMAIL',
  FIND_ID_PHONE: 'FIND_ID_PHONE',
  RENEW_PW_EMAIL: 'RENEW_PW_EMAIL',
  RENEW_PW_PHONE: 'RENEW_PW_PHONE',
};

export type AUTH_TYPE = typeof AUTH_TYPE[keyof typeof AUTH_TYPE];
