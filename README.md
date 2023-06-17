# Web-Fundamentals

- Understanding the basics of front-end development.
- Introduction to:

   - <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> HTML</a>
      #### Things to remember in HTML
      - HTML is the language of the Web. HyperText Markup Language. It is the main markup language for all web pages.
		- HTML is the content of the site
		Purpose: it lets programmers tell the browser the meaning of the content we wish to place on a web page to show users.
		HTML defines a number of tags that we can wrap the contents with.
			§ Headings and paragraphs of text
			§ Images
			§ Links
			§ Lists
			§ Tables
			§ Forms
		HTML tags describe the content they contain.
		
		Opening and closing tags
			Most tags come in pairs: one opening and one closing tag, that denote the beginning and end of content. 
			Ex:
			<body>   </body>
		Tags can encapsulate other tags. This is called nesting. Nested items are intended with a tab.
		
		Syntax: 
		Every HTML web page is composed of elements, which specify different types of content.
		The syntax for indicating the type of element is with tags.

      Parent-Child-Sibling Relationship
		   PCS relationship is just a term to describe the relationship between tags/elements inside an HTML document.

      Divs
		   Block out space
		   <div></div> element exists for us to create a division in our code where we can group tags that have a common purpose together.

      After Writing your HTML code, make sure you Validate your HTML using:

		 [validator.w3.org](https://validator.w3.org/)

   
   - <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> CSS </a>

   #### Things to remember in CSS

   CSS - Cascading Style Sheets is a style sheet language used to add style to Web docuemnts.

   Selectors
	- Any HTML element in our code can be selected like h1, a, table, button. We can even select some tags you might not expect like body
   	- In the css we can select a class by using a . followed by the class name.
   	- Selecting an id
		Sometimes there only needs to be one of a given element, in those cases we can use id as well.
		In the css we can then select an id by using a # followed by the class name.
	- The Wildcard *
		If you ever want to select all the elements, the wildcard selector can do just that

	-  Sizes
		width | height:
		Width and height properties are used to determine the size of your elements. The value can be expressed in pixels (px) and percentage (%)
		Height will determine how much content the element can hold. If you leave it unset, your element will expand to fit the content it holds.

  	- Font-size:
		The font-size property values can be expressed in for different units pt,px,em,%.
		 pt and px (point and pixel) are considered static size values and will not adjust properly when resizing your page.
		 em and % (responsive measure and percent) however will resize and are what most developers recommend using. 


	
	-  Box Model
		Total Area:
			Total width is how much horizontal space a block occupies.
			Box model consists of the properties margin border and padding

		![image](https://github.com/immanuelvatta/Web-Fundamentals/assets/53870336/d5a39131-d2fa-40c6-af7b-970c4fb5f8ae)

	  	 Margin:
			Margin is outside block elements, while padding is within them.
		
	  	 The order flows clockwise, top->right->bottom->left)
		
		According to box model, total width of an element is:
		(Margin x2) + (Border x2) + (Padding x2)
		
		Calculating height is trickier because VERTICAL MARGINS COLLAPSE
		
		When the vertical margins of two elements are touching, only the margin of the element with the largest margin value will be honored, and margin of the element with smaller margin will be collapsed to zero.

		Block, inline, and inline-block are basic ways we can alter the normal layout of the HTML tags on our page.

	  	Margin affects container
		Padding affects content


	- Display Property
		The Flex Advantage

		We can use display:flex on the parent container so we don’t have to worry about writing HTML code like usual and avoid having the newline and tab between divs take up space.

		 align-items:center; will prevent colums from stretching (inheriting the height of the parent container div)
		
		Justify the Content
		Flex can also be used to position smaller elements (like images or boxes) within a larger element. Properties like align-items and justify-content can be used to position the elements exactly where we want them within some larger element.


   
   - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> JavaScript </a>
   	
	 #### Things to remember in CSS
  	Will update soon .... 
