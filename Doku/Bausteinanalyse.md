# Informationsverbund

Für unser Teilporjekt wurden folgende Elemente als Teil des Informationsverbundes identifiziert.

* (Virtueller)Linux Server mit Debian 64-bit Version ohne X-Server. (Server)
* Java Spring Webanwendung für eine Zoo Verwaltung. (Webanwendung)
* Datenbank System, welches zur Persistierung für Daten der Webanwendung verwendet wird. (Datenbank)

Im folgenden wird für diese drei Informationsverbund-Elemente eine Schutzbedarfsfeststellung nach BSI 200-2 durchgeführt.
In die Schutzbedarfsfeststellung gehen unter anderern die Punkte festlegen der Schutzbedarfskategorie (normal, 
hoch, sehr hoch), Feststellung des Schtuzbedarfes für Anwendungen, Geschäftsprozesse, Gebäude sowie 
Kommunikationsverbindungen. Nicht alle Punkte müssen für jedes Element durchgeführt werden, auch werden wir 
organisatorische sowie räumliche Gesichtspunkte ausklammern, da diese den Rahmen sprengen würden.
 
* Festlegung des Geltungsbereichs für die Kern-Absicherung

** Zoo-Verwaltung Software / App

* Identifikation und Festlegung der kritischen Aktiva (Kronjuwelen)
  * Belegung von Gehegen draf nur von bestimmten personen durchgeführt werden. Welche
   Tier wo sind darf aber jeder wissen.
  * Daten dürfen nicht unwissentlich verändert werden

* Strukturanalyse

|ID | Bezeichnung             | Beschreibung/ Kommentar             |
|---|-------------------------|-------------------------------------|
| 1 | Linux Server mit Debian | Headless, in einem interen Netzwerk.|
| 2 | openJDK 1.8             | Als Runtime Umgebung für die Anwendung |
| 3 | Maria DB                | Ablage der Daten der Zoo Anwendng   |
| 4 | Zoo App     | mit Framework Backend / Frontend        |

* Schutzbedarfsfeststellung
  
|ID | Bezeichnung             | Vertraulichkeit         | Integrität              | Verfügbarkeit   | Module
|---|-------------------------|-------------------------|-------------------------|-----------------|
| 1 | Linux Server mit Debian | (sehr hoch) (1)         | (sehr hoch) (2)         | (normal)        | Sys1.1/Sys1.3
| 2 | openJDK 1.8             | normal                  | sehr hoch               | normal          | 
| 3 | Maria DB                | normal                  | sehr hoch               | normal          |
| 4 | Zoo App                 | normal                  | sehr hoch               | normal          |


(1a) - S. 117
(1b) - Betriebssystem. Bild die Bais
(1c) - Betriebssystem. Bild die Bais


* Auswahl und Anpassung von Anforderungen



* IT-Grundschutz-Check
* Weiterführende Sicherheitsmaßnahmen


# Bausteinanalyse

Basis ist muss und Standard kann mit Argumentation - Erhöht ist ausgeschlossen

## App: Anwendungen

### App3.1 Webanwendungen

### App3.2 Webserver

### App4.3 Relationale DB
- https://www.slideshare.net/ottokekalainen/less-passwords-more-security-unix-socket-authentication-and-other-mariadb-hardening-tips

- nicht von außern erreichbar (nmap -A zeit nur port 22, 80)
- nur erreichbar über localhost und unix-socket
- root über socket auth d.h. kein passwort da direkt über linux auth system
- nutzer mit grant auf Datenbank zoo  (db.user= zoo-keepr)

## Sys: IT-Systeme

### Sys1.1 Allgemeiner Server

#### SYS.1.1.A1 (B) Geeignete Aufstellung {ausgeschlossen}

#### SYS.1.1.A2 (B) Benutzerauthentisierung 

- root nicht über ssh

#### SYS.1.1.A3 (B) Restriktive Rechtevergabe

- Jeder nutzer nur das was notwendig ist

#### SYS.1.1.A4 (B) Rollentrennung

- Sudo Nutzer (*benutzer* mit sudo und ssh)
- System Nutzer für Applikation (*zoo-app*, unpriviligiert, kein home, keine shell)
- System Nutzer für Applikation (*mysql*, unpriviligiert, kein home, keine shell)

#### SYS.1.1.A5 (B) Schutz der Administrationsschnittstselle

- Alle Einstellungen über *benutzer* ohne sudo

#### SYS.1.1.A6 (B) Deaktivierung nicht benötigter Dienste und Kennungen 

