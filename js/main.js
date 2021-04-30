let id = $("input[name*='medicine_id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let medicinename = $("input[name*='medicine_name']");
    let medicinetype = $("input[name*='medicine_type']");
    let medicineprice = $("input[name*='medicine_price']");

    id.val(textvalues[0]);
    medicinename.val(textvalues[1]);
    medicinetype.val(textvalues[2]);
    medicineprice.val(textvalues[3].replace("$", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}