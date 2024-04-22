import { Wizard } from '@/entities/wizard'
import Link from 'next/link'

interface Props {
	wizard: Wizard
}

export function WizardCard({ wizard }: Props) {
	const pagesCount = wizard.pages?.length ?? 0;

	return (
		<Link
			href={`/wizards/${wizard.id}`}
			className='flex flex-col rounded-md border p-4'
		>
			<div className='flex flex-row justify-between items-center'>
				<h3 className='text-lg font-semibold'>{wizard.name}</h3>
				<p className='text-sm text-muted-foreground'>{wizard.orientation}</p>
			</div>
			<p className='text-muted-foreground'>
				{pagesCount} {pagesCount === 1 ? 'página' : 'páginas'}
			</p>
		</Link>
	)
}
