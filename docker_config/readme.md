The readme for the project appears to be from an earlier build? 
**The dockerfile and launch_project.sh script were changed to run what appears to be the correct frontend for the project**

To build this project modify the project.env to fill in the required variables. 

CD into the docker_config folder and use the following docker commands to build and run the image:
docker build -t twitchtube .
docker run -dit -p 5173:5173 twitchtube