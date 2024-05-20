"use client";

import { Progress } from "@/components/ui/progress";
import { formatFileSize } from "@/lib/utils";
import axios from "axios";
import { ImageUp } from "lucide-react";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";

export default function ImageResizer() {
  const [fileInfo, setFileInfo] = useState({
    name: "",
    size: "",
  });

  const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add("border-indigo-600");
  };

  const handleDragLeave = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove("border-indigo-600");
  };

  const handleDropFile = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove("border-indigo-600");
    const file = e.dataTransfer.files[0];
    displayPreview(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      displayPreview(file);
    }
  };

  const displayPreview = async (file: File) => {
    setFileInfo((prev: any) => ({
      ...prev,
      name: file.name,
      size: formatFileSize(file.size),
    }));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        formData,
        config,
      );

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(90), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded bg-slate-100 py-8 sm:w-11/12 sm:py-12 md:w-10/12 lg:w-7/12 xl:w-6/12">
        <div className="flex flex-col items-center justify-center">
          <button
            className="relative cursor-pointer rounded-lg border-2 border-dashed border-gray-300 px-5 py-6 sm:w-6/12"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDropFile}
            aria-label="Upload image by dragging and dropping"
          >
            <input
              type="file"
              className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
              onChange={handleFileChange}
              aria-label="File upload"
              accept="image/jpg, image/jpeg, image/png, image/webp"
            />

            <div>
              <ImageUp size={60} className="mx-auto mb-4 h-12 w-12" />
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer text-sm font-medium text-gray-900"
              >
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span> to upload</span>
              </label>
              <p className="mt-2 text-xs text-gray-500 sm:mt-4">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </button>
          <div className="mt-6 w-9/12 space-y-1 sm:mt-8 sm:w-7/12 lg:w-6/12">
            <p className="text-sm font-medium">{fileInfo.name}</p>
            <p className="pb-2 text-sm font-medium">{fileInfo.size}</p>
            <Progress
              value={progress}
              className="h-2 rounded-sm bg-green-500 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
