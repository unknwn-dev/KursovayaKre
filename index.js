let map;

var xlsParse = function(fileName){
    // Create A File Reader HTML5
    var reader = new FileReader();

    // Ready The Event For When A File Gets Selected
    reader.onload = function(e) {
        var data = e.target.result;
        var cfb = XLS.CFB.read(data, {type: 'binary'});
        var wb = XLS.parse_xlscfb(cfb);
        // Loop Over Each Sheet
        wb.SheetNames.forEach(function(sheetName) {
            // Obtain The Current Row As CSV
            var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);   
            var oJS = XLS.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);   

            $("#my_file_output").html(sCSV);
            console.log(oJS)
        });
    };

    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);
}

function initMap() {

  const dnepr = { lat: 48.4775495409843, lng: 35.02095581604529 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: dnepr,
    zoom: 8,
  });

  ExcelToJSON.parseExcel("./data.xls");
}

window.initMap = initMap;