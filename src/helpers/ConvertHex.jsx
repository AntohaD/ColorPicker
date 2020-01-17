class ConvertHex {
  static convertToHex(red, green, blue) {

    function componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
    
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    return rgbToHex(red, green, blue);
  }

  static convertToRGB(color) {

    const hexToRgb = hex =>
      hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));

    return(hexToRgb(color));
  }
}

export default ConvertHex;