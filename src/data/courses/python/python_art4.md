# 📚 Rozdział 4: Tabele i Kolekcje (Listy, Tuple, Sety, Dictionary)

W programowaniu rzadko kiedy pracujemy tylko ze zmiennymi pojedynczymi. Najczęściej musimy przechowywać zbiory danych – np. listę zakupów, wyniki testu czy dane użytkownika. W Pythonie do tego celu używamy tzw. **kolekcji**.

Kluczem do zrozumienia tego rozdziału jest zapamiętanie, że różne kolekcje mają inne przeznaczenie i nie można ich traktować tak samo.

## 🍎 Listy (The `list`) – Elastyczne tabele
Lista to najbardziej wszechstronna kolekcja danych w Pythonie. Jest **zmienna** (mutable), co oznacza, że po jej utworzeniu możemy dodawać do niej elementy, usuwać je lub modyfikować ich zawartość.

*   **Jak wygląda:** Używamy nawiasów kwadratowych: `[]`.
*   **Charakterystyka:** Kolekcja uporządkowana (zachowuje porządek elementów) i zmienna.
*   **Przykład:**
    ```python
    # Tworzenie listy
    zakupy = ["chleb", "mleko", "jajka"]

    # Dodawanie elementu
    zakupy.append("ser")  # Lista: ['chleb', 'mleko', 'jajka', 'ser']

    # Zmienianie elementu (indeks 1)
    zakupy[1] = "jogurt" # Lista: ['chleb', 'jogurt', 'jajka', 'ser']

    print(zakupy)
    ```

## 🥚 Tuple (The `tuple`) – Niezmienne rekordy
Tuple to kolekcja, która jest **niezmienna** (immutable). Oznacza to, że po jej utworzeniu nie możemy zmienić elementów. Jest idealna do przechowywania danych, które mają być stałe i integralne (np. współrzędne geograficzne, data urodzenia).

*   **Jak wygląda:** Używamy nawiasów okrągłych: `()`.
*   **Charakterystyka:** Kolekcja uporządkowana i niezmienna.
*   **Przykład:**
    ```python
    # Tworzenie tuple (np. współrzędne)
    wspolrzedne = (52.22, 21.01)

    # Sprawdźmy! Próba zmiany spowoduje błąd:
    # wspolrzedne[0] = 60  # BŁĄD! TypeError: 'tuple' object does not support item assignment
    ```

### ➡️ Listy vs Tuple (Kiedy co używać?)
*   Używaj **List** (`[]`), gdy wiesz, że będziesz dodawać lub usuwać elementy z kolekcji.
*   Używaj **Tuple** (`()`), gdy dane są stałym zestawem i nie powinny być przypadkowo zmienione (dobre dla integralności danych).

## ✨ Zbiory (The `set`) – Unikalne elementy
Zbiór to kolekcja, która automatycznie usuwa wszelkie duplikaty. Nie przechowuje też porządku elementów (jest nieuporządkowany). Jeśli masz listę, w której przypadkiem pojawiło się dwa razy samo słowo, a potrzebujesz tylko unikalnej listy tych słów – użyj `set`.

*   **Jak wygląda:** Używamy klamr: `{}`.
*   **Charakterystyka:** Unikalne elementy, nieuporządkowany (może być problematyczny przy indeksowaniu).
*   **Przykład:**
    ```python
    # Lista z duplikatami
    punkty_zbierane = [10, 20, 10, 30, 20]

    # Konwersja na set usuwa duplikaty
    unikalne_punkty = set(punkty_zbierane) # {10, 20, 30}

    print(unikalne_punkty)
    ```

## 🔑 Słowniki (The `dict`) – Klucz-Wartość
Słownik jest zupełnie inny. Zamiast indeksowania po numerze kolejnym elementem (jak w liście), używamy **par klucz-wartość** (`key: value`). To najbardziej naturalny sposób przechowywania danych, które mają związek ze sobą (np. imię i nazwisko, kod kraju i stolica).

*   **Jak wygląda:** Używamy klamr `{}` z dwukropkiem `:` do oddzielenia klucza od wartości.
*   **Charakterystyka:** Klucz musi być unikalny i niezmienialny (immutable), wartość może być dowolnego typu.
*   **Przykład:**
    ```python
    # Tworzenie słownika: Krok = Wartość
    profil_uzytkownika = {
        "nazwa": "Jan Kowalski",
        "wiek": 30,
        "czy_aktywny": True
    }

    # Dostęp do wartości po kluczu (nie przez indeks!)
    print("Imię:", profil_uzytkownika["nazwa"]) # Wynik: Jan Kowalski

    # Zmiana wartości
    profil_uzytkownika["wiek"] = 31
    print("Wiek:", profil_uzytkownika["wiek"]) # Wynik: 31
    ```

***
### 🚀 Zadania do Rozwiązania (Rozdział 4)

1.  **Lista vs Tuple:** Stwórz zmienną `koordynaty` używając **tuple**, przechowując w niej trzy współrzędne (lat, lon, wysokość). Następnie spróbuj zmienić wartość wysokości i zapisz komunikat błędu, który otrzymujesz.

2.  **Czyszczenie danych:** Masz listę słów z duplikatami: `['jabłko', 'pomarańcza', 'kiwi', 'jabłko', 'śliwka', 'pomarańcza']`. Napisz kod, który użyje **setu**, aby uzyskać unikalną listę tych owoców.

3.  **Profil Użytkownika:** Stwórz słownik o nazwie `student`, który przechowuje następujące dane: klucz `"imie"` (String), `"rok_nauki"` (Integer), `"specjalizacja"` (String). Następnie napisz kod, który wyświetli tylko specjalizację ucznia.

4.  **Mieszanie kolekcji:** Użyj list, aby stworzyć początkową listę elementów: `[10, 20, 30]`. Dodaj do niej nowy element o wartości `40` (używając metody `.append()`). Następnie przekonwertuj tę listę na **tuple** i nazwij ją `wyniki_semestru`.
