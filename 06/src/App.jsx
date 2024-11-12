import { ParadoxAnimation } from './components/ParadoxAnimation'
import { ParadoxDataTable } from './components/ParadoxDataTable'
import { ParadoxDetails } from './components/ParadoxDetails'

function App() {
  return (
    <div className='w-[90%] mx-auto my-6 space-y-12'>
      <h1 className='text-center text-4xl text-cyan-800 font-extrabold'>
        Zeno&apos;s Paradox of Achilles and the Tortoise
      </h1>
      <ParadoxAnimation />
      <ParadoxDataTable />
      <ParadoxDetails />
    </div>
  )
}

export default App
