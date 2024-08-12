"use client"
import { cn } from "@/lib/utils";
import React from "react";

interface buttonprops {
    children: string;
    disabled: boolean;
    className: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
export default function Button({ children, className, disabled = true, onClick }: buttonprops) {
    return (
        <>
            <button onClick={onClick} className={cn("font-semibold text-xl rounded-lg pl-2 pr-2 pt-1 pb-1", className)} disabled={disabled}>{children}</button>
        </>
    )
}