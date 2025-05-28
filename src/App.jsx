import { Helmet } from 'react-helmet'
import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Gmail from './components/Gmail'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import { Toaster } from 'react-hot-toast';
import Contribution from './components/Contribution'



function App() {

  return (
    <>
      <Helmet>
        <title>Dennis James Portfolio</title>
        <meta name="description" content="Dennis James" />
        <meta name="keywords" content="Dennis James" />
      </Helmet>
      <div className='overflow-x-hidden text-stone-300 antialiased'>
        <div className='fixed inset-0 -z-10'>
            <div class="relative h-full w-full bg-slate-950">
                <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
                </div>
            </div>
        </div>
        <div className='container mx-auto px-8'>
          <Navbar/>
          <Hero/>
          <Education/>
          <Experience/>
          <Contribution />
          <Technologies/>
          <Projects/>
          <Gmail/>
          <Contact/>
          <Toaster />
        </div>
    </div>
    </>
  )
}

export default App
