import Header from './components/header'
import Section1 from './components/section-1'
import Section2 from './components/section-2'
export default function Home() {
  return (
    <div className=''>
      <Header />
      <main className=''>
        <Section1 />
        <Section2 />
      </main>
    </div>
  )
}
