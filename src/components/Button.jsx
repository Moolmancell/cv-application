export function Button({callback = ()=>{}, children, classes}) {
    return <button
        onClick={callback}
        className={classes || 'border-solid border-2 border-black block'}
    >
    {children}
  </button>
}