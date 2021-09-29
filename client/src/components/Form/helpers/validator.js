export default function validator(input) {
    let errors = {};
    
    if (!input.name) {
        errors.name = 'Name is necessary';
    }

    if (input.life > 255 || !input.life) {
        errors.life = 'Life is necessary and less than 255';
    }

    if (input.attack > 255 || !input.attack ) {
        errors.attack = 'Attack is necessary and less than 255';
    }

    if (input.defense > 255 || !input.defense) {
        errors.defense = 'Defense is necessary and less than 255';
    }

    if (input.speed > 255 || !input.speed) {
        errors.speed = 'Speed is necessary and less than 255';
    }

    if (!input.height) {
        errors.height = 'Height is necessary';
    };

    if (!input.weight) {
        errors.weight = 'Weight is necessary';
    }

    return errors;
};