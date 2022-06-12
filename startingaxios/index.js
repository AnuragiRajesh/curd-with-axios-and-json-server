const axios = require("axios");
var readlineSync = require("readline-sync");
const ms1Client = require('./ms1.client')
const ms2Client = require("./ms2.client")

/////////For Listing items ///////////////
const getBooks = async () => {
  const resp = await axios.get("http://localhost:3000/books");
  console.log("we have this many books in our storage:    ");
  console.log(resp.data);
  start();
};
const getMovies = async () => {
  const resp = await axios.get("http://localhost:3000/movies");
  console.log("we have this many Movies in our storage:    ");
  console.log(resp.data);
  start();
};
const getWevseries = async () => {
  const resp = await axios.get("http://localhost:3000/web-series");
  console.log("we have this many Web-Series in our storage:    ");
  console.log(resp.data);
  start();
};

/////For adding the items////////

const addBooks = async () => {
  var bookName = readlineSync.question("What is the name of your book ?");
  var inputauthor = readlineSync.question("Who is the author of your book ?");
  const resp = await axios.post("http://localhost:3000/books", {
    name: bookName,
    author: inputauthor,
  });
  console.log(`Request status: ${resp.status} ${resp.statusText}`);
  console.log(resp.data);
  start();
};
const addMovies = async () => {
  var bookName = readlineSync.question(
    "What is the name of movie u want to add ?"
  );
  var inputauthor = readlineSync.question("actor of the movie?");
  const resp = await axios.post("http://localhost:3000/movies", {
    name: bookName,
    actor: inputauthor,
  });
  console.log(`Request status: ${resp.status} ${resp.statusText}`);
  console.log(resp.data);
  start();
};
const addWebSeries = async () => {
  var bookName = readlineSync.question("What is the name of the Web-serie ?");
  var inputauthor = readlineSync.questionInt(
    " what is the year of releasing it ?"
  );
  const resp = await axios.post("http://localhost:3000/web-series", {
    name: bookName,
    year: inputauthor,
  });
  console.log(`Request status: ${resp.status} ${resp.statusText}`);
  console.log(resp.data);
  start();
};

/////for deleting the items

const deleteBooks = async () => {
  var inputid = readlineSync.questionInt(
    "What is your id number you want to delete ?    "
  );
  let resp;
  try {
    resp = await axios.delete("http://localhost:3000/books/" + inputid);
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  } catch (error) {
    // console.log(error)

    if (error.response.status == 404) {
      console.log(`Book ${inputid} does not exist `);
    } else {
      console.log(`something went wrong with id ${inputid}`);
    }
  }
  start();
};
const deleteMovies = async () => {
  var inputid = readlineSync.questionInt(
    "What is your id number you want to delete ?    "
  );
  let resp;
  try {
    resp = await axios.delete("http://localhost:3000/movies/" + inputid);
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  } catch (error) {
    if (error.response.status == 404) {
      console.log(`movie ${inputid} does not exist `);
    } else {
      console.log(`something went wrong with id ${inputid}`);
    }
  }
  start();
};
const deletewebseries = async () => {
  var inputid = readlineSync.questionInt(
    "What is your id number you want to delete ?    "
  );
  let resp;
  try {
    resp = await axios.delete("http://localhost:3000/web-series/" + inputid);
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  } catch (error) {
    if (error.response.status == 404) {
      console.log(`webseries ${inputid} does not exist `);
    } else {
      console.log(`something went wrong with id ${inputid}`);
    }
  }
  start();
};

/////for one particular item

const particularBook = async () => {
  var inputid = readlineSync.question("provide the id u want to access");
  const resp = await axios.get("http://localhost:3000/books");
  console.log("we have this many books in our storage:    ");
  console.log(resp.data[inputid - 1]);
  start();
};

const particularmovie = async () => {
  var inputid = readlineSync.question("provide the id u want to access");
  const resp = await axios.get("http://localhost:3000/movies");
  console.log("we have this many books in our storage:    ");
  console.log(resp.data[inputid - 1]);
  start();
};
const particularwebserie = async () => {
  var inputid = readlineSync.question("provide the id u want to access");
  const resp = await axios.get("http://localhost:3000/web-series");
  console.log("we have this many books in our storage:    ");
  console.log(resp.data[inputid - 1]);
  start();
};

