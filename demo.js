function reversePyramid(size) {
    var str = "";
    for (var col = 1; col <= size; col++) {
        for (var row = 1; col + row <= size * 2; row++) {
            str += row >= col ? "*" : "_";
        }
        str += "\n";
    }
    console.log(str);
}
var x = reversePyramid(40);
