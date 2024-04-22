'use client';

import { WizardForm } from '@/components/layout/forms/wizard-form'
import type { WizardFormValues } from '@/components/layout/forms/wizard-form/schema'
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useWizardsStore } from '@/store/wizards';
import { SlashIcon } from 'lucide-react'
import { useRouter } from 'next/navigation';

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const wizard = useWizardsStore(state => state.getWizard(Number(params.id)));
	const updateWizard = useWizardsStore((state) => state.updateWizard);
	const { back } = useRouter();

	const onSubmit = (values: WizardFormValues) => {
		updateWizard(Number(params.id), values);
		back();
	}

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<SlashIcon />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink>{wizard.name}</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<Card>
				<CardHeader>
					<CardTitle>
						Novo wizard
					</CardTitle>
				</CardHeader>
				<CardContent>
					<WizardForm
						onSubmit={onSubmit}
						defaultValues={wizard}
					/>
				</CardContent>
			</Card>
		</>
	)
}
