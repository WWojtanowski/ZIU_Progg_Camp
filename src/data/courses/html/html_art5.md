# 🔗 Rozdział 5: Odsyłacze i Multimedia (Łączenie ze światem!)

Strona internetowa bez linków i obrazków jest jak książka bez ilustracji. Ten rozdział nauczy Cię, jak połączyć naszą lokalną stronę z resztą Internetu oraz jak osadzić w niej różne typy mediów – od zdjęć po nagrania wideo.

### 🔗 Linkowanie (Anchor Tag)

Tag `<a>` (anchor) to potężne narzędzie do tworzenia hiperłączy, które przenoszą użytkownika na inne strony lub skanują bieżącą stronę.

#### Najważniejsze atrybuty:

*   **`href` (Hypertext Reference):** Określa adres celu linku.
    *   **Link zewnętrzny:** `href="https://www.google.com"` (Wskazuje na zupełnie inną domenę).
    *   **Link wewnętrzny:** `href="strona-kontakt.html"` (Wskazuje na inny plik w Twoim projekcie).
    *   **Anchor Link (Linki do miejsca):** `#secao` (Przenosi użytkownika do elementu z danym ID na tej samej stronie).

#### 🔗 Przykład:
```html
<p>Odwiedź naszą <a href="https://www.google.com" target="_blank">stronę Google</a>.</p>
<!-- Atrybut target="_blank" powoduje, że link otworzy się w nowej tabce przeglądarki -->
```

### 🖼️ Obrazy (Image Tag)

Obrazek jest jednym z najważniejszych elementów. Pamiętaj, że `<img ...>` to tzw. **void tag** – nie wymaga zamknięcia (`</img>`).

#### Atrybuty obowiązkowe dla obrazów:

1.  **`src` (Source):** Ścieżka do pliku obrazu (np. `images/logo.png`).
2.  **`alt` (Alternative Text):** **Najważniejszy atrybut!** Zawiera tekst opisujący, co przedstawia zdjęcie. Jest czytany przez osoby niepełnosprawne i w przypadku błędu ładowania obrazu – to właśnie on informuje użytkownika.

#### 🖼️ Przykład (zapisz [to zdjęcie](https://images.unsplash.com/photo-1580834643642-5973946d5e61), zmień nazwę i dodaj do swojego folderu):
```html
<img src="zdjecie-kotek.jpg" alt="Uroczy kot siedzący na tarasie">
```

### 🎵 i 🎥 Media (Video & Audio) - Dla chętnych (jak masz pliki audio lub wideo)

HTML5 wprowadziło natywne znaczniki do osadzania mediów wideo i audio – bez potrzeby używania skomplikowanych pluginów.

#### `<video>` i `<audio>`:
Te tagi otaczają całą zawartość multimedialną. Atrybuty takie jak `controls` są kluczowe, ponieważ dodają suwak play/pause do odtwarzacza.

```html
<!-- Wideo -->
<video src="filmik-o-programowaniu.mp4" controls width="600">
    Twoja przeglądarka nie obsługuje tagu video.
</video>

<!-- Audio -->
<audio src="muzyka_tlo.mp3" controls></audio>
```

#### 📚 `<source>` (Dla kompatybilności):
Ponieważ różne przeglądarki wspierają różne formaty plików (MP4, WebM, Ogg), używamy znacznika `<source>`, aby podać alternatywne źródła. To zapewnia maksymalną kompatybilność.

```html
<video controls>
    <!-- Przeglądarka może wybrać najlepszy dostępny format -->
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Wsparcie dla wideo nie jest dostępne.
</video>
```

---

### 🚀 Zadanie do rozwiązania (Rozdział 5)

**Cel:** Stworzenie „Portfolio” z użyciem linków i mediów.

1.  Utwórz plik `index.html`. Na górze umieść nagłówek (`<h1>`) – np. „Moje portfolio programistyczne”.
2.  W bloku tekstowym (np. wewnątrz `<p>`), dodaj trzy linki:
    *   Link do swojego (lub kogoś innego) profilu na dowolnym portalu społecznościowym (Facebook, Youtube, TikTok, itp.).
    *   Link wewnętrzny do sekcji z kontaktem (`href="#kontakt"`).
    *   Link, który ma otworzyć się w nowej karcie (`target="_blank"`).
3.  Dodaj sekcję „Moje projekty” – utwórz tam:
    *   Miejsce na zdjęcie (użyj `<img ...>` z atrybutem `alt`). Załóżmy, że masz plik `projekt_1.jpg`.
4.  Na dole strony dodaj bloki multimediów:
    *   Utwórz osadzony odtwarzacz wideo (`<video>`) i upewnij się, że ma atrybut `controls`. (Wystarczy podać fikcyjną ścieżkę do pliku).