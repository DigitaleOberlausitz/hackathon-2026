import React from "react"
import * as R from "ramda"
import { HeadFC, PageProps } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Layout } from "../components/layout"
import "./sponsors.css"

type Sponsor = {
    /** used internally as identifier. Has to be unique */
    id: string
    /** the company name as it should appear on the page */
    label?: string
    /** the URL for the link */
    linkTarget: string
    /** a (local) path/URL to the image of the logo (e.g. "/logo_acme.png" */
    logoImgPath?: string

    greetingText?: string

    /** additional CSS applied to the logo to make the logo look ok and to get all logos look equally big */
    logoCss?: React.CSSProperties
}

const sponsors: Record<"gold" | "silver" | "bronze", Array<Sponsor>> = {
    gold: [
		{
            id: "sponsor-1",
            label: "Carl Zeiss AG",
            linkTarget: "https://www.zeiss.de/corporate/home.html",
            logoImgPath: "/logo_zeiss.svg"
        },{
            id: "sponsor-2",
            label: "SednaSoft Anja Schaffhirt",
            linkTarget: "https://sedna-soft.de/",
            logoImgPath: "/logo_sednasoft.svg"
        }

    ],
    silver: [
		{
            id: "sponsor-3",
            label: "Brewes GmbH",
            linkTarget: "https://www.brewes.de",
			//logoImgPath: "/path1.svg"
			logoImgPath: "/Brewes_rot_slogan1.svg"
        },{
            id: "sponsor-4",
            label: "GO BE - DIE Transformations-Werkstatt für die Lausitz",
            linkTarget: "https://go-be-goerlitz.de",
            logoImgPath: "/GOBE-Logo.svg"
        }
    ],
    bronze: [
    ],
}

const SponsorDetails: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
    <div className="sponsor-details">
        <div className="sponsor-title">
            <a href={sponsor.linkTarget} title={sponsor.label}>
                {sponsor.logoImgPath && (
                    <img style={{ ...sponsor.logoCss }} alt={`Logo ${sponsor.label}`} src={sponsor.logoImgPath} />
                )}
                <p>{sponsor.label}</p>
            </a>
        </div>

        {sponsor.greetingText && (
            <div className="greeting-text">
                <p>{sponsor.greetingText}</p>
            </div>
        )}
    </div>
)

const SponsorsInCategory: React.FC<{ label: string; sponsorsInCategory: Array<Sponsor> }> = ({
    label,
    sponsorsInCategory,
}) => (
    <>
        <h2>{label}</h2>
        {R.sortBy(R.prop("id"), sponsorsInCategory).map((sponsor) => (
            <SponsorDetails key={sponsor.id} sponsor={sponsor} />
        ))}
    </>
)

const SponsorsOverview: React.FC<{ sponsors: Record<"gold" | "silver" | "bronze", Array<Sponsor>> }> = ({
    sponsors,
}) => (
    <div className="sponsor-overview">
        <SponsorsInCategory label="Gold" sponsorsInCategory={sponsors.gold} />
        <SponsorsInCategory label="Silber" sponsorsInCategory={sponsors.silver} />
        <SponsorsInCategory label="Bronze" sponsorsInCategory={sponsors.bronze} />
    </div>
)

const SponsorsPage: React.FC<PageProps> = () => (
    <Layout>
        <ReactMarkdown
            children={`
# Unsere Sponsoren

Wir bedanken uns bei unseren Sponsoren, ohne die der Hackathon so nicht möglich wäre.
Wir glauben, dass ein Hackathon in Görlitz ein Beitrag zur positiven Entwicklung der Region sein kann.
In Görlitz und der Oberlausitz gibt es viele junge und kluge Leute, die ihre Kreativität für
sinnvolle Projekte einsetzen möchten. Ein Hackathon kann ein Ort dafür sein und Technik-Interessierte Menschen
zusammenbringen.
Unsere Sponsoren unterstützen uns aktiv bei der Verwirklichung dieser Vision.
            `}
        />

        <SponsorsOverview sponsors={sponsors} />
    </Layout>
)

export default SponsorsPage
export const Head: HeadFC = () => <title>Unsere Sponsoren</title>
