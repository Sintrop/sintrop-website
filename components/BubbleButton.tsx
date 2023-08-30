import {ComponentProps, ReactNode} from 'react';

export interface BubbleButtonProps extends ComponentProps<'button'>{
    children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps){
    return(
        <button
            className='flex items-center p-2 text-sm font-medium leading-none text-gray-700 hover:bg-gray-500 hover:text-gray-50 data-[active=true]:text-green-700'
            {...props}
        />
    )
}