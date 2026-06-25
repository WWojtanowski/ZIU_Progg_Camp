# 🔖 Rozdział 3: Atrybuty języka i nagłówek `<head>` (title, meta)

Teraz, gdy wiemy, gdzie umieścić zawartość, czas ulepszyć „tajne dane” naszej strony – czyli sekcję `<head>`. Pamiętaj, że to jest najbardziej techniczna część kodu, ale ma największe znaczenie dla SEO i dostępności!

## 🌍 Atrybut `lang` (Język)

Pamiętasz, jak w poprzednim rozdziale dodaliśmy `lang="pl"` do znaczniku `<html>`? To nie był przypadek. Atrybuty (jak np. `lang`) to dodatkowe informacje, które możemy dodać do znacznika, aby podać mu więcej kontekstu.

*   **Co robi `lang="pl"`?** Informuje przeglądarkę i czytniki ekranowe (dla osób niewidomych), że język strony to polski.
*   **Dlaczego to ważne?** Użycie poprawnego języka jest fundamentalne dla dostępności (accessibility) oraz pomaga wyszukiwarkom w prawidłowej indeksacji treści.

## 📖 Znaczenie `<title>` (Tytuł)

`<title>` to prawdopodobnie najważniejszy znacznik, który umieszczamy w sekcji `<head>`. Choć nie jest widoczny jako duży nagłówek na stronie, ma ogromne znaczenie:

1.  **W zakładce przeglądarki:** To tekst, który pojawia się w tabie Twojej przeglądarki.
2.  **Wyniki wyszukiwania (SERP):** To główny tytuł linku widoczny w Google czy Bing.

**Zasada kciuka:** Tytuł powinien być *dokładnym* podsumowaniem treści strony, ale jednocześnie wystarczająco intrygujący, by zachęcić do kliknięcia.

### Przykład:
```html
<head>
    <title>Nauka HTML dla początkujących | Twój pierwszy poradnik</title>
</head>
```

## ⚙️ Znacznik `<meta>` (Meta-dane)

`<meta>` to znaczek, który pozwala nam przekazać maszynom (Google Botom!) bardzo konkretne informacje o naszej stronie. Jest jak wizytówka dla wyszukiwarki.

### Najważniejsze Meta-Tagi:

#### 1. `charset` (Kodowanie znaków)
Jest to pierwszy i najbardziej krytyczny meta-tag, który musisz umieścić w `<head>`.

```html
<meta charset="UTF-8">
```

*   **Co robi?** Deklaruje uniwersalny standard kodowania tekstu. `UTF-8` pozwala na wyświetlanie niemal wszystkich znaków ze wszystkich języków świata (polskie znaki *ą, ę, ł*, czy żegota z innymi akcentami). **Bez tego mogą pojawić się „dziwne znaki lub kwadraty” w tekście!**

#### 2. `description` (Opis strony)
Ten meta-tag służy do opisania zawartości dla wyszukiwarek i jest widoczny pod tytułem strony na Google.

```html
<meta name="description" content="Kompletny kurs HTML dla początkujących. Naucz się podstawowych znaczników, struktury kodu i języka webu krok po kroku.">
```

*   **Atrybut `name`:** Określamy, że mówimy o opisie (`description`).
*   **Atrybut `content`:** Wklejamy tekst opisujący stronę (powinien być maksymalnie 150-160 znaków).

#### 3. `viewport` (Dla urządzeń mobilnych)
Ten meta-tag jest absolutnie obowiązkowy, jeśli chcesz, aby Twoja strona wyglądała dobrze na telefonach komórkowych.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

*   **Co robi?** Mówi przeglądarce: „Ustaw szerokość strony tak, aby pasowała do rzeczywistego rozmiaru urządzenia (smartfona) i nie skaluj jej sztucznie”. To jest fundament tzw. **Responsywnego Designu**.

---

## 🚀 Wielka Łączka: Pełny Kod `index.html`

Po zakończeniu tego rozdziału, Twój plik `index.html` powinien wyglądać tak (z pełną funkcjonalnością i najlepszymi praktykami SEO):

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <!-- 1. Kodowanie znaków: Must have! -->
    <meta charset="UTF-8">
    
    <!-- 2. Responsywność: Musisz to mieć dla telefonów! -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 3. SEO/Opis: Co Google ma wiedzieć o stronie? -->
    <meta name="description" content="Kompletny kurs HTML dla początkujących. Naucz się podstawowych znaczników i struktury webu krok po kroku.">

    <!-- 4. Tytuł: To co widzi użytkownik w zakładce! -->
    <title>Kurs HTML dla Początkujących | Pierwsza Strona Internetowa</title>
</head>
<body>
    <!-- Tutaj będzie cała Twoja, widoczna treść -->

</body>
</html>
```

### 🎉 Gratulacje!

Doskonale to zrobiłeś/aś. Zrozumiałeś/aś nie tylko składnię (jak napisać `<meta>`), ale przede wszystkim **cel** tych znaczników (dlaczego to jest potrzebne). Teraz masz solidny, profesjonalnie zbudowany fundament pod każdą stronę internetową!

W następnym rozdziale nauczymy się dodawać nagłówki i akapity.