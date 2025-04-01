
function drawSteve(svg) {
    let pict = svg.append("g")
        .style("stroke", "black")
        .style("stroke-width", 1)
// Прическа

    pict.append("rect")
        .attr("x", -25)
        .attr("y", -102.5)
        .attr("width", 50)
        .attr("height", 20)
        .attr("fill", "#2E1A0F");

// Голова
    pict.append("rect")
        .attr("x", -20)
        .attr("y", -92.5)
        .attr("width", 40)
        .attr("height", 40)
        .attr("fill", "#8B5738");

// Глаза (белки)
    pict.append("rect")
        .attr("x", -13)
        .attr("y", -80)
        .attr("width", 8)
        .attr("height", 8)
        .attr("fill", "#FFFFFF");

    pict.append("rect")
        .attr("x", 5)
        .attr("y", -80)
        .attr("width", 8)
        .attr("height", 8)
        .attr("fill", "#FFFFFF");

// Зрачки
    pict.append("rect")
        .attr("x", -10)
        .attr("y", -77)
        .attr("width", 4)
        .attr("height", 4)
        .attr("fill", "#000000");

    pict.append("rect")
        .attr("x", 8)
        .attr("y", -77)
        .attr("width", 4)
        .attr("height", 4)
        .attr("fill", "#000000");

// Рот
    pict.append("rect")
        .attr("x", -8)
        .attr("y", -62)
        .attr("width", 15)
        .attr("height", 3)
        .attr("fill", "#5C2E1A");

// Футболка (тело)
    pict.append("rect")
        .attr("x", -27.5)
        .attr("y", -52.5)
        .attr("width", 55)
        .attr("height", 55)
        .attr("fill", "#00A2E8");

// Вырез на шее
    pict.append("rect")
        .attr("x", -10)
        .attr("y", -52.5)
        .attr("width", 20)
        .attr("height", 5)
        .attr("fill", "#4D4D4D");

// Рукава
    pict.append("rect")
        .attr("x", -47.5)
        .attr("y", -52.5)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "#00A2E8");

    pict.append("rect")
        .attr("x", 27.5)
        .attr("y", -52.5)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", "#00A2E8");

// Руки
    pict.append("rect")
        .attr("x", -47.5)
        .attr("y", -32.5)
        .attr("width", 20)
        .attr("height", 35)
        .attr("fill", "#8B5738");

    pict.append("rect")
        .attr("x", 27.5)
        .attr("y", -32.5)
        .attr("width", 20)
        .attr("height", 35)
        .attr("fill", "#8B5738");

// Ноги (штаны)
    pict.append("rect")
        .attr("x", -27.5)
        .attr("y", 2.5)
        .attr("width", 22)
        .attr("height", 60)
        .attr("fill", "#4B0082");

    pict.append("rect")
        .attr("x", 5)
        .attr("y", 2.5)
        .attr("width", 22)
        .attr("height", 60)
        .attr("fill", "#4B0082");

// Ботинки
    pict.append("rect")
        .attr("x", -27.5)
        .attr("y", 62.5)
        .attr("width", 22)
        .attr("height", 10)
        .attr("fill", "#3B3B3B");

    pict.append("rect")
        .attr("x", 5)
        .attr("y", 62.5)
        .attr("width", 22)
        .attr("height", 10)
        .attr("fill", "#3B3B3B");

    return pict;
}