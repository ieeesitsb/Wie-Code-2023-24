import React from 'react'
import HeroSection from '../homeSections/hero/heroSection'
import Header from '../components/header/header'
import Domains from '../homeSections/domains/domains'
import Prizes from '../homeSections/prizes/prizes'
import Footer from '../components/footer/footer'
import Rules from '../homeSections/rules/rules'
import Sponsorers from '../homeSections/sponsorers/sponsorers'

function HomePage() {
  return (
    
        <div>
        <Header/>
        <HeroSection/>
        <Prizes/>
        <Domains />
        <Rules/>
        <Sponsorers/>
        <Footer/>
        </div>
  )
}

export default HomePage