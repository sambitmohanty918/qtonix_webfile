import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import { SocialIcon } from 'react-social-icons';

export class Body extends Component {
    render() {
        return (
            <>
               <Navbar />
               {this.props.children} 
               <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
