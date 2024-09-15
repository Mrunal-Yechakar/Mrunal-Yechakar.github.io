import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin


url = 'https://www.mypoojabox.in/'  
folder = 'downloaded_images'  


if not os.path.exists(folder):
    os.makedirs(folder)


response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all image tags
img_tags = soup.find_all('img')

# Download all images
for img in img_tags:
    img_url = img.get('src')
    img_url = urljoin(url, img_url)  # Construct full URL if it's relative
    img_name = os.path.join(folder, img_url.split('/')[-1])
    
    with open(img_name, 'wb') as f:
        f.write(requests.get(img_url).content)
        print(f"Downloaded: {img_name}")
