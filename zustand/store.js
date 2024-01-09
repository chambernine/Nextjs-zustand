import { createWithEqualityFn } from 'zustand/traditional'
import { persist } from 'zustand/middleware'

const useStore = createWithEqualityFn((set) => ({
    count: 0,
    setCount: () => set((state) => ({ count: state.count + 1 }))
}))

export default useStore

const counterStore = (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
})

export const useCounterStore = createWithEqualityFn(counterStore)


const themeStore = persist(
    (set) => ({
        color: '#000',
        backgroundColor: '#f000',
        setColor: (color) => set(() => ({ color: color })),
        setBackgroundColor: (color) => set(() => ({ backgroundColor: color }))
    }),
    { name: 'my-theme' }
)

export const useThemeStore = createWithEqualityFn(themeStore)
