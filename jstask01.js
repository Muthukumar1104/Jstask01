function fn(){
const student = {
      "profile": {
            "name":"",
            "fathername":"",
            "address":"",
            "email":"",
            "phone":"",
            "college":""},
      "UG":{
       "Iyear":{
            "Physics":"",
            "Chemistry":"",
            "Mathematics":""
      },
       "IIyear":{
            "Thermodynamics":"",
            "ThermalEngineering":"",
            "English":""
      },
       "IIIyear":{
            "Machinary":"",
            "Automobile":"",
            "Ethics":""
      }
            },
      "PG":{
       "Iyear":{
            "Physics":"",
            "Chemistry":"",
            "Mathematics":""
      },
       "IIyear":{
            "Thermodynamics":"",
            "Thermal Engineering":"",
            "English":""
      },
       "IIIyear":{
            "Machinary":"",
            "Automobile":"",
            "Ethics":""
      }
            },
}

student.profile.name = document.getElementById('a').value;
student.profile.fathername = document.getElementById('b').value;
student.profile.address = document.getElementById('c').value;
student.profile.email = document.getElementById('d').value;
student.profile.phone = document.getElementById('e').value;
student.profile.college = document.getElementById('f').value;
student.UG.Iyear.physics = document.getElementById('g').value;
student.UG.Iyear.chemistry = document.getElementById('h').value;
student.UG.Iyear.Mathematics = document.getElementById('i').value;
student.UG.IIyear.Thermodynamics = document.getElementById('j').value;
student.UG.IIyear.ThermalEngineering = document.getElementById('k').value;
student.UG.IIyear.English = document.getElementById('l').value;
student.UG.IIIyear.Machinary = document.getElementById('m').value;
student.UG.IIIyear.Automobile = document.getElementById('n').value;
student.UG.IIIyear.Ethics = document.getElementById('o').value;
student.PG.Iyear.physics = document.getElementById('p').value;
student.PG.Iyear.chemistry = document.getElementById('q').value;
student.PG.Iyear.Mathematics = document.getElementById('r').value;
student.PG.IIyear.Thermodynamics = document.getElementById('s').value;
student.PG.IIyear.ThermalEngineering = document.getElementById('t').value;
student.PG.IIyear.English = document.getElementById('u').value;
student.PG.IIIyear.Machinary = document.getElementById('v').value;
student.PG.IIIyear.Automobile = document.getElementById('w').value;
student.PG.IIIyear.Ethics = document.getElementById('x').value;
window.alert("Your form is submitted successfully");

console.log(student);
}