# 🔢 Rozdział 3: Typy Danych – Fundamenty Programowania

Nie wszystkie dane są takie same! Czy „kot” jest tak samo użyteczny jak liczba 5? Nie. W programowaniu musimy wiedzieć, jaki **typ danych** przechowuje dana zmienna, ponieważ ten typ dyktuje, jakie operacje możemy z tą daną wykonać (np. możesz dodać dwie liczby, ale nie możesz "dodać" dwa teksty w sensie matematycznym).

Python automatycznie rozpoznaje typ dane, który przypisujesz do zmiennej – to się nazywa **typowanie dynamiczne**.

### 🏷️ Najważniejsze Typy Danych (Data Types)

#### 1. String (`str`)
*   **Co przechowuje:** Ciąg znaków (tekst). Litery, znaki specjalne, słowa.
*   **Jak się rozpoznaje:** Zawsze musi być otoczony cudzysłowami (`""` lub `''`).
*   **Przykład:** `imie = "Anna"; kolor = 'zielony'`
*   **Operacje:** Konkatenacja (`zdanie = imie + 'lubi kolor' + kolor   # Anna lubi kolor zielony`)

#### 2. Number (`int` i `float`)
W Pythonie zazwyczaj traktujemy wszystkie liczby jako „number”, ale dzielimy je na dwa główne typy:
*   **Integer (`int`):** Całe liczby bez przecinka (np. -5, 0, 100).
    *   **Przykład:** `liczba_osob = 3; rok = 2024`
*   **Floating Point Number (`float`):** Liczby zmiennoprzecinkowe (zawierające przecinek/kropkę dziesiętną).
    *   **Przykład:** `cena = 19.99; temperatura = 36.5`
*   **Operacje:** Arytmetyczne (+, -, *, /).

#### 3. Boolean (`bool`)
*   **Co przechowuje:** Wartość logiczną – prawda lub fałsz. To jest absolutna podstawa dla podejmowania decyzji w programie!
*   **Wartości:** `True` (Prawda) i `False` (Fałsz). *Uwaga: Muszą być napisane wielką literą.*
*   **Przykład:** `czy_jestem_studentem = True; czy_pada = False`
*   **Operacje:** Logiczne (`and`, `or`, `not`).

#### 4. NoneType (`None`)
*   **Co przechowuje:** Brak wartości. Gdy zmienna nie ma przypisanej wartości lub jest celowo ustawiona jako „nic”, przyjmuje typ `None`.
*   **Przykład:** `wynik_obliczenia = None` (oznacza, że jeszcze nic nie obliczyliśmy).

### 🔄 Ważne przekształcenia Typów (`Type Casting`)

Pamiętaj o największej pułapce: funkcja `input()` zawsze zwraca **string**! Jeśli poprosisz użytkownika o liczbę i spróbujesz wykonać z nią operację matematyczną, program się wysypie. Musimy więc ręcznie przekształcić typ danych za pomocą funkcji `int()` lub `float()`.

```python
# Błąd (próba dodania stringa do liczby)
# wynik = "10" + 5  # Zwróci: "105" (string, bo Python próbuje połączyć tekst i liczbę)

# Poprawnie (konwersja stringa na int przed operacją)
liczba_str = input("Podaj liczbę: ") # Wartość jest STRINGIEM!
liczba_int = int(liczba_str)          # Konwertujemy to na INT
wynik = liczba_int + 5                # Teraz działa arytmetyka!
```

---

### 🛠️ Ćwiczenie: Logika Zakupów

Stwórz mały system decyzyjny dla zakupów książek:

1.  Poproś użytkownika o podanie ceny jednej książki (użyj `float` i odpowiednio przekonwertuj input).
2.  Poproś użytkownika o liczbę książek, które chce kupić (użyj `int`).
3.  Wyświetl całkowitą cenę zakupu (Wynik: `cena * ilość`).
4.  **Dodaj logikę decyzyjną:** Jeśli łączny koszt przekracza 500 zł, wyświetl komunikat "Gratulacje! Otrzymujesz darmową paczkę długopisów!" (Tutaj używasz typów `float` do porównania i zmiennej typu `bool` w logice).

**Pamiętaj:** W tych zadaniach ćwicz:
1.  Użycie odpowiedniego typu danych przy przypisywaniu wartości.
2.  Kluczowe operacje konwertowania (castingu) z użyciem funkcji `int()` i `float()`.