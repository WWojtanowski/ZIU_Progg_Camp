# 🚦 Rozdział 5: Wyrażenia Warunkowe (Decyzje Programu)

W świecie rzeczywistym nigdy nie ma tylko jednej ścieżki. Jeśli pada deszcz, biorę parasol; jeśli słońce świeci – idę bez niego. Twój kod programistyczny działa tak samo! Czasem program musi podejmować decyzje w zależności od danych wejściowych lub stanu systemu.

Wyrażenia warunkowe pozwalają nam na to: **wykonanie bloku kodu tylko wtedy, gdy spełniony jest określony warunek.**

### 🧠 I. Podstawy Warunków: `if` i `else`

Najprostsza decyzja w programowaniu to sprawdzenie jednego pytania: "Czy X jest prawdą?".

#### 🐍 Składnia
```python
warunek_jest_prawdziwy = True
# Sprawdzamy warunek (np. czy liczba większa niż 10)
if warunek_jest_prawdziwy:
    # Blok kodu wykonany, jeśli WARUNEK JEST PRAWDA
    print("Warunek został spełniony.")

# Blok kodu wykonany, gdy powyższy warunek jest FAŁSZEM
else:
    print("Warunek nie został spełniony. Robimy coś innego.")
```

**Pamiętaj!** W Pythonie musisz używać **dwukropka (`:`)**, aby zdefiniować początek bloku kodu i **wcięć (indentacji)**, aby wskazać, które linie należą do tego warunku. Indentacja to nasz sposób na grupowanie instrukcji.

### 🔗 II. Wielokrotne Warunki: `elif`
Co jeśli mamy więcej niż dwie możliwości? Nie chcemy pisać gigantycznego bloku `if... else if... else`. Python oferuje krótszy i czytelniejszy sposób: **`elif`** (skrót od *else if*).

```python
wynik = 75

if wynik >= 90:
    print("Ocena A+") # Jeśli wynik jest bardzo wysoki
elif wynik >= 80:
    # Sprawdzane tylko, jeśli poprzednie warunki (>= 90) były FAŁSZEM
    print("Ocena B")  # Jeśli wynik jest w zakresie 80-89
elif wynik >= 60:
    # Sprawdzane tylko, jeśli powyższe fałszem
    print("Ocena C")
else:
    # Wykonane, gdy WSZYSTKIE poprzednie warunki były FAŁSZEM
    print("Potrzebna poprawa.")
```

> 💡 **Zasada działania:** Python sprawdza instrukcje w kolejności. Gdy tylko znajdzie *pierwszy* spełniony warunek, wykonuje odpowiadający mu blok kodu i **całkowicie ignoruje** pozostałe `elif` i `else`.

### ✨ III. Nowoczesne Decyzje: `match` i `case` (Pattern Matching)
Od wersji Python 3.10 wprowadzono potężniejszą konstrukcję o nazwie `match/case`. Jest idealna do porównywania zmiennej z wzorcem, co jest dużo czytelniejsze niż długie łańcuchy `if/elif` zwłaszcza przy danych tekstowych lub strukturach.

```python
# Zakładamy, że mamy funkcję 'sprawdzenie_dni'
dzien = "sobota"

match dzien:
    case "poniedziałek":
        print("Czas na kawę i pracę.")
    | "piątek": # Operator OR (lub) - możemy sprawdzić kilka wartości za jednym razem
        print("Weekend czeka!")
    | "sobota" | "niedziela": # Można zgrupuować wiele przypadków
        print("Relaks! Czas na hobby.")
    case _: # Wildcard: działa jak ogólne 'else'
        print("Jakiś inny dzień tygodnia.")

# Wynik: Relaks! Czas na hobby.
```
*(Uwaga: Użycie `match/case` jest najbardziej eleganckie, gdy pracujesz z wartościami dyskretnymi – np. nazwy dni, kody błędów.)*

---
### 🛠️ Zadania do Rozwiązania (Rozdział 5)

1. **System Oceniania:** Napisz kod, który przyjmuje wynik jako liczbę całkowitą i używa `if/elif/else` do wydrukowania odpowiedniej oceny: A+ (90-100), B (80-89), C (60-79), D (40-59).

2. **Weryfikacja Wieku:** Utwórz program, który sprawdza wiek użytkownika:
    *   Jeśli jest poniżej 13 lat: "Dziecko".
    *   Jeśli między 13 a 17 lat: "Nastolatek".
    *   Jeśli między 18 a 65 lat: "Dorosły".
    *   Jeśli powyżej 65 lat: "Senior".

3. **Użycie `match/case` (Opcjonalne):** Wykorzystaj konstrukcję `match/case` do sprawdzenia, jaki dzień tygodnia jest podany i wydrukowania odpowiedniego komunikatu (np. poniedziałek -> początek tygodnia; sobota/niedziela -> weekend).