function LoadingBar({progress}) {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 relative">
                <div
                    className="bg-red-500 animate-pulse h-10 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full duration-1000"
                    style={{ width: `${Math.round(progress)}%` }}
                >
                </div>
            </div>
  );
}

export default LoadingBar;