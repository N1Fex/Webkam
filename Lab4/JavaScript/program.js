
document.addEventListener("DOMContentLoaded", () => {
    let dataForm = document.getElementById('sort');

    console.log(listOfCrypt.length);
    console.log(createArrGraph(listOfCrypt, "year", ["price", "volume", "percent"]))
    buildTbody(listOfCrypt);
    setSortSelects(dataForm);
    let allSelect = dataForm.getElementsByTagName('select');

    d3.select("svg")
        .style("width", 0)
        .style("height", 0)

    for (let i = 0; i < allSelect.length - 1; i++) {
        allSelect[i].addEventListener("change",function() {
            changeNextSelect(allSelect[i+1].id, this);
        });
    }
});

function clearFilter(dataForm) {
    let els = dataForm.getElementsByTagName("input");

    for (let i = 0; i < els.length ; i++) {
        if (els[i].type == 'text' || els[i].type == 'number') {

            els[i].value = "";
        }
    }

    resetSortForm(document.getElementById('sort'));
}

function checkFilterEdits() {
    let yearStartElem = document.getElementById("year-start");
    let yearEndElem = document.getElementById("year-end");
    let priceStartElem = document.getElementById("price-start");
    let priceEndElem = document.getElementById("price-end");

    let yearStart = yearStartElem.value;
    let yearEnd = yearEndElem.value;
    let priceStart = priceStartElem.value;
    let priceEnd = priceEndElem.value;

    let yearSB = yearStart=='' || (!isNaN(yearStart) && isFinite(yearStart));
    let yearEB = yearEnd=='' || (!isNaN(yearEnd) && isFinite(yearEnd));
    let priceSB = priceStart=='' || (!isNaN(priceStart) && isFinite(priceStart));
    let priceEB = priceEnd=='' || (!isNaN(priceEnd) && isFinite(priceEnd));

    if (!yearSB) {
        yearStartElem.classList.add("error");
    } else {
        yearStartElem.classList.remove("error");
    }

    if (!yearEB) {
        yearEndElem.classList.add("error");
    } else {
        yearEndElem.classList.remove("error");
    }

    if (!priceSB) {
        priceStartElem.classList.add("error");
    } else {
        priceStartElem.classList.remove("error");
    }

    if (!priceEB) {
        priceEndElem.classList.add("error");
    } else {
        priceEndElem.classList.remove("error");
    }

    return yearSB && yearEB && priceSB && priceEB;
}

function applyFilter(){

    if (checkFilterEdits()){

        currentList = getFilteredList();
        buildTbody(currentList);

    }
}

function buildTbody(items) {
    let table = document.getElementById("tableCrypto");
    let tbody = table.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";

    for (let i in items) {
        let row = items[i];
        let tr = document.createElement("tr");

        let keys = Object.keys(row);
        keys.forEach( key => {
            let td = document.createElement("td");
            td.innerHTML = row[key];
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
    }
}

function getFilteredList() {
    let nameInput = document.getElementById("name-input").value;

    let yearStart = document.getElementById("year-start").value;
    let yearEnd = document.getElementById("year-end").value;

    let priceStart = document.getElementById("price-start").value;
    let priceEnd = document.getElementById("price-end").value;

    let table = document.getElementById("tableCrypto");

    let list = listOfCrypt//getArrayOfTableObjects(table);
    if (nameInput !== '') {
        list = list.filter(item => item["name"].toLowerCase().indexOf(nameInput.toLowerCase()) !== -1)

    }

    if (yearStart !== '') {
        list = list.filter(item => +item["year"] >= +yearStart);
    }
    if (yearEnd !== '') {
        list = list.filter(item => +item["year"] <= +yearEnd);
    }
    if (priceStart !== '') {
        list = list.filter(item => +item["price"] >= +priceStart);
    }
    if (priceEnd !== '') {
        list = list.filter(item => +item["price"] <= +priceEnd);
    }
    return list;
}

let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

let setSortSelect = (arr, sortSelect) => {
    sortSelect.append(createOption('Нет', 0));
    let offset = 1;
    for (let i in arr) {
        if (i > 4) offset = 2;
        sortSelect.append(createOption(arr[i], Number(i) + offset));
    }
}

let setSortSelects = (dataForm) => {

    let head = ['Наименование', 'Символ', 'Год','Рыночная капитализация','Цена', 'Объем', '%, за 24 часа'];
    let allSelect = dataForm.getElementsByTagName('select');

    for(let j = 0; j < allSelect.length; j++) {
        setSortSelect(head, allSelect[j]);
        if (j!==0){
            allSelect[j].disabled = true;
        }
    }
}

let changeNextSelect = (nextSelectId, curSelect) => {

    let nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;

    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;

    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки
    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.selectedIndex);
    } else {
        nextSelect.disabled = true;
    }
}

function resetSortForm(dataForm) {
    let allSelect = dataForm.getElementsByTagName('select');

    for(let j = 0; j < allSelect.length; j++) {
        allSelect[j].selectedIndex = 0;
        if (j > 0) allSelect[j].disabled = true;

        let desc = document.getElementById(allSelect[j].id + '-desc');
        desc.checked = false;
    }
    buildTbody(listOfCrypt);
}

function buildGraph(dataForm) {


    let table = document.getElementById("tableCrypto");
    let arr = getArrayOfTableObjects(table)

    drawGraph(arr);
}

function getArrayOfTableObjects(table) {
    let rowData = Array.from(table.rows);
    let header = rowData.shift();

    let keys = Object.keys(listOfCrypt[0]);
    let arr = rowData.map( row => {
        let obj = {}
        let c = row.cells;
        for (let i = 0; i < c.length; i++) {
            obj[keys[i]] = c[i].innerHTML;
        }
        return obj;
    })
    return arr;
}