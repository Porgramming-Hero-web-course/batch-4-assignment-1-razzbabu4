{
    type Circle = {
        shape: string;
        radius: number;
    }
    type Rectangle = {
        shape: string;
        height: number;
        width: number;
    }

    const calculateShapeArea = (area: Circle | Rectangle) => {
        if ("radius" in area) {
            return Math.PI * area.radius * area.radius
        }
        else if ("height" in area) {
            return area.height * area.width
        }
        else{
            return "It is not a circle nor a rectangle"
        }

    }
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });

    const circleArea = calculateShapeArea({ shape: "", radius: 5 });



}