console.log("Number of categories:",document.querySelectorAll('li.item').length );
 
const categoryEl = document.querySelectorAll('li.item')

categoryEl.forEach(function(item) {
 
 console.log( "Category:", item.children[0].textContent);    
 console.log( "Elements:",item.children[1].getElementsByTagName('li').length);
});
 

