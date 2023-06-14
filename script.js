const cost=document.getElementById("cost");
const profitRate=document.getElementById("profit-rate");
const cargo=document.getElementById("cargo");
const commission=document.getElementById("commission");
const salePrice=document.getElementById("sale-price");
const inputs=document.querySelectorAll("input");



const btnCalculate=document.getElementById("btn-calculate");
const btnClear=document.getElementById("btn-clear");



const calculateForSale=(costValue,profitRateValue,cargoValue,commissionValue)=>{
    //price=kargo+(maliyet+(maliyet*(kar oranı/100)))
    const price=(cargoValue+(costValue+(costValue*(profitRateValue/100))));
    //price=x(x-(x*komison oranı))
    const equation=`${price}=x-(x*${commissionValue})`
    //eşitliğin solunu al "price" değişkeninin değeri
    let leftSide = equation.split("=")[0].trim();
    //x değişkeninin kat sayısını bul
    const coefficientOfX=1-(commissionValue/100);
    //yeni denklemi oluştur  price*100=X katsayısı*100
    let newEquation=leftSide*100 + "=" + 100*coefficientOfX;
    //yeni denklemin solunu al price*100
    let newLeftSide=newEquation.split("=")[0].trim();
    //yeni denklemin sağını al X katsayısı*100
    let newRightSide = newEquation.split("=")[1].trim();
    //komisyonlu fiyatı bul ((price*100)/(katsayı*100))
    let priceWithCommission=newLeftSide/newRightSide;
    //ilgili input alanına sonucu gönder
    return salePrice.value=priceWithCommission
}

btnCalculate.addEventListener("click",(event)=>{
    //gelen string verileri floata çevir
    const costValue= parseFloat(cost.value);
    const profitRateValue= parseFloat(profitRate.value);;
    const cargoValue= parseFloat(cargo.value);
    const commissionValue= parseFloat(commission.value);

    calculateForSale(costValue,profitRateValue,cargoValue,commissionValue)

    event.preventDefault()
})

btnClear.addEventListener("click",(event)=>{
    //tüm input alanlarını temizle
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value="";
    }    
    event.preventDefault()
})
