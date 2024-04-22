import { ResponsiveDrawer } from '@/components/layout/responsive-drawer'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormReturn, useForm } from 'react-hook-form'
import { ComponentTypes, ComponentsSchema, ComponentsValues, PageFormValues } from '../schema'
import { Form } from "@/components/ui/form"
import { InputTypeComponent } from './add-input'
import { ButtonTypeComponent } from './add-button'
import { DropdonwTypeComponent } from './add-dropdown'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ListTypeComponent } from './add-list'

interface Props {
	componentType: ComponentTypes;
	pageForm: UseFormReturn<PageFormValues>;
}

export function AddComponent({ componentType, pageForm }: Props) {
	const [open, setOpen] = useState(false);
	const componentForm = useForm<ComponentsValues>({
		resolver: zodResolver(ComponentsSchema),
		defaultValues: {
			type: componentType,
			name: "",
			label: "",
		},
	});

	const onSubmit = (data: ComponentsValues) => {
		pageForm.setValue("components", [...(pageForm.getValues("components") ?? []), data]);
		componentForm.reset();
		setOpen(false);
	};

	return (
		<ResponsiveDrawer
			open={open}
			setOpen={setOpen}
			title={`Adicionar ${componentType}`}
			trigger={<Button variant="secondary" type="button" size="sm" className='text-xs'>
				<Plus className='mr-2 w-2 h-2' /> {componentType}
			</Button>}
			content={(
				<Form {...componentForm}>
					<form className="space-y-4 px-4 pb-4">
						{componentType === "input" && <InputTypeComponent componentForm={componentForm} />}
						{componentType === "button" && <ButtonTypeComponent componentForm={componentForm} />}
						{componentType === "dropdown" && <DropdonwTypeComponent componentForm={componentForm} />}
						{componentType === "list" && <ListTypeComponent componentForm={componentForm} />}
						<Button
							onClick={componentForm.handleSubmit(onSubmit)}
							type="button"
						>
							Adicionar
						</Button>
					</form>
				</Form>
			)}
		/>
	)
}
