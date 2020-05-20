# Ortak 


### API URL : [https://ortakapp.herokuapp.com/](https://ortakapp.herokuapp.com/) 



## USERS


### GET /users

  

-   Bütün kullanıcıları getirir.
    

  

Beklenen veri:

    {}

Gelecek ornek veri:

  

    {    
	    "users": [	    
		    {	    
			    "groups": [			    
				    "5e7f3d600a34b40575879b14"			    
			    ],	    
			    "_id": "5e7f41c1ca515805bcdaf7e0",	    
			    "name": "Bilal",	    
			    "email": "daradaradar@gmail.com",	    
			    "password": "b3dadc98be9055b708436c86a0e9d6da",	    
			    "userName": "Uluborlu Vampiri",	    
			    "__v": 0,	    
			    "surname": "Kocak"
		    }	    
	    ]    
    }

  

### GET /users/:id

  

-   Id si verilen tek bir user getirir
    

  

Beklenen veri:

  

    {}

  

Gelecek ornek veri:
   

     {    
        	"groups": [    
        		"5e7f3d600a34b40575879b14"    
        	],   
        	"_id": "5e7f41c1ca515805bcdaf7e0",    
        	"name": "Bilal",  
        	"email": "daradaradar@gmail.com",    
        	"password": "b3dadc98be9055b708436c86a0e9d6da",   
        	"userName": "Uluborlu Vampiri",    
        	"__v": 0,    
        	"surname": "Kocak"    
        }

  

### POST /users/create

  

-   User olusturmak icin
    

  

Beklenen veri:

  

    {    
	    name: String,	    
	    surname: String,	    
	    email: String,	    
	    password: String,
	    userName: String   
    }

  

Gelecek ornek veri:

  

    {
    
    	"groups": [  
	    	"5e7f3d600a34b40575879b14"  
    	],   
    	"_id": "5e7f41c1ca515805bcdaf7e0",    
    	"name": "Bilal",    
    	"email": "[daradaradar@gmail.com]",
    	"password": "b3dadc98be9055b708436c86a0e9d6da",
    	"userName": "Uluborlu Vampiri",   
    	"__v": 0,    
    	"surname": "Kocak"   
    }

  

### DELETE /users/delete/:id
  
-   Id si verilen useri siler
    
  
Beklenen veri:
  
    {}
  
Gelecek ornek veri:
  

    {
	    "res": "Deleted",
	    "_id": "b3dadc98be9055b708436c86a0e9d6da"
    }
  

### PUT /users/update

  

-   Bilgileri girilen user’i günceller.
    
-   Hepsi girilmek zorunda.
    

  

Beklenen veri:

  

    {
	    name: String,   
	    surname: String,   
	    email: String,    
	    userName: String,    
	    userId: String    
    }

  

Gelecek ornek veri:

  

    {
    	"groups": [
    		"5e7f3d600a34b40575879b14"
    	],
    	"_id": "5e7f41c1ca515805bcdaf7e0",
    	"name": "Bilal",
    	"email": "daradaradar@gmail.com",
    	"password": "b3dadc98be9055b708436c86a0e9d6da",
    	"userName": "Uluborlu Vampiri",
    	"__v": 0,
    	"surname": "Kocak"
    }

  

### PUT /users/join

  

-   User’i group’a ekler
    

  

Beklenen veri:

  

    {
	    userId: String,	    
	    groupId: String   
    }

  

Gelecek ornek veri:

  

    {    
	    res: "Joined user to group"
    }

  

### PUT /users/update/avatar

  

-   Bilgileri girilen user’in avatarını günceller
    
-   Hepsi girilmek zorunda.
    

Beklenen veri:


    {
    	avatarId: String,
    	userId: String
    }

  

Gelecek ornek veri:

  

    {
    	"error": "Avatar updated",   
    	"user": {   
	    	"groups": [   
	    		"5eb010ef56fd6f00177d1f82"   
	    	],  
	    	"_id": "5eafe4f5c052a20017eda076",   
	    	"name": "omom",   
	    	"surname": "omer",  
	    	"email": "omom@omom.com",  
	    	"password": "defac44447b57f152d14f30cea7a73cb",   
	    	"userName": "omom",  
	    	"__v": 0,  
	    	"avatarId": "1" 
	    }  
    }

  

  

###  PUT /users/leave

  

-   User’i group'dan siler
    

  

Beklenen veri:

  

    {
	    userId: String,    
	    groupId: String    
    }

  

Gelecek ornek veri:

  

    {
    	"res": "Leaver user from group"
    }

  

### POST /users/login

  

-   Login
    
-   userName ya da email kullanılabilir.
    

  

Beklenen veri:

  

    {
	    userName: String,
	    password: String
    }

  

Ya da

  

    {
    	userName: String,
    	password: String
    }

  

Gelecek ornek veri:

  

    {
    	result: "Valid user",
    	_id: "5e7f41c1ca515805bcdaf7e0"
    }


## GROUPS

  

### GET /groups

  

-   Butun groupları getirir
    

  

Beklenen veri:

  

    {}

  

