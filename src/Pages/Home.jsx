import React from 'react'
import Header from '../Components/Header/Header'
import BreakingNews from '../Components/BreakingNews/BreakingNews'
import Navbar from '../Components/Navbar/Navbar'
import RightAside from '../Components/RIghtAside/RightAside'
import LeftAside from '../Components/LeftAside/LeftAside'
import { Outlet, useNavigation } from 'react-router'
import Loading from '../Components/Loading/Loading'

export default function Home() {
    const {state}=useNavigation();

    return (
        <div  className='w-11/12 mx-auto text-start'>
           
        {
            import.meta.env.VITE_SOME_KEY
        }
    
            <div className=''>

                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>

            </div>

            <main className='grid grid-cols-12 mt-3 gap-4 '>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
                <main className='col-span-6 '>
                    <p className='font-semibold mb-2'>Dragon News Home</p>
                    {
                         state=="loading"? <Loading></Loading> :  <Outlet></Outlet>
                    }
                   

                </main>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>

                </aside>
            </main>

        </div>
    )
}
