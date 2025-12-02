# Blog App – Next.js + TypeScript

Frontend aplikacji blogowej zbudowanej w Next.js (Pages Router), obsługującej markdownowe posty, wyróżnione wpisy, dynamiczne routy oraz formularz kontaktowy z API połączonym z MongoDB. Projekt został w pełni przepisany z JavaScript na TypeScript.

---

## Najważniejsze funkcjonalności

### System postów (Markdown + SSG)
- Lista wszystkich postów
- Wyróżnione posty na stronie głównej
- Dynamiczne generowanie stron (`/posts/[slug]`)
- Statyczna generacja (`getStaticProps`, `getStaticPaths`)
- Aktualizacja treści dzięki revalidate (ISR)
- Renderowanie markdowna z:
  - obrazkami
  - nagłówkami
  - blokami kodu (syntax highlighting)

### Integracja z bazą danych
- API route `/api/contact`
- Walidacja danych wejściowych
- Połączenie z MongoDB
- Zapis wiadomości do kolekcji `messages`

### Formularz kontaktowy
- Walidacja pól
- Zgłaszanie błędów
- Informacje o statusie wysyłki (pending / success / error)
- Powiadomienia renderowane przez React Portal

### Custom komponenty
- Layout + MainNavigation
- Notification (portal)
- Hero, FeaturedPosts, PostsGrid
- PostContent (render markdown + obsługa obrazków)

---

## Technologie

- Next.js 13 (Pages Router)
- TypeScript
- React 18
- React Markdown
- Syntax Highlighter
- CSS Modules
- MongoDB (API route)
- Next/Image (optymalizacja obrazów)
- gray-matter (parsowanie frontmatter)

---

## Struktura projektu

Blog-app/
 ├── components/
 │   ├── contact/
 │   ├── home-page/
 │   ├── layout/
 │   ├── posts/
 │   └── ui/
 ├── lib/
 │   └── post-util.ts
 ├── pages/
 │   ├── api/contact.ts
 │   ├── posts/[slug].tsx
 │   ├── posts/index.tsx
 │   ├── _app.tsx
 │   ├── _document.tsx
 │   └── index.tsx
 ├── posts/ (pliki .md)
 ├── public/images/
 ├── styles/globals.css
 └── tsconfig.json

---

## Instalacja

1. Klonuj repozytorium:
   git clone <URL_REPO>
   cd blog-app

2. Instalacja zależności:
   npm install

3. Dodanie zmiennych środowiskowych (`.env.local`):
   MONGODB_URI="TWÓJ_CONNECTION_STRING"

4. Uruchom projekt:
   npm run dev

Aplikacja dostępna pod:
http://localhost:3000

---

## Backend API

Next.js API Routes (wbudowane backendowe funkcje).

Endpointy:
- POST `/api/contact` — zapis wiadomości użytkownika do MongoDB

---

## Decyzje projektowe (skrócone)

- Next.js Pages Router — prostsze SSG/ISR pod bloga
- TypeScript — większa niezawodność i czytelność
- Markdown zamiast CMS — maksymalna wydajność i prostota
- gray-matter — automatyczne parsowanie danych posta
- React Markdown + syntax highlighter — renderowanie treści technicznej
- Portal dla powiadomień — izolacja UI i lepsza semantyka

---

## Autor
Jan Banczerowski

## Licencja
MIT
