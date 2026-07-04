# Разработка

Проект собирается как статический сайт на Docusaurus. Материалы пишутся в
Markdown/MDX, поэтому в главы можно добавлять формулы, диаграммы, код и
интерактивные React-компоненты.

## Технологии

- Docusaurus 3
- MDX
- TypeScript
- React
- KaTeX для формул
- Mermaid для диаграмм
- pnpm для управления зависимостями

## Требования

- Node.js >= 20
- pnpm 11

На Arch Linux pnpm можно поставить так:

```bash
sudo pacman -S pnpm
```

## Локальная разработка

```bash
pnpm install
pnpm start
```

По умолчанию сайт откроется на `http://localhost:3000/recsys-handbook/`.

## Проверки

```bash
pnpm typecheck
pnpm build
```

Или одной командой:

```bash
pnpm check
```

## Структура

- `docs/` - главы учебника и проектная документация
- `src/pages/` - страницы вне документации, включая главную
- `src/css/` - глобальные стили сайта
- `static/` - статические ассеты
- `notebooks/` - черновики и вычислительные материалы
- `references/` - заметки по статьям, книгам и датасетам

Поиск по сайту пока не включен. Его стоит выбрать отдельным решением: Algolia
DocSearch, Pagefind или другой локальный индекс.

## Полезные команды

```bash
pnpm format
pnpm clear
pnpm serve
```

`pnpm build` генерирует статический сайт в директорию `build/`.
