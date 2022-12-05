import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4MDljZmYxMTZlNWJhNzQwNzQ1YmZlZGE1OGUxNmU4MmYzZmQ4MDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4NzE5MTQzLCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2Njg3MTkxNDMsImV4cCI6MTY2ODcyMjc0MywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GI31wavv-9qQqKZl7Rc3hzUzQHdPgb9j-i9nT55yJG1p_GpRn8elFPSvrxBo05VWp70TIPo8AciUZu6Dom9IJmGuIBl5p7rKE6qz1RbF9VQlyz-aEWd8eM6oy1L6Yg_S_8cHEQG8F6H2BoBbNmkK3Q2qxDMUQJlKV60jWlz9635Xt4dAe_CC01I55PtgggRJpJsii0HmKMLf60HN4LJ0s6ba16WQer2rGFlJzUwjFF3a2W5hkCo7AFqQJk7q1yUIAeyVjFl5nkJMhQ8BEC4W8bxxb2nLnDqjyC9v_CHfCDmr6fKJ29itWMSY9jcuDdCrNhrM0h88r3j3p7w2y16Rzg'


export function getConstants(form, accessToken) {
  axios.get(GATEWAY_URL + "/admin/constants", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
      form.setFieldsValue(response.data)
  });
}

export function sendConstants(values, accessToken) {
  axios.put(GATEWAY_URL + "/admin/constants", 
    {
    "price_meter": values.price_meter,
    "price_minute": values.price_minute,
    "price_vip": values.price_vip,
    "plus_night": values.plus_night,
    "seniority_driver": values.seniority_driver,
    "daily_driver": values.daily_driver,
    "monthly_driver": values.monthly_driver,
    "seniority_passenger": values.seniority_passenger,
    "daily_passenger": values.daily_passenger,
    "monthly_passenger": values.monthly_passenger,
    "max_discount_passenger": values.max_discount_passenger,
    "max_increase_driver": values.max_increase_driver
    }, {
    headers: {
      'token': accessToken
    }
  })
}