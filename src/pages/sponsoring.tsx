import React, { useState } from "react"
import { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout"
import ReactMarkdown from "react-markdown"
import { SponsoringContractForm } from "../components/SponsoringContractForm"

const SponsoringPage: React.FC<PageProps> = () => {
    const [hideMarkdown, setHideMarkdown] = useState(false)

    return (
        <Layout>
            {!hideMarkdown && (
                <>
                    <ReactMarkdown
                        children={`
# Wir sind auf der Suche nach weiteren Sponsoren

# Unterstützung

Die Teilnehmenden werden in kurzen Workshops mit Design Thinking, Prototyping und Vibe Coding mit KI vertraut gemacht. So entstehen schnell greifbare Ideen – auch ohne tiefere Programmierkenntnisse.
Sie möchten den Hackathon 2026 unterstützen?

## Sachsponsoring: Ein Thema, das inspiriert
Als Themenpartner können Sie eine konkrete Fragestellung oder Herausforderung aus Ihrem Unternehmen einbringen. 
Für ein wirkungsvolles Hackathon‑Thema ist eine verständliche, menschlich orientierte Problemformulierung entscheidend. Unternehmen profitieren davon, ihr Thema so zu beschreiben, dass Teilnehmende den Kontext schnell erfassen und direkt in den kreativen Prozess einsteigen können.
Die vier Leitlinien bieten dabei einen klaren Rahmen:

1. Ein reales Problem beschreiben – keine technische Lösung vorgeben, sondern die tatsächliche Herausforderung sichtbar machen.
2. Betroffene und Situationen benennen – kurz skizzieren, in welchem Umfeld das Problem auftritt und wen es betrifft.
3. Darstellen, was heute nicht gut funktioniert – präzisieren, welche Schwierigkeiten, Hürden oder Unklarheiten bestehen.
4. Gestaltungsspielraum lassen – das Thema nicht zu eng setzen, um unterschiedliche Perspektiven und neue Denkansätze zu ermöglichen.

Eine so formulierte Problemstellung erleichtert den Einstieg in Design Thinking, Prototyping und Vibe Coding und schafft die Basis für vielfältige, innovative Lösungsansätze. Sie macht das Thema für Teilnehmende attraktiv und erhöht die Chance, dass im Hackathon konkrete, weiterverwendbare Ergebnisse entstehen.
Die Teams bearbeiten diese praxisnah und anwendungsorientiert und liefern frische Perspektiven auf Prozesse oder Produkte.

Angebot für Call zur Unterstützung.

Am **12. oder 15.05.2026** bitten wir Sie, sich etwas Zeit für die Teilnehmenden zu nehmen, um ihnen Fragen zu dem Thema zu beantworten, die sie aufgrund der Workshops, die im Voraus stattfinden, haben werden.

## Finanzsponsoring: Hackathon ermöglichen
Mit einem finanziellen Beitrag unterstützen Sie die Durchführung des Hackathons, insbesondere Printwerbung und Catering am Veranstaltungstag.
Dafür bieten wir Sponsoringpakete mit Sichtbarkeit:

## Gold-Paket (1024 Euro)
- alles aus Silber-Paket
- Sponsor kann sich auf Eröffnungsveranstaltung selbst vorstellen (5 Min)
- stellen eines Jury-Mitglieds (Details des Jury-Prozesses folgen)
- Zitat/Grußwort auf der Website (begrenzte Zeichenzahl, Foto von Personen + Logo möglich, Darstellung im Stile von Testimonials)
- aufstellen eines Rollups (muss von Sponsor bereitgestellt werden)
- großes Logo auf Sponsoring-Poster oder digitaler Sponsoren-Präsentation

## Silber-Paket (512 Euro)
- alles aus Bronze-Paket
- Zugang zu Job-Wall (Pinnwand) bei der Veranstaltung
- Aufhängen von eigenen Plakaten (in Abstimmung mit uns)
- mittleres Logo auf Sponsoren-Poster oder digitaler Sponsoren-Präsentation
- Trailer/Poster auf Bildschirm-Wand im Durchlauf

## Bronze-Paket  (256 Euro)

- Nennung als Veranstaltungsparter auf Social-Media-Auftritten des Vereins
- Flyer/Info-Material als Beigabe zu Infobeuteln für Teilnehmende
- Erwähnung mit Logo auf Hackathon-Website
- Erwähnung als Veranstaltungspartner durch uns bei Eröffnungsveranstaltung
- kleines Logo auf Sponsoren-Poster oder digitaler Sponsoren-Präsentation
- Erwähnung mit Logo auf Werbe-Plakat (zeitlich befristed bis 31.11.2026)

**Wichtig: Sollte der Hackathon wider Erwarten nicht stattfinden, werden bereits gezahlte Sponsoringbeträge selbstverständlich vollständig zurückerstattet.**

**Jetzt unterstützen!**
Ob mit einem Thema oder als finanzieller Sponsor – Sie kommen mit engagierten Nachwuchstalenten in Kontakt und positionieren Ihr Unternehmen in einem innovativen Umfeld.

*Interesse?*
Schreiben Sie uns gern an hackathon@digitale-oberlausitz.eu – wir freuen uns auf den Austausch!

Wir sind auf der Suche nach Sponsoren, die unsere Veranstaltung finanziell unterstützen möchten.

Wenn Sie unsere Vision teilen, unterstützen Sie uns! Das eingeworbene Geld wird vollständig für die 
Organisation des Hackathons sowie die Finanzierung von Preisen für die Teilnehmenden verwendet.

**Melden Sie sich bei Fragen gerne unter [hackathon@digitale-oberlausitz.eu](mailto:hackathon@digitale-oberlausitz.eu)**
            `}
                    />
                </>
            )}
            <SponsoringContractForm onShowResultPage={setHideMarkdown} />
        </Layout>
    )
}

export default SponsoringPage

export const Head: HeadFC = () => <title>Sponsoring</title>
