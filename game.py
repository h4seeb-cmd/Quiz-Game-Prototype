import requests

url = "https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia"

headers = {
	"X-RapidAPI-Key": "0588371053msha6940727d7c83aap107c98jsn19374300bf1d",
	"X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)