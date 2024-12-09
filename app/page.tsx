import CTAButton from "@/components/Modules/CTAButton";
import Image from "next/image";

import questionImg from '@/public/question.png'

export default function Home() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[80vh] place-items-center">

      <div className="block md:hidden col-span-1 relative">
        <div className=" opacity-70 border border-stone-500 rounded-xl p-4">
          <Image className="" draggable={false} src={questionImg} alt="a example of question" />
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <h1 className="text-3xl sm:text-5xl font-semibold">Your Personalized Mental Health Companion, Powered by Generative AI.</h1>
        <h3 className="text-base sm:text-xl">Psychora uses generative AI to provide personalized psychological tests and deliver tailored recommendations for food, drinks, and activities to improve your mental well-being. Start your journey to a balanced mind today!</h3>
        <CTAButton />
      </div>

      <div className="hidden md:block col-span-1 relative">
        <div className=" opacity-70 border border-stone-500 rounded-xl p-4">
          <Image className="" draggable={false} src={questionImg} alt="a example of question" />
        </div>
      </div>
    </div>
  );
}
