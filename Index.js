let color=['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue'];
let max = 1;
let min = 0;
let item;
for (let i=0; i<color.length; i++)
{
        for (let j=i; j<color.length; j++)
        {
                if (color[i] == color[j])
                 min++;
                if (max<min)
                {
                  max=min; 
                  item = color[i];
                }
        }
        min=0;
}
console.log(item+" ( " + max +" times ) ") ;
