import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ComponentsValues } from "../schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

interface Props {
	componentForm: UseFormReturn<ComponentsValues>;
}

export function ListTypeComponent({ componentForm }: Props) {
	const items = componentForm.watch("items");

	const addItem = () => {
		componentForm.setValue("items", [...(items ?? []), ""]);
	};

	const removeItem = (index: number) => {
		const items = componentForm.getValues("items");
		items?.splice(index, 1);
		componentForm.setValue("items", items);
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
						Lista
					</h1>
					<Button
						onClick={addItem}
						variant='outline'
						size='sm'
						type="button"
					>
						Adicionar item
					</Button>
				</div>


				{items?.map((item, index) => (
					<div
						key={index}
						className="flex flex-row justify-center items-center gap-4 w-full"
					>
						<XCircle onClick={() => removeItem(index)} className="w-4 stroke-red-500 cursor-pointer" />
						<FormField
							control={componentForm.control}
							name={`items.${index}`}
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>
										Item
									</FormLabel>
									<FormControl>
										<Input autoComplete="off" placeholder="item" {...field} />
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