Gelecek ornek veri:

  

    {
    	"groups": [
    		{
	    		"users": [
	    			"5e7f43b987f87805f283c15c"
	    		],
		    	"payments": [
		    		“5eac348298c292098e406fe6"
		    	],
		    	"_id": "5e7f3d600a34b40575879b14",
		    	"name": "deneme2",
		    	"__v": 0
	    	}
    	]
    }

  

### GET /groups/:id
  
-   Id'si verilen tek bir group'u getirir.
    
Beklenen veri:  

    {}
  
Gelecek ornek veri:

  

    {   
	    "users": [	    
		    "5e7f43b987f87805f283c15c"	    
	    ],	    
	    "payments": [
			"5e7f43b9812312412342833bh4"
		],	    
	    "_id": "5e7f3d600a34b40575879b14",	    
	    "name": "deneme2",	    
	    "__v": 0   
    }

  

### POST /groups/create
  
-   Group oluşturmak için.
      
Beklenen veri:
  

    {
    	name: String
    }

  

Gelecek örnek veri:

  

    {    
	    "users": [],    
	    "payments": [],    
	    "_id": "5eac5ee45c05c9102f631f18",    
	    "name": "ornek grup",    
	    "__v": 0
    }

  

### DELETE /groups/delete/:id

  

-   Id’si verilen group’u siler
    

  

Beklenen veri:

  

    {}

  

Gelecek ornek veri:

  

    {
	    res: "Deleted",
	    _id: "5eac5ee45c05c9102f631f18"    
    }


## PAYMENTS

  

### POST /payments/create

  

-   Payment olusturmak icin
    
-   User ve group fieldlari id olarak girilmesi gerekiyor.
    
-   Date icin format YYYY-AA-GG seklinde olmalı
    

  

Beklenen veri:

    {
    		"name": String,
    		"user”:String,
    		"description": String,
    		"charge": Number,
    		"status”: Boolean,
    		"group": String,
    		“date”: Date
    }
  
Gelecek ornek veri:
  

    {
    	"_id": "5eac4d845c05c9102f631f17",
    	"name": "Elektrik faturasi",
    	"user": "5e7f41c1ca515805bcdaf7e0",
    	"description": “Ocak Ayi",
    	"charge": 213.5,
    	"status": true,
    	"group": "5eac4d0237f79c00173e0bc0”,
    	“date”: “2002-10-06"
    	"__v": 0
    }   

### DELETE /payments/delete/:id
  
-   Id si verilen paymenti siler    
  
Beklenen veri:  

    {}
  
Gelecek ornek veri:
  
    {  
	    "res": "Deleted",    
	    "_id": "b3dadc98be9055b708436c86a0e9d6da"    
    }

  

### PUT /payments/update/status
  
-   Idsi ve statusü verilen paymenti günceller.
    
-   Hepsi girilmek zorunda.
      
Beklenen veri:

    {
	    "paymentId”:String,    
	    "status": Boolean    
    }
    
Gelecek ornek veri:  

    {	
    	“result": "User updated",
    	"payment": {
    		"_id": "5eb0067ec052a20017eda07d",
    		"name": "String",
    		"user": "5eafe4f5c052a20017eda076",
    		"description": "String",
    		"charge": 150.2,
    		"status": true,
    		"group": "5eafe56ec052a20017eda077",
    		"date": "2012-12-11T22:00:00.000Z",
    		"__v": 0
    	}
    }


### GET /payments
-   Butun paymentleri getirir.
 
Beklenen veri:

  

    {}

Gelecek ornek veri:


    [    
	    {	    
	    	"_id": "5eb00610db2ac71ab1277cd5",	    
	    	"name": "Elektrik faturasi2",    
	    	"user": {    
	    		"avatarId": "1",	    
	    		"groups": [	    
	    			"5eb010ef56fd6f00177d1f82"	    
	    		],	    
	    		"_id": "5eafe4f5c052a20017eda076",	    
	    		"name": "omom",	    
	    		"surname": "omer",	    
	    		"email": "omom@omom.com",	    
	    		"password": "defac44447b57f152d14f30cea7a73cb",	    
	    		"userName": "omom",	    
	    		"__v": 0	    
	    	},	    
	    	"description": "baba odedi2",    
	    	"charge": 213.5,    
	    	"status": true,   
	    	"group": "5eafe56ec052a20017eda077",    
	    	"date": "2012-12-11T22:00:00.000Z",	    
	    	"__v": 0    
    	}   
    ]

  

### GET /payments/:id  

-   Id'si verilen tek bir payment'i getirir
    

  

Beklenen veri:

  

    {}

  

Gelecek ornek veri:

  

    {
    	"_id": "5eb00610db2ac71ab1277cd5",
    	"name": "Elektrik faturasi2",
    	"user": {
	    	"avatarId": "1",
	    	"groups": [
	    		"5eb010ef56fd6f00177d1f82"
	    	],
	    	"_id": "5eafe4f5c052a20017eda076",
	    	"name": "omom",
	    	"surname": "omer",
	    	"email": "omom@omom.com",
	    	"password": "defac44447b57f152d14f30cea7a73cb",
	    	"userName": "omom",
	    	"__v": 0
	    },
	    "description": "baba odedi2",   
	    "charge": 213.5,    
	    "status": true,    
	    "group": "5eafe56ec052a20017eda077",    
	    "date": "2012-12-11T22:00:00.000Z",    
	    "__v": 0    
    }





