/* eslint-disable no-unused-vars */
import {HERO_CONTENT} from "../constants/index"

import profilePic from "../assets/kevinRushProfile.png"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 p-8">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    MVG <span></span> RAO
                </h1>
                <span className="bg-gradient-to-r from-red-300 via-black-500  to-orange-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Full stack Developer
                </span>
                <p className="my-2 max-w-l py-6 font-light tracking-tighter">{HERO_CONTENT}
                     <img src="" alt="" />
                </p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={profilePic} alt="KevinRush" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero