/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

	var changeRating1 = document.getElementById("rating1");
changeRating1.innerHTML = "Rating: 5 Stars";



//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/


var changePrice2 = document.getElementById("price2");
changePrice2.innerHTML = "Price: $$$$";

var changeAddy2 = document.getElementById("addy2");
changeAddy2.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/


var addHours3 = document.createElement("div");
 	addHours3.id = "hours3";
 	addHours3.innerHTML = "Hours: 6pm - 12am Sun - Sat";
	text3.appendChild(addHours3);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var addPrice4 = document.createElement("div");
	addPrice4.id = "price4";
	addPrice4.innerHTML = "Price: $$$";
	text4.appendChild(addPrice4);


/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var addAddy4 = document.createElement("div");
	addAddy4.id = "addy4";
	addAddy4.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
	text4.appendChild(addAddy4);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var addHours4 = document.createElement("div");
	addHours4.id = "hours4";
	addHours4.innerHTML = "Hours: 9am - 10pm Sun - Sat";
	text4.appendChild(addHours4);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var para = document.createElement("P");
var t = document.createTextNode ("I'd leave a blank space for this oxtail soup!");
	// addUpdate4.id = "update4";
	para.appendChild(t);
	document.getElementById("comment4").appendChild(para);


//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var addName5 = document.createElement("div");
	addName5.id = "name5";
	addName5.innerHTML = "5. The Death Star Cafe";
	text5.appendChild(addName5);

var addRating5= document.createElement("div");
	addRating5.id = "rating5";
	addRating5.innerHTML = "Rating: 2 Stars";
	text5.appendChild(addRating5);

var addPrice5= document.createElement("div");
	addPrice5.id = "price5";
	addPrice5.innerHTML = "Price: $$";
	text5.appendChild(addPrice5);

var addAddy5= document.createElement("div");
	addAddy5.id = "addy5";
	addAddy5.innerHTML = "Address: A galaxy far, far away.";
	text5.appendChild(addAddy5);

var addHours5 = document.createElement("div");
	addHours5.id = "Hours5";
	addHours5.innerHTML = "Hours: We never close.";
	text5.appendChild(addHours5);


var changeUpdate5 = document.getElementById("update5");
	changeUpdate5.innerHTML = "いらっしゃいませ！本日のスペシャルはテールスープでございます。味はヤベ〜！ (Translation ; Welcome! Today's special is tail soup. The taste is Yabe ~!)";