# 🧠 Rozdział 2: Podstawowe Operacje – Zmienne oraz Funkcje `print` i `input`

Po skonfigurowaniu naszego warsztatu (PyCharm), czas na pierwsze narzędzia! W każdym programie musimy być w stanie coś wyświetlić użytkownikowi (`print`) oraz przyjść dane od niego (`input`). A żeby te dane były użyteczne, muszą znaleźć się w specjalnych pojemnikach – **zmiennych**.

### 💡 Co to jest zmienna?

Wyobraź sobie zmienną jako etykietkowany pudełko. Możesz nadać temu pudełku nazwę (np. `imie_uzytkownika`), a do środka włożyć jakąś wartość (np. "Ania"). Kiedy później potrzebujesz tej wartości, po prostu odwołujesz się do nazwy pudełka.

W Pythonie definiowanie zmiennej jest proste: wystarczy nadać jej wartość za pomocą znaku równości (`=`).

```python
moje_zdjecie = "piękna_pora"  # Tutaj tworzymy zmienną 'moje_zdjecie' i przypisujemy jej ciąg znaków.
liczba_jabek = 5            # Tutaj tworzymy zmienną 'liczba_jabek'.
```

### 🖥️ Funkcja `print()` – Mówienie do użytkownika

Funkcja `print()` służy do wyświetlania danych na konsoli (czyli w oknie wyjściowym). Jest to najbardziej podstawowe narzędzie komunikacji.

**Składnia:** `print("tekst", zmienna, wynik)`
*   Wszystko, co chcesz wypisać, musi być zawarte w nawiasach okrągłych `()`.
*   Teksty (ciągi znaków) zawsze muszą być ujęte w cudzysłów (`""` lub `''`).

**Przykład:**
```python
print("Witam na kursie Pythona!") # Wypisze tylko tekst
wiek = 25
print(f"Użytkownik ma {wiek} lat.") # Użycie f-stringów do wstawienia wartości zmiennej.
```

### ⌨️ Funkcja `input()` – Słuchanie od użytkownika

Funkcja `input()` zatrzymuje działanie programu i czeka, aż użytkownik coś wpisze na klawiaturze, a następnie to, co zostało wpisane, zwraca nam jako wartość.

**Najważniejsza zasada:** Wartość zwrócona przez `input()` **jest zawsze traktowana jako ciąg znaków (string)**, nawet jeśli użytkownik wprowadzi liczbę! To bardzo ważna rzecz do zapamiętania.

```python
imie = input("Proszę podać Twoje imię: ") # Program czeka na wpisanie tekstu
print(f"Cześć {imie}! Witaj w programowaniu.")
```

---

### 🛠️ Zestawienie i Ćwiczenia

**Ćwiczenie 1. Podstawowy Profil Użytkownika**

Stwórz mały program, który będzie działał według następującego scenariusza:

1.  Poproś użytkownika o podanie swojego imienia za pomocą funkcji `input()`.
2.  Zapamiętaj to imię w zmiennej (np. `imie`).
3.  Użyj funkcji `print()` do powitania użytkownika, używając jego wpisanego imienia.
4.  Poproś go o podanie swojego rocznika (rok urodzenia).
5.  W wyświetlonym komunikacie poinformuj użytkownika, ile lat ma (zakładając bieżący rok np. 2024) i co zapamiętaj w zmiennej `wiek`.

**Ćwiczenie 2. Prosty Kalkulator Powitania**

Napraw ten kod i ulepsz go! Ma za zadanie wyświetlić spersonalizowaną wiadomość, ale jest zbyt sztywny.

*   Poproś użytkownika o podanie imienia (np. `imie`).
*   Poproś użytkownika o podanie ulubionego zwierzęcia (np. `zwierze`).
*   Wyświetl pełną, życzliwą wiadomość na konsoli, która zawiera oba te elementy.

**Pamiętaj:** W tych zadaniach ćwicz przypisywanie wartości do zmiennych oraz używanie funkcji `print` i `input`.