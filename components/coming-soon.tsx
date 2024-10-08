import { title } from "./primitives";

export const ComingSoonComp = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full flex items-center gap-4 flex-col justify-center">
        <img src="/coming-soon.svg" className="w-[75%]" alt="coming-soon" />
        <h1 className={title({ size: "sm" })}>Coming Soon</h1>
      </div>
    </div>
  );
};
