export const RegisterSchema = {
  type: 'object',
  required: ['email', 'password', 'confirmPassword'],
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8 },
    confirmPassword: {
      type: 'string',
      minLength: 8,
      const: { $data: '1/password' },
      errorMessage: {
        const: 'must be equal to password',
      },
    },
  },
  additionalProperties: false,
} as const
