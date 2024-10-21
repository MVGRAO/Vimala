import Nav from '../Nav.jsx';
import aboutImg  from '../../assets/About.png'
import { ABOUT_TEXT } from '../../Constansts/index.js';
const About = () => {
  return (
    <>
    <div className="mt-nav md:mt-nav+4 home-background">
    <Nav/>
    <div className="flex flex-wrap">
           <div className="w-full lg:w-1/2 lg:p-8">
               <div className="flex items-center justify-center">
                <img  className="rounded-full w-[35rem] object-fill bg-transparent" src={aboutImg} alt="about"/>
               </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="flex justify-center lg:justify-center font-Playwrite indent-6">
                <p className="my-2 maxw-xl py-10 mr-10 ml-10 mt-10 text-xl leading-loose">{ABOUT_TEXT}</p>
               </div>
               </div>
        </div>
    </div></>
  )
}

export default About;
