type Props = {
  title: string;
  desc: string;
};

export default function HeroSection({ title, desc }: Props) {
  return (
    <section className="py-8 grid place-items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="py-2 text-center text-sm sm:text-balance font-semibold text-[#1a1a1a]">{desc}</p>
    </section>
  );
}
