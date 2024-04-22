'use client';

import { CircleDashed, Trash } from "lucide-react"
import { useForm } from "react-hook-form"
import { PageFormSchema, type PageFormValues } from "./schema"

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddComponent } from "./add-component-drawer";
import { RenderComponent } from "../../render-component";

interface Props {
	onSubmit: (values: PageFormValues) => void;
	isLoading?: boolean;
	defaultValues?: PageFormValues;
}

export function PageForm({
	onSubmit,
	defaultValues,
	isLoading
}: Props) {
	const form = useForm<PageFormValues>({
		resolver: zodResolver(PageFormSchema),
		defaultValues: defaultValues ?? {
			name: "",
			components: [],
		},
	});

	const components = form.watch("components");

	const handleRemoveComponent = (index: number) => {
		const components = form.getValues("components");
		components.splice(index, 1);
		form.setValue("components", components);
	}

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
								Nome da página
							</FormLabel>
							<FormControl>
								<Input autoComplete="off" placeholder="nome da página" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Card>
					<CardHeader className="">
						<CardTitle>
							Componentes
						</CardTitle>
						<div className="flex flex-row gap-2 flex-wrap">
							<AddComponent pageForm={form} componentType="input" />
							<AddComponent pageForm={form} componentType="dropdown" />
							<AddComponent pageForm={form} componentType="list" />
							<AddComponent pageForm={form} componentType="button" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="p-4 border rounded-md space-y-4">
							{components?.map((component, index) => (
								<div
									className="flex flex-row gap-4 items-center justify-start"
									key={index}
									>
									<Trash
										onClick={() => handleRemoveComponent(index)}
										className="w-4 stroke-red-500 cursor-pointer"
									/>
									<RenderComponent
										component={component}
									/>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

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
