import { z } from 'zod'

export const signinFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type TSigninForm = z.infer<typeof signinFormSchema>
