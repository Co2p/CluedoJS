var cards = {
  "suspects": [{"id": "Mustard", "name": "Colonel Mustard", "icon": 0},{"id": "Plum", "name": "Professor Plum", "icon": 0},{"id": "Green", "name": "Reverend Green", "icon": 0},{"id": "Peacock", "name": "Mrs Peacock", "icon": 0},{"id": "Scarlett", "name": "Miss Scarlett", "icon": 0},{"id": "White", "name": "Mrs White", "icon": 0}],
  "weapons": [{"id": "Dagger", "name": "Dagger", "icon": 0},{"id": "Candlestick", "name": "Candlestick", "icon": 0},{"id": "Revolver", "name": "Revolver", "icon": 0},{"id": "Rope", "name": "Rope", "icon": 0},{"id": "LeadPipe", "name": "Lead Pipe", "icon": 0},{"id": "Spanner", "name": "Spanner", "icon": 0}],
  "rooms": [{"id": "Hall", "name": "Hall", "icon": 0},{"id": "Lounge", "name": "Lounge", "icon": 0},{"id": "DiningRoom", "name": "Dining Room", "icon": 0},{"id": "Kitchen", "name": "Kitchen", "icon": 0},{"id": "Ballroom", "name": "Ballroom", "icon": 0},{"id": "Conservatory", "name": "Conservatory", "icon": 0},{"id": "BilliardRoom", "name": "Billiard Room", "icon": 0},{"id": "Library", "name": "Library", "icon": 0},{"id": "Study", "name": "Study", "icon": 0}]};

  function createList(type) {
    var html = "";
    cards[type].forEach(function(entry) {
      html += getItem(entry);
      // console.log(entry);
    });
    return html;
  }

  function getItem(entry) {
    var html = "<li class=\"mdl-list__item\"><span class=\"mdl-list__item-primary-content mdl-button--colored\">";
    html += "<button onclick=\"iconClick('" + entry.id + "')\" class=\"material-icons mdl-list__item-icon mdl-color-text--accent\">" + icons[entry.icon] + "</button>";
    html += entry.name;
    html += "</span></li>";
    return html;
  }
