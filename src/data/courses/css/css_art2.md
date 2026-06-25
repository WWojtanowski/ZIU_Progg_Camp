# 📘 CSS: Podstawowa składnia

Jeśli HTML jest jak budowanie z klocków LEGO (struktura), to CSS jest farbą, dekoracjami, meblami i oświetleniem (styl).

Celem tego rozdziału jest opanowanie podstawowej składni CSS: nauczymy się wybierać elementy na stronie oraz zmieniać ich kolorystykę i rozmiar.

## 🧱 Jak działa stylizacja?

CSS działa na zasadzie instrukcji dla przeglądarki internetowej. Mówimy mu: "Weź ten element z HTML, a ja chcę, żeby miał takie właściwości".

Składnia CSS jest bardzo prosta i składa się z trzech części:
1. **Selektor (Selector):** Określa, *co* ma być stylizowane (np. wszystkie nagłówki `<h1>`).
2. **Właściwość (Property):** Określa *jaką cechę* zmieniamy (np. kolor tekstu).
3. **Wartość (Value):** Określa *na co* tę cechę zmieniamy (np. czerwony).

Całość wygląda tak: `selektor { właściwość: wartość; }`

---

### 🎯 1. Selektory – Celowanie w Elementy

Zanim coś stylizujemy, musimy wiedzieć, **co** ma być nam stylizowane. Do tego służy **selektor**. To mechanizm wskazujący konkretny element HTML na stronie.

Najprostszym selektorem jest wybór po tagu (np. `p` dla wszystkich akapitów, lub `h1` dla nagłówków pierwszego poziomu).

**Przykład:**
Jeśli chcesz zmienić kolor każdego akapitu na niebieski, używasz:

```css
/* Selektor 'p' oznacza wszystkie elementy <p> */
p {
    color: blue; /* Właściwość color i wartość 'blue' */
}
```

### 🎨 2. Właściwości kolorystyczne (Color & Background)

CSS pozwala na manipulowanie nie tylko tekstem, ale również tłem całego elementu.

#### `color`
Ta właściwość określa **kolor tekstu** wewnątrz wybranego elementu. Kolory można podawać jako nazwy (`red`), kody HEX (`#FF0000`) lub wartości RGB.

```css
/* Zmienia kolor tekstu dla wszystkich nagłówków */
h2 {
    color: #336699; /* Niebieski, używamy kodu HEX */
}
```

#### `background-color`
Definiuje **kolor tła** samego elementu.

```css
/* Zmienia kolor tła dla akapitu i nadaje mu lekko żółty wygląd */
p {
    background-color: #FFFFCC; 
}
```

### 📐 3. Właściwości wymiarowe (Width & Height)

Czasami chcemy, aby dany element nie zajmował całej dostępnej przestrzeni, ale miał określony rozmiar. Do tego służą właściwości `width` (szerokość) i `height` (wysokość).

**Uwaga na jednostki!**
Zawsze musisz podać jednostkę dla wymiarów. Najczęściej używane to:
*   `px`: Pixele (stała, fizyczna jednostka).
*   `%`: Procent (względem rodzica elementu).

Plik "index.html":
```html
<body>
    <div class="box"></div>
</body>
```

Plik "style.css":
```css
/* Definiuje stałą szerokość i wysokość dla naszego bloku.*/
.box { 
    width: 300px; /* Szerokość 300 pikseli */
    height: 150px; /* Wysokość 150 pikseli */
}
```

---

### 🧩 Podsumowanie i Składnia Krok po Kroku

Pamiętaj o tej składni, którą będziesz używał w każdym projekcie CSS:

```css
/* SELEKTOR (np. .box) */
.box { 
    /* WŁAŚCIWOŚĆ 1 : WŁAŚCIAŚĆ 2 : ... */
    width: 300px; /* Ustalenie rozmiaru */
    height: 150px; /* Ustalenie rozmiaru */
    background-color: #f4f4f9; /* Tło elementu */
    color: black; /* Kolor tekstu wewnątrz elementu */
}
```

---
## 🚀 Zadanie praktyczne: Stworzenie Karty Produktowej (Challenge!)

Wygeneruj plik CSS (`style.css`) oraz plik HTML (`index.html`), które razem stworzą prostą "kartę produktową".

### 📋 Wymagania dla Twojego rozwiązania:

1.  **Struktura HTML:** Utwórz jeden kontener z klasą `.product-card`, który będzie zawierał nagłówek i akapit (dane o produkcie).
2.  **Selektory CSS:** Użyj selektorów, aby zaadresować ten element (`.product-card`) oraz jego zawartość (np. `h3` i `p`).
3.  **Stylizacja Kontenera (`.product-card`):**
    *   Nadaj mu stałą szerokość: **250px**.
    *   Nadaj mu stałą wysokość: **200px**.
    *   Ustaw kolor tła na delikatny, jasnoniebieski (np. `#e6f7ff`).
    *   Dodatkowo, ustaw mu lekkie zaokrąglenie (`border-radius: 10px;` - *możesz to sobie uczyć w następnym module!*)

4.  **Stylizacja Tekstu:**
    *   Ustaw kolor tekstu dla całego kontenera (np. na ciemny grafitowy, `dimgray`).
    *   Nadaj nagłówkowi (`h3`) duży rozmiar czcionki i upewnij się, że jest on wyraźnie widoczny.

### 💡 Wskazówka:
Pamiętaj o prawidłowym linkowaniu pliku CSS do Twojego pliku HTML!