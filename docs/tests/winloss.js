const axios = require('axios');

const ROOT_URL = 'http://localhost:8080/';


var results = [
  {
    "id": 1,
    "createdAt": "2017-01-06T20:39:38.000Z",
    "updatedAt": "2017-01-06T20:39:38.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 2,
    "createdAt": "2017-01-06T20:39:38.000Z",
    "updatedAt": "2017-01-06T20:39:38.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 3,
    "createdAt": "2017-01-06T20:39:38.000Z",
    "updatedAt": "2017-01-06T20:39:38.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 4,
    "createdAt": "2017-01-06T20:39:38.000Z",
    "updatedAt": "2017-01-06T20:39:38.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 5,
    "createdAt": "2017-01-06T20:39:38.000Z",
    "updatedAt": "2017-01-06T20:39:38.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 6,
    "createdAt": "2017-01-06T20:39:38.000Z",
    "updatedAt": "2017-01-06T20:39:38.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 7,
    "createdAt": "2017-01-06T20:39:47.000Z",
    "updatedAt": "2017-01-06T20:39:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 8,
    "createdAt": "2017-01-06T20:39:47.000Z",
    "updatedAt": "2017-01-06T20:39:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 9,
    "createdAt": "2017-01-06T20:39:47.000Z",
    "updatedAt": "2017-01-06T20:39:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 10,
    "createdAt": "2017-01-06T20:39:47.000Z",
    "updatedAt": "2017-01-06T20:39:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 11,
    "createdAt": "2017-01-06T20:39:47.000Z",
    "updatedAt": "2017-01-06T20:39:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 12,
    "createdAt": "2017-01-06T20:39:47.000Z",
    "updatedAt": "2017-01-06T20:39:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 13,
    "createdAt": "2017-01-06T20:40:02.000Z",
    "updatedAt": "2017-01-06T20:40:02.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 14,
    "createdAt": "2017-01-06T20:40:02.000Z",
    "updatedAt": "2017-01-06T20:40:02.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 15,
    "createdAt": "2017-01-06T20:40:02.000Z",
    "updatedAt": "2017-01-06T20:40:02.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 16,
    "createdAt": "2017-01-06T20:40:02.000Z",
    "updatedAt": "2017-01-06T20:40:02.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 17,
    "createdAt": "2017-01-06T20:40:02.000Z",
    "updatedAt": "2017-01-06T20:40:02.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 18,
    "createdAt": "2017-01-06T20:40:02.000Z",
    "updatedAt": "2017-01-06T20:40:02.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 19,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 20,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 21,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 22,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 23,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 24,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 25,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 26,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 27,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 28,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 29,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 30,
    "createdAt": "2017-01-06T20:40:04.000Z",
    "updatedAt": "2017-01-06T20:40:04.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 31,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 32,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 33,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 34,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 35,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 36,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 37,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 38,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 39,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 40,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 41,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 42,
    "createdAt": "2017-01-06T20:40:05.000Z",
    "updatedAt": "2017-01-06T20:40:05.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 43,
    "createdAt": "2017-01-06T20:40:06.000Z",
    "updatedAt": "2017-01-06T20:40:06.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 44,
    "createdAt": "2017-01-06T20:40:06.000Z",
    "updatedAt": "2017-01-06T20:40:06.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 45,
    "createdAt": "2017-01-06T20:40:06.000Z",
    "updatedAt": "2017-01-06T20:40:06.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 46,
    "createdAt": "2017-01-06T20:40:06.000Z",
    "updatedAt": "2017-01-06T20:40:06.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 47,
    "createdAt": "2017-01-06T20:40:06.000Z",
    "updatedAt": "2017-01-06T20:40:06.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 48,
    "createdAt": "2017-01-06T20:40:06.000Z",
    "updatedAt": "2017-01-06T20:40:06.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 49,
    "createdAt": "2017-01-06T20:40:22.000Z",
    "updatedAt": "2017-01-06T20:40:22.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 50,
    "createdAt": "2017-01-06T20:40:22.000Z",
    "updatedAt": "2017-01-06T20:40:22.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 51,
    "createdAt": "2017-01-06T20:40:22.000Z",
    "updatedAt": "2017-01-06T20:40:22.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 52,
    "createdAt": "2017-01-06T20:40:22.000Z",
    "updatedAt": "2017-01-06T20:40:22.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 53,
    "createdAt": "2017-01-06T20:40:22.000Z",
    "updatedAt": "2017-01-06T20:40:22.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 54,
    "createdAt": "2017-01-06T20:40:22.000Z",
    "updatedAt": "2017-01-06T20:40:22.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 55,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 56,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 57,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 58,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 59,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 60,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 61,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 62,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 63,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 64,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 65,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 66,
    "createdAt": "2017-01-06T20:40:23.000Z",
    "updatedAt": "2017-01-06T20:40:23.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 67,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 68,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 69,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 70,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 71,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 72,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 73,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 74,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 75,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 76,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 77,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 78,
    "createdAt": "2017-01-06T20:40:24.000Z",
    "updatedAt": "2017-01-06T20:40:24.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 79,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 80,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 81,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 82,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 83,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 84,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 85,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 86,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 87,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 88,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 89,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 90,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 91,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 92,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 93,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 94,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 95,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 96,
    "createdAt": "2017-01-06T20:40:25.000Z",
    "updatedAt": "2017-01-06T20:40:25.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 97,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 98,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 99,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 100,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 101,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 102,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 103,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 104,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 105,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 106,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 107,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 108,
    "createdAt": "2017-01-06T20:40:26.000Z",
    "updatedAt": "2017-01-06T20:40:26.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 109,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 110,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 111,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 112,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 113,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 114,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 115,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 116,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 117,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 118,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 119,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 120,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 121,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 122,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 123,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 124,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 125,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 126,
    "createdAt": "2017-01-06T20:40:27.000Z",
    "updatedAt": "2017-01-06T20:40:27.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 127,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 128,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 129,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 130,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 131,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 132,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 133,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 134,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 135,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 136,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 137,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 138,
    "createdAt": "2017-01-06T20:40:28.000Z",
    "updatedAt": "2017-01-06T20:40:28.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 139,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 140,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 141,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 142,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 143,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 144,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 145,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 146,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 147,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 148,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 149,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 150,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 151,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 152,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 153,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 154,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 155,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 156,
    "createdAt": "2017-01-06T20:40:29.000Z",
    "updatedAt": "2017-01-06T20:40:29.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 157,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 158,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 159,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 160,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 161,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 162,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 163,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 164,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 165,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 166,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 167,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 168,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 169,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 170,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 171,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 172,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 173,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 174,
    "createdAt": "2017-01-06T20:40:30.000Z",
    "updatedAt": "2017-01-06T20:40:30.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 175,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 176,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 177,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 178,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 179,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 180,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 181,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 182,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 183,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 184,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 185,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 186,
    "createdAt": "2017-01-06T20:40:31.000Z",
    "updatedAt": "2017-01-06T20:40:31.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 187,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 188,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 189,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 190,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 191,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 192,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 193,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 194,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 195,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 196,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 197,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 198,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 199,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 200,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 201,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 202,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 203,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 204,
    "createdAt": "2017-01-06T20:40:32.000Z",
    "updatedAt": "2017-01-06T20:40:32.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 205,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 206,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 207,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 208,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 209,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 210,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 211,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 212,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 213,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 214,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 215,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 216,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 217,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 218,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 219,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 220,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 221,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 222,
    "createdAt": "2017-01-06T20:40:33.000Z",
    "updatedAt": "2017-01-06T20:40:33.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 223,
    "createdAt": "2017-01-06T20:40:34.000Z",
    "updatedAt": "2017-01-06T20:40:34.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 224,
    "createdAt": "2017-01-06T20:40:34.000Z",
    "updatedAt": "2017-01-06T20:40:34.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 225,
    "createdAt": "2017-01-06T20:40:34.000Z",
    "updatedAt": "2017-01-06T20:40:34.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 226,
    "createdAt": "2017-01-06T20:40:34.000Z",
    "updatedAt": "2017-01-06T20:40:34.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 227,
    "createdAt": "2017-01-06T20:40:34.000Z",
    "updatedAt": "2017-01-06T20:40:34.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 228,
    "createdAt": "2017-01-06T20:40:34.000Z",
    "updatedAt": "2017-01-06T20:40:34.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 229,
    "createdAt": "2017-01-06T20:40:45.000Z",
    "updatedAt": "2017-01-06T20:40:45.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 230,
    "createdAt": "2017-01-06T20:40:45.000Z",
    "updatedAt": "2017-01-06T20:40:45.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 231,
    "createdAt": "2017-01-06T20:40:45.000Z",
    "updatedAt": "2017-01-06T20:40:45.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 232,
    "createdAt": "2017-01-06T20:40:45.000Z",
    "updatedAt": "2017-01-06T20:40:45.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 233,
    "createdAt": "2017-01-06T20:40:45.000Z",
    "updatedAt": "2017-01-06T20:40:45.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 234,
    "createdAt": "2017-01-06T20:40:45.000Z",
    "updatedAt": "2017-01-06T20:40:45.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 235,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 236,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 237,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 238,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 239,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 240,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 241,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 242,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 243,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 244,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 245,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 246,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 247,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 248,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 249,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 250,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 251,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 252,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 253,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 254,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 255,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 256,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 257,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 258,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 259,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 260,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 261,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 262,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 263,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 264,
    "createdAt": "2017-01-06T20:40:46.000Z",
    "updatedAt": "2017-01-06T20:40:46.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 265,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 266,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 267,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 268,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 269,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 270,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 271,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 272,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 273,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 274,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 275,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 276,
    "createdAt": "2017-01-06T20:40:47.000Z",
    "updatedAt": "2017-01-06T20:40:47.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 277,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 278,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 279,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 280,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 281,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 282,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 283,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 284,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 285,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 286,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 287,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 288,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 289,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 290,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 291,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 292,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 293,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 294,
    "createdAt": "2017-01-06T20:40:48.000Z",
    "updatedAt": "2017-01-06T20:40:48.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 295,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 296,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 297,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 298,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 299,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 300,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 301,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 302,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 303,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 304,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 305,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 306,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 307,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 308,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 309,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 310,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 311,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 312,
    "createdAt": "2017-01-06T20:40:49.000Z",
    "updatedAt": "2017-01-06T20:40:49.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 313,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 314,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 315,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 316,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 317,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 318,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 319,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 320,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 321,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 322,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 323,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 324,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 325,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 326,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 327,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 328,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 329,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 330,
    "createdAt": "2017-01-06T20:40:50.000Z",
    "updatedAt": "2017-01-06T20:40:50.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 331,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 332,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 333,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 334,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 335,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 336,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 337,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 338,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 339,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 340,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 341,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 342,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 343,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 344,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 345,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 346,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 347,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 348,
    "createdAt": "2017-01-06T20:40:51.000Z",
    "updatedAt": "2017-01-06T20:40:51.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 349,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 350,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 351,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 352,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 353,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 354,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  },
  {
    "id": 355,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 2
  },
  {
    "id": 356,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 357,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 1,
    "loserId": 3
  },
  {
    "id": 358,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 1
  },
  {
    "id": 359,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 2,
    "loserId": 3
  },
  {
    "id": 360,
    "createdAt": "2017-01-06T20:40:52.000Z",
    "updatedAt": "2017-01-06T20:40:52.000Z",
    "userId": null,
    "promptId": 1,
    "winnerId": 3,
    "loserId": 2
  }
];

function test (){
  results.forEach(result=>{
    axios.post(`${ROOT_URL}api/comparison`, result);
  });
}

module.exports = test;



