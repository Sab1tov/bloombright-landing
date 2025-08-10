# Bloom Bright Nursery - Landing Page

Современный лендинг для детского сада Bloom Bright Nursery с интеграцией Google Таблиц для сбора заявок.

## 🚀 Быстрый старт

1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000)

## 📋 Настройка интеграции с Google Таблицами

### Шаг 1: Создание Google Таблицы
1. Перейдите на [Google Sheets](https://sheets.google.com)
2. Создайте новую таблицу
3. Скопируйте ID таблицы из URL (между `/d/` и `/edit`)
4. Создайте лист с названием "Form Responses"

### Шаг 2: Создание Google Apps Script
1. Перейдите на [Google Apps Script](https://script.google.com)
2. Создайте новый проект
3. Скопируйте код из файла `google-apps-script.gs`
4. Замените `YOUR_SPREADSHEET_ID_HERE` на ID вашей таблицы
5. Сохраните проект (Ctrl+S)
6. Нажмите "Deploy" → "New deployment"
7. Выберите тип "Web app"
8. Установите:
   - Execute as: "Me"
   - Who has access: "Anyone"
9. Нажмите "Deploy"
10. Скопируйте URL веб-приложения

### Шаг 3: Обновление кода
В файле `lib/form-submission.ts` замените:
```typescript
const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
```
на URL вашего веб-приложения.

## 🛠 Технологии

- **Next.js 13** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **React Hook Form** - управление формами
- **Zod** - валидация
- **Google Apps Script** - интеграция с таблицами

## 📁 Структура проекта

```
├── app/                    # Next.js App Router
├── components/             # React компоненты
│   ├── layout/            # Навигация и футер
│   ├── sections/          # Секции страницы
│   └── ui/               # UI компоненты
├── lib/                   # Утилиты
├── public/               # Статические файлы
└── google-apps-script.gs # Google Apps Script
```

## 🎨 Особенности

- ✅ Адаптивный дизайн
- ✅ Форма с валидацией
- ✅ Интеграция с Google Таблицами
- ✅ Карусель с автопрокруткой
- ✅ Интерактивная карта
- ✅ SEO оптимизация

## 📊 Структура данных в таблице

| Timestamp | First Name | Last Name | Mobile | Email | Role | Comment | Agreement |
|-----------|------------|-----------|--------|-------|------|---------|-----------|
| 2024-01-01T10:00:00Z | John | Doe | +971501234567 | john@example.com | A parent | Hello | Yes |

## 🔧 Команды

```bash
npm run dev      # Запуск в режиме разработки
npm run build    # Сборка для продакшена
npm run start    # Запуск продакшен версии
npm run lint     # Проверка кода
```

## 🚨 Устранение неполадок

1. **CORS ошибки**: Проверьте настройки доступа в Google Apps Script
2. **Данные не сохраняются**: Убедитесь в правильности ID таблицы
3. **Ошибки валидации**: Проверьте формат данных в форме

## 📝 Лицензия

MIT License
