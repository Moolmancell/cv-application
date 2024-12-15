export function Input({callback, type, id, value= ""}) {
    return <input 
      type={type}
      className='border-solid border-2 border-black'
      onChange={(e) => callback(e)}
      id={id}
      name={id}
      value={value}
    />
}