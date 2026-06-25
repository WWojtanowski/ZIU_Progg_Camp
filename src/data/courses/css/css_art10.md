# 🧩 CSS: Pseudoklasy i pseudoelementy (Interakcja)

Dotychczas nauczyliśmy się, jak stylizować elementy na podstawie ich *typu* (`p`, `h1`) lub *klasy* (`.box`). Ale co z tymi elementami, które zmieniają wygląd w zależności od tego, **jak użytkownik z nimi interaguje**? Albo te bardzo specyficzne fragmenty tekstu, takie jak pierwsza linia czy pierwsza litera?

Żeby stworzyć nowoczesny i intuicyjny interfejs, nie wystarczy tylko ładnie ustawić kolory. Musimy zapewnić **feedback wizualny**. I tu na scenę wchodzą Pseudoklasy i pseudoelementy.

---

### 🧐 Czym są Pseudoklasy?

**Pseudoklasy** (`:pseudo-class`) to selektory, które nie wskazują konkretnego elementu HTML, ale raczej **stan** tego elementu w danym momencie. One odpowiadają na pytania typu: "Czy ten element jest aktywny?", "Czy myszka nad nim najedwo?", czy "Czy użytkownik akurat na niego klika?".

Najważniejsze pseudoklasy do zapamiętania to te związane z interakcją:

#### 🔗 `:link` i `:visited` (Linki)
Te pseudoklasy są używane specjalnie dla elementów `<a>` (anchor/link).

*   `:link`: Określa styl, jaki ma link **pierwszy raz** widziany przez użytkownika.
*   `:visited`: Określa styl, jaki ma link, który użytkownik **już odwiedził**.

```css
/* Ustawienie wyglądu dla nieodwiedzonych linków */
a:link {
    color: royalblue;
}

/* Ustawienie wyglądu dla już odwiedzonych linków */
a:visited {
    color: purple;
}
```

#### 🖱️ `:hover` (Najazd myszką)
Jest to najczęściej używana pseudoklasa. Definiuje styl, który ma zastosować się do elementu **tylko wtedy, gdy kursor myszy nad nim się znajduje**. To kluczowy element budowania interaktywności!

```css
/* Kiedy użytkownik najedzie na przycisk */
button:hover {
    background-color: darkorange; /* Zmienia tło na pomarańczowe */
    cursor: pointer; /* Pokazuje, że to jest klikalny element */
}
```

#### 👆 `:active` (Aktywny stan)
Określa styl elementu **w momencie jego klikania**. Jest to wizualne potwierdzenie, że użytkownik wykonał akcję.

```css
/* Kiedy przycisk jest faktycznie wciśnięty */
button:active {
    background-color: #cc8800; /* Lekko ciemniejszy pomarańcz */
    transform: translateY(2px); /* Miniacja efektu "wciśnięcia" */
}
```

#### 🎯 `:focus` (Skupienie)
Ten pseudoklas jest najważniejszy dla **dostępności** i formularzy. Określa styl elementu, który ma obecnie *aktywny fokus* (np. pole tekstowe, które użytkownik właśnie wypełnia).

```css
/* Gdy pole input otrzyma focus */
input:focus {
    border-color: green; /* Podświetla ramkę na zielono */
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.5); /* Dodaje cień */
}
```

---

### ✨ Pseudoelementy

**Pseudoelementy** (`::pseudo-element`) nie zmieniają one stanu elementu, lecz pozwalają nam stylizować **konkretne części** tego elementu lub tworzyć elementy, których w HTML nie ma!

W nowoczesnym CSS używamy dwukropka podwójnego (`::`).

#### 📜 `::first-line` (Pierwsza linia)
Umożliwia zastosowanie stylu tylko do **pierwszej linii tekstu** w danym bloku. Często stosowane do dekoracji akapitów.

```css
/* Ustawienie większego koloru dla pierwszej linii każdego akapitu */
p::first-line {
    font-weight: bold;
    color: #444;
}
```

#### ✒️ `::first-letter` (Pierwsza litera)
Pozwala na stylizację **pierwszej litery** w bloku tekstowym. Klasycznie używane do efektu „drop cap” (duża, dekoracyjna pierwsza litera).

```css
/* Stylizacja pierwszej litery */
p::first-letter {
    font-size: 2em; /* Dwukrotny rozmiar czcionki */
    float: left; /* Ustawienie jej na lewo, aby tekst płynął wokół niej */
}
```

---

## 🚀 Zadania praktyczne (Mini Projekt Interaktywny)

**Cel:** Stworzenie strony z interaktywnym menu nawigacyjnym i blokiem tekstu ozdobionym pseudoelementami.

Wygeneruj plik CSS (`style-advanced.css`) oraz plik HTML (`index-advanced.html`).

### 📋 Część A: Menu Nawigacyjne (Pseudoklasy)

1.  **HTML:** Utwórz sekcję nawigacyjną zawierającą kilka linków `<a>` (np. Home, About, Services).
2.  **CSS - `:link` / `:visited`:** Stylizuj linki nieodwiedzone i odwiedzone, aby miały różne kolory tekstu.
3.  **CSS - `:hover`:** Ustaw efekt na najazd myszą: gdy użytkownik nadjedzie na którykolwiek z linków, powinien zmienić kolor tła oraz podkreślenie (np. `text-decoration: underline;`).
4.  **CSS - `:active`:** Dodaj subtelny feedback wizualny na kliknięcie (np. lekkie zmniejszenie koloru tekstu).

### 📝 Część B: Tekst ozdobiony (Pseudoelementy)

1.  **HTML:** Utwórz pusty akapit `<p class="fancy-text"></p>` w Twoim dokumencie.
2.  **CSS - `::first-letter`:** Stylizuj pierwszą literę tego akapitu tak, aby była duża i miała inny kolor (np. czerwony).
3.  **CSS - `::first-line`:** Stylizuj całą pierwszą linię tekstu w tym akapicie (różny kolor lub pogrubienie), aby podkreślić jej znaczenie.