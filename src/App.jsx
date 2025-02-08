import Counter from "./components/Counter"
import Editor from "./components/Editor"
import UserForm from "./components/UserForm"

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-500 transition-all duration-500 h-screen flex flex-col">
      <h1 className="text-3xl text-center text-black/70 py-6 font-semibold shadow-xl">Upliance Assignment</h1>
      <div className="flex flex-row">
        <Counter />
        <UserForm />
        <Editor />
      </div>
    </div>
  )
}

export default App
