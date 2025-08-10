# Настройка Server Actions с Google Apps Script

## ✅ Что уже настроено:

1. **Server Action** - `app/actions.ts`
2. **Обновленная форма** - `components/sections/ContactSection.tsx`
3. **Google Apps Script** - `google-apps-script-server-actions.gs`

## 🚀 Пошаговая настройка:

### Шаг 1: Создание Google Таблицы

1. Перейдите на [sheets.google.com](https://sheets.google.com)
2. Создайте новую таблицу
3. Скопируйте ID таблицы из URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit
   ```

### Шаг 2: Настройка Google Apps Script

1. Перейдите на [script.google.com](https://script.google.com)
2. Создайте новый проект
3. Скопируйте код из `google-apps-script-server-actions.gs`
4. Замените `YOUR_SPREADSHEET_ID_HERE` на ваш ID таблицы
5. Сохраните проект

### Шаг 3: Развертывание Google Apps Script

1. Нажмите "Deploy" → "New deployment"
2. Выберите тип: "Web app"
3. Настройки:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Нажмите "Deploy"
5. Скопируйте URL развертывания

### Шаг 4: Обновление Server Action

1. Откройте `app/actions.ts`
2. Замените `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` на ваш URL
3. Сохраните файл

### Шаг 5: Тестирование

1. Запустите проект: `npm run dev`
2. Откройте форму контактов
3. Заполните и отправьте форму
4. Проверьте Google Таблицу

## 🔧 Преимущества Server Actions:

✅ **Безопасность** - код выполняется на сервере
✅ **Производительность** - оптимизированная обработка
✅ **Надежность** - встроенная обработка ошибок
✅ **SEO** - лучшая индексация
✅ **UX** - плавные переходы с `useTransition`

## 🧪 Отладка:

### Проверка Google Apps Script:
1. Откройте Google Apps Script
2. Перейдите в "Executions"
3. Просмотрите логи выполнения

### Проверка Server Action:
1. Откройте консоль браузера
2. Проверьте Network tab
3. Просмотрите ответы сервера

## 📝 Структура данных:

```typescript
{
  firstName: string,
  lastName: string,
  mobile: string,
  email: string,
  role: 'A parent' | 'A supplier' | 'A candidate' | 'Press and B2B partner',
  comment?: string,
  agreement: boolean
}
```

## 🎯 Результат:

После настройки форма будет:
- Отправлять данные в Google Таблицу
- Показывать статус отправки
- Обрабатывать ошибки
- Работать без CORS проблем
