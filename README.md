# ViksanaSite
> Where Curiosity meets Creation

This repository is dedicated to [Vikasana](https://www.linkedin.com/company/vikasana-research/) members website.

## Backend DEMO

### First make a demo user using the add user command from below and test login

### TEST CREATE PROJECT

```
curl -X POST -H "Content-Type: application/json" \
-b cookie.txt \
-d '{"project_data_name": "team_project2"}' \
http://127.0.0.1:5000/dashboard/createProject
```

### TEST LOGOUT

```
curl -X POST -b cookie.txt \
http://127.0.0.1:5000/auth/logout
```

### TEST LOGIN

```
curl -X POST -H "Content-Type: application/json" \
-d '{"username": "test", "password": "mypassword123"}' \
-c cookie.txt \
http://127.0.0.1:5000/auth/login
```

### TEST GET PROJECTS

```
curl -X GET \
-b cookie.txt \
http://127.0.0.1:5000/dashboard/getpro
```

### ADD USER

```
curl -X POST -H "Content-Type: application/json" \
-d '{"username": "testuser", "email": "test2@example.com", "password": "password123", "isAdmin": true, "score": 100}' \
http://127.0.0.1:5000/auth/add_user
```

### ADD A MEMBER TO PROJECT (ONLY ADMIN CAN)

```
 curl -X POST http://127.0.0.1:5000/dashboard/addMemberPro \
     -H "Content-Type: application/json" \
     -b cookie.txt \
     -d '{
          "project_data_name": "team_project69",
          "username": "testuser69",
          "isLeader": false,
          "role": "Developer-2"
     }'
```
     
### POST AN UPDATE FOR PROJECT (ONLY MEMBERS OF PROJECT)    
``` 
      curl -X POST http://127.0.0.1:5000/dashboard/postUpdate \
     -H "Content-Type: application/json" \
     -b cookie.txt \
     -d '{
          "project_data_name": "team_project421",
          "update": "nice_ig",
          "percentage": 10
     }'
```
     
### APPROVE THE UPDATE AND INCREMENT PROJECT COMPLETION PERCENTAGE (ONLY PROJECT LEADS AND ADMINS)
```
        curl -X UPDATE http://127.0.0.1:5000/dashboard/approveUpdate \
     -H "Content-Type: application/json" \
     -b cookie.txt \
     -d '{
          "project_data_name": "team_project421",
          "username":"testuser69"
     }'
```

curl -X GET -H "Content-Type: application/json" \
-b cookie.txt \
-d '{"project_data_name": "team_project421"}' \
http://127.0.0.1:5000/dashboard/getupdates

## 🤝 Contributing
We appreciate any feedback or code reviews! Feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Submit a pull request

### We'd appreciate any feedback or code reviews you might have!

## REQUIREMENTS.TXT FOR BACKEND

```
asttokens==2.4.1
bcrypt==4.2.1
blinker==1.9.0
click==8.1.7
comm==0.2.2
contourpy==1.3.1
cycler==0.12.1
DateTime==5.5
debugpy==1.8.9
decorator==5.1.1
executing==2.1.0
Flask==3.1.0
Flask-Cors==5.0.0
Flask-JWT-Extended==4.7.1
Flask-SeaSurf==2.0.0
Flask-SQLAlchemy==3.1.1
Flask-WTF==1.2.2
fonttools==4.55.0
greenlet==3.1.1
ipykernel==6.29.5
ipython==8.29.0
itsdangerous==2.2.0
jedi==0.19.2
Jinja2==3.1.4
jupyter_client==8.6.3
jupyter_core==5.7.2
kiwisolver==1.4.7
MarkupSafe==3.0.2
matplotlib==3.9.2
matplotlib-inline==0.1.7
nest-asyncio==1.6.0
numpy==2.1.3
packaging==24.2
parso==0.8.4
pexpect==4.9.0
pillow==11.0.0
platformdirs==4.3.6
prompt_toolkit==3.0.48
psutil==6.1.0
ptyprocess==0.7.0
pure_eval==0.2.3
Pygments==2.18.0
PyJWT==2.10.1
pyparsing==3.2.0
python-dateutil==2.9.0.post0
python-dotenv==1.0.1
pytz==2024.2
pyzmq==26.2.0
setuptools==75.6.0
six==1.16.0
SQLAlchemy==2.0.36
stack-data==0.6.3
tornado==6.4.2
traitlets==5.14.3
typing_extensions==4.12.2
wcwidth==0.2.13
Werkzeug==3.1.3
WTForms==3.2.1
zope.interface==7.2

```
