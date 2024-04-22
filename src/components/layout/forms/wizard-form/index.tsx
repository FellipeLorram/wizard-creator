'use client';

import { CircleDashed } from "lucide-react"
import { useForm } from "react-hook-form"
import { WizardFormSchema, type WizardFormValues } from "./schema"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Props {
	onSubmit: (values: WizardFormValues) => void;
	isLoading?: boolean;
	defaultValues?: WizardFormValues;
}

export function WizardForm({
	onSubmit,
	defaultValues,
	isLoading
}: Props) {
	const form = useForm<WizardFormValues>({
		resolver: zodResolver(WizardFormSchema),
		defaultValues: defaultValues ?? {
			name: "",
			orientation: "vertical",
		},
	})

	return (
		<Form {...form}>
			<form
				className="space-y-4"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>
								Nome do Wizard
							</FormLabel>
							<FormControl>
								<Input autoComplete="off" placeholder="wizard-one" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="orientation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Orientação</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="selecione a orientação do wizard" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="vertical">Vertical</SelectItem>
									<SelectItem value="horizontal">Horizontal</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex flex-row justify-end">
					<Button
						className="w-full md:w-auto"
						type="submit"
						disabled={isLoading}
					>
						{isLoading && <CircleDashed className="w-4 animate-spin mr-2" />}
						{defaultValues ? "Atualizar" : "Criar"}
					</Button>
				</div>

			</form>
		</Form>
	)
}
