import { Page, Wizard } from '@/entities/wizard'
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface WizardStore {
	wizards: Wizard[];
	addWizard: (wizard: Pick<Wizard, 'name' | 'orientation'>) => void;
	removeWizard: (id: number) => void;
	updateWizard: (id: number, wizard: Pick<Wizard, 'name' | 'orientation'>) => void;
	addPage: (wizardId: number, page: Omit<Page, "id">) => void;
	getWizard: (id: number) => Wizard;
	getPages: (wizardId: number) => Page[];
}

export const useWizardsStore = create(persist<WizardStore>(
	(set, get) => ({
		wizards: [],
		addWizard: (wizard) => set((state) => {
			const wizardExists = state.wizards.some(w => w.name === wizard.name);
			if (wizardExists) throw new Error(`Wizard with name ${wizard.name} already exists.`);

			return {
				wizards: [...state.wizards, {
					...wizard,
					id: state.wizards.length,
				}]
			};
		}),
		updateWizard: (id, wizard) => set((state) => ({
			wizards: state.wizards.map((w) => {
				if (w.id !== id) return w;
				return {
					...w,
					...wizard
				}
			})
		})),
		removeWizard: (id) => set((state) => ({
			wizards: state.wizards.filter((wizard) => wizard.id !== id)
		})),
		addPage: (wizardId, page) => set((state) => ({
			wizards: state.wizards.map((wizard) => {
				if (wizard.id !== wizardId) return wizard;
				return {
					...wizard,
					pages: [...wizard.pages ?? [], {
						...page,
						id: (wizard.pages?.length ?? 0).toString()
					}]
				}
			})
		})),
		getWizard: (wizardId) => {
			const wizard = get().wizards.find((wizard) => wizard.id === wizardId);

			if (!wizard) throw new Error(`Wizard with id ${wizardId} not found.`);

			return wizard;
		},
		getPages: (state) => {
			const wizard = get().wizards.find((wizard) => wizard.id === state);

			if (!wizard) throw new Error(`Wizard with id ${state} not found.`);

			return wizard.pages ?? [];
		}
	}),
	{
		name: 'wizards',
	}
))
