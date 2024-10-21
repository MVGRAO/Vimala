import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500 pl-1">Me</span>
        </h2>
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
               <div className="flex items-center justify-center">
                <img  className="rounded-2xl w-32 h-32" src={aboutImg} alt="about"/>
               </div>
            </div>
        <div className="w-full lg:w-1/2 flex items-center">
               <div className="flex justify-center lg:justify-center items-center">
                <p className="my-2 maxw-xl py-10 mr-10 ml-10 mt-10">{ABOUT_TEXT}</p>
               </div>
        </div>
      </div>
    </div>
  )
}

export default About