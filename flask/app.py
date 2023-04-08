from flask import Flask, request
from datetime import datetime
import base64
import boto3

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    # Get the image data from the request
    image_data = request.json['image']

    # Decode the base64 image data
    img_bytes = base64.b64decode(image_data.split(',')[1])

    # Create a unique file name for the image
    now = datetime.now()
    filename = f"{now.strftime('%Y%m%d_%H%M%S')}_image.jpg"

    # Save the image to S3
    s3 = boto3.client('s3')
    s3.put_object(Bucket='foodjuggler-raw-1', Key=filename, Body=img_bytes)

    return 'Image uploaded to S3'

if __name__ == '__main__':
    app.run(debug=True)
