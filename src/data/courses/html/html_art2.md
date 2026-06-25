# 🏗️ Rozdział 2: Struktura strony internetowej

Jeśli w poprzednim rozdziale stworzyliśmy pusty szkielet pliku `index.html`, teraz wypełnimy ten szkielet jego najważniejszymi „kościami”. Zrozumienie tych czterech znacznika to klucz do napisania każdej strony internetowej, jaką kiedykolwiek zobaczysz.

Te elementy nie są tylko „pustymi pudełkami”; one określają przeglądarkom (jak Chrome czy Firefox), jak mają interpretować i wyświetlać zawartość twojej strony.

## 📜 Co to jest struktura?

Wyobraź sobie, że budujesz dom. Nie możesz po prostu wrzucić ścian na placu budowy. Musisz mieć fundamenty, szkielet nośny (ściany) i dach. W HTML te elementy pełnią tę samą funkcję.

## 🧱 Cztery filary każdej strony HTML

Każdy poprawnie napisany dokument HTML musi zawierać poniższe znaczniki w tej kolejności:

### 1. `<!DOCTYPE html>` - Deklaracja (Nie jest tagiem!)

To najważniejszy, a jednocześnie najbardziej mylący element dla początkujących. Pamiętaj! To nie jest standardowy znacznik otwierający i zamykający jak `<p>`. Jest to **deklaracja** (declaration).

*   **Co robi?** Informuje przeglądarkę: „Hej, używaj najnowszych standardów HTML5!”.
*   **Dlaczego jest kluczowe?** Dzięki niemu przeglądarka wie, że ma działać w trybie współczesnym i interpretować kod poprawnie.

### 2. `<html lang="pl">` - Korzeń Dokumentu (The Root)

Ten znacznik otacza **całą zawartość** twojej strony. Jest to „korzenie” drzewa kodu, od którego zaczyna się wszystko.

*   **`<html lang="pl">`:** Zwróć uwagę na atrybut `lang="pl"`. Mówi on przeglądarce i wyszukiwarkom (Google): *„Ta strona jest napisana w języku polskim”*. To ma ogromne znaczenie dla dostępności i SEO.

### 3. `<head>` - Głowa Dokumentu (Metadata)

`<head>` to znacznik, który zawiera **informacje o stronie**, ale które użytkownik **NIE widzi** bezpośrednio na niej. Można go nazwać „tajnymi danymi strony”.

*   **Co tam trafia?** Tutaj umieszczamy tytuł (`<title>`), informacje dla wyszukiwarek (meta-tagi), ładowanie stylów CSS i inne dane techniczne.
*   **Dlaczego nie w `<body>`?** Ponieważ te dane mają służyć maszynom (przeglądarkom, botom SEO), a nie ludzkim oczom.

### 4. `<body>` - Ciało Dokumentu (The Visible Part)

To jest to miejsce, które wszyscy znają najlepiej! **Każdy tekst, każdy obrazek, każdy akapit – wszystko, co użytkownik widzi w przeglądarce, musi znajdować się w znaczniku `<body>`.**

*   Jeśli coś nie jest w `<body>`, nie będzie widoczne na stronie.

---

## ✍️ Praktyka: Struktura gotowa do wypełniania

Otwórz swój plik `index.html` i wprowadź poniższą, kompletną strukturę (jeśli jeszcze tego nie zrobiłeś/aś, użyj triku z kroku 1):

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <!-- Tutaj umieścimy dane dla przeglądarki i wyszukiwarek -->
</head>
<body>
    <!-- TUTAJ ZNAJDZIE SIĘ WSZYSTKA TREŚĆ, KTÓRĄ UŻYSER WIELKOŚCIĄ ZOBACZY -->

    <h1>Witaj na mojej pierwszej stronie!</h1>
    <p>To jest akapit z treścią.</p>

</body>
</html>
```

Spróbuj teraz otwrzyć ten plik w dowolnej przeglądarcę (Chrome, Firefox, Edge) i sprawdź, czy wyświetla się nagłówkek i akapit. Jak udało się je wyświetlić, możesz przejść dalej.




### 🚀 Podsumowanie i Lista Kontrolna

*   **`<DOCTYPE html>`:** Czy to deklaracja (tak), czy znacznik? (Deklaracja!)
*   **`<html>`:** Co zawiera całą stronę? (Wszystko).
*   **`<head>`:** Gdzie są informacje, których użytkownik nie widzi? (Meta-dane, tytuł).
*   **`<body>`:** Gdzie trafia cały tekst i obrazki? (Widzialna treść).

Jeśli poprawnie zrozumiesz tę strukturę, kolejne rozdziały będą dla Ciebie znacznie łatwiejsze! W następnym kroku nauczymy się wypełniać magiczną głowę `<head>`.