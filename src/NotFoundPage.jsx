import React from 'react'

const NotFoundPage = () => {
    return (
        <div>
            <div className="w-10/12 m-auto py-16 h-full flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="lg:text-9xl text-6xl font-bold text-blue-400">404</h1>
                        <h1 className="lg:text-6xl text-4xl font-medium py-8 text-black">oops! Page not found</h1>
                        <p className="lg:text-2xl pb-8 px-12 font-medium text-gray-600">
                        Oops! The page you are looking for does not exist. It might have been moved or deleted.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
