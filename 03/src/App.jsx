import { ExtraContent } from './components/ExtraContent'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MainContent } from './components/MainContent'
import { RelatedImages } from './components/RelatedImages'
import { RelatedPosts } from './components/RelatedPosts'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className='max-w-5xl w-[90%] mx-auto'>
      <Header />
      <div className='flex h-[400px] text-center'>
        <div className='flex flex-col w-4/12'>
          <Hero />
          <Sidebar />
        </div>
        <div className='flex flex-col flex-1'>
          <MainContent />
          <ExtraContent />
        </div>
      </div>
      <div className='flex h-20 text-center'>
        <RelatedImages />
        <RelatedPosts />
      </div>
      <Footer />
    </div>
  )
}

export default App
