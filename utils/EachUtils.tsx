import { JSX, ReactNode, Children } from 'react'

interface EachUtilsProps<T> {
    of: T[],
    render: (item: T, index: number) => ReactNode
}


const EachUtils = <T,>({ of, render }: EachUtilsProps<T>): JSX.Element => {
    return (
        <>
            {Children.toArray(of.map((item, index) => {
                return render(item, index)
            }))}
        </>
    )
}

export default EachUtils