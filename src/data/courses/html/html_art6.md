# 📄 Rozdział 6: Listy

## 📝 Wprowadzenie: Kiedy używać list?

Czy kiedykolwiek pisałeś/aś listę zakupów, kroki do zrobienia kawy albo punkty na prezentacji? To są listy! W świecie HTML nie możemy po prostu napisać tekstu oddzielonego Enterem – musimy użyć specjalnych znaczników, które mówią przeglądarce: „Ej, to jest spójny zestaw powiązanych elementów!”.

HTML oferuje nam dwa główne typy list i kilka bardziej zaawansowanych narzędzi do ich strukturyzacji.

### 📚 Typ I: Listy nieuporządkowane
Używamy ich, gdy kolejność elementów **nie ma znaczenia**. Myśl o nich jak o kępach owoców na drzewie – możesz je podmienić miejscami i nic się nie stanie.

*   **`<ul>` (Unordered List):** Oznaczamy cały kontener listu.
*   **`<li>` (List Item):** Każdy pojedynczy element w tej liście.

**Przykład użycia:** Lista zakupów, elementy menu nawigacji na stronie.

```html
<!-- Struktura kodu -->
<ul>
  <li>Jabłka</li>
  <li>Chleb pełnoziarnisty</li>
  <li>Mleko 2%</li>
</ul>
```

### 📜 Typ II: Listy uporządkowane
Używamy ich, gdy kolejność elementów **jest krytyczna**. Myśl o nich jak o przepisach kulinarnych – musisz dodać jajka przed mąką!

*   **`<ol>` (Ordered List):** Oznaczamy cały kontener listu.
*   **`<li>` (List Item):** Każdy pojedynczy element w tej liście.

**Przykład użycia:** Instrukcja obsługi, kroki realizacyjne projektu.

```html
<!-- Struktura kodu -->
<ol>
  <li>Włącz komputer</li>
  <li>Uruchom aplikację</li>
  <li>Kliknij przycisk 'Start'</li>
</ol>
```

### 📖 Typ III: Słowniki / Definicje
Ten zestaw jest bardziej zaawansowany, ale bardzo użyteczny. Idealny jest do tworzenia słowników pojęć lub sekcji "Nazwa: Opis".

*   **`<dl>` (Description List):** Kontener dla całego słownika.
*   **`<dt>` (Definition Term):** Termin/Żargon (słowo, które definiujesz).
*   **`<dd>` (Definition Description):** Definicja/Opis tego terminu.

**Przykład użycia:** Sekcja "Słownik pojęć" na stronie edukacyjnej.

```html
<!-- Struktura kodu -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language – język znaczników do strukturyzowania treści.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets – język do stylizowania (kolorów, układu) stron.</dd>
</dl>
```


## 🚀 Zadania do rozwiązania (Test z list)

Wykorzystaj wiedzę zdobyta w tym rozdziale, aby stworzyć strukturę kodu dla następujących scenariuszy:

1.  **Lista Hobby:** Stwórz nieuporządkowaną listę (użyj `<ul>`), zawierającą trzy Twoje hobby (np. Czytanie książek, Bieganie, Gotowanie).
2.  **Przepis na Kawę:** Stwórz uporządkowaną listę (użyj `<ol>`) z 4 krokami przygotowania kawy (np. Zagotuj wodę -> Wsyp filtry -> Dolewaj... itd.).
3.  **Słownik Technologiczny:** Wykorzystaj znacznik `<dl>` do stworzenia krótkiego słownika zawierającego pojęcia: **"Hyperlink"** (Podpisany link do innej strony) i **"Tag"** (Znacznik otwierający/zamykający).

