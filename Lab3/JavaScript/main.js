document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;
    d3.select("svg")
        .attr("width", width)
        .attr("height", height) ;

})

let runAnimation = (dataForm) => {

    const svg = d3.select("svg")
    let pict = drawSteve(svg);

    let path = drawPath("red");
    let data = [+dataForm.xscale.value, +dataForm.xscaleEnd.value,
                      +dataForm.yscale.value, +dataForm.yscaleEnd.value,
                      +dataForm.angle.value, +dataForm.angleEnd.value];


    pict.transition()
        .ease(d3.easeLinear) // установить в зависимости от настроек формы
        .duration(dataForm.animTime.value)
        .attrTween('transform', translateAlong(path.node(), dataForm.animTime.value, data));

}


let clearForm = (dataForm) => {

    dataForm.animTime.value = 2000;

    dataForm.xscale.value = 1;
    dataForm.yscale.value = 1;
    dataForm.xscaleEnd.value = 1;
    dataForm.yscaleEnd.value = 1;

    dataForm.angle.value = 0;
    dataForm.angleEnd.value = 0;

    d3.select("svg").selectAll('*').remove();

}