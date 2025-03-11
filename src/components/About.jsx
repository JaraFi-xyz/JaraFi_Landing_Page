import React from 'react'

const About = () => {
  return (
    <div className="bg-[#0F0140] min-h-screen flex flex-col items-center justify-center py-8 md:py-16 px-4 text-white relative">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">What is JaraFi?</h1>

        <p className="text-center text-sm md:text-base text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
        JaraFi is a blockchain-powered platform designed to enable seamless financial transactions with enhanced security and efficiency.
        </p>
      </div>

     
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
      
        <div className="absolute inset-0 rounded-full border border-gray-500/30"></div>

       
        <div className="absolute inset-[40px] sm:inset-[50px] md:inset-[65px] lg:inset-[80px] rounded-full border border-gray-500/30"></div>

       
        <div className="absolute inset-[80px] sm:inset-[100px] md:inset-[130px] lg:inset-[160px] rounded-full border border-gray-500/30"></div>

        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80px] md:w-[100px] lg:w-[120px] flex flex-col items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
            >
              <path d="M15 15V45H30V35H20V20H35V30H45V15H15Z" fill="#f0ff00" />
            </svg>
            <div className="text-center mt-1 md:mt-2 text-base md:text-lg lg:text-xl font-bold text-white">JARAFI</div>
          </div>
        </div>

        {/* Profile image 1 - top right */}
        <div className="absolute top-[35px] right-[70px] sm:top-[45px] sm:right-[90px] md:top-[55px] md:right-[110px] lg:top-[70px] lg:right-[140px]">
          <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden border-2 border-[#f0ff00]">
            <img src="/placeholder.svg?height=70&width=70" alt="Profile 1" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Profile image 2 - bottom right */}
        <div className="absolute bottom-[60px] right-[40px] sm:bottom-[80px] sm:right-[50px] md:bottom-[100px] md:right-[65px] lg:bottom-[120px] lg:right-[80px]">
          <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden border-2 border-white">
            <img src="/placeholder.svg?height=70&width=70" alt="Profile 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Profile image 3 - bottom left */}
        <div className="absolute bottom-[100px] left-[50px] sm:bottom-[130px] sm:left-[65px] md:bottom-[165px] md:left-[80px] lg:bottom-[200px] lg:left-[100px]">
          <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden border-2 border-white">
            <img src="/placeholder.svg?height=70&width=70" alt="Profile 3" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Profile image 4 - left middle */}
        <div className="absolute top-[90px] left-[40px] sm:top-[120px] sm:left-[50px] md:top-[150px] md:left-[65px] lg:top-[180px] lg:left-[80px]">
          <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden border-2 border-white">
            <img src="/placeholder.svg?height=70&width=70" alt="Profile 4" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Waitlisters counter - positioned at the bottom of the circular structure */}
        <div className="absolute bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="px-4 md:px-6 lg:px-8 py-1 md:py-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              180<span className="text-xl md:text-2xl lg:text-3xl">+</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">waitlisters!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About