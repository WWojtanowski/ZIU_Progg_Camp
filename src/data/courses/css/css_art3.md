# ✒️ CSS: Typografia i Formatowanie Tekstu

Po opanowaniu podstawowego układania elementów i kolorystyki, nadszedł czas, aby skupić się na tym, co sprawia, że strona jest **czytelna** i *przyjemna* dla oka – czyli na tekście.

Właściwości typograficzne to jeden z najbardziej potężnych zestawów narzędzi w CSS. Pozwalają nie tylko zmienić kolor pisma (co już umiemy), ale także kontrolować jego rozmiar, rodzaj, odstępy między literami i słowami, a nawet sposób ich rozmieszczenia na stronie.

## 📏 Kontrola układu tekstu (Text Layout)

Te właściwości decydują o tym, jak tekst jest rozłożony w obrębie swojego elementu nadrzędnego.

### `text-align`
Określa **wyrównanie** tekstu względem jego kontenera. To najczęściej używana własność przy układaniu akapitów i nagłówków.
- `left` - Domyślne, wyrównane do lewej krawędzi.
- `right` - Wyrównane do prawej krawędzi.
- `center` - Wyśrodkowane względem osi poziomej.
- `justify` - Tekst jest rozciągany tak, aby wypełniał całą dostępną szerokość (idealne dla kolumn gazet).

**Przykład:**
```css
.kontener {
    text-align: center; /* Wszystko wewnątrz będzie wyśrodkowane */
}
```

### `text-indent`
Służy do nadawania **wcięcia pierwszej linii** akapitu. Jest bardzo przydatne, gdy chcemy, aby tekst wyglądał bardziej formalnie, jak w książce drukowanej.

```css
p {
    /* Wcięcie o szerokości równiej 5% od krawędzi */
    text-indent: 5%; 
}
```

### `line-height` (Ważne!)
Definiuje **wysokość linii** (interlinia). Ta własność ma kluczowe znaczenie dla *czytelności* tekstu. Jeśli interlinia jest zbyt mała, tekst męczy wzrok; jeśli za duża, brakuje mu spójności.

Można podać wartość jako liczbę bez jednostki (np. `1.5`), co oznacza "1.5 raza większy niż domyślny rozmiar czcionki".

```css
p {
    /* Ustawia interlinię na 1.6, poprawiając czytelność */
    line-height: 1.6; 
}
```

### `text-decoration`
Służy do dodawania lub usuwania dekoracji pod tekstem. Najczęściej używamy tego, aby usunąć domyślne podkreślenie z linków (`a`).
- `none` | Usuwa wszelkie dekoracje (najczęściej stosowane do linków).
- `underline` | Dodaje podkreślenie.
- `line-through` | Przycina tekst linią (jakby był nieaktywny).

```css
a {
    /* Usuwamy domyślne podkreślenie u linków */
    text-decoration: none; 
}
```

### Kontrola Odstępów Słów i Liter

Jeśli chcesz mieć pełną kontrolę nad estetyką tekstu, użyj tych właściwości:

*   **`letter-spacing`:** Kontroluje **odstęp między literami**. Przydatne przy nagłówkach.

    ```css
    h1 {
        /* Lekko zwiększamy odstęp między literami */
        letter-spacing: 2px; 
    }
    ```

*   **`word-spacing`:** Kontroluje **odstęp między słowami**.

    ```css
    h1 {
        word-spacing: 5px; 
    }
    ```

---

## 🔡 Typografia (Font Properties)

Te właściwości decydują o samym wyglądzie liter.

### `font-family`
Określa, jaki zestaw czcionek ma być użyty. Zawsze podawaj listę możliwych czcionek w kolejności priorytetu, kończąc ją uniwersalnymi fallbackami (np. `serif`, `sans-serif`).

```css
body {
    /* Najpierw szuka 'Georgia', jeśli nie ma, używa dowolnej serifowej, ostatecznie systemowej */
    font-family: "Georgia", Times, serif; 
}
```

### `font-size`
Określa rozmiar czcionki. Pamiętaj o jednostkach (`px`, `em`, `rem`).
```css
p {
    /* Ustawiamy standardowy rozmiar akapitu na 18 pikseli */
    font-size: 18px;
}
```

### `font-weight`
Kontroluje **grubość** pisma. Można użyć słów kluczowych (`bold`, `normal`) lub konkretnych wartości liczbowych (od 100 do 900).

```css
strong {
    /* Ustawiamy tekst na pogrubienie */
    font-weight: bold; 
}
```

### `font-style`
Kontroluje **styl** pisma. Najczęściej używana wartość to `italic`.
```css
em {
    /* Podkreślenie, że jest to element wyróżniony */
    font-style: italic; 
}
```

### ✨ Właściwość Skrótowa (`font`)
CSS oferuje jedną superwłaściwość – **`font`**. Pozwala ona na ustawienie wszystkich kluczowych właściwości czcionki w jednej linii, co jest bardzo wygodne.

**Składnia:** `font: [font-family] [font-size]/[line-height] [font-weight] [font-style];`

```css
/* Przykład skrótu: Czcionka 'Verdana', rozmiar 16px, interlinia 1.5, normalna grubość */
body {
    font: Verdana, Arial, sans-serif; 16px/1.5; 400; normal;
}
```

---
## 🎓 Zadania praktyczne: Pełne Strony

**Cel:** Połączenie wiedzy o układzie (Box Model) z zaawansowaną typografią, aby stworzyć czytelny i profesjonalnie wyglądający tekst.

### Zadanie 1: Artykuł Blogowy
Stwórz strukturę na stronę bloga zawierającą następujące elementy w pliku HTML:
1.  `<h1>` – Tytuł artykułu.
2.  `<p>` (Akapit) – Długi tekst o tematyce dowolnej, który musi być czytelny.
3.  `<blockquote>` (Cytat) – Element przeznaczony na wyróżniony cytat.

**Wymagania CSS:**
*   Ustaw globalną czcionkę dla całego artykułu (`body`) np. `Georgia`, i niech ma ona rozmiar **18px**.
*   Dla akapitu (`p`): Użyj własności **`line-height: 1.6`** (dla czytelności) oraz zastosuj lekkie wcięcie pierwszego zdania za pomocą **`text-indent`**.
*   Dla cytatu (`blockquote`):
    *   Ustaw mu inny kolor tła niż reszta tekstu.
    *   Wyśrodkuj cały tekst wewnątrz bloku używając **`text-align: center`**.
    *   Usuń wszystkie domyślne dekoracje (np. podkreślenia).

### Zadanie 2: Banner Promocyjny
Stwórz mały element typu "Banner" z jednym nagłówkiem (`<h2>`) i krótkim tekstem w akapicie.

**Wymagania CSS:**
*   Użyj selektora `.banner`. Nadaj mu kolor tła (np. jasna żółć) i szerokość **600px**.
*   Dla nagłówka (`h2`): Zastosuj własność **`letter-spacing`**, aby litery były bardziej rozłożone, nadając efekt "tytułu reklamy".
*   Dla akapitu w banerze: Użyj właściwości **`font-weight: bold`** dla kluczowego fragmentu tekstu (np. frazy "Oszczędź teraz!").

### 🌟 Wyzwanie Bonusowe (Self-Challenge)
Spróbuj stworzyć listę punktowaną (`<ul>`), ale tak, aby każde słowo miało bardzo duży odstęp między literami (za pomocą `letter-spacing` na liście), co celowo utrudni czytanie i sprawi, że będziesz rozumieć, jak działa ta własność.