async function fillPage() {
  const data = await getJson("threeSpeaker.json");
  if (data.style == "fastSunday") {
    const template = fastSundayTemplate(data);
    document.querySelector(".program").innerHTML = template;
  }
  else if (data.style == "threeSpeaker") {
    const template = threeSpeakerTemplate(data);
    document.querySelector(".program").innerHTML = template;
  }
}


async function getJson(file) {
  const response = await fetch(file);
  const json = await response.json();
  return json;
}

function threeSpeakerTemplate(item) {
  const newItem = `<h3>Welcome</h3>
  <h3>Opening Hymn</h3>
  <p>#${item.openingHymnNumber} <span class="hymnName">${item.openingHymnName}</span></p>
  <h3>Invocation</h3>
  <p>${item.invocation}</p>
  <h3>Announcements</h3>
  <h3>Sacrament Hymn</h3>
  <p>#${item.sacramentHymnNumber} <span class="hymnName">${item.sacramentHymnName}</span></p>
  <h3>Blessing and Passing of the Sacrament</h3>
  <h3>Youth Speaker</h3>
  <p>${item.firstSpeaker}</p>
  <h3>Speaker</h3>
  <p>${item.secondSpeaker}</p>
  <h3>Intermediate Hymn</h3>
  <p>#${item.intermediateHymnNumber} <span class="hymnName">${item.intermediateHymnName}</span></p>
  <h3>Speaker</h3>
  <p>${item.thirdSpeaker}</p>
  <h3>Closing Hymn</h3>
  <p>#${item.closingHymnNumber} <span class="hymnName">${item.closingHymnNumber}</span></p>
  <h3>Benediction</h3>
  <p>${item.benediction}</p>`;

  return newItem;
}

function fastSundayTemplate(item) {
  const newItem = `<h3>Welcome</h3>
  <h3>Opening Hymn</h3>
  <p>#${item.openingHymnNumber} <span class="hymnName">${item.openingHymnName}</span></p>
  <h3>Invocation</h3>
  <p>${item.invocation}</p>
  <h3>Announcements</h3>
  <h3>Sacrament Hymn</h3>
  <p>#${item.sacramentHymnNumber} <span class="hymnName">${item.sacramentHymnName}</span></p>
  <h3>Blessing and Passing of the Sacrament</h3>
  <h3>Bearing of Testimonies</h3>
  <h3>Closing Hymn</h3>
  <p>#${item.closingHymnNumber} <span class="hymnName">${item.closingHymnNumber}</span></p>
  <h3>Benediction</h3>
  <p>${item.benediction}</p>`;

  return newItem;
}

fillPage();

