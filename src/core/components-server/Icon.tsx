import { DynamicIcon , IconName } from 'lucide-react/dynamic';
import { LucideProps } from 'lucide-react';

export type{ IconName } from 'lucide-react/dynamic'
export type IconProps = LucideProps & { name: IconName }
export const Icon = (props: IconProps) => <DynamicIcon {...props}/>