- Minimalsystem installiet ohen gui.
- deinstallieren von packeten (bluetooth, email, ...)

#### SYS.1.1.A7	(B) Updates und Patches für Firmware, Betriebssysteme und Anwendugen

- ?

#### SYS.1.1.A8 (B) Regelmäßige Datensicheurng {ausgeschlossen}

#### SYS.1.1.A9 (B) Einsatz von Vieren-Schutzprogrammen

- ?

#### SYS.1.1.A10 (B) Protokollierung

- ? 

#### SYS.1.1.A11 (S) Festlegung einer Sicherheitsrichtlinie für Server {ausgeschlossen} 

#### SYS.1.1.A12 (S) Planung des Server-Einsatzes {ausgeschlossen}

#### SYS.1.1.A13 (S) Beschaffung von Servern {ausgeschlossen}

#### SYS.1.1.A14 (S) Erstellung eines Benutzer- und Adminstrationskonzepts {ausgeschlossen}

#### SYS.1.1.A15 (S) Unterbrechungsfreie und stabile Stromversorgung {ausgeschlossen} 

#### SYS.1.1.A16 (S) Sichere Installation und Grundkonfiguration von Servern

#### SYS.1.1.A17 (S) Einsatzfreigabe {ausgeschlossen}

#### SYS.1.1.A18 (S) Verschlüsselung der Kommunikationsverbindung

#### SYS.1.1.A19 (S) Einrichtung lokaler Paketfilter

#### SYS.1.1.A20 (S) Beschränkung des Zugangs über Netze {Schnittstelle} 

#### SYS.1.1.A21 (S) Betriebsdokumentation {ausgeschlossen}

#### SYS.1.1.A22 (S) Einbindung in die Notfallplanung {ausgeschlossen}

#### SYS.1.1.A23 (S) Systemüberwachung

#### SYS.1.1.A24 (S) Sicherheitsüberprüfung

#### SYS.1.1.A25 (S) Geregelte Außerbetriebnahme eines Servers {ausgeschlossen}

#### SYS.1.1.A26

#### SYS.1.1.A27

#### SYS.1.1.A28

#### SYS.1.1.A29

#### SYS.1.1.A30

#### SYS.1.1.A31

### Sys1.3 Server unter Linux

#### SYS.1.3.A1 (B) Benutzerauthentisierung unter Unix

#### SYS.1.3.A2 (B) Sorgältige Vergabe von IDs

- standard von debian eingehalten
- IDs sind eindeutig

#### SYS.1.3.A3 (B) Automatisches Einbinden von Wechsellaufwerken

- autofs nicht installiert

#### SYS.1.3.A4 (B) Schutz von Anwendungen

- ASLR aktiv [link](https://securityetalii.es/2013/02/03/how-effective-is-aslr-on-linux-systems/)
'''
sudo cat /proc/sys/kernel/randomize_va_space
2 //  Full randomization. In addition to elements listed in the previous point, memory managed through brk() is also randomized
'''

- NX aktiv 
'''
sudo dmesg | grep "NX"
[    0.000000] NX (Execute Disable) protection: active

'''

#### SYS.1.3.A5 (B) Sichere Installtion von Software-Packeten

- nur stable debian ?

#### SYS.1.3.A6 (S) Verwaltung von Beutzern und Gruppen

- siehe oben

#### SYS.1.3.A7 (S) Zusätzlihe Absicherung des Zugagns zum Single-User und Wiederherstellungsmodus

- ?

#### SYS.1.3.A8 (S) Verschlüsseler Zugriff über Secure Shell

- nur über Zertifikate möglich
- nicht für root möglich

#### SYS.1.3.A9 (S) Abischerung des Bootvorgangs

#### SYS.1.3.A10 (S) Verhinderung der Ausbreitug bei der Ausnutzung von Schwachstellen

- Systemd Service (Starten von Software mit eigenen Nutzer (*zoo-app* und *mysql*)
- Systemd ProtectSystem=full (prevent write /usr, /boot, /etc
- Systemd ProtectHome=true (prevent access /home, /root /run/user

- AppArmour

#### SYS.1.3.A11 (S) Einsatz der Sicherheitsmechanismen von NFS

- nicht installiert ?

#### SYS.1.3.A12 (S) Einsatz der Sicherheitsmechnismen von NIS

- nicht installiert ?

#### SYS.1.3.A13 

#### SYS.1.3.A14

#### SYS.1.3.A15

#### SYS.1.3.A16

#### SYS.1.3.A17
