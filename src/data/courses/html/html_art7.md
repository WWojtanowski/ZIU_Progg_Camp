# 📊 Rozdział 7: Tabele

## 🧱 Wprowadzenie: Struktury danych w HTML

Strony internetowe to nie tylko teksty i zdjęcia. Często musimy wyświetlić dane, które mają bardzo sztywną strukturę – jak wyniki badań, porównanie produktów czy harmonogramy. Do tego celu używamy **tabel**.

Tabela wymaga precyzyjnego zdefiniowania każdego elementu: co jest nagłówkiem, a co zwykłą daną?

### 📐 Podstawowa struktura tabeli

Podstawowy zestaw znaczników to jak klocki LEGO:

*   **`<table>`**: Najważniejszy kontener. Oznacza cały obszar tabeli.
*   **`<tr>` (Table Row):** Reprezentuje **wiersz** w tabeli. Każda nowa linia danych musi być zawarta w `<tr>`.
*   **`<th>` (Table Header):** Element, który jest **nagłówkiem kolumny/wiersza**. W przeglądarce zazwyczaj ma grubszy tekst i domyślnie wyśrodkowany. Jest to kluczowe dla dostępności!
*   **`<td>` (Table Data):** Standardowy element zawierający **dane** – zwykły tekst w komórce.

### 🏷️ Nagłówek tabeli (`<caption>`)

Zawsze, gdy tworzysz tabelę, powinna mieć ona tytuł. Używamy do tego znacznika `<caption>`. Umieszczenie go zaraz po otwierającym tagu `<table>` jest bardzo ważne!

```html
<!-- Struktura kodu -->
<table>
  <caption>Dane sprzedażowe Q3 2024</caption>
  <!-- Tutaj będą wiersze (<tr>) -->
</table>
```

### 🚀 Rozszerzenia: Łączenie komórek (`colspan` i `rowspan`)

Czasem nagłówek musi objąć nie jedną, ale wiele kolumn. Albo jeden element danych ma być widoczny przez kilka wierszy. Wtedy używamy atrybutów:

#### 1. `colspan` (Column Span)
Anglia: *Kolumna* oznacza szerokość na kilka **kolumn**. Używasz tego, gdy komórka powinna zajmować przestrzeń kilku kolumn naraz.

**Przykład:** Jeśli masz nagłówek "Dane sprzedażowe", a ten nagłówek obejmuje zarówno kwartalność, jak i produkty – musisz użyć `colspan="2"`.

#### 2. `rowspan` (Row Span)
Anglia: *Wiersz* oznacza wysokość na kilka **wierszy**. Używasz tego, gdy jeden element danych ma być widoczny w kilku rzędach.

**Przykład:** Jeśli masz nazwę działu ("Marketing"), a ten dział jest odpowiedzialny za dane przez trzy kolejne kwartały – użyjesz `rowspan="3"`.

---

## 📐 Przykład pełnej implementacji: Porównanie produktów

Zobaczmy, jak to wszystko działa razem.

```html
<table border="1">
  <caption>Porównanie smartfonów</caption>
  <!-- Wiersz nagłówków (Nagłówek obejmuje 2 kolumny) -->
  <tr>
    <th colspan="2">Parametr</th>
  </tr>
  <tr>
    <th>A</th> <!-- Pierwszy wiersz danych -->
    <th>B</th>
  </tr>

  <!-- DANE - Wiersz "Ekran" (obie komórki zajmują 1 kolumnę) -->
  <tr>
    <td>Rozmiar ekranu</td>
    <td>6.1 cala</td>
  </tr>

  <!-- DANE - Wiersz, gdzie Model A jest widoczny przez dwa rzędy (rowspan=2) -->
  <tr rowspan="2">
    <td>Bateria</td> 
    <td>4000 mAh</td>
  </tr>
  <tr>
    <!-- Zwróć uwagę: tutaj nie ma drugiego <th>, bo już zajęło to rowspan -->
    <td>Ładowanie</td>
    <td>Szybkie (35W)</td>
  </tr>

</table>
```

## 🚀 Zadania do rozwiązania (Test z tabel)

Stwórz kod HTML, który wyświetli następującą tabelę: **Harmonogram Spotkań Projektowych.**

Tabela musi zawierać następujące elementy i znaczniki:

1.  **Nagłówek:** Tytuł "Harmonogram Spotkań Q4 2024".
2.  **Wiersze nagłówków:** Zamiast zwykłych nagłówków, użyj `<th>` dla "Tydzień" i "Temat spotkania".
3.  **Dane:** Użyj minimum trzech wierszy danych (`<tr>`).
4.  **Atrybuty zaawansowane:**
    *   W pierwszym dniu (np. 2 listopada), utwórz komórkę, która zajmuje przestrzeń na **dwa wiersze** (`rowspan="2"`).
    *   Użyj atrybutu `colspan` dla nagłówka głównego, aby objął on dwa kolumny tematyczne.
