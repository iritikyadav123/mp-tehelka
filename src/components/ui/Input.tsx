"use client"
import { cn } from "@/lib/utils";
import { ChangeEventHandler } from "react";

interface InputProp {
    type? : string;
    placeholder? : string;
    value? : string;
    onChange: ChangeEventHandler<HTMLInputElement>
    className : string;
}
export default function Input({type, placeholder, value, className, onChange} : InputProp) {
    return <>
         <input
         className={cn("outline-none bg-gray-100 rounded-lg shad  shadow-gray-100  text-gray-900",className)}
          type={type} placeholder={placeholder}
          value = {value}
          onChange={onChange} />
    </>
}