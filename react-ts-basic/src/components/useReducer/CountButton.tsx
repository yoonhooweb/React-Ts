import { type ActionDispatch } from 'react'

type Action = | {type : 'plus'} | {type : 'minus'} | {type : 'reset'}

export default function CountButton( { countDispatch } : { countDispatch: ActionDispatch<[action: Action]> }) {
  return (
    <div>
        <button onClick={ () => countDispatch({ type : "plus" })}>증가</button>
        <button onClick={ () => countDispatch({ type : "minus" })  }>감소</button>
        <button onClick={ () => countDispatch({ type : "reset" })  }>리셋</button>
    </div>
  )
}
