## Базовый eslint конфиг для фронтенд проектов Инфинитум

### Установка

Чтобы установить на проект, нужно:
1. Удалить все пакеты, связанные с eslint на проекте
2. Зайти в .eslintrc.json проекта и отредактировать так:
```
module.exports = {
  plugins: ['react'],
  extends: ['@infinitum-ui/eslint-config'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  }
}
```
3. Установить пакет используя имя `@infinitum-ui/eslint-config`. 
3.1. Для установки пакета, используя файл, выполнить команды:
``` 
npm i
npm run build 
npm pack
```
Полученный файл указать в списке зависимостей в package.json:
```
{
  "dependencies: {
    "@infinitum-ui/eslint-config":"file:infinitum-ui-eslint-config-1.0.0.tgz"
  }
}
```