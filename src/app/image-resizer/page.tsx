import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/PageLayout";
import ImageResizer from "@/modules/ImageResizer/ImageResizer";

export default function ImageResize() {
  return (
    <PageLayout>
      <HeroSection
        title="Image Resizer"
        desc="Easily resize images online for free."
      />
      <ImageResizer />
    </PageLayout>
  );
}
