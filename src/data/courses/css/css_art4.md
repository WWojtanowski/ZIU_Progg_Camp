# 🖼️ CSS: Rozmiar Bloku i Tło (Dimensions & Backgrounds)

Nauczymy się kontrolować **przestrzeń**, którą te elementy zajmują – ich rozmiar, a także to, co dzieje się z nimi, gdy zawartość jest zbyt duża lub zbyt mała.

W prawdziwych stronach internetowych nigdy nie wiemy, jak duże będą treści (np. bardzo długi akapit czy ogromny obraz). Musimy więc nauczyć CSS, jak te elementy *zachowywać się* w granicach, które mu wyznaczamy.

## 📏 1. Kontrola Rozmiaru Bloków: Od Stałych do Elastycznych Granic

Pamiętasz już `width` (szerokość) i `height` (wysokość)? To właściwości pozwalające na ustawienie konkretnych wymiarów w pikselach (`px`) czy procentach (`%`). Jednak co, jeśli chcemy, żeby element nigdy nie był *za mały* ani nigdy nie był *za duży*?

Dlatego wprowadzamy tzw. **właściwości graniczne (Boundary Properties)**:

### `min-width` i `max-width`
Określają minimalną i maksymalną dopuszczalną szerokość elementu.

*   **`min-width`**: Element nigdy nie może być węższy niż podana wartość.
*   **`max-width`**: Element nigdy nie może być szerszy niż podana wartość. Jest to kluczowe dla responsywności (zapobiega rozciągnięciu się bloku na ogromnym ekranie).

### `min-height` i `max-height`
Działają identycznie jak powyższe właściwości, ale kontrolują wysokość.

```css
/* Przykład użycia granic rozmiaru na naszym bloku */
.info-box {
    /* Nie może być węższy niż 200px ani szerszy niż 600px */
    min-width: 200px;
    max-width: 600px;

    /* Musi mieć co najmniej wysokość 150px, ale nie może przekroczyć 300px */
    min-height: 150px;
    max-height: 300px;
}
```

### ✨ Właściwość `overflow` (Klucz do zarządzania treścią)

Co się stanie, jeśli zawartość wewnątrz bloku jest większa niż jego wyznaczony rozmiar? Jeśli nie użyjesz żadnych właściwości granicznych, treść po prostu "wyleje" się na sąsiednie elementy, łamiąc układ.

Tutaj działa `overflow`. Określa on, co ma zrobić kontener z nadmiarową treścią:

*   **`overflow: hidden;`**: Nadmiarowa zawartość zostanie *ukryta*. To używamy, gdy nie chcemy, aby użytkownik widział treść, która nie pasuje do układu.
*   **`overflow: scroll;`**: Kontener zawsze będzie miał paski przewijania (scroll). Nawet jeśli content się mieści, pasek jest dostępny.
*   **`overflow: auto;`**: To najlepszy wybór! Pasek przewijania pojawi się **tylko wtedy**, gdy zawartość faktycznie przekroczy rozmiar kontenera.

```css
/* Przykład zarządzania nadmiarową treścią */
.mini-container {
    width: 150px; /* Mały rozmiar */
    height: 80px;  /* Mała wysokość */
    overflow: auto; /* Jeśli treść jest za duża, pojawi się pasek przewijania */
}
```

## 🖼️ 2. Dekorowanie Tłem (Background)

Dotychczas używaliśmy `background-color` do nadawania kolorowego tła elementowi. Ale CSS pozwala nam na znacznie więcej! Możemy ustawić obrazy w tle, kontrolować ich powtarzanie i pozycję.

### 🏞️ `background-image`
Umożliwia umieszczenie obrazu jako tła danego bloku.

```css
/* Ustawiamy konkretny obrazek */
.hero-banner {
    background-image: url('/zdjęcie.jpg');
}
```

### 🎨 `background-color` i `background-image`
Jeśli ustawisz tylko kolor, a za nim próbujesz ustawić obraz, przeglądarka może się zachować nieprzewidywalnie. Dlatego często używamy obu właściwości razem, aby zapewnić solidne tło, które jednak ma być pod obrazem.

### 📐 Kontrola Pozycji i Powtarzania
Obraz w tle musi być kontrolowany:

*   **`background-repeat`**: Definiuje, czy obraz ma się powtarzać (`repeat`), czy ma zostać tylko raz (`no-repeat`).
*   **`background-position`**: Określa, gdzie na elemencie ma pojawić się obraz (np. `center`, `top left`, `50% 30%`).

```css
/* Przykład: Obraz powtarzający się tylko pośrodku */
body {
    background-image: url('pattern.png');
    background-repeat: repeat; /* Ustawia powtarzalność */
    background-position: center; /* Centruje obraz */
}
```

### 🚀 Skrótowa Właściwość `background`
Ponieważ powyższe właściwości można kombinować w nieograniczone ilości, CSS stworzył jedną, magiczną, skróconą własność: `background`. Pozwala ona ustawić większość parametrów tła jednym poleceniem!

```css
/* To samo co łączenie wielu linijek */
.card {
    /* [kolor] [obraz] [powtarzanie] [pozycja] / [rozmiar] */
    background: #e6f7ff url('zdjęcie.jpg') no-repeat center; 
}
```

---

## 📝 Zadania Praktyczne (Challenge!)

**Cel:** Stworzenie "Mini Galerii Produktowej" wykorzystującej granice, zarządzanie treścią i obrazy w tle.

Wygeneruj plik CSS (`style.css`) oraz plik HTML (`index.html`). Użyj następujących elementów:
1.  Jeden kontener główny (np. `div` z klasą `.gallery-container`).
2.  Dwie kafelki produktowe (dwie sekcje, np. `<section>` lub `<div>`) o klasie `.product-tile`.

### 🎯 Wymagania dla Twojego rozwiązania:

1.  **Stylizacja Kontenera (`.gallery-container`):**
    *   Ustaw mu szerokość na **800px**.
    *   Przygotuj go do wyświetlenia elementów obok siebie (choć nie musisz jeszcze używać Flexbox/Grid, postaraj się tylko upewnić się, że ma stałe tło).

2.  **Stylizacja Kafelka Produktowego (`.product-tile`):**
    *   Ustaw mu sztywną szerokość: **350px**.
    *   Nadaj mu minimalną wysokość: **300px**.
    *   Nadaj tło (np. kolor `#f9f9ff`).

3.  **Tło Obrazem i Kontrolą Rozmiaru:**
    *   Dodaj do każdego kafelka (`.product-tile`) inny obraz jako tło (`background-image: url(...)`). *Użyj placeholderów, jeśli nie masz prawdziwych zdjęć.*
    *   Ponieważ obrazy mogą się różnić rozmiarami, użyj **`background-size: cover;`** (to zaawansowana właściwość do sprawdzenia!) i ustaw je na `center`.
    *   Ustaw dla obu kafelków, aby obraz nie powtarzał się (`background-repeat: no-repeat`).

4.  **Zarządzanie Treścią:**
    *   Wewnątrz każdego kafelka umieść akapit z bardzo długim tekstem (np. 200 słów).
    *   Aby zaawansowany tekst nie wykraczał poza granice i nie psuł układu, użyj właściwości **`overflow: auto;`** na samym elemencie kafelka (`.product-tile`).