# 🚀 CSS: Wyświetlanie Elementów (Display)

Nauczymy się teraz **kontrolować zachowanie** poszczególnych elementów. Jak mają one zajmować przestrzeń na stronie? Czy mogą stać obok siebie? Czy muszą tworzyć nowy wiersz?

To wszystko zależy od właściwości CSS o nazwie `display`. Jest to jeden z najbardziej fundamentalnych i jednocześnie najbardziej mylących tematów dla początkujących, ale gdy zrozumiesz logikę stojącą za nim, Twoje umiejętności układania stron wzrosną wykładniczo!

## 🧱 Co to jest `display`?

Właściwość `display` określa **sposób wyświetlania** elementu w dokumencie. Mówiąc prościej – decyduje o tym, jak dany element zachowuje się względem swoich sąsiadów.

Zamiast myśleć o wartościach (`block`, `inline`), pomyśl o nich jako o **rodzajach pojemników**: każdy ma inne zasady bycia na stole (stronie).

---

### 📊 Rodzaje wyświetlania – Kiedy co używać?

Przeanalizujmy najważniejsze typy wartości, które będziemy używać.

#### 1. `display: block;`
*   **Charakterystyka:** Element blokowy jest jak cegła. Zajmuje on **całą dostępną szerokość** swojego rodzica i zawsze wymusza nowy wiersz przed sobą i po sobie.
*   **Wymiary:** Akceptuje właściwości `width`, `height`, marginesy oraz padding na wszystkich stronach (góra, dół, lewo, prawo).
*   **Kiedy używać?** Kiedy chcesz, aby element zawsze był w swoim własnym bloku i wypełniał dostępną przestrzeń (np. sekcje, główne kolumny).

```css
/* Ten akapit zajął pełną szerokość i przesunął kolejny akapit na nową linię */
p {
    display: block; 
}
```

#### 2. `display: inline;`
*   **Charakterystyka:** Element typu wierszowego jest jak tekst w zdaniu. Zajmuje tylko **tyle miejsca, ile potrzeba do wyświetlenia jego treści**. Nie wymusza nowego wiersza ani nie wypełnia całej szerokości.
*   **Wymiary:** **Nie akceptuje** właściwości `width` i `height`. Możesz kontrolować tylko marginesy poziome (lewo/prawo).
*   **Kiedy używać?** Do stylizowania elementów, które powinny płynąć obok siebie w linii tekstu (np. małe linki, tagi, ikony).

```css
/* To słowo zajmie tylko tyle miejsca, ile wymaga jego treść */
span { 
    display: inline; 
}
```

#### 3. `display: inline-block;` ✨ (Najważniejszy!)
*   **Charakterystyka:** Ten tryb jest najlepszym kompromisem! Element zachowuje się **jak tekst w linii (`inline`)**, co oznacza, że może stać obok innych elementów bez tworzenia nowego wiersza. ALE...
*   **Supermoc:** Przyjmuje pełnię możliwości elementu blokowego – możesz mu nadać `width`, `height` i kontrolować wszystkie jego marginesy!
*   **Kiedy używać?** To Twój wybór domyślny przy tworzeniu układów siatkowych (grid) lub elementów nawigacyjnych, które mają stały rozmiar i mają być ułożone w rzędzie.

```css
/* Idealne do tworzenia ramek obok siebie o określonym rozmiarze */
.box { 
    display: inline-block; /* Umożliwia kontrolowanie wymiarów w bloku tekstu */
    width: 150px; 
    height: 80px;
}
```

#### 4. `display: none;`
*   **Charakterystyka:** Element jest całkowicie **ukryty**. To nie tylko kwestia niewidoczności – element przestaje istnieć w układzie strony, jakby go nigdy tam nie było (nie zajmuje miejsca).
*   **Kiedy używać?** Gdy chcesz dynamicznie ukryć sekcję na karcie produktu, dopóki użytkownik nie kliknie przycisku.

#### 5. `display: list-item;`
*   **Charakterystyka:** Definiuje element jako punkt listy. Jest to specjalny przypadek bloku, ale używany głównie do stylizowania elementów wewnątrz tagów `<ul>` i `<ol>`.
*   **Kiedy używać?** Rzadko musisz go ustawiać ręcznie, chyba że chcesz bardzo precyzyjnie kontrolować wygląd punktu listy.

#### 6. `display: run-in;`
*   **Charakterystyka:** To nisza (często zapominana) wartość. Element typu `run-in` próbuje zachować się jak ciąg tekstu, ale jest lepszy w utrzymywaniu spójnego bloku niż czyste `inline`. Jest to użyteczne dla krótkich fragmentów treści, które nie powinny być rozdzielane na koniec linii.
*   **Kiedy używać?** Bardzo rzadko i tylko wtedy, gdy chcesz bardzo ścisłej kontroli nad tym, jak długie bloki tekstu są łamane w obrębie jednego akapitu.

---

### 🧩 Tabela porównawcza

- **`inline`** - Płynie z tekstem; nie przyjmuje `width` i `height`
- **`block`** - Nowy wiersz; zajmuje pełną szerokość
- **`inline-block`** - Płynie z tekstem; przyjmuje `width` i `height`
- **`none`** - Niewidoczny i bez zajmowania miejsca.


***

## 🧪 Zadania praktyczne: Ćwiczenie z układem (Layout Challenge)

**Cel:** Praktyczna demonstracja różnic między `display: inline`, `block` oraz `inline-block`.

Wygeneruj plik HTML i CSS, aby stworzyć następujący efekt na stronie. Nie używaj żadnych zaawansowanych narzędzi układania (jak Flexbox czy Grid) – polegaj wyłącznie na zrozumieniu właściwości `display`.

### 📋 Zadanie: Mini Menu Nawigacyjne
Stwórz pasek nawigacyjny (np. dla strony blogowej), który ma składać się z czterech elementów (`<div>` lub `<button>`). Te elementy muszą wyglądać jak klikalne "karty" i być ułożone **obok siebie w jednym rzędzie**, a nie jeden pod drugim.

**Wymagania CSS:**

1.  **Kontener (np. `.nav-bar`):** Musi zawierać wszystkie elementy nawigacyjne.
2.  **Elementy nawigacyjne (`.menu-item`):**
    *   Ustaw dla każdego elementu:
        *   Stałą szerokość: **150px**.
        *   Stałą wysokość: **50px**.
        *   Wyraźny kolor tła i czcionki (np. ciemne tło, jasny tekst).
    *   **Kluczowe rozwiązanie:** Musisz ustawić dla `.menu-item` właściwość `display`, która pozwoli mu zachować swoje wymiary (`width`/`height`) **i jednocześnie płynąć obok innych elementów**.

**Wskazówka do rozwiązania:** Pomyśl, który tryb wyświetlania daje ci możliwość kontroli rozmiaru (jak element blokowy), ale nie zmusza nowego wiersza (jak element typu wierszowego).