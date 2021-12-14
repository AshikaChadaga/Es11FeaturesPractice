promise_1 = Promise.resolve('hi')
promise_2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'world'))

Promise.all([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result) 
        console.log(promise_2_result) 
    })
    .catch((error) => {
        console.log('error : ' + error);
    });

Promise.allSettled([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result) // output is: {status: 'fulfilled', value: 'hi'}
        console.log(promise_2_result) // output is: {status: 'rejected', reason: 'world'}
    })