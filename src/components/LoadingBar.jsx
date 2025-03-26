function LoadingBar({progress}) {
  return (
    <div className="w-full bg-gray-200 rounded-md dark:bg-gray-700 relative">
                <div
                    className="bg-purple-500 animate-pulse h-10 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-md duration-1000"
                    style={{ width: `${Math.round(progress)}%` }}
                >
                </div>
            </div>
  );
}

export default LoadingBar;