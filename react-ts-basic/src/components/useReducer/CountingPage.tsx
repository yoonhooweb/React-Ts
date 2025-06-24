import { useReducer } from "react"
import CountButton from "./CountButton"
import Counting from "./Counting"
import countReducer from "./countReducer"

function CountingPage() {

	const [ count , countDispatch ] = useReducer(countReducer , 0);

  return (
	<>
		<Counting count = { count } />
		<CountButton countDispatch = { countDispatch } />
	</>
  )
}

export default CountingPage