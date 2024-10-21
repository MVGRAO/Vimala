import {RiReactjsLine} from "react-icons/ri"
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-red-800"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-900"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiFlutterFill className="text-7xl text-cyan-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-cyan-900"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
