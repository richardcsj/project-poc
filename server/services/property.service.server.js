module.exports = function(app){
	owners = [
		{id:"1",firstName:"John",lastName:"Doe",phone:"(123) 456-7891",email:"john@doe.com",role:"owner"},
		{id:"2",firstName:"Richard",lastName:"Chun",phone:"(123) 456-7891",email:"richard@chun.com",role:"owner"},
		{id:"3",firstName:"Josef",lastName:"Foo",phone:"(123) 456-7891",email:"josef@foo.com",role:"owner"},
	]
	properties = [
		{id:"12",type:"appartment",description:"Apartment For Rent Unfurnished Rental Studio, 1 bath",size:950,latitude:40.702029,longitude:-73.989844,available:true,price:2500,valid:true,owner:"1"},
		{id:"23",type:"garage",description:"Garage for rent in San Francisco",size:500,latitude:37.734204,longitude:-122.437434,available:true,price:1100,valid:true,owner:"1"},
		{id:"34",type:"house",description:"House For Rent in San Francisco",size:1500,latitude: 37.736003,longitude:-122.434795,available:true,price:5000,valid:true,owner:"2"},
		{id:"45",type:"appartment",description:"Apartment For Rent in Washington",size:1000,latitude:47.407644,longitude:-118.864689,available:true,price:3000,valid:true,owner:"3"},
		{id:"56",type:"offices",description:"Offices for rent in Washington",size:1200,latitude:47.415544,longitude:-119.169559,available:true,price:4000,valid:true,owner:"3"}
	]

	app.get("/api/property",findAllProperties);
	app.get("/api/property/type/:type",findPropertyByType);
	app.get("/api/property/owner/:owner",findPropertyByOwner);
	app.get("/api/property/:propertyId",findPropertyById);


	function findAllProperties(req,res){
		res.send(properties);
	}

	function findPropertyByType(req,res){
		var type = req.params.type;
		var results = [];
		for(var x = 0 ; x < properties.length; x++){
			if(properties[x].type===type){
				results.push(properties[x]);
			}
		}
		res.send(results);
	}
	function findPropertyByOwner(req,res){
		var ownerName = req.params.owner;
		ownerName = ownerName.toLowerCase(ownerName);
		var results = [];
		for(var x=0;x<owners.length;x++){
			var fullName = owners[x].firstName+" "+owners[x].lastName;
			fullName = fullName.toLowerCase(fullName);
			if(fullName.indexOf(ownerName) !== -1){
				for(var y =0 ; y<properties.length;y++){
					if(properties[y].owner === owners[x].id){
						results.push(properties[y]);
					}
				}
			}

		}
		res.send(results);
	}
	function findPropertyById(req,res){
		var id = req.params.propertyId;
		var property;
		for(var x = 0 ; x< properties.length;x++){
			if(properties[x].id===id){
				property = properties[x];
				property.owner = getOwner(property.owner);
				res.send(property);
				return;
			}
		}
		res.status(404).send("404 Not Found");
	}

	function getOwner(ownerId){
		for(var y =0 ; y<owners.length;y++){
			if(owners[y].id === ownerId){
					return owners[y];
				}
			}
	}
}