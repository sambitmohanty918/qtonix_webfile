// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp



import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
import NextNprogress from 'nextjs-progressbar';


import '../styles/globals.css'
import './scss/main.scss'

import Body from './includes/Body'

class MyApp extends App {
  render(){
    const {Component,pageProps} = this.props;
    return(
      <Provider store={store}>
          <Body>
          <NextNprogress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={2}
  showOnShallow={true}
/>
            <div className="container mt-2 mb-2">
              <Component {...pageProps}></Component>
            </div>
          </Body>
      </Provider>
    )
  }
}


const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);