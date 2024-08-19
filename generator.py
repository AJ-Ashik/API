import os
import requests

def download_m3u(playlist_url):
    response = requests.get(playlist_url)
    
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to download the playlist. Status code: {response.status_code}")
        return None

def create_m3u_file(m3u_data, output_file):
    with open(output_file, "w") as file:
        file.write(m3u_data)
    print(f"New M3U playlist created: {output_file}")

def generate_m3u_playlist():
    playlist_url = os.getenv("PLAYLIST_URL")  # Getting the URL from GitHub Secrets
    output_file = os.getenv("OUTPUT_FILE")    # Getting the output file name from Secrets
    
    if not playlist_url or not output_file:
        print("Missing playlist URL or output file name!")
        return
    
    m3u_data = download_m3u(playlist_url)
    
    if m3u_data:
        create_m3u_file(m3u_data, output_file)

# Run the function
generate_m3u_playlist()
