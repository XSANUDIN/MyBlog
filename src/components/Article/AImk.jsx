import React from 'react';
import RelatedCard from './RelatedCard';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AImk  = () => {
    const articles = [
        {
            image: "https://merlindawibowo.com/wp-content/uploads/2022/12/human-and-computer-interaction-basic-concept-1024x842.webp",
            category: "Interaksi Manusia dan Komputer",
            title: "Interaksi Manusia dan Komputer",
            content: "Kumpulan Materi dan Pembahasan IMK",
            link: "/aimk"
        },
    ];
   return (
        <>
        <Navbar/>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-black antialiased">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-8 lg:mb-12 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <img className="mr-4 w-16 h-16 rounded-full object-cover" src="https://i.pinimg.com/originals/db/d9/c7/dbd9c7130573d763b31bc08932dd06c7.jpg" alt="XsanDev" />
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">XsanDev</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Developer</p>
                                    <time pubdate dateTime="2022-02-08" title="" className="block text-base text-gray-500 dark:text-gray-400">1 Februari 2024</time>
                                </div>
                            </address>
                            <h1 className="mb-8 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">IMK</h1>
                        </header>
                        <div className='text-white text-xl mb-24'>
                            <p className="mb-8 text-white">
                                Kumpulan Materi IMK
                            </p>
                            <p>
                                
                            </p>
                        </div>
                        <section className="not-format">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion</h2>
                            </div>
                            <form className="mb-8">
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea
                                        id="comment"
                                        rows="6"
                                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                        placeholder="Write a comment..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                                >
                                    Post comment
                                </button>
                            </form>
                            {/* <article className="p-6 mb-8 text-base bg-white rounded-lg dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael Gough"
                                            />
                                            Michael Gough
                                        </p>
                                        <time pubdate dateTime="2022-02-08" title="February 8th, 2022" className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</time>
                                    </div>
                                    <button
                                        id="dropdownComment1Button"
                                        data-dropdown-toggle="dropdownComment1"
                                        className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 3"
                                        >
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div
                                        id="dropdownComment1"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Remove
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Report
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p>
                                    Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.
                                </p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button
                                        type="button"
                                        className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                                    >
                                        <svg
                                            className="mr-1.5 w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 18"
                                        >
                                            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </article> */}
                        </section>
                    </article>
                </div>
            </main>
            <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-900 ">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Artikel Terkait</h2>
                    <RelatedCard articles={articles} />
                </div>
            </aside>

            <Footer/>
        </>
    );
}

export default AImk;
