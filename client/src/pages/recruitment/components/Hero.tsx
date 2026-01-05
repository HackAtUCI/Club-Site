import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-12 h-screen">
      <h1 className="text-heading">Recruitment</h1>
      <PrimaryButton>Learn more about our committees!</PrimaryButton>
    </section>
  );
}
