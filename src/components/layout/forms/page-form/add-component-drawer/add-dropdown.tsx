import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ComponentsValues } from "../schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash, XCircle } from "lucide-react";

interface Props {
	componentForm: UseFormReturn<ComponentsValues>;
}

export function DropdonwTypeComponent({ componentForm }: Props) {
	const options = componentForm.watch("options");

	const addOption = () => {
		componentForm.setValue("options", [...(options ?? []), { label: "", value: "" }]);
	};

	const removeOption = (index: number) => {
		const options = componentForm.getValues("options");
		options?.splice(index, 1);
		componentForm.setValue("options", options);
	};

	return (
		<>
			<FormField
				control={componentForm.control}
				name="name"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel>
							Nome
						</FormLabel>
						<FormControl>
							<Input autoComplete="off" placeholder="nome" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={componentForm.control}
				name="label"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel>
							Label
						</FormLabel>
						<FormControl>
							<Input autoComplete="off" placeholder="label" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<div className='border p-4 rounded-md space-y-2 max-h-80 overflow-auto'>
				<div className='flex flex-row gap-4 justify-between'>
					<h1 className='text-lg font-semibold mb-2'>
						Opções
					</h1>
					<Button
						onClick={addOption}
						variant='outline'
						size='sm'
						type="button"
					>
						Adicionar opção
					</Button>
				</div>

				{options?.map((_, index) => (
					<div
						key={index}
						className='w-full flex flex-row items-center gap-4'
					>
						<Trash onClick={() => removeOption(index)} className="w-8 h-8 stroke-red-500 cursor-pointer" />

						<FormField
							control={componentForm.control}
							name={`options.${index}.label`}
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>
										Nome
									</FormLabel>
									<FormControl>
										<Input autoComplete="off" placeholder="nome" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={componentForm.control}
							name={`options.${index}.value`}
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>
										Valor
									</FormLabel>
									<FormControl>
										<Input autoComplete="off" placeholder="valor" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				))}
			</div>

		</>
	)
}
