'use client';

import { useWizardsStore } from "@/store/wizards";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { PenLine } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
	id: number
}

export function Wizard({ id }: Props) {
	const wizard = useWizardsStore(state => state.getWizard(id));
	const { push } = useRouter();

	return (
		<Card>
			<CardHeader>
				<div className="flex flex-row justify-between items-center">
					<CardTitle>{wizard.name}</CardTitle>
					<Link
						className={buttonVariants({
							variant: 'outline'
						})}
						href={`/wizards/${wizard.id}/edit`}
					>
						<PenLine className="w-4 h-4" />
					</Link>
				</div>
				<CardDescription>
					{wizard.orientation}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button
					onClick={() => push(`/wizards/${wizard.id}/render`)}
					disabled={wizard?.pages?.length === 0}
				>
					Visualizar wizard
				</Button>
			</CardContent>
		</Card>
	)
}
