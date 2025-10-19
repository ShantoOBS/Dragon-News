import React from 'react'
import Marquee from "react-fast-marquee";

export default function BreakingNews() {
    return (
        <div className=' bg-[#F3F3F3] '>

            <div className='flex gap-3 items-center p-3'>
                <div>
                    <button class="btn btn-active bg-[#D72050] text-white">Latest</button>
                </div>
                <div>
                    <Marquee>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>

        </div>
    )
}
