export const AvailableToWork = () => {
  return (
    <div
      className="flex items-center max-w-max gap-2 p-1 rounded-md border border-green-700 bg-green-200 cursor-pointer"
      title="Click to see more details"
    >
      <div className="w-[12px] h-[12px] bg-green-600 rounded-full animate-bounce-flash"></div>
      <p className="text-green-600 text-sm font-medium">Available to work</p>
    </div>
  );
};
