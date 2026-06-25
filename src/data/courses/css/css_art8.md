# 🗂️ CSS: Właściwości List i Tabel

Dotarliśmy do jednego z bardziej zaawansowanych modułów stylizacji, gdzie uczymy się nie tylko malować elementy, ale także kontrolować ich **układ** i **struktura**. Jeśli wcześniej uczyliśmy się kolorów i rozmiarów pojedynczych elementów, teraz zajmiemy się zarządzaniem grupowymi elementami: listami (`<ul>`, `<ol>`) oraz tabelemi (`<table>`).

Te właściwości są kluczowe, ponieważ sprawiają, że Twoja strona nie wygląda jak domyślna, prosta sekwencja tekstu z przeglądarki internetowej, ale jak profesjonalnie zaprojektowany dokument.

## 📚 Część I: Stylizacja List (list-style)

Domyślnie, przeglądarka dodaje do list punktory lub numery. Ale często chcemy kontrolować ich wygląd – być może potrzebujemy okręgów zamiast kółek, albo obrazka jako markera listy.

### 🔹 `list-style-*` (Skróty i typy)

Zamiast używać wielu pojedynczych właściwości, CSS oferuje skrócone metody, które pozwalają na precyzyjne kontrolowanie markerów list:

1.  **`list-style-type`:** Określa wygląd samego markera (punktu lub numeru).
    *   **Wartości standardowe:** `disc` (domyślny punkt), `circle` (pusty okrąg), `square` (kwadrat).
2.  **`list-style-image`:** Pozwala zastąpić domyślny marker obrazem. Jest idealny, jeśli chcesz użyć małej ikony jako punktora listy.
3.  **`list-style-position`:** Określa, czy znacznik (marker) ma znajdować się **wewnątrz** (`inside`) czy **na zewnątrz** (`outside`) głównego bloku tekstu listowego.

**Przykład użycia:**

```css
/* Ustawia listy na styl kółek i przenosi marker do środka tekstu */
ul {
    list-style-type: circle;
    list-style-position: inside;
}
```

---

## 📑 Część II: Stylizacja Tabel (Table Properties)

Tabele są jednym z najczęściej używanych elementów strukturalnych. Jednak domyślny wygląd tabel jest często zbyt "przestropny" i wygląda nieprofesjonalnie. Właściwości tabel pozwalają nam stworzyć spójną, czytelną siatkę.

### 🔸 Kontrola granic (Border Control)

To są prawdopodobnie najważniejsze właściwości w tej sekcji:

1.  **`border-collapse`:** Jest to absolutny „game changer” w stylizacji tabel.
    *   Jeśli ustawisz `border-collapse: collapse;`, wszystkie obramowania (granice komórek) połączą się ze sobą, tworząc pojedynczą, czystą linię zamiast podwójnego efektu linii na każdej granicy. **Zawsze używaj tego!**
2.  **`border-spacing`:** Określa odstęp między sąsiednimi komórkami (jest to bardziej widoczne, gdy `border-collapse` jest ustawione na `separate`).

### 🔹 Układ i zawartość (Layout & Content)

1.  **`table-layout`:** Kontroluje, jak przeglądarka ma obliczać szerokości kolumn.
    *   **`auto` (domyślny):** Szerokości są automatycznie rozdzielane między treści.
    *   **`fixed`:** Pozwala Ci ustalić konkretne i niezmienne szerokości dla każdej kolumny, co jest kluczowe w projektowaniu responsywnych układów.

2.  **`caption-side`:** Określa, po której stronie tytułu (kapcjonalki) ma znajdować się tabela – zwykle `top` lub `bottom`.
3.  **`empty-cells`:** Definiuje, czy puste komórki powinny być widoczne i jak mają wyglądać.

**Przykład użycia:**

```css
/* Ustawienie idealnego wyglądu tabeli */
table {
    width: 80%; /* Kontrolujemy szerokość całego elementu */
    border-collapse: collapse; /* Zlepianie granic! */
}

th, td {
    padding: 10px; /* Dodajemy wewnętrzny margines dla czytelności */
    border: 1px solid #ccc; /* Dodajemy granice do komórek */
}
```


***
## 🧪 Zadania praktyczne (Challenge!)

Aby opanować te zaawansowane właściwości, wykonaj poniższe zadanie, które wymaga połączenia wiedzy o listach i tabelach.

**Zadanie: Tworzenie Planu Tygodnia**

Stwórz stronę z harmonogramem zajęć na tydzień. Musisz użyć elementów `<table>`, aby zapewnić ładny układ siatki.

### 📋 Wymagania projektowe:

1.  **HTML:** Utwórz tabelę, która ma 7 kolumn (dni tygodnia) i co najmniej 4 wiersze (zajęcia).
2.  **Stylizacja Tabeli (CSS):**
    *   Użyj `border-collapse: collapse;` na elementach `<table>`.
    *   Dodaj padding do wszystkich komórek (`th`, `td`), aby zawartość nie była przyklejona do brzegów.
3.  **Stylizacja List:** Wewnątrz jednej z komórek (np. w bloku "Opis zajęć"), użyj listy i zastosuj właściwość **`list-style-type: circle;`**, aby punkty były okręgami, zamiast domyślnych kropek.
4.  **Stylizacja Nagłówków:** Użyj `<th>` dla nagłówków dni tygodnia (poniedziałek, wtorek...). Nadaj im inny kolor tła i upewnij się, że są wyśrodkowane.