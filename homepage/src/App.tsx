import { Footer } from './components/layout/Header.tsx';
import { MobileNameCard, PCNameCard } from './components/NameCard/NameCard.tsx'
import './index.css'
function App() {
  return (
    <div className="bg-[url(/backGroundPicture1.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
      <main>
        <div className="hidden md:flex flex justify-center items-center min-h-screen">
          <PCNameCard />
        </div>
        <div className="block md:hidden flex justify-center items-center min-h-screen">
          <MobileNameCard />
        </div>
      </main>
      <footer>
        <div className="flex justify-center">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
