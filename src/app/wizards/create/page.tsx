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

export default function Page() {
	const addWizard = useWizardsStore((state) => state.addWizard);
	const { back } = useRouter();

	const onSubmit = (values: WizardFormValues) => {
		addWizard(values);
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
						<BreadcrumbLink>Novo wizard</BreadcrumbLink>
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
					/>
				</CardContent>
			</Card>
		</>
	)
}
