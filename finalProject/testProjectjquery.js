$(document).ready(function(){
  $('.slider_inner').slick({
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    nextArrow: '.next',
    prevArrow: '.prev',
  })
})




document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow()
{
	let blank = " ";
	const meal = document.getElementsByTagName("input");
	myText = ("<html>\n<head>\n<title>Meal Planner</title>\n<style>\nbutton {\n  cursor:pointer;\n  margin:auto;\n  position:absolute;\n}\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n      border: 1px solid #dddddd;\n  text-align:left;\n  padding:8px;\n}\n\ntr:nth-child(even) {\n  background-color:#dddddd;\n}\n</style>\n</head>\n<body>\n");
	myText += ("<h1>Meal Planner</h1>\n<p>Hello " + meal[0].value + ", this will be your meal planner for the week!</p>\n<table>\n<tr>\n<th>" + blank + "</th>\n<th>Sunday</th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<\tr>\n<tr>\n<td>Breakfast</td>\n<td>" + meal[2].value + "</td>\n<td>" + meal[7].value + "</td>\n<td>" + meal[12].value + "</td>\n<td>" + meal[17].value + "</td>\n<td>" + meal[22].value + "</td>\n<td>" + meal[27].value + "</td>\n<td>" + meal[32].value + "</td>\n<tr>\n<td>Snack</td>\n<td>" + meal[3].value + "</td>\n<td>" + meal[8].value + "</td>\n<td>" + meal[13].value + "</td>\n<td>" + meal[18].value + "</td>\n<td>" + meal[23].value + "</td>\n<td>" + meal[28].value + "</td>\n<td>" + meal[33].value + "</td>\n<tr>\n<td>Lunch</td>\n<td>" + meal[4].value + "</td>\n<td>" + meal[9].value + "</td>\n<td>" + meal[14].value + "</td>\n<td>" + meal[19].value + "</td>\n<td>" + meal[24].value + "</td>\n<td>" + meal[29].value + "</td>\n<td>" + meal[34].value + "</td>\n<tr>\n<td>Snack</td>\n<td>" + meal[5].value + "</td>\n<td>" + meal[10].value + "</td>\n<td>" + meal[15].value + "</td>\n<td>" + meal[20].value + "</td>\n<td>" + meal[25].value + "</td>\n<td>" + meal[30].value + "</td>\n<td>" + meal[35].value + "</td>\n<tr>\n<td>Dinner</td>\n<td>" + meal[6].value + "</td>\n<td>" + meal[11].value + "</td>\n<td>" + meal[16].value + "</td>\n<td>" + meal[21].value + "</td>\n<td>" + meal[26].value + "</td>\n<td>" + meal[31].value + "</td>\n<td>" + meal[36].value + "</td>\n");
	myText += ("<button id='print'>Print</button>\n<button id='Download'>Download</button>\n</body>\n</html>");

	flyWindow = window.open('about:blank','myPop','width=800,height=400,left=400,top=400');
	flyWindow.document.write(myText);
}