export function Button({callback = ()=>{}, children, style}) {
    return <button
        onClick={callback}
        className={style || 'border-solid border-2 border-black block'}
    >
    {children}
  </button>
}