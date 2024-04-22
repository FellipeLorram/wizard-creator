import { z } from "zod";

const componentTypes = z.enum(["input", "dropdown", "list", "button"]);

export const ComponentsSchema = z.object({
	type: componentTypes,
	name: z.string(),
	label: z.string(),
	placeholder: z.string().optional(),
	options: z.array(z.object({
		value: z.string(),
		label: z.string(),
	})).optional(),
	items: z.array(z.string()).optional(),
}).refine((data) => {
	if (data.type === "dropdown") return data.options !== undefined;
	if (data.type === "list") return data.items !== undefined;
	if (data.type === "input") return data.label !== undefined;
	return true;
});

export const PageFormSchema = z.object({
	name: z.string().min(1, {
		message: "O nome da página é obrigatória",
	}),
	components: z.array(ComponentsSchema),
});

export type PageFormValues = z.infer<typeof PageFormSchema>;
export type ComponentsValues = z.infer<typeof ComponentsSchema>;
export type ComponentTypes = z.infer<typeof componentTypes>;