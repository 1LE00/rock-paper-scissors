import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

export default function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-bg-from to-bg-to flex flex-col items-center p-7 xl:p-8 min-[2560px]:max-w-screen-2xl min-[2560px]:mx-auto min-[2560px]:p-32">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}