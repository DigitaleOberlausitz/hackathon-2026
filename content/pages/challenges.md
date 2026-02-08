---
slug: challenges
title: Challenges
---
Unser diesjähriger Hackathon stellt sich den aktuellen Herausforderungen städtischer Entwicklung und Nachhaltigkeit
durch die Förderung des Prinzips "Open Data".

In den vergangenen Jahren ist das Thema des Klimawandels und der nachhaltigen Verwendung unserer Ressourcen sowie der
Vermeidung von CO2 dauerpräsent in der Presse geworden. Waren es in den letzten Dekaden eher zentrale Organisationen,
wie ein Weltklimarat oder große Organisationen wie Greenpeace oder andere Gruppen aus der Wissenschaft, die Veränderung
bewirken wollten, so zeigen bspw. Klimastreiks durch _Fridays for Future_ oder auch Gruppierungen wie die _Letzte
Generation_, dass eigenes Engagement notwendig ist, um Veränderung zu bewirken. Auch wenn man sieht, dass auf Ebene des
Landes, Europa oder global immer wieder Gelegenheiten verstreichen gelassen wurden, hinreichende Maßnahmen umzusetzen,
so ist es unsere Möglichkeit, im Kleinen, lokal Veränderungen zu treiben und einen Teil dazu beizutragen — inspiriert
von dem Projekt
[TRUST](https://www.goerlitz.de/buergerbeteiligung/vorhaben/56-TRUST-Auf-dem-Weg-zur-Goerlitzer-Klimaneutralitaet), das
offen und unter Einbindung der Bürger an verschiedenen Themen zur Erreichung der Klimaneutralität arbeitet.

Problemstellungen sind zum Beispiel:

-   [Automatisierte Erfassung von Dächern zur Nutzung von Solaranlagen](#Dachflaechen): Es sind
    nicht nur bestehende Solaranlagen zu erkennen, sondern auch potenzielle Flächen für neue Installationen zu
    identifizieren. Dies erfordert eine präzise Analyse von Dachflächen hinsichtlich ihrer Eignung für Solaranlagen.
-   [Förderung der Reparaturkultur](#Reparaturkultur): Angesichts neuer gesetzlicher Regelungen zur
    Reparierbarkeit von Produkten müssen Städte eine Infrastruktur schaffen, die Wissen und Ressourcen für Reparaturen
    zugänglich macht. Es geht dabei um die Vernetzung von Reparaturexperten, Werkstätten und Privatpersonen.
-   [Identifizierung und Verwaltung potenzieller Grünflächen](#Gruenflaechen): Grünflächen und
    Gemeinschaftsgärten bieten nicht nur Erholungsmöglichkeiten, sondern fördern auch die Gemeinschaft und unterstützen
    nachhaltige Praktiken wie Urban Gardening.(/challenge-gruenflaechen)

Alle diese Problemgebiete haben gemein, dass sie auf Daten basieren, die erstens der Allgemeinheit zur Verfügung stehen
sollten, woraus sich eine Umsetzung Bereitstellung der Lösungen mittels einer Infrastruktur, die Open Data gerecht wird,
geradezu fordert. Zweitens sind die Daten dieser Problemfelder alle lokationsbasiert — somit wäre bspw.
[Open Street Map](https://www.openstreetmap.org/) eine geeignete Platform.

Lasst uns diesen Hackathon also als Impulsgeber in gleich mehrerlei Hinsicht abhalten: Wir können Nachhaltigkeit
unterstützen und eine Verbesserung unserer lokalen Lebensbedingungen bewirken.

<!--<a id="Dachflaechen"></a>
# Challenge: Erfassung Dachflächen

Solaranlagen (Photovoltaik oder Solarthermie-Anlagen) sind ein zentraler Bestandteil der Energiewende, das Potential für die Installation und Nutzung von Dachflächen oder anderen geeigneten Flächen ist jedoch noch lange nicht ausgeschöpft. Gerade in Görlitz, aber insbesondere in der Görlitzer Altstadt haben wir bspw. einen großen Nachholbedarf und sicherlich ein noch ungenutztes Potential.

Um die aktuelle Situation mit Daten und Fakten zu bewerten und diese auch in andere Planungs- und Entscheidungsprozesse der stadtischen Entwicklung (z. b. Wärmeplanung) einfließen zu lassen, benötigt es eine möglichst umfangreiche Datenquelle. Bestehende Datenquellen, wie z. B. das Solardatenkataster, liefern nicht genügend Informationen über den Standort und weitere Eigenschaften von Solaranlagen.

Die Herausforderung ist also eine automatisierte Art Bestandsaufnahme über alle Solaranlagen und mögliche Potenziale für die weitere Installationen von Anlagen zu erkennen und zu bewerten. Dies erfordert eine präzise Analyse von Dachflächen hinsichtlich ihrer Eignung für Solaranlagen.

## Ausgangssituation

Es sind Areal Images ("Satellitenbilder") aus geeigneten Datenquellen zu verwenden, auf Basis derer eine Lösungsimplementierung erfolgen kann. Hierzu sind in der internen Datenquelle "Geodatenquellen.md" verschiedene Datenquellen aufgelistet, die benötigte Input-Daten liefern. Darüber hinaus sind im Verzeichnis "Solaranlagen Bestandaufnahme" verschiedene Research Papers gelistet, die die Informationen zur Analyse solcher Daten liefern.

## Aufgabenstellung

Es soll ein System entwickelt werden, das folgende Aufgaben umsetzt-

* Identifikation vorhandener Solaranlagen: Erkennung und Auflistung von bereits installierten Solaranlagen auf Dächern
* Eignungsbewertung für Solaranlagen: Analyse und Auflistung von Dächern, zu ihrer Eignung für Solaranlagen, basierend auf Neigung, Größe, Ausrichtung und Art der Bebauung.

Die Ergebnisse sollen in einem (maschinenverarbeitbaren) Report ausgegeben werden und ggf. auch visualisiert werden.

Zusatz:
* Datenvisualisierung: Erstellen einer interaktiven Karte, die zeigt, welche Dächer bereits Solaranlagen haben und welche potenziell geeignet sind.
* Empfehlungen: Bereitstellung von Empfehlungen und Berechnungen zur potenziellen Energieerzeugung und Kosten-Nutzen-Analyse für Eigentümer geeigneter Dächer.
* Integration mit städtischen Planungsdaten: Verknüpfung mit vorhandenen städtischen Datenbanken, um Eigentümer und Verwalter von Gebäuden zu informieren und die Genehmigungsprozesse zu unterstützen.

<a href="https://eveeno.com/hackathon2026" target="_blank" aria-label="Anmelden (öffnet in neuem Tab)"
   style="background: var(--color-highlight-medium);
          color: var(--color-font-light);
          display: inline-block;
          height: auto;
          line-height: 2;
		  padding: 0 0.5rem">
  Anmelden
</a>


<a id="Gruenflaechen"></a>
# Challenge: Identifizierung und Verwaltung potenzieller Grünflächen

Identifizierung und Verwaltung potenzieller Grünflächen: Grünflächen und Gemeinschaftsgärten bieten nicht nur
Erholungsmöglichkeiten, sondern fördern auch die Gemeinschaft und unterstützen nachhaltige Praktiken wie Urban
Gardening. Neben dem sozialen Aspekt ist das Thema "Urban Gardening" auch noch eine mögliche Maßnahme der Wärmeplanung einer Stadt zur Schaffung von Grünflächen zur Abkühlung des innerstädtischen Klimas.

## Ausgangssituation

* Abgrenzung: Es gibt zwar behördliche Daten über Grünflächen, die jedoch nicht veröffentlicht werden können, da Besitzinformationen datenschutzrechtlich nicht direkt freigegeben werden. Damit man nun eine eigene Erkennung solcher Flächen basierend auf Geodaten umsetzen könnte, müsste man jedoch zunächst wissen, anhand welcher Eigenschafte eine solche Fläche zu erkennen wäre. All dies sind Herausforderungen, die nicht im Rahmen des Hackathons zu klären sind.
* Wenn man nun jedoch davon ausgeht entsprechende Informationen zu Grünflächen und deren Bewirtschaftung bereits auf Open-Date-Basis zu haben, z. B. via Open Street Map, könnte man die Anwendungsfälle des Urban Gardinings entsprechend durch eine App unterstützen. Was das Thema "Urban Gardening" betrifft, gibt Informationen unter im internen Verzeichnis "Urban Gardening", sowie eine interne Datenquelle "Open-Street-Maps - Hilfsmaterial.md".
* Mögliche Ressourcen, die es zu verarbeiten gilt: öffentliche Gartenanlagen und bepflanzte/bepflanzbare Fächen, Gartenwerkzeuge aus einem öffentlichen "Depot" oder einer privaten Organisation, die diese bereitstellen (mieten/leihen/...), Wasserquellen, Urban Gardener (Personen), Ertrag/Früchte (welche Früchte können in welchem Garten gefunden werden -- siehe Linksammlung aus dem internen Verzeichnis)
  * Die Annahme bei der Gruppe "Urban Gardener" ist, es könnte bestimmte Personen geben, die etwas mehr Verantwortung tragen und auch ggf. eine Wissensquelle für Gartenwissen aber auch zur Kultur und zu Regeln des gemeinschaftlichen Gärtnerns da sind. Auch könnte eine solche Person bspw. weitere Ressourcen, wie Samen zur Verfügung stellen. Jede Person, die in der Hinsicht Wissen trägt, kann dieses der Allgemeinheit zur Verfügung stellen (unter welchen Konditionen auch immer). Aber es geht sozusagen darum ein Netzwerk an Menschen zu haben, die sich kennen und mit denen man in Kontakt treten kann, um sich zu beteiligen.

## Aufgabenstellung

* Entwicklung einer Anwendung zur Unterstützung der Schaffung und Verwaltung grüner Flächen und Gemeinschaftsgärten.
* Adressierung der verschiedenen Ressourcen-Typen (Gärten, Werkzeuge und Orte dafür, Urban Gardener, Früchte).

Das Projekt könnte umfassen:

* Kartierung von Flächen: Identifikation verfügbarer Flächen in der Stadt, die in Gemeinschaftsgärten oder Grünflächen umgewandelt werden können.
* Ressourcenmanagement: Werkzeug zur Verwaltung von Ressourcen wie Gartengeräten, Samen, Wasser usw.
* Gemeinschaft: Plattform für Einwohner zur Kommunikation, Organisation von Veranstaltungen, Erfahrungsaustausch und gemeinsamer Pflege der Flächen.
* Bildung: Abschnitt mit Anleitungen, Online-Workshops und Bildungsressourcen zu Gartenarbeit und nachhaltiger Entwicklung

Wesentlich für die Lösung ist, dass eine Speicherung weiterer Informationen aus der App heraus nach dem Open-Data-Prinzip geschehen sollten. Da Open Street Map als Datenquelle hier genannt ist, wäre also eine Speicherung in diesen Karten mit geeigenten Tags denkbar.

<a href="https://eveeno.com/hackathon2026" target="_blank" aria-label="Anmelden (öffnet in neuem Tab)"
   style="background: var(--color-highlight-medium);
          color: var(--color-font-light);
          display: inline-block;
          height: auto;
          line-height: 2;
		  padding: 0 0.5rem">
  Anmelden
</a>


<a id="Reparaturkultur"></a>
# Challenge: Förderung der Reparaturkultur

Es gibt einen wachsenden Bedarf zur Unterstützung Reparierbarkeit, nicht nur aus Klimaschutzgründen (denn jeder vermiedene Neukauf schützt vor weiterer Co2-Emission), auch wirtschaftlich ist es mit Blick auf die Förderung seltener Erden etc. sinnvoll. Im April 2024 gab es nun eine gesetzliche Neuerung, die das Thema mittelfristig stark in den Vordergrund unserer Gesellschaft treiben soll: https://www.europarl.europa.eu/topics/de/article/20220331STO26410/recht-auf-reparatur-massnahmen-um-reparaturen-attraktiver-zu-machen
Demnach wird Reparierbarkeit von Produkten von den Herstellern stärker eingefordert und verpflichtend. Es kommt also auf die Gesellschaft im Ganzen, jedoch auch auf das Ökosystem einer Stadt die Herausforderung, die Infrastruktur für diese Notwendigkeit zu schaffen und zu fördern. Es genügt nicht, ein paar gewerbliche Reparaturangebote zu haben. Es wird zum gesellschaftlichen Bedarf verschiedene Angebote und Ressourcen zur Reparatur zur Verfügung zu haben.

## Ausgangssituation

* Es gibt bereits verschiedene [Angebote, die auf Open-Data-Basis via Open Street](https://taginfo.openstreetmap.org/search?q=repair#keys) Map erfasst sind.
  * Mehr dazu siehe interne Datenquelle "Open-Street-Maps - Hilfsmaterial.md".
* Basierend auf dieser Datenbasis können weitere Angebote erfasst werden.

## Aufgabenstellung

Es soll eine App geschaffen werden, die Anbieter von Wissen, Ressourcen und Dienstleistungen mit den Hilfesuchenden zusammenbringen soll. Seien es nun Personen oder Organisationen (Vereine etc.) mit Erfahrung zu Elektrogeräten und der Reparatur dieser, Personen, die Werkzeuge, wie Lötkolben oder sogar eine Werkstatt anbieten können oder kommerzielle Reparaturanbieter. Es geht also darum Informationen über Ressourcen (im weitesten Sinne) zu speichern und verfügbar und durchsuchbar zu machen.

Es gibt bereits eine Datenbasis auf Grundlage von Open Street Map, die mit einem eigenen "repair" Tag gespeichert sind. Die Suche ist jedoch der Anwendungsfall, der verbessert und unterstützt werden könnte. Hilfesuchende wissen unter Umständen nicht so genau wie sie diese Informationen finden bzw. wonach sie genau suchen müssen.

Auf dieser Infrastruktur basierend könnte nun eine UI gebaut werden, die die Kartendaten abstrahiert und den Suchenden durch gezielte Fragen herausfindet, welche Ressource genau benötigt wird und dann beim Aufbau des Kontaktes oder dem Finden der wirklich benötigten Ressource zu unterstützen.

Dies könnte der Hauptanwendungsfall sein, jedoch gibt es noch weitere Themen, die mit dieser App ergänzend unterstützt werden könnten:
* Aufzeigen, in welchen Regionen oder Städten noch nicht ausreichend Angebote zur Verfügung stehen (Input für politisches Handeln)
* Einpflege von neuen Angeboten (auch durch Privatpersonen) unterstützen

<a href="https://eveeno.com/hackathon2026" target="_blank" aria-label="Anmelden (öffnet in neuem Tab)"
   style="background: var(--color-highlight-medium);
          color: var(--color-font-light);
          display: inline-block;
          height: auto;
          line-height: 2;
		  padding: 0 0.5rem">
  Anmelden
</a>-->