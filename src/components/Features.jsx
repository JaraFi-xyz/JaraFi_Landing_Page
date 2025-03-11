import jcard12 from '../assets/images/Jcard12.png'
import jcard13 from '../assets/images/jcard13.png'
import jcard3 from '../assets/images/jcard3.png'
import jarrow from '../assets/images/jarrow.png'
import jRec from '../assets/images/jRec.png'
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from 'react'

export default function Features() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: "01",
      title: "Transfer and Receive Stablecoins using Phone numbers.",
      description:
        "With JaraFi you can send crypto to family and friends wherever they are by simply using their phone numbers",
      cardTitle: "Transfer",
      cardSubtitle: "USING PHONE NUMBER",
      cardMessage: "You have just received 200USDT",
      cardBg: "bg-[#F2E205]",
      cardInnerImg: jcard12,
      cardIcon: jarrow,
    },
    {
      id: "02",
      title: "Trade your stablecoins with our verified P2P merchants.",
      description:
        "With JaraFi you can trade cryptocurrencies with ease by using our trusted P2P merchants all in one place",
      cardTitle: "Trade",
      cardSubtitle: "USING P2P MERCHANTS",
      cardMessage: "Your trade was made successfully",
      cardBg: "bg-[#F2EDE4]",
      cardInnerImg: jcard13,
      cardIcon: jarrow,
    },
    {
      id: "03",
      title: "Perform online transactions using our virtual card.",
      description: "With JaraFi you can make online payments like shopping, groceries, Netflix subscriptions etc...",
      cardTitle: "Trade",
      cardSubtitle: "USING P2P MERCHANTS",
      cardBg: "bg-[#F2E205]",
      cardInnerImg: jcard3,
    },
  ]

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="w-full bg-[#0F0140]">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-11 py-8 md:py-12 lg:py-16">
        <div className="flex justify-center mb-6 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-100">
            Features <span className="inline-block ml-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#F2E205]"></span>
          </h2>
        </div>

        {/* Mobile View (vertical column layout) */}
        <div className="lg:hidden">
          {features.map((feature, index) => (
            <div key={feature.id} className="mb-12">
              <div className="space-y-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white mt-4 mb-4">
                  {feature.title.split(".")[0]}
                  <span className="text-[yellow]">.</span>
                </h3>
                <p className="text-white text-sm sm:text-base mb-4">{feature.description}</p>
                
                <div className="flex items-center space-x-2 sm:space-x-4 mt-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a0033] flex items-center justify-center text-lg font-bold">
                    {feature.id}
                  </div>
                  <div className="flex-1">
                    <img 
                      src={jRec}
                      alt="rect" 
                      className="w-full max-w-xs sm:max-w-sm object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className={`${feature.cardBg} rounded-lg px-4 sm:px-5 mx-auto mb-6 max-w-xs sm:max-w-sm`}>
                <div className="text-center text-black mb-6">
                  <div className="text-base sm:text-lg font-medium py-3">{feature.cardTitle}</div>
                  <div className="text-lg sm:text-xl font-bold px-4 sm:px-10">{feature.cardSubtitle}</div>
                </div>

                {feature.id !== "03" && (
                  <div className="flex items-center justify-center relative">
                    <img
                      src={feature.cardIcon}
                      alt="Feature illustration"
                      width={40}
                      height={40}
                      className="absolute z-10"
                      style={{ bottom: '-16px' }}
                    />
                  </div>
                )}

                {feature.id === "03" ? (
                  <div className={`${feature.cardBg} rounded-lg px-4 pb-0 relative h-40 sm:h-48 flex justify-center items-center`}>
                    <img
                      src={feature.cardInnerImg}
                      alt="Feature illustration"
                      width={180}
                      height={120}
                      className="absolute bottom-0"
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-lg px-4 pb-0 relative h-40 sm:h-48">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center"></div>
                    <div className="text-center text-black">
                      <p className="mb-2 py-6 px-4 sm:px-8 text-sm sm:text-base">{feature.cardMessage}</p>
                      <div className="flex justify-center overflow-hidden">
                        <img
                          src={feature.cardInnerImg}
                          alt="Feature illustration"
                          width={80}
                          height={80}
                          className="absolute bottom-2"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 mb-10">
            <button onClick={prevFeature} aria-label="Previous feature">
              <ChevronLeft className="w-8 h-8 text-black bg-[#F2EDE4] rounded-full p-1.5 cursor-pointer" />
            </button>
            <button onClick={nextFeature} aria-label="Next feature">
              <ChevronRight className="w-8 h-8 text-black bg-[#F2EDE4] rounded-full p-1.5 cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Desktop View - Keeping original layout */}
        <div className="hidden lg:block">
          {features.map((feature) => (
            <div key={feature.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-24">
                <h3 className="text-3xl font-bold leading-tight text-[white] pr-72 mt-10 mb-20">
                  {feature.title.split(".")[0]}
                  <span className="text-[yellow]">.</span>
                </h3>
                <p className="text-[white] ">{feature.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 aspect-square rounded-full bg-white text-[#0a0033] flex items-center justify-center text-2xl font-bold ">
                    {feature.id}
                  </div>
                  <div className="flex w-full justify-center">
                    <img 
                      src={jRec}
                      alt="rect" 
                      className="w-[700px] object-cover mx-auto mt-4" 
                    />
                  </div>
                </div>
              </div>

              <div className={`${feature.cardBg} rounded-lg px-6 max-w-md mx-auto mb-10`}>
                <div className="text-center text-black mb-14">
                  <div className="text-lg font-medium py-4">{feature.cardTitle}</div>
                  <div className="text-2xl font-bold px-20">{feature.cardSubtitle}</div>
                </div>

                {/* Only show cardIcon if the feature is NOT ID "03" */}
                {feature.id !== "03" && (
                  <div className="flex items-center justify-center relative">
                    <img
                      src={feature.cardIcon}
                      alt="Feature illustration"
                      width={50}
                      height={50}
                      className="absolute z-10"
                      style={{ bottom: '-20px' }}
                    />
                  </div>
                )}

                {feature.id === "03" ? (
                  <div className={`${feature.cardBg} rounded-lg px-6 pb-0 relative h-60 flex justify-center items-center`}>
                    <img
                      src={feature.cardInnerImg}
                      alt="Feature illustration"
                      width={250}
                      height={150}
                      className="absolute bottom-0"
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-lg px-6 pb-0 relative h-60">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center"></div>
                    <div className="text-center text-black">
                      <p className="mb-4 py-10 px-16">{feature.cardMessage}</p>
                      <div className="flex justify-center overflow-hidden">
                        <img
                          src={feature.cardInnerImg}
                          alt="Feature illustration"
                          width={100}
                          height={100}
                          className="absolute bottom-2"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Original Chevron positioning */}
              <div className="absolute right-40 flex gap-2 mt-[410px]">
                <ChevronLeft className="w-7 h-7 text-black bg-[#F2EDE4] rounded-full p-1 cursor-pointer" />
                <ChevronRight className="w-7 h-7 text-black bg-[#F2EDE4] rounded-full p-1 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}