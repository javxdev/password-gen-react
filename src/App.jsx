import ThemeBtn from "./components/Theme"

function App() {

  return (
  <div className="flex flex-col gap-10 dark:text-neutral-200">
      <ThemeBtn/>
      <div className="flex justify-between items-center min-w-[30rem] bg-neutral-200 rounded-md p-2">
        <input className="min-w-[90%] outline-none border-none bg-transparent text-xl py-1" type="text" placeholder="Password" id="userOutput"/>
        <i className="fa-solid fa-copy text-2xl text-blue-600"></i>
      </div>
      <div className="flex flex-col font-semibold gap-2">
        <label htmlFor="customRange">Password Length: <span>0</span></label> 
        <input type="range" id="customRange" min="0" max="40"/>
      </div>
      <ul className="w-full flex flex-col gap-2 font-semibold">
            <li>Uppercase (A-Z)</li>
            <li>Lowercase (a-z)</li>
            <li>Symbol (!$#@)</li>
            <li>Number (0-9)</li> 
      </ul>
      <button className="flex mx-auto gap-1 w-full text-xl py-2 rounded-md items-center bg-blue-500 text-white justify-center" id="generatePw">Generate Password <i className="fa-solid fa-rotate-left"></i></button>
    </div>
  )
}

export default App
