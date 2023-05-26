function calculateTriangleArea(side1, side2, side3) {
  // Use Heron's formula to calculate the area
  let semiPerimeter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );
   console.log(area);
}
calculateTriangleArea(2, 3.5, 4)

