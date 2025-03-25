function Progress(props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between w-4/5 mb-2">
        <span className="text-lg font-medium text-green-500">Progression quotidienne</span>
        <span className="text-lg font-medium text-green-500">{props.value ? `${props.value}%` : '0%'}</span>
      </div>
      <div className="w-4/5 bg-gray-200 rounded-full h-4">
        <div className="bg-green-500 h-4 rounded-full" style={{ width: `${props.value || 0}%` }}></div>
      </div>
    </div>
  );
}

export default Progress;