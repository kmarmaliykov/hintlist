| Method | Route | Request body | Response | Example URL | Example Response | Example Request Body | Description |
| ------ |:-------:|:-----:|:------:|:------:|:------:|:-----:|:----:|
| GET |  /events/  | - | [{event_1}, ... ] | /events/ | [{event_structure}] | - | Получение 1 страницу списка всех мероприятий |
| POST | /events/ | {event_structure} | {event_structure} | /events/ | {event_structure} | {event_structure} | Добавление нового мероприятия |
| GET | /events/{page} | - | [{event_1},...] | /events/1 | [{event_structure}] | - | Получение n-ной страницы списка всех мероприятий |
| GET | /events/{type}/{page} | - | [{event_1},...] | /events/movies/1 | [{event_structure}] | - | Получение n-ной страницы списка мероприятий одного типа |
| GET | /events/{type}/{name} | - | {event_structure} | /events/movies/need-for-speed | {event_structure} | - | Получение описания одного мероприятия |
| PUT | /events/{type}/{name} | {event_structure} | {event_structure} | /events/movies/need-for-speed | {event_structure} | {event_structure} | Обновить информацию о мероприятии |
| DELETE | /events/{type}/{name} | - | - | /events/movies/need-for-speed | - | - | Удалить мероприятие |
| ? |  |  |  |  |  |  | Кнопка "Хочу попробовать" |
| ? |  | |  |  |  |  | Кнопка "Попробовал" |
| GET |  /places/  | - | [{place_1}, ... ] | /places/ | [{place_structure}] | - | Получение 1 страницу списка всех новых мест |
| POST | /places/ | {place_structure} | {place_structure} | /places/ | {place_structure} | {place_structure} | Добавление нового места |
| GET | /places/{page} | - | [{place_1},...] | /places/1 | [{place_structure}] | - | Получение n-ной страницы списка всех новых места|
| GET | /places/{type}/{page} | - | [{place_1},...] | /places/cafes/1 | [{place_structure}] | - | Получение n-ной страницы списка новых мест одного типа |
| GET | /places/{type}/{name} | - | {place_structure} | /places/cafes/Olivio | {place_structure} | - | Получение описания одного нового места |
| PUT | /places/{type}/{name} | {place_structure} | {place_structure} | /places/cafes/Olivio | {place_structure} | {place_structure} | Обновить информацию о новом месте |
| DELETE | /places/{type}/{name} | - | - | /places/cafes/Olivio | - | - | Удалить Новое место |
| GET | /places/{type}/{page} | - | [{place_1},...] | /places/cafes/1 | [{place_structure}] | - | Получение n-ной страницы списка новых мест одного типа |
| GET | /places/{type}/{name} | - | {place_structure} | /places/cafes/Olivio | {place_structure} | - | Получение описания одного нового места |
| PUT | /places/{type}/{name} | {place_structure} | {place_structure} | /places/cafes/Olivio | {place_structure} | {place_structure} | Обновить информацию о новом месте |
| DELETE | /places/{type}/{name} | - | - | /places/cafes/Olivio | - | - | Удалить Новое место |

