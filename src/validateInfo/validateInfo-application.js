export default function validateInfoApplication(application) {
    let errors  = {};

    if (!application.fullName) {
        errors.fullName = 'Пожалуйста, заполните поле';
    } 
    
    if (!application.phone) {
        errors.phone = 'Пожалуйста, заполните поле';
    }

    if (!application.email) {
        errors.email = 'Пожалуйста, заполните поле';
    } 
    
    return errors;
}
    