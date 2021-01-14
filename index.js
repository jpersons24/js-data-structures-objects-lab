// Write your solution in this file!

var driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver,{[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
   driver[key] = value;
   return driver;
}

function deleteFromDriverByKey(driver, key) {
   const newObj = Object.assign({}, driver);
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key];
   return driver;
}


// REDO


// function updateDriverWithKeyAndValue(obj, key, value) {
//    return Object.assign({}, obj,{[key]: value})
// }

// function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
//    obj[key] = value;
//    return obj;
// }

// function deleteFromDriverByKey(obj, key) {
//    const newObj = Object.assign({}, obj);
//    delete newObj[key];
//    return newObj;
// }

// function destructivelyDeleteFromDriverByKey(obj, key) {
//    delete obj[key];
//    return obj;
// }

// console.log(updateDriverWithKeyAndValue(driver, 'jake', '2012 subaru legacy'))
// console.log(driver)
// console.log(destructivelyUpdateDriverWithKeyAndValue(driver, 'brynn', '2021 jeep cherokee'))
// console.log(destructivelyUpdateDriverWithKeyAndValue(driver, 'jake', '2012 subaru legacy'))
// console.log(deleteFromDriverByKey(driver, 'brynn'))
// console.log(destructivelyDeleteFromDriverByKey(driver, 'jake'))
// console.log(driver)