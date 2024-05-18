import { Download } from "lucide-react";

type Props = {
  contents: any;
  handleDownload: any;
};

export default function ConvertedFile({ contents, handleDownload }: Props) {
  return (
    <>
      {contents.map((format: any, i: any) => (
        <div
          key={i}
          className="my-3 flex-wrap items-center justify-between space-y-4 rounded border px-4 py-4 sm:flex sm:py-1"
        >
          <div className="flex items-center justify-between sm:gap-x-10">
            <div className="sm:w-20">
              <p className="text-sm font-medium">{format.fileSize}</p>
            </div>
            <div className="flex items-center justify-start gap-x-2 sm:w-40 sm:gap-x-6">
              <p className="text-sm font-medium">
                {format.qualityLabel || "-"}
              </p>
              <p className="text-sm font-medium">{format.mimeType}</p>
            </div>
          </div>

          <div>
            <button
              className="flex items-center justify-center gap-x-2 rounded bg-black px-3 py-2 text-sm font-semibold text-white sm:-mt-2 sm:mb-2 sm:gap-x-3"
              onClick={() => handleDownload(format.itag, format.mimeType)}
            >
              Download
              <Download className="w-[16px] sm:w-[18px]" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
