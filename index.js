let map;

var ExcelToJSON = function() {

  this.parseExcel = function(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        console.log(json_object);

      })

    };

    reader.onerror = function(ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  };
};

function initMap() {

  const dnepr = { lat: 48.4775495409843, lng: 35.02095581604529 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: dnepr,
    zoom: 8,
  });

  ExcelToJSON.parseExcel("data.xls")
}

window.initMap = initMap;