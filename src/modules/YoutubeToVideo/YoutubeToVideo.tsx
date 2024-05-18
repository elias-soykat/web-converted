"use client";

import axios from "axios";
import { useState } from "react";
import ConvertedFile from "./ConvertedFile";
import EnterLink from "./EnterLink";

interface VideoData {
  audio: Array<any>;
  video: Array<any>;
  title: string;
  videoId: string;
}

export default function YoutubeToVideo() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData>({
    audio: [],
    video: [],
    title: "",
    videoId: "",
  });
  const getVideoFormatByVideoUrl = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/download`,
        { params: { url: videoUrl } },
      );
      setVideoData(data);
    } catch (err) {
      setError(
        "The video link might be broken 😔 <br/> Please check and copy it again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadFile = (itag: string, mimeType: string) => {
    const { videoId, title } = videoData;
    const link = document.createElement("a");
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/file-download?url=https://www.youtube.com/watch?v=${videoId}&itag=${itag}&mimeType=${mimeType}&title=${title}`;
    link.href = apiUrl;
    link.download = `${title}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="fixed inset-0 flex h-screen items-center justify-center bg-black opacity-50">
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black" />
        </div>
      )}

      {error && (
        <p
          className="mb-4 font-semibold text-red-500"
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}

      <form onSubmit={getVideoFormatByVideoUrl} className="sm:w-6/12 lg:w-5/12">
        <EnterLink onChange={({ target }: any) => setVideoUrl(target.value)} />
      </form>

      <div className="lg:w-8/12">
        <h2 className="text-sm font-semibold sm:pr-10 sm:text-base md:text-lg lg:py-2">
          {videoData.title}
        </h2>

        <div className="mt-10">
          {videoData.video.length > 0 && (
            <>
              <h1 className="mb-4 mt-6 text-lg font-semibold">Video Files</h1>
              <ConvertedFile
                contents={videoData.video}
                handleDownload={handleDownloadFile}
              />
            </>
          )}
          {videoData.audio.length > 0 && (
            <>
              <h1 className="my-6 text-lg font-semibold md:mb-8 md:mt-12">
                Audio Files
              </h1>
              <ConvertedFile
                contents={videoData.audio}
                handleDownload={handleDownloadFile}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
