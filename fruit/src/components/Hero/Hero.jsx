import React from 'react'

const Hero = () => {
  return (

    <section>

        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                    <h1>Healthy</h1>
                    <br />
                    <h1>Fresh <span className='text-yellow-400'>Fruits!</span></h1>
                </div>
            </div>
        </div>

    </section>

  )
}

export default Hero