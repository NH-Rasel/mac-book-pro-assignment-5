//memory
function updateMemoryCost(_memoryVariantCost) {
    const memoryCostInput = document.getElementById('memory-cost');
    let memoryCost = memoryCostInput.innerText;
    if (_memoryVariantCost == 0) {
        memoryCostInput.innerText = 0;
    }
    else {
        memoryCostInput.innerText = 180;
    }
    return memoryCost;
}

//storage
function updateStorageCost(_storageVariantCost) {
    const storageCostInput = document.getElementById('storage-cost');
    const storageCost = storageCostInput.innerText;
    if (_storageVariantCost == 0) {
        storageCostInput.innerText = 0;
    }
    else if (_storageVariantCost == 90) {
        storageCostInput.innerText = 90;
    }
    else {
        storageCostInput.innerText = 180;
    }
    return storageCost;
}

//delivery
function updateDeliveryCost(_deliveryCost) {
    const deliveryCostInput = document.getElementById('delivery-cost');
    const deliveryCost = deliveryCostInput.innerText;
    if (_deliveryCost == 0) {
        deliveryCostInput.innerText = 0;
    }
    else {
        deliveryCostInput.innerText = 20;
    }
    return deliveryCost;
}

//calculaion total cost
function getTotalValue() {
    const totalCost = document.getElementById('total-cost');
    const bestPrice = document.getElementById('best-price');
    const bestPriceValue = parseInt(bestPrice.innerText);

    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = parseInt(memoryCost.innerText);

    const storageCost = document.getElementById('storage-cost');
    const storageCostValue = parseInt(storageCost.innerText);

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostValue = parseInt(deliveryCost.innerText);

    let total = bestPriceValue + memoryCostValue + storageCostValue + deliveryCostValue;
    totalCost.innerText = total;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = total;
    //discount calculation
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value;
    const promoInputCode = (promoInputText);
    promoInput.value = '';
    if (promoInputCode == "stevekaku") {
        let discountPrice = finalTotal.innerText * 20 / 100;
        finalTotal.innerText = finalTotal.innerText - discountPrice;
        return finalTotal.innerText;
    }
}

//handle memory costing
document.getElementById('8GB-memory').addEventListener('click', function () {
    updateMemoryCost(0);
    getTotalValue();
});
document.getElementById('16GB-memory').addEventListener('click', function () {
    updateMemoryCost(180);
    getTotalValue();
});

//handle storage costing
document.getElementById('256GB-storage').addEventListener('click', function () {
    updateStorageCost(0);
    getTotalValue();
});

document.getElementById('512GB-storage').addEventListener('click', function () {
    updateStorageCost(90);
    getTotalValue();
});
document.getElementById('1TB-storage').addEventListener('click', function () {
    updateStorageCost(180);
    getTotalValue();
});

//handle delivery costing
document.getElementById('free-delivery').addEventListener('click', function () {
    updateDeliveryCost(0);
    getTotalValue();
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateDeliveryCost(20);
    getTotalValue();
});

//handle promo code discount
document.getElementById('promo-code').addEventListener('click', function () {
    getTotalValue();

})