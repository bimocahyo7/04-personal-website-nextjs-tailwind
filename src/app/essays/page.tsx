import EssayItem from "@/components/EssayItem";
import { essay } from "@/data/essay";

export default function Essays() {
  return (
    <div className="px-8 bg-[#ffeea8] background-pattern py-8 min-h-screen">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-slate-800">Essay</h1>
        <p className="inline-block text-sm md:text-base font-medium mt-3 text-white bg-[#aa6db5] px-3 py-1 rounded-md">
          Koleksi artikel dan tutorial seputar pengembangan web modern dan teknologi terkini.
        </p>
      </header>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8">
          {essay.map((essayData, index) => (
            <EssayItem key={index} {...essayData} />
          ))}
        </div>
      </div>
    </div>
  );
}
