export const formatPrice = (price, money) => {
  let formattedPrice = '';
  switch(money){
    case 'ARS':
      formattedPrice+='$ ';
      break;
    case 'USD':
      formattedPrice+='$USD ';
      break;
    case 'URU':
        formattedPrice+='$URU '; //--- continue adding money values
        break;
    default: 
      formattedPrice+='$ ';
      break;
  }
  formattedPrice += price.toString().replace(/\./,',');
  return formattedPrice
}