export const API_KEY ='AIzaSyAvB2pGOUQ0F7lBePt37H1F43L6qp61GSw';

export const views_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "k";
    }
    else{
        return value;
    }
}