import React, { Component } from 'react'
import { connect } from 'react-redux'

export class index extends Component {
  render() {
    return (
      <>
        <section>
          <div className="connect">
            <h2>Connect with anyone.</h2>
            <h5 className="mt-4">Qtonix lets you find professional email addresses in seconds and connect with the people that matter for your business.</h5>
            <div className="emailform mt-5">
              <form className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control emilform_inner" placeholder="domain.com" />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Find Email Address</button>
                  </span>
                </div>
              </form>
              <p>Enter a domain name to launch the search. For example, <a>qtonix.com</a>.</p>
            </div>
          </div>
        </section>
        
        

        <section>
          <div className="domainSeach">
            <h5>DOMAIN SEARCH</h5>
            <h3>Get the email addresses behind any website.</h3>
            <p>The Domain Search lists all the people working in a company with their name and email address found on the web. With 100+ million email addresses indexed, effective search filters and scoring, it's Hunter's most powerful email-finding tool.</p>
            <a href="/">Receive 25 free searches/month</a>
          </div>
        </section>
        <section>
          <div className="emailOption">
            <div className="row">
              <div className="col-md-6">
                <div className="emailOptionFind">
                  <h5>EMAIL FINDER</h5>
                  <h3>Find the email address of any professional.</h3>
                  <p>Find the email addresses of people you want to contact one by one or in bulk to enrich your database. The Email Finder uses a large number of signals to find the proven or most probable email address of anyone in a fraction of second.</p>
                  <a href="/">Test the Email Finder</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="emailOptionFind">
                  <h5>EMAIL VERIFIER</h5>
                  <h3>Verify the deliverability of any email address.</h3>
                  <p>The Email Verifier does a complete check of the email address to let you send your emails with a complete confidence. As it uses our unique set of data, the Email Verifier can return a result even where other standard verification tools fail.</p>
                  <a href="/">Test the Email Verifiers</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="transparency text-center">
            <h3>We believe in data transparency.</h3>
            <p>At Qtonix, we are convinced the most valuable data is sourced and processed using transparent methods. Every single email address we collect and distribute in the Domain Search has public sources we indicate, along with the discovery dates.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
