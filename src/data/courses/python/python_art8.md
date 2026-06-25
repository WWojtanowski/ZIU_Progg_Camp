# 📐 Rozdział 8: Matematyka w Pythonie – Moduł `math`

### 📖 Wprowadzenie: Potęga liczb

Python ma doskonałe narzędzia do pracy z danymi liczbowymi, ale kiedy potrzebujemy zaawansowanych operacji matematycznych (jak pierwiastkowanie, zaokrąglanie do pełnych cyfr czy stały pi), musimy korzystać ze specjalnego pakietu o nazwie **`math`**.

Zawsze pamiętaj: aby używać funkcji z tego modułu, najpierw musisz go zaimportować!

```python
import math # To jest kluczowe!
```

---

### 🔢 Podstawowe Operacje i Funkcje Wbudowane

Niektóre funkcje są tak często używane, że nie wymagają importowania całego modułu `math`. Są to głównie:

*   `abs(liczba)`: Oblicza wartość bezwzględną (usuwa znak minus).
    *   Przykład: `abs(-15)` zwróci `15`.
*   `min(*argumenty)`: Znajduje najmniejszą wartość spośród podanych argumentów.
    *   Przykład: `min(10, 5, 20)` zwróci `5`.
*   `max(*argumenty)`: Znajduje największą wartość spośród podanych argumentów.
    *   Przykład: `max(10, 5, 20)` zwróci `20`.

### 📈 Zaawansowane Funkcje z Modułu `math` (Musimy importować!)

Te funkcje są kluczowe dla każdego programisty i pozwalają nam wykonywać operacje poza standardową arytmetyką.

#### 1. Potęgi i pierwiastki
*   **`math.pow(a, b)`:** Oblicza $a^b$ (a podniesione do potęgi b).
    *   Przykład: `math.pow(2, 3)` zwróci `8.0`.
*   **`math.sqrt(liczba)`:** Oblicza pierwiastek kwadratowy z danej liczby.
    *   Przykład: `math.sqrt(9)` zwróci `3.0`.

#### 2. Stałe
*   **`math.pi`:** Dostęp do stałej matematycznej pi (ok. 3.14159). Jest to bardzo przydatne przy obliczaniu okręgów i sfer.

#### 3. Zaokrąglanie Liczb
Te funkcje są często mylone. Ważne jest zrozumienie różnicy między standardowym zaokrągleniem a "zaokrągleniem w górę/dół".

*   **`round(x, n)`:** Standardowe zaokrąglanie do najbliższej wartości (możemy podać liczbę miejsc po przecinku `n`).
    *   Przykład: `round(5.5, 0)` zwróci `6.0`.
    *   Przykład: `round(5.4, 0)` zwróci `5.0`.
    *   Przykład: `round(5.6, 1)` zwróci `5.6`.
*   **`math.ceil(x)`:** **Ceiling** – zawsze zaokrągla liczbę *w górę*, do następnej liczby całkowitej (maksymalizując ją).
    *   Przykład: `math.ceil(4.1)` zwróci `5.0`.
    *   Przykład: `math.ceil(4.9)` zwróci `5.0`.
*   **`math.floor(x)`:** **Floor** – zawsze zaokrągla liczbę *w dół*, do poprzedniej liczby całkowitej (minimalizując ją).
    *   Przykład: `math.floor(4.1)` zwróci `4.0`.
    *   Przykład: `math.floor(4.9)` zwróci `4.0`.


---

### 📚 Zadania z Rozdziału 8 (Matematyka)

**1.: Obliczenia Geometryczne**
Użyj modułu `math`, aby obliczyć i wyświetlić następujące wartości dla okręgu o promieniu r = 7:
- Średnica: 2 * r.
- Pole: pi * r^2.
- Obwód: 2 * pi * r.

**2.: Test Zaokrąglania i Potęg**
Załóż zmienną `liczba_test` równą $17.345$. Wyświetl jej wartości zaokrąglone za pomocą wszystkich trzech metod:
- Standardowe zaokrąglenie do dwóch miejsc po przecinku.
- Zaokrąglenie w górę.
- Zaokrąglenie w dół.

**3.: Maksimum i Minimum**
Masz listę wyników z testu: `wyniki = [92, 75.5, 100, 68]`. Użyj funkcji `min()` i `max()` do znalezienia najwyższej i najniższej oceny. Następnie oblicz ich różnicę i wyświetl ją na ekranie.