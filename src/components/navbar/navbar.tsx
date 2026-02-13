import { Link } from "gatsby"
import React, { FC } from "react"

import "./navbar.css"

export const Navbar: FC = () => (
    <div className="navbar">
        <ul>
            <li>
                <Link to="/">Allgemein</Link>
            </li>
            <li>
				<a  style={{background: 'var(--color-highlight-medium)', color: 'var(--color-font-light)', display: 'inline-block', height: 'auto', lineHeight: 2}} href="https://eveeno.com/hackathon2026" target="_blank"   rel="noopener noreferrer" aria-label="Anmelden (öffnet in neuem Tab)">Anmelden</a>
			</li>
			<li>
				<Link to="/challenges-teilnehmer">Deine Challenge</Link>
            </li>
			<li>
				<Link to="/challenges">Unsere Challenges</Link>
                <ul>
                    <li>
                        <Link to="/challenge-erfassung-dachflaechen">Dachflächen</Link>
                    </li>
                    <li>
                        <Link to="/challenge-reparatur-kultur">Reparatur-Kultur</Link>
                    </li>
                    <li>
                        <Link to="/challenge-gruenflaechen">Urban Gardening</Link>
                    </li>
                </ul>
            </li>
			<li>
				<Link to="/ablauf">Ablauf</Link>
            </li>
			<li>
                <Link to="/what-is-a-hackathon">Was ist ein Hackathon?</Link>
            </li>  			
           
            {/*<li>*/}
            {/*    <Link to="/results">*/}
            {/*        <strong>Ergebnisse</strong>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li>
                <p>Sponsoring</p>
                <ul>
                    <li>
                        <Link to="/sponsors">Unsere Sponsoren</Link>
                    </li>
                    <li>
                        <Link to="/sponsoring">Sponsor werden</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/support">Unterstützen</Link>
            </li>
			{/* <li>
				[Teilnahmebedingungen](/Teilnahmebedingungen.pdf)
			</li> */}
        </ul>
        <div className="archive">
            <p>Archiv</p>
            <ul>
                <li>
                    <a href="https://hackathon20243.digitale-oberlausitz.eu">2024</a>
                </li>
                <li>
                    <a href="https://hackathon2023.digitale-oberlausitz.eu">2023</a>
                </li>
                <li>
                    <a href="https://hackathon2022.digitale-oberlausitz.eu">2022</a>
                </li>
            </ul>
        </div>
    </div>
)
