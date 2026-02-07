import Image from "next/image";
import MenuButtons from "./button";

export default function Top() {
    return (
        <section className="flex w-full flex-col items-center justify-center">
            <div className="relative w-full aspect-video md:h-[60vh] md:aspect-auto">
                <Image
                    src="/main/introduction5.JPG"
                    alt="R-EXPO Introduction"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="mt-8 mb-12">
                <h1 className="text-5xl font-bold tracking-widest text-foreground md:text-5xl text-center">
                    R-EXPO スタッフページ
                </h1>
            </div>
            <MenuButtons />
        </section>
    );
}
