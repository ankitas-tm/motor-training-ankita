use mydb; 
db; //show the currently db selected
show db; //show all the list of DB present
db.exampleCollection.insert({ "name" : "Max" }); //Insert db; 
db.dropDatabase(); //Drop/remove database
db.exampleCollection.drop(); //drop collection


//insert students data
db.students.insert([{
    "name" : "studen1",
    "rollNo" : "1",
    "age" : "13"
},{
    "name" : "studen2",
    "rollNo" : "2",
    "age" : "12"
}])

//to find all records in file
db.students.find();
//to find single record using unique identifier
db.students.find({rollNo: "1"});
//greater and include value while findind the record
db.students.find({
    "age": {$gte : "15"}
}); //gt, gte, lt, lte, ne

//Query Document - AND OR conditions
db.students.find({
    "firstName" : "Mark", "Age" : "10"
});

db.students.find({
    $or: [{"firstName" : "Mark"},{"Age" : "15"}]
});

//Update
db.students.update(
    {"age" : "13"}, {
        $set: {
            "name" : "student2_updated"
        }
    },
    {multi: true} //for updating multiple entries with same identifier used 
);

db.students.save(
    {"age" : "13"}
); //save data after updating 

db.students.remove(); //remove all documents
db.students.remove({
    "rollNo" : "2"
}); // removed specific element
db.students.remove({
    "rollNo" : "2"
},1) //delete one even if this matches multiple documents/entries

//Projections => means selecting only necessary data rather than selecting whole of the data of a document

db.COLLECTION_NAME.find({}, {key: 1});

db.students.find({}, {"rollNo": 1});

db.students.find({}, {"rollNo": 1, "_id" : 0});// 0 means do not show the field

//using sort , skip, limit
db.students.find({},{"age" : 12}).limit(2); //Add limit 
db.students.find({},{"age" : 12}).skip(2); //skip entry
db.students.find({}, {"age" : 12}).sort({"rollNo": 1})