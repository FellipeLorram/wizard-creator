'use client';

import { useWizardsStore } from "@/store/wizards";
import { EmptyPagesList } from "./empty-pages-list";

interface Props {
	wizardId: number
}

export function ListPages({ wizardId }: Props) {
	const pages = useWizardsStore(state => state.getPages(wizardId));

	if (pages.length === 0) return <EmptyPagesList />

	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 border border-dashed'>
			{pages.map(page => (
				<div key={page.id} className='border p-4 rounded-md'>
					<p>{page.name}</p>
					<p className="text-sm text-muted-foreground">
						componentes {page.components.length}
					</p>
				</div>
			))}
		</div>
	)
}
