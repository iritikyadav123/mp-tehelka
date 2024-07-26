"use client"
import { cn } from "@/lib/utils";

interface SelectionProps {
    className: string;
    label: string;
    select: string;
    options: string[];
    value: string; 
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export default function Selection({
    className,
    label,
    select,
    options,
    value,
    onChange
}: SelectionProps) {
    return (
        <div className={cn("", className)}>
            <label className="text-md sm:text-lg font-semibold" htmlFor="example-select">{label}:</label>
            <select
                className="text-md font-bold ml-5 border-2 bg-gray-200 rounded-lg pl-2 pr-2 p-1"
                id="example-select"
                value={value}
                onChange={onChange}
            >
                <option value="">{`--${select}--`}</option>
                {options.map((item, index) => (
                    <option className="text-gray-900" key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
