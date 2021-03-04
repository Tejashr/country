var container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);

var row = document.createElement("div");
row.setAttribute("class", "row");
container.append(row);


var data = fetch("https://restcountries.eu/rest/v2/all");

data
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    for (let i = 0; i < 250; i++) {
       
      var col = document.createElement("div");
      col.setAttribute("class", "col-4");
      row.append(col);

      var card = document.createElement("div");
      card.setAttribute("class", "card bg-light");
      card.setAttribute("style", "width: 18rem;");
      col.append(card);

      var img = document.createElement("img");
      img.setAttribute("src", "" + res[i].flag + "");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("alt", "flag");
      card.append(img);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      card.append(cardBody);

      var countryName = document.createElement("h5");
      countryName.setAttribute("class", "card-title text-danger");
      countryName.innerHTML = res[i].name;
      cardBody.append(countryName);

      var region = document.createElement("p");
      region.setAttribute("class", "card-text text-secondary");
      region.innerHTML = res[i].region;
      cardBody.append(region);

      var pop = document.createElement("p");
      pop.setAttribute("class", "card-text text-secondary");
      pop.innerHTML = res[i].population;
      cardBody.append(pop);

      var weather = document.createElement("a");
      weather.setAttribute("href", "");
      weather.setAttribute("class", "btn btn-success");
      weather.innerHTML = "weather";
      cardBody.append(weather);
    }

    console.log(res[0].population);
  })
  .catch(function (err) {
    console.log(err);
  });
