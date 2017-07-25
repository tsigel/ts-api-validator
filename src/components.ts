import { BaseItem } from './BaseItem';


const components = Object.create(null);

export function registerComponent(type: string, constructor: IComponent): void {
    components[type] = constructor;
}

export function getComponentConstructor(type: string): IComponent {
    return components[type];
}

export interface IComponent {
    new (data: any, path?: string): BaseItem<any>;
}
