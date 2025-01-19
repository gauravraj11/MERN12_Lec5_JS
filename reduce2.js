const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},
    {firstName:"Ronald1",lastName:"Mathew1",age:26},
    {firstName:"sam1",lastName:"lewis1",age:50}  
  ];
  //using reduce array method
  const output=users.reduce(function(acc,curr){
      if(acc[curr.age])
      //if present in array object
      {
          acc[curr.age]++;            
      }else{
      //if not present in array object
        acc[curr.age]=1;      
      }
      return acc;
  },{})
  console.log(output);



  const acc ={
   "26" : 2,
   "75" :1,
   "50": 1

  }

  acc[23] = 1