{
    type Circle = {
        shape: "circle";
        radius: number;
    }
    type Rectangle = {
        shape: "rectangle";
        height: number;
        width: number;
    }

    const calculateShapeArea = (area: Circle | Rectangle) : number=> {
        if (area.shape === "circle") {
            return Math.PI * area.radius * area.radius;
        }
        else if (area.shape === "rectangle") {
            return area.height * area.width;
        }
        throw new Error("Shape type is not correct");
    }
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 8,
        height: 4,
      });

    const circleArea = calculateShapeArea({ shape: "circle", radius: 9 });


}