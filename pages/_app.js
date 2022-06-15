import '../styles/globals.css'
import App, {Container} from 'next/app';
import { DefaultSeo } from 'next-seo';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}



export default MyApp
