/** 특수문자 포함하지 않는 ID */
export const validateUserId = (userId: string): boolean => {
  return /^[A-Za-z\d]+$/.test(userId);
};

/** 특수문자 포함 8자리 이상 비밀번호 */
export const validatePassword = (password: string): boolean => {
  return /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
};
