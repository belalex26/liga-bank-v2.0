export default function validateInfoCalc(price) {
    let errors = {};

    if ( price < 1200000 ) {
        errors.price = 'Некорректное значение';
    }

    if (price > 25000000  ) {
        errors.price = 'Некорректное значение';
    }

    return errors;
}