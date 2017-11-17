Maginon SP-01
=============

Ce plugin est un add-on pour le framework [Avatar](https://github.com/Spikharpax/Avatar-Serveur)

Il permet le contrôle de la prise wifi MAGINON smart Plug  SP-1E.

![GitHub Logo](/logo/maginon.jpg)


## Installation
- Dézippez le fichier `Avatar-Plugin-maginon-Master.zip` dans un répertoire temporaire
- Copiez le répertoire `maginon` dans le répertoire `Avatar-Serveur/plugins`


## Configuration

La configuration du plugin se fait dans le fichier `Avatar-Serveur/plugins/maginon/maginon.prop`

### Adresse IP de la prise
Ajoutez dans la propriété "ip", l'adresse IP de votre prise MAGINON.

Exemple
```xml
"ip": "192.168.0.29",
```	

### login

Mettez dans les propriétés "User" et "Password", le login de connection à la prise.

Exemple
```xml
"User": "admin",
"Password": "admin"
```	
	

## Les règles	

Les règles sont définies dans le fichier `Avatar-Serveur/plugins/maginon/maginon.prop` dans le tableau "rules":

- "switchOn" : Les règles pour allumer la prise
- "switchOff" : Les règles pour éteindre la prise



## Versions

Version 1.0 - 17/11/2017
- Initial version