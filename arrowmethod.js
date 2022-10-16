//1.Solving problems using array functions on the rest countries' data.

//a.Get all the countries from the Asia continent /region using the Filter function.

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    
    
    var res=JSON.parse(request.response);
   console.log(res);
  
    var a= res.filter((ele)=>ele.region=="Asia");
     var result=a.map((ele)=>ele.name);
     console.log(result);
  
  };



// b.Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    
    
    var res=JSON.parse(request.response);
  
    var a= res.filter((ele)=>ele.population<200000);
     var result=a.map((ele)=>ele.name);
     console.log(result);
  
};


//c.Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    
    
    var res=JSON.parse(request.response);
  
    var a= res.filter((ele)=>ele.population<200000);
     var result=a.map((ele)=>ele.name);
     console.log(result);

    res.forEach(element => { console.log("country name:",element.name,",","country capital:",element.capital,",","country flag:",element.flag);
        
    });
  
};


//d.Print the total population of countries using reduce function

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    
    
    var res=JSON.parse(request.response);

    var final=res.reduce((acc,cv)=>acc+cv.population);
    console.log(final);

};



//e.Print the country which uses US Dollars as currency.


var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    
    
    var res=JSON.parse(request.response);

    

    let answer = res.filter((ele) => (ele.currencies !== undefined))
   
    let a = answer.filter((res) =>  {
    for (let key in res.currencies) {
        if(res.currencies[key].name === "United States dollar"){
      return res;
      }
    }
    })
   
    var result=a.map((ele)=>ele.name);
    console.log(result);
};

    
