import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import YoutubeToVideo from "@/modules/YoutubeToVideo/YoutubeToVideo";

export default function Home() {
  return (
    <main className="flex h-screen flex-col justify-between">
      <div>
        <Nav />
        <Hero />
        <YoutubeToVideo />
      </div>
      <Footer />
    </main>
  );
}
