// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

//--- Business logic ---

let categories = [];
let categoriesIdArr = [];
// const width = 6;
// const height = 6;
// const body = document.getElementsByTagName('body');
// const mainTable = document.querySelector('#table')
// const table = document.createElement('table');
// const thead = document.createElement('tr');


async function getData() {

    const ids = await getCategoryIds(6);

    for (id of ids) {
        const data = await getCategory(id);
        categories.push(data);
    }
    return categories
}

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds(count) {
    let response = await axios.get(`http://jservice.io/api/random?count=${count}`);

    let catIdArr = [];
    for (cats of response.data) {
        catIdArr.push(cats.category_id)
    }
    return catIdArr;
}





/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    let cat = await axios.get(`http://jservice.io/api/category?id=${catId}`)

    return cat.data;

}



// -- Dom Logic ---

function createTable() {
    const theadLength = 6;
    const width = 6;
    const table = document.createElement('table');
    table.setAttribute('id', 'jeopardy');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const trBody = document.createElement('tr')
    const tBody = document.createElement('tbody')


    for (let i = 0; i < theadLength; i++) {
        const th = document.createElement('th');
        th.innerHTML = "people"
        trHead.append(th);


    }
    thead.append(trHead);

    table.append(thead);



    for (let i = 0; i < theadLength; i++) {
        const td = document.querySelector('td');
        trBody.append(td);
        // for (let i = 0; i < width; i ++){

        //     }

    }




    //     for (let i = 0; i < width; i++) {
    //         const header = document.createElement('th');
    //         header.setAttribute('id', 'catNames');
    //         // header.innerHTML = categoriesNew;
    //         thead.append(header);



    //     }
    //     table.append(thead);

    //     for (let j = 0; j < height - 1; j++) {
    //         const row = document.createElement('tr')
    //         row.innerHTML = "?";
    //         for (let y = 0; y < width - 1; y++) {
    //             const cell = document.createElement('td')
    //             cell.innerHTML = "?";
    //             row.append(cell);
    //         }
    //         table.append(row);
    //         mainTable.append(table);
    //     }

    // }



}
function getTable() {
    const checkTable = document.querySelector('table')
    if (!checkTable) {
        return createTable();
    }
    return table;

}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function fillTable() {
    const trHead = document.createElement('tr');
    const table = document.querySelector('#gameBoard')
    // query selector to find the header with id 
    // loop through headers 

    for (cat of categories) {
        console.log(cat);
        for (let i = 0; i < 6; i++) {
            const th = document.createElement('th');
            th.setAttribute('id', "titles")
            trHead.append(th);
            th.innerHTML = cat.title







            for (let i = 0; i < 6; i++) {
                // console.log(cat.clues)
                // console.log(cat.title)
            }
        }


    }
    table.append(trHead)
    // console.log(table)

}


/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO

getData();
fillTable();
//
// getCategory();
// setupAndStart();
createTable();
