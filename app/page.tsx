import About from '@/components/About'
import Benefit from '@/components/Benefit'
import DownloadApp from '@/components/Download'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonial'
import FAQ from '@/components/Faq'




export default function Home() {
  return (
    <>
     <Hero />
     <About />
     <Guide />
     <Benefit />
     <Testimonials />
     <DownloadApp />
     <FAQ />
    </>
  )
}
