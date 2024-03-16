import { ReactNode} from 'react';

interface PageHeaderProps {
    title: ReactNode;
    username?:string;
}

export default function PageHeader(props:PageHeaderProps){
    return (
        <div className="bg-gray-800 flex max-h-screen items-center justify-center p-12 text-white font-bold text-5xl opacity-90 text-opacity-100">
            {props.title}
        </div>
    )
}

