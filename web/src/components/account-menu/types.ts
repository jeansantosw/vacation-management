import z from 'zod'

export const profileDialogFormSchema = z.object({
  name: z.string().nullable(),
  email: z.string().nullable(),
  password: z.string().nullable().optional(),
})

export type TprofileDialogForm = z.infer<typeof profileDialogFormSchema>
