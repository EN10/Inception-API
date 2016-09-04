# inception-api
API for Google Tensorflow Inception Model
https://www.tensorflow.org/versions/master/tutorials/image_recognition/index.html

requires tensorflow installed
https://www.tensorflow.org/versions/master/get_started/os_setup.html#pip-installation
sudo apt update
sudo apt install python-pip python-dev
sudo pip install numpy
export TF_BINARY_URL=https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.10.0rc0-cp27-none-linux_x86_64.whl
sudo pip install --upgrade $TF_BINARY_URL

git clone https://github.com/tensorflow/tensorflow.git

npm install express 
(required to run web.js)

image url is a parameter of page url i.e.
https://inception-en10.c9users.io/?q=http://kingofwallpapers.com/images/images-169.jpg

script executes this:
https://github.com/tensorflow/tensorflow/blob/master/tensorflow/models/image/imagenet/classify_image.py