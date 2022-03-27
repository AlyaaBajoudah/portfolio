/*----------Website visitor------------*/

var counterContainer = document.querySelector(".website-counter");
//var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
//resetButton.addEventListener("click", () => {
  //visitCount = 1;
 // localStorage.setItem("page_view", 1);
 // counterContainer.innerHTML = visitCount;
//});


/*----------Skills------------*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'  
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
 el.addEventListener('click',toggleSkills)
})

/*----------- Visula Update -------------*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Courses',54.8],
  ['Conferences',48.6],
  ['Projects',44.4],
  ['Participations',23.9],
  ['Training',14.5]
]);

var options = {
  title:'Progess over the five sections'/*World Wide Wine Production*/
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}

