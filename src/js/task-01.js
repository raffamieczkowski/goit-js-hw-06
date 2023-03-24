const categories = document.querySelectorAll('#categories li.item');
    const numOfCategories = categories.length;
        console.log(`Number of categories: ${numOfCategories}`);
            categories.forEach(category => {
const categoryName = category.querySelector('h2').textContent;  
    const elements = category.querySelectorAll('li');
        const numOfElements = elements.length;
console.log(`Category: ${categoryName}`);
console.log(`Elements: ${numOfElements}`);
});