import Counter from "./components/Counter"
import UserForm from "./components/UserForm"

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-500 transition-all duration-500 h-screen flex flex-col">
      <h1 className="text-3xl text-center text-black/70 py-6 font-semibold shadow-xl">Upliance Assignment</h1>
      <div className="flex">
        <Counter />
        <UserForm />
      </div>
      <h2 className="text-md text-black/70 mt-9 ml-4 font-medium">@Abhay_Negi</h2>
    </div>
  )
}

export default App
