let user = 'guest';

switch (role) {
    case 'guest':
        console.log('Welcome guest user');
        break;
    case 'moderator':
        console.log('Welcome moderator user');
        break;
    default:
        console.log('Unknown user');
}