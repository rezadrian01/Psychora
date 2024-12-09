import CTAButton from "@/components/Modules/CTAButton";
import Image from "next/image";

export default function Home() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] place-items-center">
      <div className="col-span-1 flex flex-col gap-4">
        <h1 className="text-3xl sm:text-5xl font-semibold">Your Personalized Mental Health Companion, Powered by Generative AI.</h1>
        <h3 className="text-base sm:text-xl">Psychora uses generative AI to provide personalized psychological tests and deliver tailored recommendations for food, drinks, and activities to improve your mental well-being. Start your journey to a balanced mind today!</h3>

        <CTAButton />
      </div>

      <div className="col-span-1"></div>
    </div>
  );
}
