"use client";

import { SingleImageDropzone } from "../Single-image-dropzon";


interface ImageInputProps {
    value?: File | null;
    onChange: (file: File | null) => void;
}

export default function ImageInput({ value, onChange }: ImageInputProps) {
    return (
        <div>
            <SingleImageDropzone
                width={200}
                height={200}
                //@ts-ignore
                value={value}
                dropzoneOptions={{
                    maxSize: 1024 * 1024 * 1, // 1 MB
                    maxFiles: 1
                }}
                //@ts-ignore
                onChange={(file) => onChange(file)}
            />
            <div className="h-[6px] w-44 border border-gray-900 rounded overflow-hidden mt-2">
                <div
                    className="h-full bg-gray-500 transition-all duration-150"
                    style={{ width: `20%` }} // Adjust width dynamically based on actual progress if available
                />
            </div>
        </div>
    );
}
