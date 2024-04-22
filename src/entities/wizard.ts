export type ComponentType = 'input' | 'button' | 'dropdown' | 'list';

interface DropdownOption {
	value: string;
	label: string;
}

export interface Component {
	name: string;
	type: ComponentType;
	label?: string;
	placeholder?: string;
	options?: DropdownOption[]; 
	items?: string[]; 
}

export interface Page {
	id: string;
	name: string;
	components: Component[];
}

export interface Wizard {
	id: number;
	name: string;
	orientation: 'vertical' | 'horizontal';
	pages?: Page[];
}
