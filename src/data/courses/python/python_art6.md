# 🔁 Rozdział 6: Wyrażenia Pętlowe (Powtarzanie Akcji)
## `for` i `while`

Jako programista rzadko kiedy wykonujesz tę samą operację tylko raz. Musisz powtórzyć przetwarzanie listy użytkowników, wydrukować dane przez cały dzień, albo sprawdzać warunki aż do znalezienia rozwiązania. Do tego służą **pętle**. Pętle pozwalają nam zapisać kod efektywnie i czytelnie, wykonując go wielokrotnie bez konieczności kopiowania linii kodu.

### ⚙️ I. Pętla `for` (Iteracja nad sekwencją)
Pętla `for` jest najbardziej naturalna w programowaniu. Używamy jej, gdy wiemy, ile razy chcemy wykonać akcję, albo chcemy przejść przez wszystkie elementy zbioru danych (listy, pliki, napisy).

#### 🐍 Składnia
```python
# Przykład 1: Iteracja po liście
kolory = ["czerwony", "zielony", "niebieski"]
print("--- Wyświetlanie kolorów ---")
for kolor in kolory:
    # Ten blok kodu wykona się dla KAŻDEGO elementu z listy
    print(f"Obsługuję kolor: {kolor}")

# Przykład 2: Iteracja za pomocą funkcji range() - gdy chcemy powtórzyć akcję X razy
print("\n--- Liczenie od 0 do 4 ---")
# range(5) generuje liczby 0, 1, 2, 3, 4
for i in range(5):
    print(f"Aktualna iteracja: {i}")
```

> 📚 **Kluczowy element:** Pętla `for` *automatycznie* przechodzi przez każdy element sekwencji aż do końca. Nie musisz się martwić o zliczanie!

### ⏳ II. Pętla `while` (Warunkowe Powtarzanie)
Pętla `while` działa na zasadzie "Dopóki warunek jest prawdziwy, wykonuj ten blok kodu". Używamy jej, gdy nie wiemy z góry, ile razy pętla musi się wykonać – np. musimy czekać na dane od użytkownika aż poda poprawne hasło.

#### 🐍 Składnia
```python
licznik = 0 # Musimy ręcznie zainicjalizować zmienną kontrolną!

# Warunek: dopóki licznik jest mniejszy niż 5, pętla działa
while licznik < 5:
    print(f"Licznik wynosi: {licznik}")
    # KLUCZOWE: MUSIMY ZMIENIĆ WARUNEK W ŚRODKU PĘTLI!
    licznik += 1 # To równa się: licznik = licznik + 1

print("Pętla zakończyła działanie, bo warunek stał się fałszywy.")
```

> ⚠️ **OSTRZEŻENIE (Nieskończona Pętla):** Jeśli wewnątrz pętli `while` zapomnisz zmienić zmiennej kontrolnej (`licznik += 1`), warunek zawsze będzie prawdziwy, a program się zawiesi. To tzw. nieskończona pętla!

### 🛑 III. Kontrola Przepływu: `break` i `continue`
Czasami chcemy kontrolować przepływ kodu wewnątrz pętli.

*   **`break`:** Natychmiast przerywa działanie pętli, niezależnie od warunków. (Np. znaleźliśmy błąd i nie ma sensu sprawdzać dalej).
*   **`continue`:** Przerywa wykonanie *tylko bieżącej iteracji*, ale pozwala pętli przejść do następnego elementu/kroku.

```python
dane_uzytkownika = [10, 25, -5, 40, -8]

for x in dane_uzytkownika:
    if x < 0:
        print(f"Otrzymano ujemną wartość ({x}). Pomijam dalsze przetwarzanie tego elementu.")
        continue # Przechodzi do następnego elementu w liście!
    
    # Ten kod wykona się tylko dla wartości >= 0
    if x == 40:
        print("Znaleziono docelową wartość! Kończę pracę.")
        break # Natychmiast przerywa całą pętlę for
    
    print(f"Poprawna wartość przetworzona: {x}")

# Wyświetlony wynik zostanie tylko do momentu, gdy trafi się 'break'.
```

---
### 🛠️ Zadania do Rozwiązania (Rozdział 6)

1. **Pętla `for` – Sumowanie:** Utwórz listę zawierającą pięć różnych liczb całkowitych. Użyj pętli `for`, aby przejść przez wszystkie elementy i obliczyć ich sumę. Wydrukuj końcowy wynik.

2. **Pętla `while` – Hasło:** Napisz program, który pyta użytkownika o hasło wielokrotnie. Program ma działać tak długo, aż wpisana wartość będzie równa "python123". Jeśli poda coś innego, wydrukuj komunikat: "Błędne hasło. Spróbuj ponownie."

3. **Kontrola Przepływu:** Masz listę liczb całkowitych (np. `[10, 5, -2, 8, -7, 1, 15, 2]`). Użyj pętli `for` i instrukcji `continue`, aby zignorować wszystkie ujemne liczby w tej liście podczas przetwarzania. Następnie użyj `break`, jeśli napotkasz liczbę większą niż 10, kończąc całą pętlę.
