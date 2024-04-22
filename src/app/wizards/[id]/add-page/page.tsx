'use client';
import { SlashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWizardsStore } from "@/store/wizards";

import { PageForm } from "@/components/layout/forms/page-form";
import { PageFormValues } from "@/components/layout/forms/page-form/schema";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const { push } = useRouter();
	const addPage = useWizardsStore(state => state.addPage);
	
	const onSubmit = (values: PageFormValues) => {
		addPage(Number(params.id), values);
		push(`/wizards/${params.id}`);
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
						<BreadcrumbLink href={`/wizards/${params.id}`}>
							{params.id}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<SlashIcon />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink>
							Nova página
						</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<Card>
				<CardHeader>
					<CardTitle>
						Nova página
					</CardTitle>
				</CardHeader>
				<CardContent>
					<PageForm
						onSubmit={onSubmit}
					/>
				</CardContent>
			</Card>
		</>
	)
}
