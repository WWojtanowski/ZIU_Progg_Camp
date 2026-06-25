# 🎨 CSS: Stylizowanie stron – Kaskadowość i metody wprowadzania stylów

Witamy w rozdziale o tym, jak nadawać naszym elementom wygląd! Jeśli HTML jest szkieletem (struktura) naszej strony internetowej, to **CSS (Cascading Style Sheets)** jest kosmetyką, ubraniem i fryzurą. CSS decyduje nie tylko o kolorach, ale też o układzie elementów, odległościach i tym, jak strona "czuje się" dla użytkownika.

Zanim zaczniemy stylizować, musimy zrozumieć dwa kluczowe pojęcia: **Kaskadowość** i **Metody wprowadzania stylu**.

---

## 🌊 1. Pojęcie Kaskadowości (Cascading)

Co to znaczy, że coś jest "kaskadujące"? Wyobraź sobie kaskadę wodną – woda płynie z górnych poziomów do niższych, a każdy kolejny strumień wpływa na poprzednie.

W kontekście CSS, **Kaskadowość** oznacza system reguł i priorytetów, które decydują o tym, który styl ma *ostatecznie* obowiązywać, gdy ten sam element jest celowany przez wiele różnych deklaracji stylu (np. w trzech różnych miejscach na stronie).

### 🧠 Jak działa kaskadowość?

CSS nie polega tylko na stosowaniu reguł; on **rozstrzyga konflikty**. Jeśli zdefiniujesz kolor tekstu jako niebieski, ale później, używając bardziej szczegółowego selektora, ustawisz go na czerwony – to czerwień wygra.

**Zasada działania (od najmniej do najbardziej wiążącego):**

1.  **Reguły ogólne:** Najpierw są stosowane style z domyślnej kolorystyki przeglądarki.
2.  **Selekcja:** Im bardziej precyzyjnie celujesz w element (np. zamiast `p` użyć `#id-specyficzne p`), tym większa jest "siła" Twojej deklaracji.
3.  **Nadpisanie:** Ostatnia, najbardziej szczegółowa i dobrze umiejscowiona reguła wygrywa i nadpisuje poprzednie style.

> 💡 **Pamiętaj!** Zrozumienie kaskadowości to klucz do pisania czystego CSS. Nie chodzi tylko o *jak* coś ustylizować, ale też o *gdzie* ten styl powinien być zdefiniowany, aby był efektywny i łatwy do utrzymania.

---

## ⚙️ 2. Wstawianie Stylów (CSS Placement)

Istnieją trzy główne sposoby na wprowadzenie CSS do dokumentu HTML: lokalny (inline), wewnętrzny i zewnętrzny. Wybór metody ma ogromny wpływ na czytelność, wydajność oraz możliwość ponownego użycia Twojego kodu.

### 🥇 A. Lokalny CSS (Inline Styles)

Lokalne style pozwalają ustawić styl dla **jednego, konkretnego elementu** HTML, bezpośrednio za pomocą atrybutu `style=""`.

*   **Jak to wygląda:**
    ```html
    <p style="color: blue; font-size: 20px;">Ten tekst jest niebieski.</p>
    ```
*   **Zalety:** Szybkie testowanie, idealne dla bardzo małych, jednorazowych zmian.
*   **Wady (i dlaczego tego unikać):**
    1.  **Brak reużywalności:** Jeśli chcesz zmienić kolor wszystkich nagłówków `<h1>`, musisz ręcznie edytować każdy taki element na stronie.
    2.  **Brzydki kod:** Mieszanie struktury (HTML) z prezentacją (CSS) sprawia, że dokument staje się trudny do czytania i utrzymania.

### 🥈 B. Wewnętrzny CSS (Internal Styles)

Wewnętrzne style są umieszczane w bloku `<style>` w sekcji `<head>` pliku HTML. Styl ma zastosowanie **tylko** do tego konkretnego pliku, w którym został zdefiniowany.

*   **Jak to wygląda:**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Wewnętrzny CSS</title>
        <style>
            /* Tutaj umieszczamy wszystkie style */
            h1 {
                color: green;
            }
            p {
                font-family: Arial, sans-serif;
            }
        </style>
    </head>
    <body>
        <h1>Nagłówek na jednej stronie</h1>
        <p>Ten tekst jest zielony tylko tutaj.</p>
    </body>
    </html>
    ```
*   **Zalety:** Łatwe do zorganizowania dla małych, pojedynczych stron. Wszystko jest w jednym miejscu.
*   **Wady:** **Brak reużywalności.** Jeśli masz 10 stron na swojej witrynie, a zmieniasz kolor wszystkich nagłówków `<h1>`, musisz edytować ten sam kod CSS w 10 plikach.

### 💎 C. Zewnętrzny CSS (External Styles) – **BEST PRACTICE**

Zewnętrzne style to złoty standard i najlepsza praktyka programistyczna. Polega na stworzeniu **całego, oddzielnego pliku** (`style.css`) i załączeniu go do dokumentu HTML za pomocą tagu `<link>`.

*   **Struktura:**
    1.  Utworzysz plik `index.html` (struktura).
    2.  Utworzysz plik `styles.css` (prezentacja).
    3.  Wkleisz do HTML link:
        ```html
        <!-- W sekcji <head> naszego index.html -->
        <link rel="stylesheet" href="styles.css">
        ```
*   **Przykład w pliku `styles.css`:**
    ```css
    /* styles.css */
    body {
        background-color: #f4f4f9;
    }

    h1 {
        color: navy;
        border-bottom: 2px solid #ccc;
    }
    p {
        font-size: 16px;
        line-height: 1.5;
    }
    ```
*   **Zalety (Dlaczego jest najlepszy):**
    1.  **Separacja Obowiązków (Separation of Concerns):** Twój kod HTML zajmuje się *tylko* treścią, a CSS zajmuje się *tylko* wyglądem. To czysty i uporządkowany kod.
    2.  **Reużywalność:** Zmiana stylu w jednym pliku (`styles.css`) automatycznie zmienia wygląd na **wszystkich stronach**, które ten plik linkują!
    3.  **Cache/Wydajność:** Przeglądarka może pobrać i zapamiętać (cache) cały plik CSS, co sprawia, że strona ładuje się szybciej po pierwszym odwiedzeniu.


> 🌟 **Najważniejsza zasada:** Jako początkujący, staraj się używać wyłącznie **Zewnętrznego CSS**. Utrzymanie oddzielenia struktury od stylów to pierwszy krok do pisania czystego i profesjonalnego kodu.