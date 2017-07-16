const people = [
  {	
		name: 'Amy',
		age: 51,
		car: 'BMW'
	},
	{
		name: 'Brian',
		age: 50,
		car: 'Subaru'
	},
	{
		name: 'Charles',
		car: 'BMW'
	},
	{
		name: 'Dennis',
		age: 70,
		car: 'Kia'
	},
	{
		name: 'Eddie',
		car: 'Toyota'
	},
	{
		name: 'Kate',
		car: 'BMW'
	},
	{
		name: 'Mark',
		car: 'Subaru'
	},
	{
		name: 'Steve',
		age: 40,
		car: 'BMW'
	}
]

const people2 = [

  {
		name: 'Alison'
	},
	{
		name: 'Charles',
		car: 'BMW'
	},
	{
		name: 'Elizabeth',
		age: 39,
		car: 'Mazda'
	},
	{
		name: 'Jenny',
		car: 'Toyota'
	},
	{
		name: 'Kate'
	},
	{
		name: 'Mark'
	},
	{
		name: 'Laura',
		car:  'Nissan'
	},
	{
		name: 'Marianne',
		age: 51,
		car: 'Mini'
	},
	{
		name: 'Steve',
		age: 40,
		car: 'BMW'
	},
	{
		name: 'Susan',
		car: 'BMW'
	}
]


const apples2apples = function(array1, array2) {
	processedArrayResults = []
	// set up position markers for each array
  let i = 0
  let j = 0
	// continue processing until both arrays have reached their end
  while(i < array1.length || j < array2.length) {
  	// if array1 has reached its end just process array2
  	if(i === array1.length) {
    	// add an empty copy of the object
      let obj = _.cloneDeep(array2[j])
      Object.keys(obj).forEach(key => {
      	if(!(key === 'name')) {
        	obj[key] = ''
        }
      })
    	processedArrayResults.push(obj)
      j++
    } 
    // if array2 has reached its end just process array1
    else if(j === array2.length) {
    	  // add a copy of the object
        let obj = _.cloneDeep(array1[i])
        processedArrayResults.push(obj)
        i++
    } else {
    	// neither array1 nor array2 is at its end
    	if(array2[j].name < array1[i].name) {
      	let obj = _.cloneDeep(array2[j])
        Object.keys(obj).forEach(key => {
          if(!(key === 'name')) {
            obj[key] = ''
          }
        })
        processedArrayResults.push(obj)
        j++
      } else if (array2[j].name > array1[i].name) {
          // add a copy of the object
          let obj = _.cloneDeep(array1[i])
          processedArrayResults.push(obj)
          i++
        } else {
        	let obj = _.cloneDeep(array1[i])
          Object.keys(array2[j]).forEach(key => {
          	if(!(Object.keys(array1[i]).indexOf(key) > -1)) {
            	obj.key = ''
            }
          })
        	processedArrayResults.push(obj)
          i++
          j++
        }
    }
  }
  return processedArrayResults
} // end of apples2apples

console.log(apples2apples(people, people2))