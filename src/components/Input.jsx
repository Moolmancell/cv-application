export function Input({callback, type, id, value}) {
    return <input 
      type={type}
      className='border-2 focus:ring-2 focus:border-sky-500 focus:outline-none border-slate-400 rounded-lg p-2 mb-4 w-64'
      onChange={(e) => callback(e)}
      id={id}
      name={id}
      value={value}
    />
}