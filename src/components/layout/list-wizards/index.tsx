'use client';

import { useWizardsStore } from '@/store/wizards';
import { EmptyWizardsList } from './empty-wizards-list';
import { WizardCard } from './wizard-card';

export function ListWizards() {
	const wizards = useWizardsStore((state) => state.wizards)

	if (wizards.length === 0) return <EmptyWizardsList />

	return (
		<div data-test-id="cypress-wizard-list" className='grid grid-cols-1 md:grid-cols-3'>
			{wizards.map((wizard) => <WizardCard key={wizard.name} wizard={wizard} />)}
		</div>
	)
}
