import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function EmptyWizardsList() {
	return (
		<div data-test-id="cypress-wizard-list" className="flex flex-col items-center justify-center h-80 border border-dashed rounded-md">
			<p className="text-muted-foreground mb-4">
				Nenhum wizard encontrado
			</p>
			<Link
				data-test-id="cypress-create-wizard-button-empty-list"
				className={buttonVariants({
					variant: "secondary"
				})}
				href="/wizards/create"
			>
				Crie seu primeiro wizard
			</Link>
		</div>
	)
}