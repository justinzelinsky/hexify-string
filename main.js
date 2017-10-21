document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.centered input');
    const hexDiv = document.querySelector('.hex');

    function pad(arr) {
        while (arr.length % 6 !== 0) {
            arr.push('0');
        }
        return arr;
    }

    input.addEventListener('keyup', function(event) {
        const {value} = input;
        let paddedValueAsHex = 'FFFFFF';
        if (value) {
            let valuesAsHex = value.split('').map(c => c.charCodeAt().toString(16));
            paddedValueAsHex = pad(valuesAsHex).join('');
            while (paddedValueAsHex.length !== 6) {
                valuesAsHex = paddedValueAsHex.match(/.{2}/g).map(pair => {
                    return pair.split('').reduce((first, second) => parseInt(first, 16) + parseInt(second, 16)).toString(16);
                });
                paddedValueAsHex = pad(valuesAsHex).join('');
            }
        }
        const hexValue = '#' + paddedValueAsHex;
        hexDiv.innerText = hexValue;
        document.body.style.backgroundColor = hexValue;
    });
});