# 🚀 CSS: Kontrola Przestrzeni (Pozycjonowanie)

Jeśli do tej pory uczyliśmy się malować elementy i ustawiać je obok siebie, to moduł pozycjonowania uczy nas **jak kontrolować samą przestrzeń** na stronie. Zrozumienie tego tematu jest kluczem do budowania zaawansowanych układów (layoutów), takich jak galerii produktów czy złożone nagłówki z elementami "przyklejonymi" do boków.

## 🧱 Kontekst normalny vs. Pozycjonowanie
Domyślnie, elementy HTML są rozmieszczane w tzw. **normalnym przepływie dokumentu** (Normal Flow). Oznacza to, że każdy nowy element automatycznie ląduje pod ostatnim i jest traktowany jak kolejne klocki LEGO.

Kiedy zmieniamy pozycjonowanie za pomocą właściwości `position`, mówimy przeglądarce: "Zapomnij o normalnym przepływie! Umieść ten element tutaj, a przestrzeń, którą zajmował wcześniej, może zostać pusta/zajęta przez coś innego."

### 📍 Właściwość `position`

Ta właściwość ma cztery główne wartości, które radykalnie zmieniają zachowanie elementów:

#### 1. `position: static;`
*   **Opis:** To jest domyślny stan każdego elementu i nie wymaga żadnej deklaracji CSS. Element pozostaje w normalnym przepływie dokumentu.
*   **Ważne:** W statycznym elemencie właściwości takie jak `top`, `bottom`, `left` czy `right` **nie działają**.

#### 2. `position: relative;` (Relatywne)
*   **Opis:** Element pozostaje w normalnym przepływie dokumentu, ale możesz go przesunąć względem jego *oryginalnej* pozycji.
*   **Działanie:** Użycie `top: 10px;` spowoduje, że element zostanie przesunięty o 10 pikseli w dół z miejsca, gdzie pierwotnie był. **Najważniejsze:** Element nadal zajmuje swoją oryginalną przestrzeń na stronie, nawet po przesunięciu!

#### 3. `position: absolute;` (Absolutne)
*   **Opis:** Element jest całkowicie wyjęty z normalnego przepływu dokumentu i może być umieszczony w dowolnym miejscu względem swojego **najbliższego elementa rodzica, który został wcześniej pozycjonowany (`relative`, `absolute`, lub `fixed`)**.
*   **Klucz do zrozumienia:** Aby *kontrolować* gdzie pojawi się element absolutny, musisz ustawić jego element-rodzic jako `position: relative;`.
*   **Przykład użycia:** Chcesz umieścić małą etykietę (np. "Nowość") idealnie w rogu zdjęcia. Zdjęcie jest rodzicem (`relative`), a etykieta jest dzieckiem (`absolute`) i może być ustawiona względem krawędzi zdjęcia.

#### 4. `position: fixed;` (Stałe)
*   **Opis:** Element zostaje wyjęty z normalnego przepływu dokumentu, ale nie jest zależny od swojego rodzica! Po pozycjonowaniu, element **zawsze pozostanie w stałej pozycji względem okna przeglądarki (viewport)**.
*   **Typowe zastosowanie:** Paski nawigacyjne (sticky headers), które muszą być widoczne, nawet gdy użytkownik przewija stronę.

---

### 📐 Dodatkowe właściwości kontrolujące pozycję i układ:

Po zrozumieniu podstawowego `position`, musimy poznać narzędzia pomagające precyzyjnie ustawiać elementy:

#### Top / Bottom / Left / Right
Te cztery właściwości są używane *tylko* na elementach, które mają zmienione pozycjonowanie (`relative`, `absolute` lub `fixed`). Określają one odległość elementów od krawędzi ich rodzica (lub okna przeglądarki w przypadku "fixed").

#### Z-Index
Określa **porządek układania się elementów na osi Z** (głębokość). Element z wyższym indeksem `z-index` będzie "leżał" na wierzchu innych elementów.

```css
/* Element A zostanie umieszczony nad elementem B */
#element-a {
    position: relative; /* Musi być pozycjonowany, aby działał z-index! */
    z-index: 10; 
}
#element-b {
    position: relative;
    z-index: 5;
}
```

#### Float i Clear (Kontrolowanie przepływu poziomego)
*   **`float: left;` / `float: right;`:** Pozwala "przypłynąć" elementowi do boku, tak jakby pływał na wodzie. Jest to idealne do układania obrazków i tekstu wokół nich (klasyczne układy magazynowe).
*   **`clear`:** Po użyciu `float`, elementy są wyciągnięte z normalnego przepływu. Jeśli chcesz, aby element po wypływającym obok bloku wrócił do "normalnej" linii, musisz zastosować na nim `clear: both;`.

#### Opacity / Clip
*   **`opacity`:** Kontroluje przejrzystość elementu (od 0.0 – niewidoczny, do 1.0 – pełna widoczność).
*   **`clip` (Cięcie):** Pozwala "uciąć" elementy tak, że część zawartości zostanie ukryta za granicą zdefiniowaną przez `clip-path`.

---

### 📚 Podsumowanie Pozycjonowania

- `position: static` - Normalny przepływ. Ignoruje `top`/`left`.
- `position: relative` - Przesuwa względem *oryginału*. Zachowuje przestrzeń.
- `position: absolute` - Wyjęty z przepływu, pozycjonowany względem **najbliższego rodzica o pozycji**.
- `position: fixed` - Przykleja element do okna przeglądarki (Viewport).


***
## 🚀 Zadania praktyczne (Challenge!)

Aby opanować pozycjonowanie, musisz ćwiczyć pracę z kontekstem rodzica i dzieckiem. Wykonaj poniższe zadania!

### Zadanie 1: Etykieta "Nowość" (Absolute Positioning)
Stwórz strukturę HTML zawierającą jeden duży kontener (`<div class="card-product">`) oraz w środku zdjęcie (`<img>`) i małą etykietę (`<span class="badge">NOWOŚĆ</span>`).

**Cel CSS:**
1. Ustaw `.card-product` na `position: relative;`.
2. Ustaw `.badge` na `position: absolute;`, aby był idealnie w lewym górnym rogu kontenera, niezależnie od tego gdzie jest umieszczony w kodzie HTML.

### Zadanie 2: Układ z Float (Lateral Flow)
Stwórz strukturę zawierającą trzy kolumny. Użyj obrazków i tekstu.

**Cel CSS:**
1. Wykorzystaj `float: left;` dla każdego obrazka, aby ułożyły się one obok siebie w rzędzie.
2. Na końcu tego bloku użyj właściwości `clear: both;`, aby następny element (np. nagłówek nad kolejnymi kolumnami) nie został "wciągnięty" na wysokość wypływających obrazków.

### Zadanie 3: Stawe Nagłówki (Fixed Positioning)
Stwórz długą stronę HTML zawierającą bardzo dużo tekstu i umieść pasek nawigacyjny (`<nav>`) na górze, który ma być widoczny w stałej pozycji przez całą przewijanie.

**Cel CSS:**
1. Ustaw `<nav>` na `position: fixed;` oraz nada mu odpowiednią wysokość (np. 60px).
2. Użyj właściwości `top: 0;` i `left: 0;`, aby był idealnie przyklejony do górnego krawędzi okna przeglądarki.
3. **Dodatkowy Challenge:** Dodaj na dole strony duży pusty element, który wymusi przewijanie (np. na wysokość 200vh).