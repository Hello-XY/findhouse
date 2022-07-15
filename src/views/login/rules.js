export const usernameRules = [
  { required: true, message: '请输入账号' },
  {
    pattern: /^[0-9A-Za-z]{5,8}$/,
    message: '用户名格式5-8位的字母和数字'
  }
]

export const passwordRules = [{ required: true, message: '请输入密码' }]
