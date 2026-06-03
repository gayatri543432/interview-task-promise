const cl = console.log;

function fetchProductId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;

            if (success) {
                resolve('Product Id Fetch Successfully!!');
            } else {
                reject('Something went wrong while fetching Id.');
            }
        }, 900);
    });
}

function fetchProductById() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;

            if (success) {
                resolve('Product Fetch Successfully..');
            } else {
                reject('Something went wrong while fetching Product.');
            }
        }, 700);
    });
}

function fetchProductReview() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;

            if (success) {
                resolve('Product Reviews Fetch Successfully..');
            } else {
                reject('Something went wrong while fetching Reviews.');
            }
        }, 500);
    });
}

fetchProductId()
    .then((res) => {
        cl(res);
        return fetchProductById();
    })
    .then((res) => {
        cl(res);
        return fetchProductReview();
    })
    .then((res) => {
        cl(res);
    })
    .catch((err) => {
        cl(err);
        Swal.fire({
            title: err,
            icon: "error",
            timer: 3000
            });
    });