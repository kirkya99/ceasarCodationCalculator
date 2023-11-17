# Abgabe Web-Programmieren 17.11.2023
## Idee
* Unsere Idee ist die Verschlüsselung einer Zeichenkette mit der Caesar-Verschlüsselung.
* Es werden die Werte P und K an die Funktion übergeben und der Client erhält den verschlüsselten Text zurückgeliefert
* Wenn eine falsche Eingabe erkannt wird, also *P* ist kein Buchstabe bzw. *K* ist keine Zahl, dann wird eine entsprechende Fehlermeldung zurückgegeben
## Links
* [Ceasar-Verschlüsselung]( https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung)
* [GitHub Repository](https://github.com/kirkya99/ceasarCodationCalculator)
* [URL zu Ihrer Function in der Cloud](https://ceasar.azurewebsites.net/api/caesarCodation?)
* **Parameter für die Function:**
    * **k:** Der Wert, um den das Zeichen verschoben wird
        * Muss eine Zahl sein
    * **p:** Die Zeichenkette, die verschlüsselt werden soll
        * Darf nur aus Buchstaben bestehen
## Erfahrungen mit AI-basiertem Coding
* Wir haben ChatGPT für die Generierung kleinerer Hilfsfunktionen verwendet, um uns auf die sinnvolleren Aufgaben zu konzentrieren
    * Zu den Aufgaben von ChatGPT gehörte die Generierung von Arrays von Buchstaben in alphabetischer Sortierung bzw. der Reihe von 0 bis 9
    * Dies lief aber erst nach der dritten oder vierten Anfrage an ChatGPT, da dieses die Anfragen zuerst falsch verstanden hat.
        * Es hat zuerst das Array ohne Anführungszeichen generiert
        * Es hat die numerische Liste bis 25 generiert, obwohl sie nur von 0 bis 9 sein sollte 
## Tests
* Es hat funktionert, die Anwendung in der integrierten IDE in Azure zu testen
* Die Anwendung liefert im URL-Feld eines Browsers die entsprechende Antwort auf die Anfrage
### Test mit ChatGPT
* ChatGPT 3 konnte die Anwendung nicht aufrufen
* ChatGPT 4 konnte die Anwendung mit den richtigen Parametern aufrufen und die Ausgabe der Anwendung auswerten
    * Es wurden alle bekannten Fehlerfälle von ChatGPT richtig erkannt
### Test mit Postman
* Es konnten die Eingaben über Postman mit der URL durchgeführt werden
* Die Fehlerfälle wurden entsprechend erkannt
* Es hat jedoch nicht funktioniert, die Parameter über den Body an die Anwendung zu übergeben
