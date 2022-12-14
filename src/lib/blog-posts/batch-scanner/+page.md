---
title: Batch Scanner App
author: Joseph
date: 2022-04-15
layout: blog
excerpt: An app for scanning incoming batch numbers and collecting them on the server side.
---


Batch-Scanner-API: https://github.com/dunef-com/batch-scanner-api

Leviathan-API: https://github.com/dunef-com/leviathan-api


An app for scanning incoming batch numbers and collecting them on the server side.


**Note:** This app is excliusively made for the **KEYENCE BT-A700** mobile Android Scanner. On other devices the app may not behave as expected.


## Login-Seite

<p align="center">
  <img src="https://user-images.githubusercontent.com/72471328/194281070-38c472c1-87eb-4660-93d7-5d2ab0fc10e0.png" alt="drawing" width="200"/>
</p>

Der Login erfolgt über Eingabe von Personalnummer und Passwort.

Diese werden an die Leviathan-API gesendet, wo die Eingabe geprüft und die Berechtigung bestimmt wird.


## Übersichts-Seite

<p align="center">
  <img src="https://user-images.githubusercontent.com/72471328/194281762-97a57d76-0e4a-4896-a70f-34324f035fda.png" alt="drawing" width="200"/>
</p>

Auf diese Seite werden dem Benutzer alle bereits aufgenommenen Chargen, in einer Übersicht angezeigt.

Die einzelnen der Einträge der Chargen können hier auch noch entfernt oder bearbeitet werden.

Wurden noch keine Chargen eingescannt/aufgenommen, wird dem Benutzer dies hier angezeigt.

Diese Seite ist nur für Admins zugängig.


## Konfigurations-Seite

<p align="center" >
  <img src="https://user-images.githubusercontent.com/72471328/194282749-ed08b499-42a9-4b21-8047-9d46f2def8b2.png" width="200" alt="drawing">
  <img src="https://user-images.githubusercontent.com/72471328/194282725-a66e85eb-7556-4ed1-aa99-df2103f65cf2.png" width="200" alt="drawing">
</p>

Hier muss bevor neue Einheiten aufgenommen werden können, zuerst eine valide Konfiguration angelegt werden. 

Eine Konfiguration beinhaltet eine Bezeichnung und eine flexible Anzahl an Spalten.
In dieser Eingabemaske sollten alle Information hinterlegt sein, die der Benutzer über eine eingescannt Einheit aufnehmen möchte.

Admins können Konfigurationen anlegen, bearbeiten und löschen.

Benutzer die keine Admin-Berechtigung haben können hier lediglich nur eine Konfiguration auswählen.


## Scan-Seite
<p align="center" >
  <img src="https://user-images.githubusercontent.com/72471328/194284754-838bd100-398e-49cb-ac51-6250dd1fe122.png" width="200" alt="drawing">
</p>
Hier wird dem Benutzer eine Eingabemaske präsentiert, welche eine ID als auch alle in der Konfiguration hinterlegten Spalten beinhaltet. 

Die Eingabemaske wir durch das Scannen von Barcodes befüllt. Das gerade fokussierte Textfeld kann aber auch händisch per Tastatur ausgefüllt werden.

Falls der Benutzer eine falsche Eingabe getätigt hat, kann dies durch den Rückganging-Button wiederrufen werden. In deisem Fall wird das zuvor fokussierte Textfeld fokussiert.

Möchte der Benutzer die aufgenommenen Einheiten an den Server (Batch-Scanner-API) übertragen, kann dies durch den oben rechts platzierten Häkchen-Button getan werden.

Ist der Benutzer fertig mit Scannen, kann der Vorgang ohne Übertragung an den Server, mit dem links oben platzierten X-Button beendet werden.

