# 📝 Rozdział 8: Formularze

Jeśli stworzone przez nas strony internetowe to witryny, to formularze to mechanizm umożliwiający **interakcję**. Bez nich strona jest tylko statycznym katalogiem — nie możesz się zapisać, skomentować ani wysłać wiadomości.

W tym rozdziale nauczymy się budować formularze, które są zarówno funkcjonalne (dla przeglądarki), jak i dostępne (dla każdego użytkownika).

## ⚙️ Co to jest Formularz HTML?

Formularz w HTML nie tylko zbiera dane; on określa, **dokąd** te dane mają trafić i **jak** mają być wysłane. To cała machina do komunikacji z serwerem.

### 🧱 Kontener: Element `<form>`

Cały formularz musi znaleźć się w elemencie `<form>`. Ten element ma dwa bardzo ważne atrybuty, które musisz znać:

1.  **`action`**: Określa URL (adres), do którego dane zostaną wysłane po kliknięciu przycisku Submit.
2.  **`method`**: Określa metodę przesyłania danych (`GET` lub `POST`).
    *   **`GET`**: Dane są widoczne w adresie przeglądarki (np. wyszukiwanie Google). Idealne do prostych zapytań.
    *   **`POST`**: Dane nie są widoczne w adresie i są bezpieczniejsze dla wrażliwych informacji (np. hasła, rejestracja).

```html
<form action="/submit-dane" method="POST">
    <!-- Tutaj umieszczamy wszystkie pola formularza -->
</form>
```

### 🏷️ Łączenie etykiet: Element `<label>`

**To jest absolutnie kluczowa wiedza!** Nigdy nie powinno się pisać pól bez opisu. Element `<label>` przypisuje opis do pola input. Najważniejsze, że musimy go połączyć z polem za pomocą atrybutów `for` i `id`.

*   `for` w `<label>`: Mówi nam, do którego pola ma się odnosić ten napis.
*   `id` na `<input>`: Unikalny identyfikator tego konkretnego pola.

```html
<!-- Poprawna implementacja! -->
<label for="email">Adres e-mail:</label>
<input type="email" id="email" name="user_email"> 
<!-- 'for="email"' pasuje do 'id="email"' -->
```

### 📑 Grupowanie i dostępność: `<fieldset>` i `<legend>`

Gdy formularz jest długi, najlepiej jest go podzielić na logiczne sekcje (np. "Dane Osobowe", "Hasło").

*   `<fieldset>`: Tworzy wizualną ramkę wokół grupy elementów powiązanych tematycznie.
*   `<legend>`: Dodaje tytuł tej grupie (wyświetlany jako podpis nad ramką).

```html
<fieldset>
    <legend>Dane Kontaktowe</legend> 
    <!-- Tutaj znajdują się pola dla imienia, nazwiska itp. -->
</fieldset>
```

## 🖊️ Elementy wejściowe: `<input>` (Serce formularza)

Tag `<input>` jest najbardziej wszechstronnym elementem i zmienia swoje zachowanie w zależności od atrybutu `type`.

### Najważniejsze typy (`type`):

- `text`: Standardowy tekst (imię, nazwisko).
- `email`: Wymaga formatu email; walidacja przeglądarki pomaga sprawdzić składnię.
- `password`: Ukrywa wpisywany tekst (gwiazdki/kropki).
- `number`: Akceptuje tylko wartości liczbowe i często wyświetla strzałki do zwiększania/zmniejszania.
- `checkbox`: Pozwala na zaznaczenie **wielu** opcji (np. Zainteresowania: Film, Książka, Muzyka). | Wybór wielu elementów.
- `radio`: Pozwala wybrać **tylko jedną** opcję z grupy (MUSI mieć ten sam atrybut `name`).

### Zaawansowane atrybuty `<input>`:

*   **`required`**: Atrybut, który sprawia, że użytkownik **musi** wypełnić to pole, zanim formularz zostanie przesłany.
*   **`placeholder="..."`**: Tekst pomocniczy widoczny w polu, ale znika po kliknięciu (nie jest częścią danych).

## 🚀 Inne elementy interaktywne

### `<textarea>` – Długi tekst
Jeśli potrzebujesz pola do wpisania długiej treści (np. komentarz, wiadomość), używasz `<textarea>`. Nie ma dla niego odpowiednika w tagu `<input>`.

```html
<label for="komentarz">Twój komentarz:</label>
<textarea id="komentarz" name="komentarz" rows="5" cols="30"></textarea> 
<!-- rows i cols określają wymiary widokowe -->
```

### `<select>` i `<option>` – Rozwijane menu (Dropdown)
Idealne do list, gdzie nie chcesz, aby użytkownik wpisał dane ręcznie.

*   `<select>`: Jest kontenerem dla całego listy wyboru.
*   `<option>`: Pojedyncza opcja w tym menu.

```html
<label for="kategoria">Wybierz kategorię:</label>
<select id="kategoria" name="kategoria">
    <option value="" disabled selected>--- Wybierz ---</option> 
    <option value="ksiazka">Książka</option>
    <option value="film">Film</option>
</select>
```

### `<button>` – Przyciski akcji
Zamiast polegać tylko na przycisku Submit, możesz używać `<button>`.

*   **`<button type="submit">`**: Standardowy przycisk do wysłania formularza.
*   **`<button type="reset">`**: Resetuje wszystkie pola w formularzu do ich wartości początkowych.

---

### 📚 Podsumowanie Formularzy: Pamiętaj o połączeniu!
1.  Zawsze używaj `<form>` z atrybutami `action` i `method`.
2.  Zawsze używaj `<label for="id">...</label>` w połączeniu z `<input id="id" ...>`.
3.  Grupuje elementy za pomocą `<fieldset>` i `<legend>`.

## 🚀 Zadanie do rozwiązania (Formularz Rejestracyjny)

Twoim zadaniem jest stworzenie pełnego, funkcjonalnego formularza rejestracyjnego dla fikcyjnej platformy blogowej. Użyj wszystkich opelifikowanych elementów!

**Wymagane elementy i ich logika:**

1.  **Struktura:** Całość musi być w tagu `<form>`.
2.  **Grupy (Fieldset):** Utwórz dwie grupy: „Dane Osobowe” i „Poziom Dostępu”. Dodaj nagłówki za pomocą `<legend>`.
3.  **Pole Tekstowe:** Imię użytkownika (`type="text"`, `required`).
4.  **Pole Email:** Adres e-mail (`type="email"`, `required`).
5.  **Hasło:** Pole hasła (`type="password"`, `required`).
6.  **Zainteresowania (Checkbox):** Lista checkboxów dla wybranych zainteresowań (np. Literatura, Programowanie, Podróże). **Pamiętaj: Wszystkie te checkboxy muszą mieć ten sam atrybut `name`!**
7.  **Potwierdzenie Praw:** Pole typu Radio (`type="radio"`) do wyboru płci (Mężczyzna/Kobieta) — użyj tego samego `name`.
8.  **Akcja:** Przycisk „Zarejestruj się!” o typie `submit`.