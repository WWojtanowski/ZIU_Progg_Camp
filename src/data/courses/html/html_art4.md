# ✨ Rozdział 4: Podstawowe znaczniki w treści (Nagłówki, Paragrafy i Struktury)

Po nauczeniu się struktury dokumentu (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`), czas wypełnić ciało naszej strony zawartością. W tym rozdziale poznasz elementy odpowiedzialne za organizację tekstu: od tytułów po akapity, a także narzędzia do grupowania sekcji.

### 📚 Hierarchia nagłówków (Headings: `<h1>` - `<h6>`)

Nagłówki nie służą tylko do powiększania czcionki! Ich najważniejszą funkcją jest nadawanie **znaczenia semantycznego** treści. Dla przeglądarki kolejność nagłówków mówi o hierarchii całego artykułu.

*   `<h1>`: Główny tytuł strony (musi być tylko jeden na stronie!).
*   `<h2>`: Główne sekcje/rozdziały.
*   `<h3>`: Podrozdział, podtemat w obrębie `<h2>`.
*   ... i tak dalej aż do `<h6>`.

#### 🔗 Przykład:
```html
<h1>Tytuł strony</h1>
<h2>Sekcja 1</h2>
<h3>Podsekcja 1.1</h3>
<h3>Podsekcja 1.2</h3>
<h2>Sekcja 2</h2>
<h3>Podsekcja 1.1</h3>
```

**PAMIĘTAJ:** Nigdy nie używaj nagłówków tylko po to, aby coś „wyglądało większe”. Zawsze staraj się zachować logiczny porządek (h1 -> h2 -> h3...).

### 📝 Akapity i formatowanie tekstu

**Paragraf `<p>`:**
Jest to podstawowy kontener dla bloku tekstowego. Wszystkie akapity powinny być otoczone znacznikiem `<p>...</p>`. Użycie tego elementu sprawia, że przeglądarka wie, gdzie kończy się jeden blok tekstu i zaczyna drugi (zazwyczaj dodając odstęp).

#### 🔗 Przykład:
```html
<p>Nagłówek strony</p>
```

**Formatowanie tekstowe:**
HTML oferuje dwa rodzaje formatowania: semantyczne i wizualne. Jako początkujący, musisz poznać oba!

- Pogrubienie
  - `<strong>` - Gdy treść jest krytyczna dla zrozumienia znaczenia.
  - `<b>` - Gdy tylko chcesz, aby tekst wyglądał pogrubiony, ale nie niesie specjalnego znaczenia.
- Kursywa
  - `<em>` - Gdy chcemy zaakcentować słowo w akapicie.
  - `<i>` - Do terminów obcojęzycznych, myśli czy elementów, które po prostu mają być kursywą.


#### 🔗 Przykład:
```html
<p>Tekst <strong>pogrubiony</strong> i <em>z kursywą</em>.</p>
```

> 💡 **Złota zasada:** Zawsze używaj semantycznych znaczników (np. `<strong>`) zamiast tylko wizualnych (`<b>`), jeśli możesz! To ułatwia pracę przyszłym programistom i narzędziom wspomagającym czytanie.

### 📦 Struktury blokowe: Kontenery (`<div>` i `<span>`)

Te dwa znaczniki są najważniejsze, ponieważ pozwalają nam **grupować** inne elementy HTML. Nie niosą one żadnego znaczenia semantycznego — są tylko „pudełkami” (kontenerami).

1.  **`<div>` (Division):**
    *   Jest elementem **blokowym**. Oznacza, że zawsze zajmie dostępną szerokość i wymusi nowy wiersz przed i po sobie.
    *   Używamy go do grupowania dużych sekcji treści (np. cały pasek boczny, cała galeria zdjęć).

2.  **`<span>`:**
    *   Jest elementem **inline'owym**. Oznacza, że zajmuje tylko tyle miejsca, ile jest potrzebne jego zawartości.
    *   Używamy go do stylizowania małej części tekstu *wewnątrz* akapitu lub nagłówka (np. podświetlenie konkretnego słowa bez łamania struktury).

#### 🔗 Przykład:
```html
<p>
    To jest 
    <div style="color: blue">element blokowy</div>
    , a to jest 
    <span style="color: red">element inline</span>
</p>
```

### 💻 Podsumowanie i praktyczne ćwiczenie

Pamiętaj, że:
*   **Blokowe:** `<div>`, `<p>`, `<h1>` itd. (Zajmują cały rząd).
*   **Inline:** `<span>`, `<a>`, `<strong>` itp. (Zajmują tylko tyle miejsca, ile potrzebują).

---

### 🚀 Zadanie do rozwiązania (Rozdział 4)

**Cel:** Stworzenie mini-artykułu o ulubym hobby przy użyciu wszystkich poznanych znaczników.

1.  Utwórz w pliku `index.html` strukturę artykułu:
    *   Tytuł główny (`<h1>`) – np. „Moje pasjonujące zajęcie”.
    *   Sekcja ogólna (`<h2>`) – np. „Historia hobby”. Opisz to w 2-3 akapitach (`<p>`). W jednym z akapitów użyj `<strong>` do podkreślenia kluczowego słowa.
2.  Dodaj kolejną sekcję (`<h2>`) – np. „Jak zacząć?”.
    *   Wewnątrz tej sekcji utwórz listę podpunktów (dla celów ćwiczenia, wystarczy użyć kilku nagłówków `<h3>` zamiast listy).
3.  Użyj znacznika `<div>` do stworzenia "bloku wyróżniającego" na końcu artykułu – np. z napisem: *„Wskazówka tygodnia!”*. W środku tego bloku, wykorzystaj `<span>`, aby kolorystycznie podkreślić frazę „Nie bój się eksperymentować!”.