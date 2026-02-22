import React, { useState } from "react"
import { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout"
import ReactMarkdown from "react-markdown"

const SponsoringPage: React.FC<PageProps> = () => {
    const [hideMarkdown, setHideMarkdown] = useState(false)

    return (
        <Layout>
            {!hideMarkdown && (
                <>
                    <ReactMarkdown
                        children={`


## Sponsor werden und Hackathon ermöglichen

Mit einem finanziellen Beitrag unterstützen Sie die Organisation und Durchführung des Hackathons, insbesondere Printwerbung und Catering am Veranstaltungstag, sowie die gemeinnützige Arbeit im Bereich der [Volksbildung durch den Digitale Oberlausitz e. V.](https://digitale-oberlausitz.eu/verein/)
Dafür bieten wir Sponsoringpakete mit Sichtbarkeit:

## Gold-Paket (1024 Euro)
- Alles aus Silber-Paket
- Sponsor kann sich auf Eröffnungsveranstaltung selbst vorstellen (5 Min)
- Stellen eines Jury-Mitglieds (Details des Jury-Prozesses folgen)
- Zitat/Grußwort auf der Website (begrenzte Zeichenzahl, Foto von Personen + Logo möglich, Darstellung im Stile von Testimonials)
- Aufstellen eines Rollups (muss von Sponsor bereitgestellt werden)
- Großes Logo auf Sponsoring-Poster oder digitaler Sponsoren-Präsentation

[Link zum Gold-Sponsoring-Vertrag](/2026-sponsoring-hackathon-gold.pdf)

## Silber-Paket (512 Euro)
- Alles aus Bronze-Paket
- Zugang zu Job-Wall (Pinnwand) bei der Veranstaltung
- Aufhängen von eigenen Plakaten (in Abstimmung mit uns)
- Mittleres Logo auf Sponsoren-Poster oder digitaler Sponsoren-Präsentation
- Trailer/Poster auf Bildschirm-Wand im Durchlauf

[Link zum Silber-Sponsoring-Vertrag](/2026-sponsoring-hackathon-silver.pdf)

## Bronze-Paket  (256 Euro)

- Nennung als Veranstaltungsparter auf Social-Media-Auftritten des Vereins
- Flyer/Info-Material als Beigabe zu Infobeuteln für Teilnehmende
- Erwähnung mit Logo auf Hackathon-Website
- Erwähnung als Veranstaltungspartner durch uns bei Eröffnungsveranstaltung
- kleines Logo auf Sponsoren-Poster oder digitaler Sponsoren-Präsentation
- Erwähnung mit Logo auf Werbe-Plakat (zeitlich befristed bis 31.01.2026)

[Link zum Bronze-Sponsoring-Vertrag](/2026-sponsoring-hackathon-bronze.pdf)

**Jetzt unterstützen!**

Ob mit einem Thema oder als finanzieller Sponsor – Sie kommen mit engagierten Nachwuchstalenten in Kontakt und positionieren Ihr Unternehmen in einem innovativen Umfeld.

*Interesse?*

Bei Fragen oder Anregungen schreiben Sie uns gern an [hackathon@digitale-oberlausitz.eu](mailto:hackathon@digitale-oberlausitz.eu) – wir freuen uns auf den Austausch!

Um uns mit einem Sponsoring-Paket zu unterstützen, senden Sie uns bitte einen der Sponsoring-Verträge (Link unter Beschreibung des jeweiligen Pakets weiter oben) unterzeichnet an die Adresse [sponsoring@digitale-oberlausitz.eu](mailto:sponsoring@digitale-oberlausitz.eu). Wir werden Ihnen den vollständig unterschrieben an ihre Sender-Adresse zurücksenden.
            `}
                    />
                </>
            )}
        </Layout>
    )
}

export default SponsoringPage

export const Head: HeadFC = () => <title>Sponsoring</title>
