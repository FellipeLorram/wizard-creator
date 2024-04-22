import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ComponentsValues } from "../schema";
import { Input } from "@/components/ui/input";

interface Props {
	componentForm: UseFormReturn<ComponentsValues>;
}

export function ButtonTypeComponent({ componentForm }: Props) {
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
		</>
	)
}