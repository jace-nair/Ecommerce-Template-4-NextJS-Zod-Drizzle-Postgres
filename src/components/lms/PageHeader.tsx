import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
    title: string;
    children?: ReactNode;
    className?: string;
}

export default function PageHeader({title, children, className,}: Props) {
    return(
        <div className={cn("mb-8 flex gap-4 items-center justify-between", className)}>
            <h1 className="text-lg font-semibold">{title}</h1>
            {children && <div>{children}</div>}
        </div>
    );
}