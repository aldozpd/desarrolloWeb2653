//const loginValidation = 'select * from usuario u where u.num_cta = '

const searchUser = (user,pass) => {
    const query = 'select * from usuario u where u.num_cta = '+user+' and u.pass = '+pass;
    return query;
}

exports.searchUser = searchUser;