## Description

* Elasticsearch JS create and search task

## Warning

* The task mention the use of ElasticSearch JS by setting the ELS config to 
```yml
http.cors.enabled: true
```
This is clearly not a recomanded way to use ELS, indeed sending http requests directly from a browser is completely unsecure. 

## Runnnig the ElasticSearch Docker container:
* Install docker and docker-compose.
* Creating the ElasticSearch container 
```bash 
docker-compose up
``` 
 
* Runing the container 
```bash 
docker-compose start
```

## Runnnig the webapp
```bash
cd webapp
npm install
```
Build & Run the webapp:
```bush
npm start
```
Open in the browser : [http://localhost:4200/](http://localhost:4200/)
