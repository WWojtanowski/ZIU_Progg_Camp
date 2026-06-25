# 📚 CSS: Zaawansowane Selektory

Jeśli dotychczas uczyliśmy się "patrzeć" na elementy (np. wszystkie `<p>` lub każdy element o klasie `.button`), to teraz nauczymy się, jak być **detektywami kodu**.

W tym module opanujesz zaawansowane selektory CSS. Pozwolą one precyzyjnie wskazać żądany element w strukturze HTML – nawet jeśli jest on głęboko zagnieżdżony lub ma bardzo specyficzne położenie względem swoich "braci" czy "rodziców".

**Pamiętaj:** Zdolność do precyzyjnego targetowania elementów to fundament tworzenia złożonych i wydajnych układów.

## 🎯 1. Selektory grupujące (Grouping Selector: `,`)

Często chcemy, aby ten sam styl zastosował się do kilku różnych typów elementów lub klas. Zamiast pisać te same reguły wiele razy, możemy je zgrupować za pomocą przecinka (`,`).

**Składnia:** `selektor1, selektor2, selektor3 { właściwości: wartości; }`

**Przykład:** Chcemy, aby zarówno nagłówki (`h3`), jak i elementy o klasie `.subtitle` miały ten sam kolor.

```css
/* Selektor dotyczy obu elementów jednocześnie */
h3, .subtitle { 
    color: #6a5acd; /* Kolor indygo */
}
```

## ✨ 2. Uniwersalny selektor (Universal Selector: `*`)

Gwiazdka (`*`) to najbardziej wszechmocny, ale i najmniej konkretny selektor. Wybiera **absolutnie wszystkie** elementy na stronie.

**Kiedy go używać?**
Najczęściej służy do resetowania domyślnych stylów przeglądarki (np. usuwanie marginesów czy wypełnień z każdego elementu, aby zacząć czystą kartę).

```css
/* Resetowanie wszystkich elementów */
* {
    margin: 0; /* Usuwamy domyślne marginesy */
    padding: 0; /* Usuwamy domyślne wypełnienia */
}
```

> **⚠️ Ostrzeżenie:** Nadmierne używanie `*` może prowadzić do nieprzewidywalnego i nadmiarowego stylizowania, ponieważ dotyka każdej rzeczy na stronie. Używaj go oszczędnie!

## 🌳 3. Selektor potomka (Descendant Combinator: Spacja)

Ten selektor wskazuje element, który znajduje się **gdzieś wewnątrz** innego wybranego elementu, ale niekoniecznie musi być jego bezpośrednim dzieckiem. Jest to po prostu spacja między dwoma selektorami.

**Składnia:** `selektor_rodzica selektor_potomka { ... }`

**Przykład:** Chcemy zmienić kolor tekstu *wszystkich* akapitów (`p`), które znajdują się wewnątrz elementu o klasie `.article`.

```css
/* Znajdź dowolny <p> zawarty gdzieś wewnątrz .article */
.article p { 
    font-style: italic; /* Wszystkie paragrafy artykułu są kursywą */
}
```

## 🌱 4. Selektor dziecka (Child Selector: `>`)

Selektor dziecka (`>`) jest bardziej restrykcyjny niż potomek. Wskazuje **bezpośrednie dziecko** danego elementu, czyli tylko ten, który jest natychmiast zawarty w rodzicu, bez żadnych pośredników.

**Składnia:** `selektor_rodzica > selektor_dziecka { ... }`

**Przykład:** Chcemy ustawić bardzo specyficny margines tylko dla **pierwszego** elementu listy (`li`), który jest bezpośrednio zawarty w kontenerze `.menu`.

```css
/* Selektor dotyczy TYLKO tego pierwszego LI, które jest dzieckiem .menu */
.menu > li { 
    margin-top: 20px; /* Duży margines tylko dla natychmiastowego dziecka */
}
```

## 👯 5. Selektory sąsiadów (Siblings)

To najbardziej zaawansowana i najpotężniejsza grupa selektorów, która pozwala na stylizowanie elementów względem siebie na tej samej linii hierarchii (tj. mają wspólnego rodzica).

### A. Sąsiedni brat (Adjacent Sibling Combinator: `+`)
Wybiera element, który jest **bezpośrednio po** wybranym elemencie i ma tego samego rodzica.

**Składnia:** `selektor_A + selektor_B { ... }`

