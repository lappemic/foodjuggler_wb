from flask import Flask, request, jsonify
import boto3
import base64

app = Flask(__name__)

# Set up the S3 client
s3 = boto3.client('s3')

@app.route('/', methods=['GET'])
def index():
    return "This is a demo for foodjugglers photo feature"

@app.route('/upload', methods=['POST'])
def upload():
    # Get the image data from the request
    image_data = request.json.get('image')

    # Decode the base64 image data
    image_bytes = base64.b64decode(image_data)

    # Convert the image to a NumPy array
    image_np = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), cv2.IMREAD_COLOR)

    # Upload the image to S3
    bucket_name = 'foodjuggler-raw-1'
    object_key = 'image.jpg'
    s3.put_object(Bucket=bucket_name, Key=object_key, Body=image_bytes)

    # Return a response
    return jsonify({'message': 'Image uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)