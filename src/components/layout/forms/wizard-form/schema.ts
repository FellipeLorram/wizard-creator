import { z } from "zod";

export const WizardFormSchema = z.object({
	name: z.string().min(1, {
		message: "O nome do wizard é obrigatório",
	}),
	orientation: z.enum(["vertical", "horizontal"]),
});

export type WizardFormValues = z.infer<typeof WizardFormSchema>;
