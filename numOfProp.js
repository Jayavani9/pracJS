//Write a function to count the number of properties in a given object


function countProperties(sample)
{
    if(sample && typeof sample ==='object')
    {
        return Object.keys(sample).length;
    }
    else{
        throw new Error('Not a valid onject');
    }
}



const sample = {
    name: 'Alice',
    Age: 25,
    occupation: 'Engineer'
};

console.log(countProperties(sample));
