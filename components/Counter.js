import React from 'react'
import { useCounterStore } from '../zustand/store'
import { shallow } from 'zustand/shallow'
const Counter = () => {
    const { count, increment, decrement } = useCounterStore(
        (state) => ({
            count: state.count,
            increment: state.increment,
            decrement: state.decrement
        }),
        shallow
    )

    console.log(`Counter:render`)
    return (
        <section>
            <h3>Counter</h3>
            <p>count : {count}</p>
            <button onClick={increment}>เพิ่ม</button>
            <button onClick={decrement}>ลบ</button>
        </section>
    )
}

export default Counter
