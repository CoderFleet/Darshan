import React from 'react'

function Hero() {
    return (
        <>
            <div className="bg-gray-100" style={{ color: 'black' }}>
                <section className="bg-gray-100 px-6 py-14 mx-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 mb-4 mx-1 md:mt-0">
                        {/* Images */}
                        <div className="flex flex-wrap gap-2 md:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">

                            <img src="..\public\pexels-abhishek-patel-304881033-13426104.jpg" className="h-40 w-40 bg-gray-300 rounded object-cover" />
                            <img src="..\public\pexels-artiagarwal-2239075.jpg"  className="h-40 w-40 bg-gray-300 rounded object-cover" />
                            <img src="..\public\pexels-rahul-genie-6530373.jpg" className="h-40 w-40 bg-gray-300 rounded-tr-full object-cover" />
                            <img src="..\public\pexels-shadowstorme-6593093.jpg"  className="h-40 w-40 bg-gray-300 rounded-bl-full object-cover" />
                            <img src="..\public\pexels-shotify-12351981.jpg"  className="h-40 w-40 bg-gray-300 rounded object-cover" />
                            <img src="..\public\pexels-sunaina-ravikumar-1597491343-27403394.jpg" alt="Description 6" className="h-40 w-40 bg-gray-300 rounded object-cover" />
                        </div>
                    </div>

                    <div className="md:w-1/2 mx-5">
                        <h1 className="text-3xl md:text-4xl font-bold my-6">Darshan: Pavitrata ka Safar</h1>
                        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum, ducimus nulla molestias magni, eos culpa ea illum nihil obcaecati atque quaerat iure accusantium deserunt soluta corporis quidem asperiores blanditiis?</p>
                        <div className="border-b-2 border-gray-300 my-4 mx-1"></div>

                        <div className="mt-4">
                            <p className="mb-4">Have any questions? Contact us!</p>
                            <p className="text-xl font-semibold">+91 (123) 9999998887</p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Hero;
