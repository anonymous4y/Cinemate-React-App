import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageNotFoundImage from '../assets/images/pagenotfound.png'

export const PageNotFound = () => {

    useEffect(() => {
        document.title = `Page Not Found / Cinemate`
    }, [])

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
                    <div className='max-w-lg'>
                        <img className='rounded my-4' src={PageNotFoundImage} alt="pagenotfound" />
                    </div>
                </div>

                <div className='flex justify-center my-4'>
                    <Link to='/'>
                        <button className='w-64 text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium'>Back To Cinemate</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
