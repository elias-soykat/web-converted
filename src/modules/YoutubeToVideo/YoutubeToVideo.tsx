"use client";

import Loading from "@/components/Loading";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import ConvertedFile from "./ConvertedFile";
import EnterLink from "./EnterLink";

interface VideoData {
  audio: Array<any>;
  video: Array<any>;
  title: string;
  videoId: string;
}

const brokenLinkTitle =
  "The video link might be broken, Please check the copied link 😔";

export default function YoutubeToVideo() {
  const { toast } = useToast();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData>({
    audio: [],
    video: [],
    title: "",
    videoId: "",
  });

  const getVideosFormatByUrl = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const videoRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
      if (!videoRegex.test(videoUrl)) {
        toast({ title: brokenLinkTitle, variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/download`,
        { params: { url: videoUrl } },
      );
      setVideoData(data);
    } catch (err) {
      setError(brokenLinkTitle);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadFile = (itag: string, mimeType: string) => {
    const { videoId, title } = videoData;
    const link = document.createElement("a");
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/file-download?url=https://www.youtube.com/watch?v=${videoId}&itag=${itag}&mimeType=${mimeType}&title=${title}`;
    link.href = apiUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    (async () => {
      const isAlreadyVisited: string | null = sessionStorage.getItem("visited");
      if (isAlreadyVisited) return;

      await axios
        .get(process.env.NEXT_PUBLIC_API_URL as string)
        .catch(() =>
          setError("The system has unexpected issue, Please try again."),
        );
      sessionStorage.setItem("visited", "1");
    })();
  }, []);

  useEffect(() => {
    if (error) {
      toast({ variant: "destructive", title: error });
    }
  }, [error, toast]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="items-center justify-center md:flex">
        <div className="md:w-8/12 lg:w-7/12 xl:w-6/12">
          <form onSubmit={getVideosFormatByUrl}>
            <EnterLink
              onChange={({ target }: any) => setVideoUrl(target.value)}
            />
          </form>

          <div>
            <h2 className="text-sm font-semibold sm:pr-10 sm:text-base md:text-lg lg:py-2">
              {videoData.title}
            </h2>

            <div className="mt-10">
              {videoData.video.length > 0 && (
                <ConvertedFile
                  type="Video"
                  contents={videoData.video}
                  handleDownload={handleDownloadFile}
                />
              )}
              {videoData.audio.length > 0 && (
                <ConvertedFile
                  type="Audio"
                  contents={videoData.audio}
                  handleDownload={handleDownloadFile}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
