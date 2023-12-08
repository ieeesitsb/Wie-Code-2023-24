import React, { useState } from 'react'
// import Footer from '../components/footer/footer';
import Header from '../components/header/header';


import "../css/aboutUs.css";

export default function AboutUs() {

    

    return (
        <div className='about'>
            <Header />
            <div className="about-main-container">
                <div className="about-paras-container">
                    <div className="about-para-container">
                        <div className="about-para-heading-container">
                            <h2 className="about-para-heading">IEEE SIT SB</h2>
                        </div>
                        <div className="about-para-container">
                            <p className="about-para">
                                IEEE SIT SB is an IEEE Student Branch in SIT under the IEEE Bangalore Section wing. The branch was established in 2002. The team envisions to organize activities which reflect the intent of young minds and put forth the ingenuity that the team holds about a better tomorrow. The members take part in various global and national IEEE symposiums, conferences and workshops to comprehend the trending and upcoming technologies considering a number of domains. IEEE SIT SB renders various technical fields of interest having pioneered an array of subgroups to cater a nurturing platform for the members. To name a few subgroups are Robotics, Web development, App development, Blogging and Digital Design.
                            </p>
                        </div>
                    </div>

                    <div className="about-para-container">
                        <div className="about-para-heading-container">
                            <h2 className="about-para-heading">WIE IEEE SIT SB</h2>
                        </div>
                        <div className="about-para-container">
                            <p className="about-para">
                                WIE IEEE SIT SB under the aegis of IEEE SIT SB points out at advancing and encouraging women in the technical domain and to transform them into innovative engineers. It aims at aiding and comforting women in the automated era whose contribution to the society globally has only been linear. WIE IEEE SIT SB believes that by transforming a group of young women can actually change the course of technology considering the dedication, determination, passion and compassion they possess. The activities organised are not just technical symposiums but also humanitarian activities to cater the basic needs of an orphan or teaching exercises for under privileged students in the rural areas.
                            </p>
                        </div>
                    </div>

                    <div className="about-para-container">
                        <div className="about-para-heading-container">
                            <h2 className="about-para-heading">WIE CODE</h2>
                        </div>
                        <div className="about-para-container">
                            <p className="about-para">
                                WIE CODE is the flag ship event formulated by WIE IEEE SIT SB which is a 12 hour National Level hackathon contemplating the real world problems to build a software or a hardware solution opting the domain of interest. WIE Code started in the year 2019-20 and has been anticipated each year ever since. It aims at encouraging women in the field of technology to build the real time problems a palpable and pertinent solution. WIE Code sets a theme throwing light on the much accepted fact that innovation can change the course of technology. It is a mere attempt at making the attendees thoughtful and inventive through vigorous mentoring and a competitive environment. The event has gathered enough crowd every year to have made it to the list of
                                being of the most triumphant events hosted by WIE IEEE SIT SB.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
