const day = 'saturday';

switch(day){
    case 'monday':
        console.log('Plan my project');
        break;
    case 'tuesday':
        console.log('Meeting');
        break;
    case 'saturday':
        console.log('Break');
        break;
    default:
        console.log('Not a valid day');
}


//----------
console.log('------------');


if(day == 'monday')
    console.log('Plan my project');
else if(day == 'tuesday')
    console.log('Meeting');
else if(day == 'saturday')
    console.log('Break');
else 
    console.log('Not a valid day');