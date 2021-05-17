import Hero from 'src/components/hero'
import Footer from 'src/components/footer'
import GridList from 'src/components/gridList'
import Example from "../components/example";
import WithLargeQuote from 'src/components/quote'
import Pdf from 'src/components/pdf'

const HomePage = (): JSX.Element => (
  <>
    <Hero />
    <GridList />
    <Example />
    <Pdf />
    <WithLargeQuote />
    {/*<SpeechBubble />*/}
    <Footer />
  </>
)

export default HomePage
