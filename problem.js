// task 1
function calculateMoney(ticketSale) {
    if(ticketSale <=0 || typeof ticketSale !== 'number'){
        return 'please input a valid number'
    }else{
        const perTicketPrice = 120;
        const guardPay = 500;
        const perStafPay = 50;
        const totalStafPay = perStafPay * 8;
        const restMoney = (ticketSale * perTicketPrice) - (guardPay + totalStafPay);
        return restMoney;
    }
    
    };
    const result = calculateMoney(15);
    console.log(result);

    // task 2

    function checkName(name) {
        if(typeof name !== 'string' ){
            return 'Invalid'
        }else{
            if(name.toLocaleLowerCase().endsWith('a'.toLocaleLowerCase()) || name.toLocaleLowerCase().endsWith('y'.toLocaleLowerCase()) || name.toLocaleLowerCase().endsWith('i'.toLocaleLowerCase()) || name.toLocaleLowerCase().endsWith('e'.toLocaleLowerCase()) || name.toLocaleLowerCase().endsWith('o'.toLocaleLowerCase()) || name.toLocaleLowerCase().endsWith('u'.toLocaleLowerCase()) || name.toLocaleLowerCase().endsWith('w'.toLocaleLowerCase()) ){
                return 'Good Name'
            }else{
                return 'Bad Name'
            }
        }

    }
    const nameResult = checkName(2);
    console.log(nameResult);

    // task 3

    function deleteInvalids(array) {
        if(!Array.isArray(array)){
            return 'invalid'
        }
        let numberArray = [];
        for(let i = 0; i <array.length; i++){
            if(typeof array[i] === 'number' && !isNaN(array[i])){
                numberArray.push(array[i])
            }
        }
        return numberArray;
    }
    const array = deleteInvalids(["1" , {num:2} , NaN ]);
    console.log(array);

    // task 4

    function password(obj) {
        if(typeof obj !== 'object' ||  Array.isArray(obj) ){
            return 'invalid'
        }else if(typeof  obj.birthYear !== 'number' || obj.birthYear < 1000 || obj.birthYear > 9999 ){
            return 'invalid birth year'
        }
        else{
            const title = obj.name;
            const year = obj.birthYear;
            const website =obj.siteName;
            const websiteFirstLetter = website.charAt(0).toUpperCase() + website.slice(1)
            const password = websiteFirstLetter+'#'+title + '@' + year
            return password;
        }
        }
        const resultPassword = password({ name: "rahat", birthYear: 2002, siteName: "Facebook" });
        console.log(resultPassword);

        // task 5

        function monthlySavings(arr , livingCost) {
            if(!Array.isArray(arr) || typeof livingCost !== 'number'){
                return 'invalid'
            }
           
           const totalIncome = arr.reduce((total, income) => total + income, 0);
           const totalTax = arr.reduce((total, income) => {
            if(income >= 3000){
                const tax = income * 0.02;
                const incomeWithoutTax = total - tax;
                return incomeWithoutTax;
            }else{
                return total;
            }
           }, 0);
           
           const totalSavings = totalIncome - livingCost - totalTax;
           if(totalSavings <= 0){
            return 'earn more'
           } else{
            return totalSavings;
           }
            }
            const savings = monthlySavings([ 900 , 2700 , 3400] , 10000);
            console.log(savings);