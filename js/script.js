/**
 * The Coin clas is a blueprint for each coin we put on the page
 * @author  Cheyne O'Shaughnessy
 * @version 1.0 Feb 6, 2014
 */

 function Coin(){
 	//Built-in-properties
 	//Property that represents the graphic on the page
 	this.item_on_page;
 	this.x;//the coin's own left-right position on page.
 	this.y;//the coin's own up-down position on page.

 	//Built-in-methods
 	/**
 	* The create function puts a graphic on the page
 	*/

 	this.create = function(){
 		this.item_on_page = document.createElement("img");
 		this.item_on_page.src="img/coin.png";
 		this.item_on_page.style.position = "absolute";
 		//Generate and store random x & y positions, different for each coin. I'm using 500 and 300 for stage width & height
 		this.x = Math.floor(Math.random()*500);
 		this.y = Math.floor(Math.random()*300);
 		this.item_on_page.style.left = this.x + "px";
 		this.item_on_page.style.top =  this.y + "px";
 		//Actually to put it in the document
 		document.body.appendChild(this.item_on_page);
 	}//Create methods ends
 	/**
 	* The create function puts a graphic on the page
 	*/
 	this.destroy = function(){
 		
 	}

 }//end of Coin class


 onload=init;

 function init(){
 	//generate one instance of our Coin class
 	var coin1 = new Coin();
 	coin1.create();
 	var coin2 = new Coin();
 	coin2.create();
 	var coin3 = new Coin();
 	coin3.create();
 	var coin4 = new Coin();
 	coin4.create();
 }