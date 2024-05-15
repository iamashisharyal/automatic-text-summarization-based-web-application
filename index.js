var url = "https://sheets.googleapis.com/v4/spreadsheets/1Ih2hXsFmos6PI9LJNhzR1lFpqTd14GCsCM4MvrEiCpk/values/Sheet1!A1:Z?alt=json&key=AIzaSyB_hBOuHVGTCCY-ktx8om-7ZLdCLo2vlaM";                                                             
axios.get(url)
  .then(function (response) {
    console.log(response);                                                                                                                                                    
  })
  .catch(function (error) {
    console.log(error);                                                                                                                                                       
  });                