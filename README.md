# Inception Web API

### Web API for Google Tensorflow Inception Model

* Based on [Quick and Simple Image Recognition](https://github.com/EN10/SimpleInception)  
* More Info on [Inception](https://github.com/EN10/KerasInception)

Install
-

    sudo pip install -U pip
    sudo pip install tensorflow

**Download Classifier Program:**    

    wget https://raw.githubusercontent.com/tensorflow/models/master/tutorials/image/imagenet/classify_image.py

Run Model
-

    python classify_image.py --image_file image.jpg

Make API
-
**Classify images from URL Node API:**   

Example:
* https://inception-eniof.cs50.io/?q=http://saxony-blue.com/data/out/86/5918348-image.jpg   

image url is a parameter of page url   

**Download Webserver App:** 

    wget https://raw.githubusercontent.com/EN10/InceptionAPI/master/web.js

**Install Node:**

    sudo apt install node

**Install Webserver:**  

    npm install express     

**Run Web App:**    

    node web.js

web.js: downloads image using curl then calls classify_image.py on it

### C9 Software Versions:

| Software | Version |
| ----- | ----- |
| Ubuntu | 14.04.3 |
| Python | 2.7.6 |
| pip | 9.0.1 |
| tensorflow | 1.4.1 |
| node | 4.6.1 |
| express | 2.15.9 |