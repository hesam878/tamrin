const priceEl1=$('#price1');
const number_priceEl1=$('#number_price1');
const priceEl2=$('#price2');
const number_priceEl2=$('#number_price2');
const price_daqiqEl=$('#price_daqiq');
const btn=$('#btn');

function hesab(){
    const price1=priceEl1.val();
    const price2=priceEl2.val();

     fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
        const price_daqiq = data.rates[price2] / data.rates[price1];
        price_daqiqEl.text(`1 ${price1} = ${price_daqiq} ${price2}`);
        number_priceEl2.val((number_priceEl1.val() * (price_daqiq)).toFixed(2));
    });
}
priceEl1.on('change', hesab);
number_priceEl1.on('input', hesab);
priceEl2.on('change', hesab);
number_priceEl2.on('input', hesab);

btn.on('click', () => {
  const price_daqiq = priceEl1.val();
  priceEl1.val(priceEl2.val()) ;
  priceEl2.val(price_daqiq);
  hesab();
});

hesab();