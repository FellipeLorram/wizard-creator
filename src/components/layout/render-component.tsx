import React from 'react'
import { Component } from '@/entities/wizard';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';

interface Props {
	component: Component;
}

export function RenderComponent({ component }: Props) {
	switch (component.type) {
		case 'input':
			return (
				<div className="w-full">
					<Label> {component.label} </Label>
					<Input name={component.name} type="text" placeholder={component.placeholder} />
				</div>
			);
		case 'button':
			return (
				<div className="w-full">
					<Button type="button">
						{component.label}
					</Button>
				</div>
			);
		case 'dropdown':
			return (
				<div className="w-full">
					<Label> {component.label} </Label>
					<Select name={component.name}>
						<SelectTrigger>
							{component.label}
						</SelectTrigger>
						<SelectContent>
							{component.options?.map(({label, value}) => (
								<SelectItem key={value} value={value}>{label}</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			);
		case 'list':
			return (
				<div className="w-full">
					<Label> {component.label} </Label>
					<ul className='list-disc list-inside'>
						{component.items?.map((item, index) => (
							<li key={index}>
								{item}
							</li>
						))}
					</ul>
				</div>
			);
		default:
			return null;
	}
}