**Przykład:** Chcemy dodać duży odstęp (margines) do akapitu (`p`), który znajduje się *bezpośrednio po* obrazku (`img`).

```css
/* Znajdź <p>, które jest tuż po <img> */
img + p { 
    margin-top: 30px; /* Duży odstęp pionowy */
}
```

### B. Ogólny brat (General Sibling Combinator: `~`)
Wybiera **wszystkie** elementy, które pojawiają się później niż wyznaczony element i mają tego samego rodzica.

**Składnia:** `selektor_A ~ selektor_B { ... }`

**Przykład:** Chcemy zmienić kolor tekstu wszystkich akapitów (`p`), które znajdują się *po* nagłówku (`h2`) w tym samym bloku.

```css
/* Znajdź WSZYSTKIE <p>, które pojawią się po <h2> */
h2 ~ p { 
    border-bottom: 1px solid #ccc; /* Podkreślenie wszystkich następnych akapitów */
}
```

## 🏷️ 6. Selektory atrybutowe (Attribute Selector: `[]`)

Pozwalają nam celować w elementy, które mają określony atrybut HTML, lub który spełnia pewną wartość. Jest to niezwykle elastyczna metoda targetowania.

**Składnia:** `[nazwa-atrybutu] { ... }`
**Wartość (opcjonalnie):** `[nazwa-atrybutu="wartość"] { ... }`

**Przykład 1: Celowanie po atrybucie**
Chcemy zmienić kolor tła wszystkich elementów, które mają atrybut `data-highlight`.

```css
/* Wybieramy element niezależnie od jego tagu, jeśli ma ten atrybut */
[data-highlight] {
    background-color: yellow; 
}
```

**Przykład 2: Celowanie po wartości (bardziej precyzyjne)**
Chcemy zmienić kolor tylko tych przycisków (`<button>`), które mają dokładnie tekst "Wyślij".

```css
/* Wybieramy button, którego atrybut inner text jest równy 'Wyślij' */
button[value="Wyślij"] { 
    background-color: green;
}
```

---
## 🧠 Podsumowanie Selekcji (Quick Reference)

- **Grupujący** `,` - Stosuje styl do wielu niezależnych selektorów.
- **Uniwersalny** `*` - Wybiera wszystkie elementy.
- **Potomek** (Spacja) - Element gdzieś wewnątrz innego elementu.
- **Dziecko** `>` - Bezpośrednie dziecko danego elementu.
- **Sąsiedni brat** `+`  Element tuż po wybranym elemencie (ten sam rodzic).
- **Ogólny brat** `~` - Wszystkie elementy następujące po danym elemencie (ten sam rodzic).
- **Klasa** `.` - Element z konkretną klasą.
- **ID** `#` - Element o unikalnym ID na stronie.


***
## 📝 Ćwiczenie praktyczne: Analiza i Stylizacja

Wyobraź sobie, że masz następujący fragment HTML (nie musisz go tworzyć, wystarczy zrozumieć strukturę):

```html
<div id="main-container">
    <h1>Lista zadań</h1>
    <ul class="task-list">
        <li>Zadanie 1</li>
        <!-- Tutaj jest magiczny komentarz -->
        <li>Zadanie 2 - WAŻNE!</li> 
        <li>Zadanie 3</li>
    </ul>
    <p>To jest akapit pod listą.</p>
    <div class="footer"></div>
</div>
```

**Zadania do rozwiązania:**

1.  **Selektory grupujące (`,`):** Napisz CSS, które zmieni kolor tekstu elementów `h1` oraz wszystkich elementy o klasie `.footer`.

2.  **Potomek vs Dziecko (Spacja vs `>`):** Chcesz upewnić się, że marginesy są odpowiednio ustawione dla **bezpośrednich dzieci** kontenera `#main-container`, ale nie chcesz wpływać na elementy głęboko zagnieżdżone. Jak to osiągniesz?

3.  **Ogólny brat (`~`):** Chcesz podkreślić wszystkie akapity, które pojawią się pod głównym nagłówkiem `h1`. Jak użyjesz selektora braci, aby to zrobić? (Zakładając, że po `h1` zawsze występuje przynajmniej jeden `<p>`).

4.  **Selektor atrybutowy (`[]`):** Jeśli przyjmiemy, że w rzeczywistości "WAŻNE" jest oznaczone innym atrybutem, np. `data-priority="high"`, napisz selektor CSS, który stylizuje tylko ten konkretny element listy (np. zmienia mu tło na żółte).