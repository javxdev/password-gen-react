import ThemeBtn from "./components/Theme/Theme"
import SettingsUl from "./components/Ul/Ul"

function App() {

  return (
  <div className="flex flex-col justify-center min-h-dvh px-3 gap-10 md:gap-10 dark:text-neutral-200">
      <ThemeBtn/>
      <div className="flex justify-between items-center md:min-w-[30rem] bg-neutral-200 rounded-md p-2">
        <input className="min-w-[90%] outline-none border-none bg-transparent text-xl py-1 text-black" type="text" placeholder="Password" id="userOutput"/>
        <i className="fa-solid fa-copy text-2xl text-blue-600"></i>
      </div>
      <div className="flex flex-col font-semibold gap-2">
        <label htmlFor="customRange">Password Length: <span>0</span></label> 
        <input type="range" id="customRange" min="0" max="40"/>
      </div>
      <SettingsUl/>
      <button className="flex mx-auto gap-1 w-full text-xl py-2 rounded-md items-center bg-blue-500 text-white justify-center" id="generatePw">Generate Password <i className="fa-solid fa-rotate-left"></i></button>
    </div>
  )
}

export default App
