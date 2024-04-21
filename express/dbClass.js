
exports.insertQuery = (table, column,values)=>{
    return `INSERT into ${table} (${column}) VALUES (${values})`;
};

exports.deleteQuery = (table, where)=>{
    return `DELETE from ${table} WHERE ${where}`;
};