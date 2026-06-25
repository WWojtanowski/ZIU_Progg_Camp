# 🚀 Rozdział 7: Funkcje – Kapsuła Reutilizacji Kodu

### 📖 Wprowadzenie: Po co nam funkcje?

Wyobraź sobie, że masz przepis na ciasto (to jest Twój kod). Jeśli chcesz upiec to ciasto dziesięć razy, nie będziesz pisać tych samych kroków raz po raz. Stworzysz **funkcję** – czyli jeden zestaw instrukcji, który możesz wielokrotnie wywoływać za pomocą jednego hasła.

W programowaniu funkcje są fundamentem organizacji kodu. Umożliwiają:
1.  **Reużywalność:** Napiszesz kod raz i użyjesz go w całym projekcie.
2.  **Czytelność:** Twój kod staje się czysty, modułowy i łatwiejszy do zrozumienia dla Ciebie i innych programistów.
3.  **Łatwość zarządzania błędami:** Jeśli znajdziesz błąd w jednej funkcji, naprawiasz go tylko w jednym miejscu!

---

### ⚙️ Jak działają funkcje? (Składnia `def`)

Definiowanie funkcji zawsze zaczyna się od słowa kluczowego `def` (skrót od *define*).

#### 1. Podstawy Definicji Funkcji
Funkcja przyjmuje nazwy, a jej ciało jest zawarte w bloku kodu z wcięciem.

```python
# Składnia: def nazwa_funkcji(parametry):
def przywitowanie(imie):
    """Ta funkcja przyjmuje imię i drukuje powitanie."""
    print(f"Witaj, {imie}! Witaj w świecie Python!")
```

**Jak ją uruchomić (wywołać)?** Po zdefiniowaniu musisz za każdym razem użyć jej nazwy z nawiasami.
```python
przywitowanie("Alicja") # Wywołanie 1
przywitowanie("Tomek") # Wywołanie 2
```

#### 2. Argumenty (Parameters vs Arguments)
*   **Parametry:** To zmienne, które deklarujemy w nawiasach przy *definiowaniu* funkcji (np. `imie` w definicji). Są jak "puste miejsca" na informacje.
*   **Argumenty:** To faktyczne wartości, które przekazujesz do funkcji podczas jej *wywoływania* (np. `"Alicja"`).

#### 3. Argumenty Domyślne (Default Arguments)
Często napotkasz sytuację, gdy funkcja powinna mieć jakąś wartość domyślną (np. jeśli nie podamy rangi, zakładamy "Uczeń"). Możesz to osiągnąć, przypisując wartości parametrów w definicji:

```python
def powitanie(imie, status="Uczestnik"):
    """Przywita i informuje o statusie, domyślny status to Uczestnik."""
    print(f"Witaj, {imie}! Twój status to: {status}")

# Wywołanie z podaniem obu argumentów
powitanie("Julia", "Mentor") 

# Wywołanie z podaniem tylko pierwszego argumentu (wykorzystany domyślny)
powitanie("Kasia") 
```

#### 4. Instrukcja `return` – Wynik Funkcji
To najważniejsza różnica! Kiedy używasz `print()` wewnątrz funkcji, funkcja po prostu *pokazuje* coś na ekranie i nic nie zwraca do reszty programu.

Instrukcja `return` natomiast pozwala funkcji **zwrócić wartość**, którą możesz później przechwycić i użyć np. w obliczeniach.

**Zły sposób (tylko drukuje):**
```python
def dodaj_zly(a, b):
    print(a + b) # Tylko wyświetla 10 na ekranie! Funkcja zwraca None.
```
**Dobry sposób (zwraca wartość):**
```python
def dodaj_dobry(a, b):
    # Zamiast print() używamy return
    return a + b

wynik = dodaj_dobry(5, 3) # Funkcja oblicza i zwraca liczbę 8.
print(f"Otrzymany wynik to: {wynik}") # Teraz możemy go wykorzystać!
```

---

### 📚 Zadania z Rozdziału 7 (Funkcje)

**1. Funkcja Powitania Z Zaawansowaniem**
Stwórz funkcję o nazwie `generuj_opis`, która przyjmuje trzy parametry: `imie` (obowiązkowe), `wiek` (obowiązkowy) i `miasto` (domyślny, ustaw na "Nieznane"). Funkcja powinna używać instrukcji `return` do zwrócenia pełnego tekstu opisowego, np.: `"Imię ma X lat i mieszka w Y."`.

**2.: Kalkulator Powierzchni Trójkąta (z return)**
Stwórz funkcję o nazwie `oblicz_pole`, która przyjmuje dwa parametry: `a` oraz `h`. Funkcja powinna zwrócić obliczone pole trójkąta.

**3.: Łączenie elementów (Wykorzystanie)**
Użyj funkcji stworzonej w zadaniu 7.2, aby obliczyć i wyświetlić powierzchnię trzech różnych obiektów (trójkąt A o podstawie 10 i wysokości 5; trójkąt B o podstawie 4 i wysokości 8; trójkąt C o podstawie 2 i wysokości 3).