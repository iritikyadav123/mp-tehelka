"use client"
import { AnyARecord } from "dns";
import { SingleImageDropzone } from "../Single-image-dropzon";

interface ImageBoxProps {
    value? : File | null;
    onChange: (file: File | null) => void; 
}

export default function ImageInput({value,onChange} : ImageBoxProps) {
    return (
        <div >
            <div>
                <SingleImageDropzone
                    width={200}
                    height={200}
                    value={value}
                    dropzoneOptions={{
                        maxSize: 1024 * 1024 * 1,
                        maxFiles: 1
                    }}
                    onChange={(value) => onChange(value)}
                />
                <div className="h-[6px] w-44 border border-gray-900 rounded overflow-hidden">
                    <div
                        className="h-full bg-gray-500 transition-all duration-150"
                        style={{
                            width: `20%`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}