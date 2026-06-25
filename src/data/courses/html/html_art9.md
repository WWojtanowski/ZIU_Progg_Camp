# 🏗️ Rozdział 9: Znaczniki Semantyczne

Jeśli do tej pory uczyliśmy się, że HTML jest jak układanie klocków LEGO — czy każdy element musi być w odpowiednim miejscu? W tym rozdziale dowiesz się o najważniejszej zasadzie budowania stron: **Semantyka**.

## 🧠 Czym jest Semantyka (Semantic Meaning)?

W świecie programowania słowo "semantyczny" oznacza **znaczenie**. Kiedy używamy semantycznych znaczników, nie mówimy przeglądarce i wyszukiwarkom Google tylko *jak* coś wygląda (`<div>`), ale przede wszystkim *co to jest*.

### 🚫 Problem z `<div>` (Dlaczego tego unikać?)

Wcześniej, aby ustrukturyzować stronę, często używano pustego znacznika `<div>`. Był on jak "czarna skrzynka" – mówił tylko: „Tutaj coś się dzieje”.

```html
<!-- To jest kod, który ma bardzo mało znaczenia -->
<div id="header">...</div>
<div class="nav">...</div> 
<div class="main-content">...</div>
<footer>...</div>
```

Dla nas (programistów) to działa. Ale dla czytników ekranu (dla osób niewidomych, które polegają na komputerze do informacji) i dla algorytmu Google, te linie są bez znaczenia. Nie wiedzą, co jest nagłówkiem, a co stopką!

**Znaczniki semantyczne rozwiązują ten problem.** One nadają strukturę i kontekst całemu dokumentowi.

## 🧭 Kluczowe Znaczniki Semantyczne

Oto najważniejsze tagi, które musisz znać i używać w każdym profesjonalnym projekcie:

### 1. `<header>` (Nagłówek Sekcji/Strony)
**Co robi?** Zawiera wprowadzające informacje dla danej sekcji lub całej strony – zazwyczaj logo, główny tytuł, czy główne menu.
**Kiedy używać?** Zawsze na górze strony (`<body>`). Może też być użyte wewnątrz `<article>` jako nagłówek tego konkretnego artykułu.

```html
<header>
    <h1>Nazwa Twojej Strony</h1>
    <!-- Tutaj często znajduje się logo -->
</header>
```

### 2. `<nav>` (Nawigacja)
**Co robi?** Zawiera główne bloki linków nawigacyjnych. To nie jest po prostu lista, to *miejsce* dla menu.
**Kiedy używać?** Gdy masz blok z głównym przejściem między sekcjami strony (menu główne).

```html
<nav>
    <ul>
        <li><a href="#o-nas">O Nas</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
    </ul>
</nav>
```

### 3. `<main>` (Główna Treść)
**Co robi?** Oznacza najważniejszą, unikalną i główną treść strony. Powinien być użyty tylko raz na stronę!
**Kiedy używać?** To wszystko, co jest "sercem" Twojej witryny – to, co użytkownik ma oglądać od razu po załadowaniu.

### 4. `<section>` (Sekcja Tematyczna)
**Co robi?** Grupuje tematycznie powiązane treści. Jest jak rozdział w książce. Jeśli możesz poprosić o podtytuł, prawdopodobnie potrzebujesz `<section>`.
**Kiedy używać?** Kiedy masz duży blok tekstu i chcesz go podzielić na logiczne części (np. "Historia firmy", "Nasze produkty", "Opinie klientów").

### 5. `<article>` (Artykuł Samodzielny)
**Co robi?** Reprezentuje *samowystarczalną* treść – coś, co mogłoby istnieć samo na własnym blogu czy w wydrukowanym magazynie.
**Kiedy używać?** Idealnie pasuje do pojedynczego wpisu blogowego, recenzji produktu, wiadomości.

> ⚠️ **Ważna różnica: `<section>` vs. `<article>`**
> *   Jeśli tworzysz stronę z wieloma artykułami (np. strona główna bloga), to każdy post jest `<article>`.
> *   Ale jeśli masz jeden post, a ten post dzieli się na części tematyczne (np. „Wprowadzenie” i „Podsumowanie”), te podziały użyjesz jako `<section>` wewnątrz `<article>`.

### 6. `<aside>` (Element Poboczny)
**Co robi?** Zawiera treść, która jest powiązana z głównym tematem, ale nie jest jego częścią głównego przepływu. To typowo elementy boczne.
**Kiedy używać?** Widgety, reklamy, boxy "Czy wiesz?", bloki powiązanych linków na marginesie (sidebar).

### 7. `<footer>` (Stopka)
**Co robi?** Zawiera informacje końcowe dla sekcji lub całej strony – prawa autorskie, kontakty, linki do polityk prywatności itp.
**Kiedy używać?** Zawsze na dole strony!

```html
<footer>
    &copy; 2023 Twoja Firma | Polityka Prywatności | Kontakt
</footer>
```


---

## 🚀 Zadanie Praktyczne: Budowa Strony Blogowej (Challenge)

**Cel:** Użyj wszystkich nauczonych znaczników semantycznych, aby stworzyć szkielet strony blogowej o nazwie „Semantyka dla Początkujących”. Nie musisz pisać treści – wystarczy poprawna struktura.

**Instrukcja:**
1.  Utwórz plik `index.html` i rozpocznij od podstawowego szablonu HTML5.
2.  Użyj elementów semantycznych, aby ustrukturyzować następujące elementy na stronie:
    *   Nagłówek strony (zawierający tytuł bloga). `<header>`
    *   Menu nawigacyjne na górze. `<nav>`
    *   Główny obszar witryny, zawierający posty. `<main>`
    *   3 wpisy blogowe - każdy pojedynczy wpis (np. "Semantyka to magia") powinien być oddzielnym blokiem.
    *   Wewnątrz pierwszego artykułu, podział na tematy ("Definicja" i "Zastosowanie"), użyj różnych sekcji.
    *   Dodaj pasek boczny z widgetem (np. "Popularne tagi").
    *   Stopka strony z linkami do polityki prywatności i rokiem praw autorskich.

**Pamiętaj:** Poprawna semantyka to nie tylko składnia, ale przede wszystkim *myślenie strukturalne*. Użyj odpowiedniego znacznika dla treści, a Twoja strona będzie czytelna dla ludzi, maszyn i — co najważniejsze – wyszukiwarek!