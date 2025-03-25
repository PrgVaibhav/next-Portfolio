export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <div className="flex flex-col items-center space-y-5">
        {/* Subtle Pulse Dot Loader */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-300"></span>
        </div>

        {/* Soft Fading Text */}
        <p className="text-gray-400 text-lg font-medium tracking-wide animate-pulse">
          Just A Moment
        </p>
      </div>
    </div>
  );
};
