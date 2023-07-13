# Задание 1:

- Добавить фильтры "All", "Done", "Not done". Для создания кнопок фильтрации нужно использовать: 
 ```jsx
<input type="radio" checked={isDone} />
```
- Реализовать возможность удаления таски из списка тасок

# Задание 2:

- Добавить возможность редактировать таску(Подсказка — у таски должна быть кнопка edit, которая меняет текст таски на инпут, который можно редактировать). По возможности попробуйте стилизовать этот инпут
- Добавить возможность добавлять таскам приоритет. Приоритета должно быть три — low, medium, high. Добавьте возможность сортировать по приоритету. Дизайн оставляю на вас:)

Select для задания приоритета можно сделать с помощью тега селект:
```tsx
<select value="1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
</select>
```
