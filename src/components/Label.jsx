import { useState } from 'react'
import { Input } from './Input'

export function Label({name, callback, type, id, value}) {
    return <>
    <label className='block' htmlFor={id}>{name}:</label>
      <Input callback={callback} type={type} id={id} value={value}/>
    </>
}