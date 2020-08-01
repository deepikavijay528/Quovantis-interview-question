let color=['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue'];
let max = 1;
let min = 0;
var item;
for (var i=0; i<color.length; i++)
{
        for (var j=i; j<color.length; j++)
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
