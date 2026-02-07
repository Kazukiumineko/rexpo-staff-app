import Top from "@/components/main-ui/top";
import Header from "@/components/main-ui/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header isVisible={true} />
      <Top />
    </main>
  );
}