///// update a particular item//////
const updateBook = async (inputid, inputdata) => {
  let resp;
  try {
    resp = await axios.patch(
      "http://localhost:3000/books/" + inputid,
      inputdata
    );
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  } catch (error) {
    // console.log(error)

    if (error.response.status == 404) {
      console.log(`Book ${inputid} does not exist `);
    } else {
      console.log(`something went wrong with id ${inputid}`);
    }
  }
  start();
};
const updateMovie = async () => {
  var inputid = readlineSync.questionInt(
    "What is your id number you want to update ?    "
  );
  var inputdata = readlineSync.question("insert your data ?    ");
  let resp;
  try {
    resp = await axios.patch(
      "http://localhost:3000/movies/" + inputid,
      inputdata
    );
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  } catch (error) {
    // console.log(error)

    if (error.response.status == 404) {
      console.log(`Movie ${inputid} does not exist `);
    } else {
      console.log(`something went wrong with id ${inputid}`);
    }
  }
  start();
};
const updateWebSerie = async () => {
  var inputid = readlineSync.questionInt(
    "What is your id number you want to update ?    "
  );
  var inputdata = readlineSync.question("insert your data ?    ");
  let resp;
  try {
    resp = await axios.patch(
      "http://localhost:3000/web-series/" + inputid,
      inputdata
    );
    console.log(`Request status: ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  } catch (error) {
    // console.log(error)

    if (error.response.status == 404) {
      console.log(`Serie ${inputid} does not exist `);
    } else {
      console.log(`something went wrong with id ${inputid}`);
    }
  }
  start();
};

const start = async () => {
  var input = readlineSync.questionInt(
    "What are you Looking for? \n 1.Books \n 2.Movies \n 3.Websires  \n 4.Exit  "
  );
  if (input == 4) {
    return;
  }
  if (input == 1) {
    var input = readlineSync.questionInt(
      "What you want to do? \n 1.List the Books \n 2.Add the Books \n 3.get a particular Book \n 4.Update the book   \n 5.Delete the Books \n 6.Exit   "
    );
    if (input == 1) {
      await getBooks();
    } else if (input == 2) {
      await addBooks();
    } else if (input == 3) {
      await particularBook();
    } else if (input == 4) {
      var inputid = readlineSync.questionInt(
        "What is your id number you want to update ?    "
      );
      var inputdata = readlineSync.question ("insert your data ?    ");
      var store=[]
      store.push(inputid,inputdata)
      console.log(store)
      updateBook();
    } else if (input == 5) {
      await deleteBooks();
    } else if (input == 6) {
      return;
    }
  } else if (input == 2) {
    var input = readlineSync.questionInt(
      "What you want to do? \n 1.List the movies \n 2.Add the movie \n 3.Get a particular movies \n 4.Update the movies  \n 5.Delete the movies \n 6.Exit   "
    );
    if (input == 1) {
      await getMovies();
    } else if (input == 2) {
      await addMovies();
    } else if (input == 3) {
      await particularmovie();
    } else if (input == 4) {
      updateMovie();
    } else if (input == 5) {
      await deleteMovies();
    } else if (input == 6) {
      return;
    }
  } else if (input == 3) {
    var input = readlineSync.questionInt(
      "What you want to do? \n 1.List the web-series \n 2.Add the web-serie \n 3.Get a particular serie \n 4.Update the serie  \n 5.Delete the serie \n 6.Exit   "
    );
    if (input == 1) {
      await getWevseries();
    } else if (input == 2) {
      await addWebSeries();
    } else if (input == 3) {
      await particularwebserie();
    } else if (input == 4) {
      updateWebSerie();
    } else if (input == 5) {
      await deletewebseries();
    } else if (input == 6) {
      return;
    }
  }
  
  
};
// start();

const test1 = async () =>{
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
  });
  const resp = await instance.get('web-series/');
  console.log(resp.data)
  
}
test1()
