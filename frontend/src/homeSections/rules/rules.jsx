import React from 'react'
import './rules.css'
import Fade from 'react-reveal/Fade';

const Rules = () => {
    return (
    <div className='rules-container'>
        <div className='rules-mini-container'>
            <div className='rules-heading'>
                <h1>RULES AND REGULATIONS</h1>
            </div>
            <Fade>
            <div className="rules-content">
                <ul className='rules-ul'>
                    <li>
                        The Hackathon is for 12 hours.
                    </li>
                    <li>
                        Online registrations will be closed on 19th December 2023.
                    </li>
                    <li>
                        Team should either have 2 members (all girls team). 3 (min 1 girl in the team) or 4 members (min 2 girls in the team).
                    </li>
                    <li>
                    Each member should provide their details at the time of registration.
                    </li>
                    <li>
                    An abstract in the format specified in registration page should be submitted by the team.
                    </li>
                    <li>
                    A team is allowed to submit solutions to multiple problems: however, a team if selected will be selected for the one best solution out of the
                    all solutions they have proposed.
                    </li>
                    <li>
                    A mentor from renowned industries will be allotted to each team who will guide them throughout the competition.
                    </li>
                    <li>
                    Teams must present their ideas to respective mentors at 3 check points and progress will be evaluated based on judging criteria.
                    </li>
                    <li>
                    Every team must disclose their team name as well as team leader's name (girl team leader) at the time of registration. No hardware kit will be
                    provided.
                    </li>
                    <li>
                    There will be a limit on the number of entries accepted for each problem statement.
                    </li>
                    <li>
                    We would consider the first 6 entries for each problem statements for the first round of screening. The WIE Code will begin on 23st December
                    2023 8:00 AM and will end at 23st December 2023 8:00 PM. Internet facility will be provided for 12 hours.
                    </li>
                    <li>
                    Reporting time will be 7:00 am.
                    </li>
                    <li>
                    All communication will be sent to your primary email submitted at the time of registration. Certificate for participation will be provided to all
                    participants.
                    </li>
                    <li>
                    Clearly specify the email ids and mobile numbers of all team members.
                    </li>
                    <li>
                    You are expected to come up with innovative ideas. Any idea that has been copied from somewhere will be disqualified.
                    </li>
                    <li>
                    Only 40% of pre-cooked code is permissible.
                    </li>
                    <li>
                    Lunch and snacks facility will be provided.
                    </li>
                </ul>
            </div>
            </Fade>
        </div>
    </div>
)
}

export default Rules
