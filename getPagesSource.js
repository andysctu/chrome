// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var elements = document_root.getElementsByClassName("Ue-PUFBPXUbpP5zhTrFKT css-u4p24i");

    var i;
    var total = Number(0);
    for (i = 0; i < elements.length; i++) {
        var secondChild = elements[i].children[1];
        var span = secondChild.firstChild;
        var amountStr = span.innerHTML;
        
        var number = Number(amountStr.replace(/[^0-9.-]+/g,""));

        total += number;
        console.log(total);
    }

    return "Total Gain: $" + total.toFixed(2);
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});

//Ue-PUFBPXUbpP5zhTrFKT css-u4p24i
// _2jKxrvkjD73sLQEfH5NTgT