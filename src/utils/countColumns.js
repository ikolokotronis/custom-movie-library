export function countColumns(movies_length) {
    let column_count;

    if(movies_length > 16){
        column_count = 6;
    }
    else if(movies_length > 8){
        column_count = 5;
    }
    else if(movies_length > 4){
        column_count = 4;
    }
    else if (movies_length > 2){
        column_count = 3;
    }
    else if (movies_length === 2){
        column_count = 2;
    }
    else {
        column_count = 1;
    }

    return column_count
}
