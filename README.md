# Blog-app

Blog-app to aplikacja blogowa stworzona przy użyciu [Next.js](https://nextjs.org/). Projekt umożliwia publikowanie postów, wyświetlanie ich szczegółów oraz wysyłanie wiadomości za pomocą formularza kontaktowego.

## Funkcjonalności

- **Wyświetlanie postów**: Lista wszystkich postów oraz wyróżnionych postów na stronie głównej.
- **Szczegóły postów**: Strony szczegółowe dla każdego posta, renderowane na podstawie plików Markdown.
- **Formularz kontaktowy**: Możliwość wysyłania wiadomości, które są zapisywane w bazie danych MongoDB.
- **Responsywny design**: Stylizacja z użyciem CSS Modules i zmiennych CSS.

## Technologie

- **Next.js**: Framework Reacta z obsługą SSR i SSG.
- **React**: Biblioteka do budowy interfejsów użytkownika.
- **MongoDB**: Baza danych do przechowywania wiadomości z formularza kontaktowego.
- **Gray-matter**: Parser plików Markdown do ekstrakcji metadanych.
- **React Markdown**: Renderowanie treści Markdown w React.
- **React Syntax Highlighter**: Podświetlanie składni w kodzie.

## Struktura projektu

- `components/`: Komponenty Reacta, takie jak nawigacja, posty, formularz kontaktowy.
- `pages/`: Strony aplikacji, w tym dynamiczne strony postów i API.
- `lib/`: Funkcje pomocnicze, np. do obsługi plików Markdown.
- `posts/`: Pliki Markdown z treścią postów.
- `styles/`: Globalne style CSS.

## Jak uruchomić projekt?

1. Zainstaluj zależności:

   ```bash
   npm install
   ```

2. Uruchom serwer deweloperski:

   ```bash
   npm run dev
   ```

3. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Konfiguracja bazy danych

Aby aplikacja mogła zapisywać wiadomości z formularza kontaktowego, skonfiguruj połączenie z MongoDB w pliku `.env.local`:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

## Deployment

Aplikację można wdrożyć na platformie [Vercel](https://vercel.com/), która jest natywnym środowiskiem dla Next.js.

## Autor

Projekt został stworzony przez Jana Banczerowskiego.

## Licencja

Ten projekt jest dostępny na licencji MIT.
