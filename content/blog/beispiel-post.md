---
title: Beispieltitel
description: Das hier ist die Beispielbeschreibung des Textes. Im Prinzip ist es die Unterüberschrift
date: 2021-02-07
---

Am besten schaust du dir die [Datei](https://github.com/DerDrodt/Ritter/blob/main/content/blog/beispiel-post.md) an, die zu diesem Text führt, um das alles zu verstehen.

Hier kommt schließlich der Text. Alle Dateien müssen dieses Format haben. Jetzt noch etwas Text über das Format, dass auch gleich noch Listen und **Fett**-/_Kursivschrift_ zeigt.

Jeder Blog-Post-Datei **muss** mit dem Block oben beginnen (dem _Frontmatter_-Block). Also zunächst `---` dann der Titel, die Beschreibung und das Datum (immer in der Form `yyyy-mm-dd`). Nach diesen _Metadaten_ wieder ein `---`.

Das Format für den Text hier heißt _Markdown_.

- Das hier
- ist eine
- nicht nummerierte List.
- Auch hier gehen alle _Tricks_

1. Das gleiche
2. gilt für nummerierte Listen

| Tabellen   | sind                                                          |
| ---------- | ------------------------------------------------------------- |
| ebenfalls  | möglich                                                       |
| aber etwas | **komplizierter** (und im Moment noch nicht richtig gestyled) |

Außerdem gibt es noch links, wie zum Beispiel ein [Link für Google](https://google.de).

... Oder auch Bilder:

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

Der Text lässt sich auch mit der Hilfe von Überschriften Gliedern:

# Überschrift Ebene 1

## Überschrift Ebene 2

### Überschrift Ebene 3

#### Überschrift Ebene 4

##### Überschrift Ebene 5

###### Überschrift Ebene 6

Je mehr `#`, desto unwichtiger -- und kleiner -- ist die Überschrift. Aus diversen Gründen rate ich dir stark, die Überschrift erster Ebene **nicht** zu nutzen -- fang lieber mit der 2. an.

Und Zitate gehen auch:

> Ontological questions are generally beside the point,
> hardly more than a form of harassment.

Generell ist es [hier](https://guides.github.com/features/mastering-markdown/) ziemlich gut definiert, mit ordentlichen Beispielen. Im Moment unterstütze ich aber nur alles, was **nicht** bei "GitHub Flavored Markdown" steht (von Tabellen abgesehen). Wenn du "extra" features brauchst, gib Bescheid!

Ach ja, ein Extra habe ich noch: Du kannst ganz simpel^[Vorrausgesetzt, du kennst dich jetzt etwas mit _Markdown_ aus] Fußnoten erstellen.^[Die erlauben dir zum Beispiel Quellen anzugeben, etc.]
