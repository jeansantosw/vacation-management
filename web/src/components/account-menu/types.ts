import z from 'zod'

export const commercialStoreProfileDialogFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

export type TCommercialStoreProfileDialogForm = z.infer<
  typeof commercialStoreProfileDialogFormSchema
>
