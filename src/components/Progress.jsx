function Progress(props) {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-between w-1/4 mb-1">
          <span className="text-base font-medium text-green-500">Progression quotidienne</span>
          <span className="text-sm font-medium text-green-500">{props.value ? `${props.value}%` : '0%'}</span>
        </div>
        <div className="w-1/4 bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${props.value || 0}%` }}></div>
        </div>
      </div>
    );
  }
  
  export default Progress;