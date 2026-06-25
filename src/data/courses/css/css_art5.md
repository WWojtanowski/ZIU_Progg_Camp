# 🧱 CSS: Obramowanie i Odstępy (Box Model)

Witaj! W poprzednich modułach nauczyłeś się nadawać elementom kolor, rozmiar oraz kształt. Ale czy pomyślałeś kiedyś o tym, jak elementy mają być ze sobą **oddzielone**? Czy chcemy, żeby nasz kontener wyglądał jakby był zawieszony w ramce?

Ten rozdział jest jednym z najważniejszych – i często najbardziej mylących – tematów dla początkujących. Nauczymy się manipulować przestrzenią wokół naszych elementów za pomocą **Obramowań (Borders)** oraz kluczowego konceptu, który nazywa się **Box Model**.

## 🖼️ 1. Obramowanie (The Border)

Wyobraź sobie każdy element na stronie jako obraz. Domyślnie ten obraz ma czyste krawędzie. Atrybuty obramowania pozwalają nam dodać ramkę do obrazu.

### A. Składniki obramowania

Aby stworzyć pełne, spersonalizowane obramowanie, potrzebujesz kilku właściwości:

1.  **`border-width`:** Określa grubość linii (np. `2px`, `solid`).
2.  **`border-style`:** Określa wygląd linii (np. `solid` – ciągła, `dashed` – przerywana, `dotted` – kropkowana).
3.  **`border-color`:** Określa kolor linii.

Najłatwiej jest użyć skrótu **`border`**, który łączy wszystkie trzy właściwości:

```css
/* Składnia: border: <grubość> <styl> <kolor>; */
.box {
    border: 3px solid red; /* Efekt: 3 piksele, ciągły, czerwony obramowanie */
}
```

### B. Zaokrąglanie

**`border-radius`:** Pozwala na zaokrąglenie rogów elementu. To nadaje nowoczesny, miękki wygląd (np. karty produktów).
```css
.card {
    /* Ustawia promienie dla wszystkich czterech rogów */
    border-radius: 10px; 
}
```

---

## 📦 2. Model Boxa: Padding, Border i Margin

To jest najważniejsza koncepcja w CSS. Każdy element na stronie działa jak pudełko o czterech warstwach (jak jajko z białkiem i żółtkiem):
- `margin` - Przestrzeń *zewnętrzna* elementu.
- `border` - Ramka, obramowanie, które otacza całe pudełko.
- `padding` - Przestrzeń *wewnętrzna* elementu.
- *(Content)* - Faktyczna zawartość (teksty, obrazy).

### 📏 Padding (`padding`)

`padding` to wkładka elementu. Zwiększa wewnętrzną przestrzeń, ale nie zwiększa rozmiaru widocznej ramki! Jeśli ustawisz `padding: 20px;`, oznacza to, że zawartość jest odpychana o 20 pikseli od wszystkich stron tego kontenera.

### ✨ Margin (`margin`)

`margin` to pustka wokół elementu. To przestrzeń **pomiędzy** tym elementem a innym elementem na stronie. Jest odpowiedzialny za "oddech" strony.

#### 💡 Różnica kluczem:
*   **Padding:** Wewnątrz boxa (wypełnienie).
*   **Margin:** Pomiędzy boxami (separacja).

---

## 🧑‍💻 Zadania Praktyczne

Teraz, gdy znasz Model Boxa, pora na praktykę! Utwórz pliki `index.html` i `style.css`. Twoim celem jest zbudowanie trzech elementów: **Nagłówka**, **Kartki** oraz **Pola informacyjnego**.

### 📝 Zadanie 1: Przygotowanie HTML (Struktura)

Utwórz w pliku `index.html` następującą strukturę, upewniając się, że wszystkie elementy mają odpowiednie klasy lub tagi do stylizacji:

```html
<div class="container">
    <h1>Projekt CSS Box Model</h1>

    <!-- Element 1: Nagłówek (ma być na górze) -->
    <h2 class="header-title">Sekcja Obramowania i Odstępów</h2>
    
    <!-- Element 2: Karta Produktowa -->
    <div class="product-card">
        <h3>Produkt Premium</h3>
        <p>Idealny wybór dla każdego początkującego programisty. Zawiera wszystkie podstawowe narzędzia do startu!</p>
        <button>Kup teraz</button>
    </div>

    <!-- Element 3: Pole informacyjne (ma być na dole) -->
    <div class="info-box">
        To jest najważniejsze pole z naszymi wytycznymi. Musimy je oddzielić od wszystkiego!
    </div>
</div>
```

### 🖌️ Zadanie 2: Stylizacja CSS (Model Boxa)

W pliku `style.css` zastosuj następujące zasady, aby wizualnie udowodnić działanie Model Boxa:

1.  **Kontener (`.container`):** Ustaw mu duży margines wokół (`margin`) i niebieskie tło.
2.  **Nagłówek (`h2.header-title`):** Nadaj mu solidne, czerwone obramowanie (np. `border: 2px dashed red;`). Upewnij się, że ma duży odstęp *spod* siebie i *nad* sobą (użyj `margin`!).
3.  **Karta Produktowa (`.product-card`):**
    *   Nadaj jej zaokrąglony róg (`border-radius: 15px;`).
    *   Ustaw jej obramowanie na szare i podaj mu kolor tła (np. `background-color: #f9f9ff;`).
    *   **KLUCZOWE:** Użyj **`padding`** w celu stworzenia wewnętrznej "poduszki" wokół tekstu, aby treść nie przylegała do obramowania.

4.  **Pole Informacyjne (`.info-box`):**
    *   To jest pole, które ma być wyraźnie oddzielone od karty i nagłówka.
    *   Ustaw mu bardzo duży **`margin-top`**, aby stworzyć efekt "oddechu" pomiędzy nim a elementem powyżej.
    *   Daj mu obramowanie (`border`).

**Cel końcowy:** Po wykonaniu tego zadania, każda warstwa (padding, border, margin) powinna być wizualnie widoczna i dobrze zdefiniowana!