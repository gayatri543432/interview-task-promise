const cl = console.log;

function fetchProductId() {
    spinner.classList.remove('d-none')

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
    spinner.classList.remove('d-none')

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
    spinner.classList.remove('d-none')

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
    })

    .finally(()=>{
    spinner.classList.add('d-none')
    }
    )