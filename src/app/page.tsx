import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import YoutubeToVideo from "@/modules/YoutubeToVideo/YoutubeToVideo";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection
        title="Video Converter"
        desc="Easily convert youtube videos online for free."
      />
      <YoutubeToVideo />
    </PageLayout>
  );
}
