import { twMerge } from 'tailwind-merge';

interface Props {
	className?: string;
}
export const Box: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
	return <div className={twMerge('bg-neutral-900 rounded-lg h-fit w-full', className)}>{children}</div>;
};
