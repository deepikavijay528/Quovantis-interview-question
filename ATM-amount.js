function 
  withdrawlMoney(amount){
    let currencyList = [{
      value:2000,
      avail:5
    },{
      value:500,
      avail:5
    },{
      value:200,
      avail:5
    },{
      value:100,
      avail:5
    }];
    let atmBalance = 0;
    currencyList.forEach(note => {
      atmBalance += note.value*note.avail;
    });
    if(amount % 100 != 0){
      console.log('Incorrect Withdrawal Amount (not multiple of 100)');
      return false;
    }else	if(amount >= atmBalance){
      console.log('Insufficient Funds');
      return false;
    }
    else {
      let newList = [];
      currencyList.forEach(note => {
        let noOfnotes = Math.floor(amount/note.value);
        if(amount !== 0){
          if(noOfnotes<note.avail){
            amount = amount - note.value*noOfnotes;
            newList.push({
              value:note.value,
              avail:note.avail-noOfnotes
            });
          }
          else{
            amount = amount - note.value*note.avail;
            newList.push({
              value:note.value,
              avail:0
            });
          }
        }
      });
    }
  }
