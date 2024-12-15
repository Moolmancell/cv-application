export function Button({callback, children}) {
    return <button
        onClick={callback}
        className='border-solid border-2 border-black'
    >
    {children}
  </button>
}