'use client';

import { RenderComponent } from '@/components/layout/render-component';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWizardsStore } from '@/store/wizards';
import React, { useState } from 'react'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const wizard = useWizardsStore(state => state.getWizard(Number(params.id)));
	const pages = useWizardsStore(state => state.getPages(Number(params.id)));
	const [currentPage, setCurrentPage] = useState(pages[0].id);

	return (
		<div className={`container flex gap-4 ${wizard.orientation === "horizontal" ? "flex-row" : "flex-col"} w-full`}>
			<div
				className={`flex ${wizard.orientation === "horizontal" ? "flex-col" : "flex-row"} gap-4 `}>
				{pages.map(page => (
					<Button
						key={page.id}
						variant={currentPage === page.id ? 'secondary' : 'outline'}
						onClick={() => setCurrentPage(page.id)}
					>
						{page.name}
					</Button>
				))}
			</div>
			<div className='w-full'>
				{pages.map((page, i) => (
					<>
						{page.id === currentPage &&
							<Card key={i}>
								<CardHeader>
									<CardTitle>
										{page.name}
									</CardTitle>
								</CardHeader>
								<CardContent className='space-y-6'>
									{page.components.map((component, i) => (
										<RenderComponent key={component.name} component={component} />
									))}
								</CardContent>
							</Card>
						}
					</>
				))}
			</div>
		</div>
	)
}
