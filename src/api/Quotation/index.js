import axios from 'axios';

const GATEWAY_URL = "https://fiuber-gateway.herokuapp.com"

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4MDljZmYxMTZlNWJhNzQwNzQ1YmZlZGE1OGUxNmU4MmYzZmQ4MDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4NzE5MTQzLCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2Njg3MTkxNDMsImV4cCI6MTY2ODcyMjc0MywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GI31wavv-9qQqKZl7Rc3hzUzQHdPgb9j-i9nT55yJG1p_GpRn8elFPSvrxBo05VWp70TIPo8AciUZu6Dom9IJmGuIBl5p7rKE6qz1RbF9VQlyz-aEWd8eM6oy1L6Yg_S_8cHEQG8F6H2BoBbNmkK3Q2qxDMUQJlKV60jWlz9635Xt4dAe_CC01I55PtgggRJpJsii0HmKMLf60HN4LJ0s6ba16WQer2rGFlJzUwjFF3a2W5hkCo7AFqQJk7q1yUIAeyVjFl5nkJMhQ8BEC4W8bxxb2nLnDqjyC9v_CHfCDmr6fKJ29itWMSY9jcuDdCrNhrM0h88r3j3p7w2y16Rzg'


export function getConstants(setConstants) {
    axios.get(GATEWAY_URL + "/admin/constants", {
      headers: {
        'token': token
      }
    }).then(response => {
        setConstants(response.data)
    });
}

export function sendConstants(constants, token) {
    axios.put(GATEWAY_URL + "/admin/constants", {
      headers: {
        'token': token
      },
      json: {
        "price_meter": constants.price_meter,
        "price_minute": constants.price_minute,
        "price_vip": constants.price_vip,
        "plus_night": constants.plus_night,
        "seniority_driver": constants.seniority_driver,
        "daily_driver": constants.daily_driver,
        "monthly_driver": constants.monthly_driver,
        "seniority_passenger": constants.seniority_passenger,
        "daily_passenger": constants.daily_passenger,
        "monthly_passenger": constants.monthly_passenger,
        "max_discount_passenger": constants.max_discount_passenger,
        "max_increase_driver": constants.max_increase_driver
      }
    })
}